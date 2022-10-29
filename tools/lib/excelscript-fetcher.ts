/**
 * Fetch ExcelScript type definitions from "learn.microsoft.com",
 * and then convert to JSON
 */
import { assert } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { Document, DOMParser, Element } from "https://deno.land/x/deno_dom@v0.1.35-alpha/deno-dom-wasm.ts";

export { createTypeScriptDefinitionCode, ExcelScriptPackage, fetchPackage };

interface PackageBase {
	/**
	 * language information
	 *
	 * e.g)
	 * - `en-US`
	 * - `ja-JP`
	 */
	lang: string;
	baseURL: string;
	interfaces: PackageItemBase[];
	enums: PackageItemBase[];
	typeAliases: PackageItemBase[];
	functions: PackageItemBase[];
}
/**
 * ExcelScript package information.
 */
interface Package extends PackageBase {
	interfaces: PackageItem[];
	enums: PackageItem[];
	typeAliases: PackageItem[];
	functions: PackageItem[];
}

/**
 * keys of `PackageItem`s
 */
const PackageMembers = ["interfaces", "enums", "typeAliases", "functions"] as const;
/**
 * Type name of ExcelScript package member
 */
type MemberType = "interface" | "enum" | "type" | "function";
/**
 * ExcelScript Index of interfaces, enums, typeAliases and functions
 */
type PackageItemBase = {
	/**
	 * Name of the package member
	 */
	name: string;
	/**
	 * Namespace "ExcelScrtipt"
	 */
	namespace: string;
	/**
	 * Description of the package member
	 */
	description: string;
	/**
	 * URL
	 */
	url: string;
	baseURL?: string;
	/**
	 * Type of the package member
	 * - `interface`
	 * - `enum`
	 * - `type`
	 * - `function`
	 */
	type: MemberType;
	/**
	 * Example code
	 */
	example?: string;
	/**
	 * - `true`: already fetched or parsed.
	 * - `false`: not yet fetched or parsed.
	 */
	fetched?: boolean;
};
/**
 * TypeScript code creator
 */
interface CodeCreator {
	/**
	 * Return lines of TypeScript definition code.
	 */
	getTSCode(): IterableIterator<string>;
}
/**
 * Fetch the site and get the detail of the item.
 */
interface DocumentFetcher {
	/**
	 * fetch the document site and parse.
	 */
	fetch(): Promise<this>;
}
type PackageItem = PackageItemBase & CodeCreator & DocumentFetcher;

/**
 * Property information
 */
interface Property {
	/** Property name */
	name: string;
	/** Description of the property */
	description: string;
	/** TypeScript code */
	code: string;
	/** Type of the property */
	type: string;
	/** Example code */
	example: string;
}
/**
 * Method information
 */
interface Method {
	/**
	 * Description of the method
	 */
	description: string;
	/**
	 * TypeScript code
	 */
	code: string;
	/**
	 * The method's parameters
	 */
	parameters: Parameter[];
	/**
	 * Return type of the method.
	 */
	returns: Return;
	/**
	 * Example code.
	 */
	example: string;
}
/**
 * Parameter information of a method
 */
interface Parameter {
	/**
	 * Name of the parameter
	 */
	name: string;
	/**
	 * Type of the parameter
	 */
	type: string;
	/**
	 * Description of the parameter
	 */
	description: string;
}
/**
 * Return value information of a method or a function
 */
interface Return {
	/**
	 * Type(s) of the return value.
	 */
	type: string;
	/**
	 * Description of the return value.
	 */
	description: string;
}

/**
 * Enum field information
 */
interface EnumField {
	/**
	 * Name of the field.
	 */
	name: string;
	/**
	 * Description of the field.
	 */
	description: string;
}

/**
 * Fetch ExcelScript package members from "learn.microsoft.com",
 * and then return the parsed object.
 * @param lang locale string (e.g. `en-US`, `ja-JP`)
 * @returns
 */
function fetchPackage(lang = "en-US") {
	const pkg = new ExcelScriptPackage(lang);
	return pkg.fetch();
}
type T_Enum = PackageItemBase & {
	/** Enum's fields */
	fields: EnumField[];
};
type T_Interface = PackageItemBase & {
	/** Methods of the interface */
	methods: Method[];
	/** Properties of the interface */
	properties: Property[];
};
type T_Type = PackageItemBase & {
	/** TypeScript code */
	code: string;
};
type T_Function = PackageItemBase & {
	/** TypeScript code */
	code: string;
	/** Parameters of the function */
	parameters: Parameter[];
	/** Return value of the function */
	returns: Return;
};
class ExcelScriptPackage implements Package {
	lang: string;
	baseURL: string;
	interfaces: PackageItem[] = [];
	enums: PackageItem[] = [];
	typeAliases: PackageItem[] = [];
	functions: PackageItem[] = [];
	static async loadFromJson(file: string) {
		const decoder = new TextDecoder();
		const json = decoder.decode(await Deno.readFile(file));
		const obj: PackageBase = JSON.parse(json);
		const pkg = new ExcelScriptPackage(obj.lang);
		pkg.enums = obj.enums.map((item) => ExcelScriptEnum.load(item as T_Enum));
		pkg.interfaces = obj.interfaces.map((item) => ExcelScriptInterface.load(item as T_Interface));
		pkg.typeAliases = obj.typeAliases.map((item) => ExcelScriptType.load(item as T_Type));
		pkg.functions = obj.functions.map((item) => ExcelScriptFunction.load(item as T_Function));
		return pkg;
	}
	constructor(lang = "en-US") {
		this.lang = lang;
		this.baseURL = `https://learn.microsoft.com/${lang}/javascript/api/office-scripts/`;
	}
	async fetch() {
		const rootURL = `${this.baseURL}excelscript?view=office-scripts`;
		const response = await fetch(rootURL);
		const doc = new DOMParser().parseFromString(await response.text(), "text/html");
		assert(doc);
		const types = {
			interfaces: "interface",
			enums: "enum",
			typeAliases: "type",
			functions: "function",
		} as const;
		for (const id of PackageMembers) {
			const table = doc.getElementById(id)?.nextElementSibling;
			if (!table || table.nodeName !== "TABLE") continue;
			this[id] = this.parsePackageTable(table, types[id]);
		}
		return this;
	}
	parsePackageTable(table: Element, type: MemberType) {
		const result: PackageItem[] = [];
		if (!table) return result;
		for (const tr of table.querySelectorAll("tr")) {
			const nameTD = (tr as Element).firstElementChild;
			if (!nameTD) continue;
			const descTD = nameTD.nextElementSibling;
			const [namespace, name] = nameTD.textContent.trim().split(".");
			const href = nameTD.querySelector("a")?.getAttribute("href");
			const description = descTD?.textContent.trim() ?? "";
			let url = this.baseURL + href;
			assert(href);
			if (href.startsWith("#")) { // detail information is on the document.
				url = `${this.baseURL}excelscript?view=office-scripts${href}`;
			}
			const item: PackageItemBase = { name, namespace, type, description, url, baseURL: this.baseURL };
			switch (type) {
				case "interface":
					result.push(new ExcelScriptInterface(item));
					break;
				case "enum":
					result.push(new ExcelScriptEnum(item));
					break;
				case "type":
					result.push(new ExcelScriptType(item));
					break;
				case "function":
					result.push(new ExcelScriptFunction(item, table.ownerDocument));
			}
		}
		return result;
	}
	*getPackageItems() {
		for (const type of PackageMembers) {
			yield* this[type];
		}
	}
}

/**
 * Generate TypeScript definition code
 * @param packageItems
 * @param createNamespaceDeclare
 */
function* createTypeScriptDefinitionCode(packageItems: PackageItem[], createNamespaceDeclare = false) {
	const items = packageItems.reduce((pre, cur) => {
		if (!cur.fetched) return pre;
		if (pre[cur.namespace]) {
			pre[cur.namespace].push(cur);
		} else {
			pre[cur.namespace] = [cur];
		}
		return pre;
	}, {} as Record<string, PackageItem[]>);
	for (const namespace of Object.keys(items)) {
		let indent = "";
		if (createNamespaceDeclare) {
			indent = "\t";
			yield `declare namespace ${namespace} {`;
		}
		for (const item of items[namespace]) {
			for (const codeLine of item.getTSCode()) {
				yield `${indent}${codeLine}`;
			}
		}
		if (createNamespaceDeclare) {
			yield `}`;
		}
	}
	yield "";
}

function* stringToMultiline(str: string, prefix = "", indent = "") {
	for (const line of str.split(/\r?\n/)) {
		yield `${indent}${prefix}${line}`;
	}
}
class ExcelScriptFunction implements T_Function, PackageItem {
	type = "function" as const;
	name: string;
	namespace: string;
	url = "";
	baseURL = "";
	description = "";
	code = "";
	parameters: Parameter[] = [];
	returns: Return = { type: "", description: "" };
	example = "";
	fetched = false;
	static load(json: T_Function) {
		const member = new ExcelScriptFunction(json);
		member.code = json.code;
		member.parameters = json.parameters;
		member.returns = json.returns;
		member.example = json.example ?? "";
		member.fetched = json.fetched ?? false;
		return member;
	}
	constructor(item: PackageItemBase, doc?: Document | null) {
		this.name = item.name;
		this.namespace = item.namespace;
		this.url = item.url;
		this.baseURL = item.baseURL ?? "";
		this.description = item.description;
		if (doc) {
			this.parseFromDocument(doc);
		}
	}
	async fetch() {
		if (this.fetched) return this;
		assert(this.baseURL);
		const rootURL = `${this.baseURL}excelscript?view=office-scripts`;
		const response = await fetch(rootURL);
		const doc = new DOMParser().parseFromString(await response.text(), "text/html");
		assert(doc);
		this.parseFromDocument(doc);
		return this;
	}
	parseFromDocument(doc: Document) {
		const uri = new URL(this.url);
		const elm = doc.getElementById(uri.hash.substring(1))?.nextElementSibling;
		assert(elm, `the element id is not found: "${this.url}"`);
		const info = parseMethod(elm);
		this.description = info.description;
		this.code = info.code;
		this.parameters = info.parameters;
		this.returns = info.returns;
		this.example = getTopLevelExample(doc);
		this.fetched = true;
	}
	*getTSCode(): IterableIterator<string> {
		yield "";
		yield `/**`;
		if (this.description) {
			yield* stringToMultiline(this.description, " * ");
		}
		yield ` * @see [${this.namespace}.${this.name} - ${this.type}](${this.url})`;
		yield ` */`;
		yield `${this.code}`;
	}
}
class ExcelScriptType implements T_Type, PackageItem {
	type = "type" as const;
	name: string;
	namespace: string;
	url: string;
	description = "";
	code = "";
	example = "";
	fetched = false;
	static load(json: T_Type) {
		const member = new ExcelScriptType(json);
		member.code = json.code;
		member.example = json.example ?? "";
		member.fetched = json.fetched ?? false;
		return member;
	}
	constructor(item: PackageItemBase, doc?: Document) {
		this.name = item.name;
		this.namespace = item.namespace;
		this.url = item.url;
		this.description = item.description;
		if (doc) {
			this.parseFromDocument(doc);
		}
	}
	async fetch() {
		if (this.fetched) return this;
		const response = await fetch(this.url);
		const doc = new DOMParser().parseFromString(await response.text(), "text/html");
		assert(doc);
		this.parseFromDocument(doc);
		return this;
	}
	parseFromDocument(doc: Document) {
		this.code = doc.querySelector(".content > pre > code")?.textContent.trim() ?? "";
		this.example = getTopLevelExample(doc);
		this.fetched = true;
	}
	*getTSCode(): IterableIterator<string> {
		yield `/**`;
		if (this.description) {
			yield* stringToMultiline(this.description, " * ");
		}
		yield ` * @see [${this.namespace}.${this.name} - ${this.type}](${this.url})`;
		yield ` */`;
		yield `${this.code}`;
	}
}
class ExcelScriptEnum implements T_Enum, PackageItem {
	type = "enum" as const;
	name: string;
	namespace: string;
	url: string;
	description: string;
	fields: EnumField[] = [];
	example = "";
	fetched = false;
	static load(json: T_Enum) {
		const member = new ExcelScriptEnum(json);
		member.fields = json.fields;
		member.example = json.example ?? "";
		member.fetched = json.fetched ?? false;
		return member;
	}
	constructor(item: PackageItemBase, doc?: Document) {
		this.name = item.name;
		this.namespace = item.namespace;
		this.url = item.url;
		this.description = item.description;
		if (doc) {
			this.parseFromDocument(doc);
		}
	}
	async fetch() {
		if (this.fetched) return this;
		const response = await fetch(this.url);
		const doc = new DOMParser().parseFromString(await response.text(), "text/html");
		assert(doc);
		this.parseFromDocument(doc);
		return this;
	}
	parseFromDocument(doc: Document) {
		const table = doc.getElementById("fields")?.nextElementSibling;
		const result: EnumField[] = [];
		if (!table || table.nodeName !== "TABLE") return result;
		for (const tr of table.querySelectorAll("tr")) {
			const nameTdElm = (tr as Element).firstElementChild;
			result.push({
				name: nameTdElm?.textContent.trim() ?? "",
				description: nameTdElm?.nextElementSibling?.textContent.trim() ?? "",
			});
		}
		this.fields = result;
		this.example = getTopLevelExample(doc);
		this.fetched = true;
		return result;
	}
	*getTSCode(): IterableIterator<string> {
		yield "/**";
		if (this.description) {
			yield* stringToMultiline(this.description, " * ");
		}
		yield ` * @see [${this.namespace}.${this.name} - ${this.type}](${this.url})`;
		yield ` */`;
		yield `export enum ${this.name} {`;
		for (const field of this.fields) {
			if (field.description) {
				yield `\t/**`;
				yield* stringToMultiline(field.description, " * ", "\t");
				yield `\t */`;
			}
			yield `\t${field.name},`;
		}
		yield "}";
	}
}
class ExcelScriptInterface implements T_Interface, PackageItem {
	type = "interface" as const;
	name: string;
	namespace: string;
	url: string;
	description: string;
	methods: Method[] = [];
	properties: Property[] = [];
	example = "";
	fetched = false;
	static load(json: T_Interface) {
		const member = new ExcelScriptInterface(json);
		member.methods = json.methods;
		member.properties = json.properties;
		member.example = json.example ?? "";
		member.fetched = json.fetched ?? false;
		return member;
	}
	constructor(item: PackageItemBase, doc?: Document) {
		this.name = item.name;
		this.namespace = item.namespace;
		this.url = item.url;
		this.description = item.description;
		if (doc) {
			this.parseFromDocument(doc);
		}
	}
	async fetch() {
		if (this.fetched) return this;
		const response = await fetch(this.url);
		const doc = new DOMParser().parseFromString(await response.text(), "text/html");
		assert(doc);
		this.parseFromDocument(doc);
		return this;
	}
	parseFromDocument(doc: Document) {
		this.methods = this.getMethods(doc);
		this.properties = this.getProperties(doc);
		this.example = getTopLevelExample(doc);
		this.fetched = true;
	}
	getMethods(doc: Document) {
		const table = doc.getElementById("methods")?.nextElementSibling;
		const result: MethodInfo[] = [];
		if (!table || table.nodeName !== "TABLE") return result;
		for (const anchor of table.querySelectorAll("tr > td:nth-child(1) > a")) {
			const methodID = (anchor as Element).getAttribute("href")?.substring(1);
			if (!methodID) continue;
			const methodInfoElm = doc.getElementById(methodID)?.nextElementSibling;
			if (!methodInfoElm || !methodInfoElm.classList.contains("memberInfo")) continue;
			const memberInfo = new MethodInfo(methodInfoElm);
			result.push(memberInfo);
		}
		return result;
	}
	getProperties(doc: Document): PropertyInfo[] {
		const table = doc.getElementById("properties")?.nextElementSibling;
		const result: PropertyInfo[] = [];
		if (!table || table.nodeName !== "TABLE") return result;
		for (const anchor of table.querySelectorAll("tr > td:nth-child(1) > a")) {
			const propertyID = (anchor as Element).getAttribute("href")?.substring(1);
			if (!propertyID) continue;
			const propertyInfoElm = doc.getElementById(propertyID)?.nextElementSibling;
			if (!propertyInfoElm || !propertyInfoElm.classList.contains("memberInfo")) continue;
			const memberInfo = new PropertyInfo(propertyInfoElm);
			result.push(memberInfo);
		}
		return result;
	}
	*getTSCode(): IterableIterator<string> {
		yield "/**";
		if (this.description) {
			yield* stringToMultiline(this.description, " * ");
		}
		yield ` * @see [${this.namespace}.${this.name} - ${this.type}](${this.url})`;
		yield ` */`;
		yield `export interface ${this.name} {`;
		for (const property of this.properties) {
			if (property.description) {
				yield `\t/**`;
				yield* stringToMultiline(property.description, " * ", "\t");
				yield `\t */`;
			}
			yield* stringToMultiline(property.code, "", "\t");
		}
		for (const method of this.methods) {
			if (method.description || method.parameters.length > 0) {
				yield `\t/**`;
				if (method.description) {
					yield* stringToMultiline(method.description, " * ", "\t");
				}
				for (const param of method.parameters) {
					yield `\t * @param ${param.name}`;
					if (param.description) {
						yield* stringToMultiline(
							param.description,
							" * ",
							"\t",
						);
					}
				}
				yield `\t */`;
			}
			yield* stringToMultiline(method.code, "", "\t");
		}
		yield "}";
	}
}
enum ParameterState {
	none,
	property,
	parameter,
	return,
}
class PropertyInfo implements Property {
	name = "";
	description = "";
	code = "";
	type = "";
	example = "";
	constructor(elm: Element) {
		this.name = elm.previousElementSibling?.textContent.trim() ?? "";
		const desc: string[] = [];
		let parameterState: ParameterState = ParameterState.none;
		for (const child of elm.children) {
			switch (child.nodeName) {
				case "P":
					desc.push(child.textContent.trim());
					break;
				case "PRE":
					if (parameterState === ParameterState.none) {
						this.code = child.querySelector("code")?.textContent.trim() ?? "";
					} else {
						this.example = child.querySelector("code")?.textContent.trim() ?? "";
					}
					break;
				case "H4":
					if (child.classList.contains("propertyInfoTitle")) {
						const infoTitle = child.textContent.trim();
						switch (infoTitle) {
							case "Property Value":
							case "プロパティ値":
								parameterState = ParameterState.property;
								break;
							case "Parameter":
							case "パラメーター":
								parameterState = ParameterState.parameter;
								break;
							case "Returns":
							case "戻り値":
								parameterState = ParameterState.return;
								break;
						}
					}
					break;
				case "DIV":
					if (child.classList.contains("propertyInfo")) {
						this.type = child.textContent.trim();
					}
					break;
			}
		}
		this.description = desc.join("\n");
	}
}
class MethodInfo implements Method {
	name: string;
	description = "";
	code = "";
	parameters: Parameter[] = [];
	returns: Return = { type: "", description: "" };
	example = "";
	constructor(elm: Element) {
		this.name = elm.previousElementSibling?.textContent.trim() ?? "";
		const info = parseMethod(elm);
		Object.assign(this, info);
	}
}
function getTopLevelExample(doc: Document) {
	const pre = doc.getElementById("examples")?.nextElementSibling;
	return pre?.textContent.trim() ?? "";
}
function parseMethod(elm: Element): Method {
	const descriptions: string[] = [];
	const parameters: Parameter[] = [];
	let code = "",
		example = "",
		returns: Return = { type: "", description: "" };
	let parameterState: ParameterState = ParameterState.none;
	for (const child of elm.children) {
		switch (child.nodeName) {
			case "P":
				descriptions.push(child.textContent.trim());
				break;
			case "PRE":
				switch (parameterState) {
					case ParameterState.none:
						code = child.querySelector("code")?.textContent.trim() ?? "";
						break;
					case ParameterState.return:
						example = child.querySelector("code")?.textContent.trim() ?? "";
						break;
				}
				break;
			case "H4":
				if (child.classList.contains("propertyInfoTitle")) {
					const infoTitle = child.textContent.trim();
					switch (infoTitle) {
						case "Parameter":
						case "パラメーター":
							parameterState = ParameterState.parameter;
							break;
						case "Returns":
						case "戻り値":
							parameterState = ParameterState.return;
							break;
					}
				}
				break;
			case "DIV":
				if (child.classList.contains("propertyInfo")) {
					if (parameterState === ParameterState.parameter) {
						const param: Parameter = {
							name: child.querySelector("dl > dt")?.textContent.trim() ?? "",
							type: child.querySelector("dl > dd")?.textContent.trim() ?? "",
							description: [...child.children].filter((elm) => elm.nodeName === "P").map((p) => p.textContent.trim()).join("\n"),
						};
						parameters.push(param);
					} else if (parameterState === ParameterState.return) {
						returns = {
							type: child.firstElementChild?.textContent.trim() ?? "",
							description: "",
						};
					}
				}
				break;
		}
	}
	return {
		description: descriptions.join("\n"),
		code,
		parameters,
		returns,
		example,
	};
}
