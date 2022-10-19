/**
 * Fetch ExcelScript type definitions from "learn.microsoft.com",
 * and then convert to JSON
 */
import { assert } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import {
	DOMParser,
	Element,
} from "https://deno.land/x/deno_dom@v0.1.35-alpha/deno-dom-wasm.ts";

/**
 * ExcelScript package information.
 * - locale
 * - URL
 * - indexes of interfaces, enums and typeAliases
 */
export interface Package {
	lang: string;
	baseURL: string;
	interfaces?: PackageItem[];
	enums?: PackageItem[];
	typeAliases?: PackageItem[];
}
/**
 * keys of `PackageItem`s
 */
const PackageMembers = ["interfaces", "enums", "typeAliases"] as const;
/**
 * ExcelScript Index of interfaces, enums, typeAliases and functions
 */
export interface PackageItem {
	/**
	 * Name of the package member
	 */
	name: string;
	/**
	 * Description of the package member
	 */
	description: string;
	/**
	 * URL
	 */
	url: string;
	/**
	 * Type of the package member
	 * - `interface`
	 * - `enum`
	 * - `type`
	 */
	type: string;
}

/**
 * Parameter information of a method
 */
export type ParameterInfo = {
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
};
/**
 * Return value information of a method or a function
 */
export type ReturnInfo = {
	/**
	 * Type(s) of the return value.
	 */
	type: string;
	/**
	 * Description of the return value.
	 */
	description: string;
};

/**
 * Enum field information
 */
export type EnumFieldInfo = {
	/**
	 * Name of the field.
	 */
	name: string;
	/**
	 * Description of the field.
	 */
	description: string;
};

/**
 * Fetch ExcelScript package members from "learn.microsoft.com",
 * and then return the parsed object.
 * @param lang locale string (e.g. `en-US`, `ja-JP`)
 * @returns
 */
export async function fetchPackage(lang = "en-US") {
	const baseURL =
		`https://learn.microsoft.com/${lang}/javascript/api/office-scripts/`;
	const rootURL = `${baseURL}excelscript?view=office-scripts`;
	const response = await fetch(rootURL);
	return parsePackage(response, lang, baseURL);
}
/**
 * Parse the html contents and return the result.
 * @param response the result of fetched the web page
 * @param lang locale string
 * @param baseURL
 * @returns
 */
function parsePackage(response: Response, lang: string, baseURL: string): Promise<Package> {
	return response.text().then((html) => {
		const result: Package = {
			lang: lang,
			baseURL: baseURL,
		};
		const types = {
			interfaces: "interface",
			enums: "enum",
			typeAliases: "type",
		} as const;
		const doc = new DOMParser().parseFromString(html, "text/html");
		assert(doc);
		for (const id of PackageMembers) {
			const table = doc.querySelector(`#${id}`)?.nextElementSibling;
			if (!table || table.nodeName !== "TABLE") continue;
			result[id] = parsePackageTable(table, baseURL, types[id]);
		}
		return result;
	});
}
function parsePackageTable(table: Element, baseURL: string, type: string) {
	const result: PackageItem[] = [];
	if (!table) return result;
	for (const tr of table.querySelectorAll("tr")) {
		const nameTD = (tr as Element).firstElementChild;
		if (!nameTD) continue;
		const descTD = nameTD.nextElementSibling;
		const name = nameTD.textContent.trim();
		const href = nameTD.querySelector("a")?.getAttribute("href");
		const desc = descTD?.textContent.trim();
		result.push({
			name: name,
			type: type,
			description: desc ?? "",
			url: href ? baseURL + href : "",
		});
	}
	return result;
}
