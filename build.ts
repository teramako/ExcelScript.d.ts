import * as path from "https://deno.land/std@0.159.0/path/mod.ts";
import {
	FunctionDeclaration,
	ParameterDeclaration,
	Project,
} from "https://deno.land/x/ts_morph@16.0.0/mod.ts";

const project = new Project({ tsConfigFilePath: "tsconfig.json" });

/**
 * @param args コマンドラインオプション
 * （OSTSファイルを生成するTypeScrtiptファイルのパス・リスト）
 */
function main(args: string[]): void {
	Promise.all(args.map(async (file) => {
		try {
			const osts = await loadFile(file);
			const success = await osts.write();
			console.log(osts.source, "=>", osts.dest, success);
			return {
				success: success,
				result: osts,
			};
		} catch (error) {
			console.error(error.name, error.message);
			return {
				success: false,
				result: error,
			};
		}
	})).then((results) => {
		const successResults = results.filter((result) => result?.success);
		console.log({
			success: successResults.length,
			failed: results.length - successResults.length,
		});
	});
}
/**
 * OSTSファイル生成元となるTypeScriptファイルを読み込む
 * @param file ExcelScriptとなるTypeScriptのファイルパス
 * @returns
 */
function loadFile(file: string): Promise<OSTS> {
	return new Promise((ok, ng) => {
		try {
			const osts = new OSTS(file);
			ok(osts);
		} catch (e) {
			ng(e);
		}
	});
}
/**
 * ExcelScript をパッケージ化する
 */
class OSTS {
	version = "0.2.0";
    /**
     * TypeScriptコード
     */
	body = "";
	/**
	 * "main"関数の引数情報と返り値情報
	 */
	parameterInfo: {
		originalParameterOrder: OriginalParameter[];
		parameterSchema: ParameterSchema;
		returnSchema: ReturnSchema;
	};
	appInfo = { variant: "synchronous", veriantVersion: 2 };
	/**
	 * 読み込むファイルパス
	 */
	source = "";
	/**
	 * 出力先.ostsファイルパス
	 */
	dest = "";
	constructor(file: string) {
		this.source = file;
		const source = project.getSourceFileOrThrow(file);
		const mainFunction = source.getFunctionOrThrow("main");
		this.body = source.getFullText();
		this.parameterInfo = this.getParameterInfo(mainFunction);

		const sourcePath = path.parse(this.source);
		this.dest = path.join(sourcePath.dir, `${sourcePath.name}.osts`);
	}
	/**
	 * パッケージ化された情報を{name}.ostsファイルへ書き出す。
	 *
	 * ファイル名は読み込み元の`<ファイル名(拡張子なし)>.osts`となる
	 * @returns {boolean} ファイル書き出しの成否
	 */
	async write() {
		const encoder = new TextEncoder();
		await Deno.writeFile(this.dest, encoder.encode(JSON.stringify(this)));
		return true;
	}
	/**
	 * ostsファイルを構成するJSON文字列を生成する。
	 *
	 * 明示的に呼び出すことはなく、`JSON.stringify()`時に暗黙的呼び出される。
	 * @returns {object} JSONデータとなるオブジェクト
	 */
	toJSON() {
		return {
			version: this.version,
			body: this.body,
			parameterInfo: JSON.stringify(this.parameterInfo),
			appInfo: JSON.stringify(this.appInfo),
		};
	}
	/**
	 * "main"関数のパラメータと返り値情報を返す。
	 *
	 * ExcelScriptでは第一パラメータが`workbook: ExcelScript.Workbook`に固定化されていて、
	 * これは対象外となるため、第一パラメータは省略する。
	 * @param func "main"関数宣言のAST
	 * @returns
	 */
	getParameterInfo(func: FunctionDeclaration) {
		const params = func.getParameters();
		if (params.length > 1) params.shift();
		const parameterSchema = this.getParameterSchema(params);
		const originalParameterOrder = this.getOriginalParameterOrder(params);
		const returnSchema = this.getReturnSchema(func);
		return {
			originalParameterOrder,
			parameterSchema,
			returnSchema,
		};
	}
	getOriginalParameterOrder(params: ParameterDeclaration[]) {
		const result: OriginalParameter[] = params.map((param, i) => ({
			name: param.getName(),
			index: i,
		}));
		return result;
	}
	getParameterSchema(params: ParameterDeclaration[]) {
		const result: ParameterSchema = {
			type: "object",
			required: [],
			properties: {},
		};
		params.forEach((param) => {
			const name = param.getName();
			const type = param.getType();
			result.required.push(name);
			result.properties[name] = { type: type.getText() };
		});
		return result;
	}
	getReturnSchema(func: FunctionDeclaration) {
		const returnType = func.getReturnType();
		const returnSchema: ReturnSchema = {
			type: "object",
			properties: {
				type: returnType.getText(),
			},
		};
		return returnSchema;
	}
}
/**
 * "main"関数のパラメータ名と位置
 */
interface OriginalParameter {
	name: string;
	index: number;
}
/**
 * "main"関数のパラメータ名と型
 */
interface ParameterSchema {
	type: string;
	required: string[];
	properties: Record<string, { type: string }>;
}
/**
 * "main"関数の返り値情報
 */
interface ReturnSchema {
	type: string;
	properties: ReturnSchemaResult;
}
/**
 * "main"関数の返り値の型
 */
interface ReturnSchemaResult {
	type: string;
}

main(Deno.args);
