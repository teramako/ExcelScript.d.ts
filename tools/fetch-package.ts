import { fetchPackage } from "./lib/excelscript-fetcher.ts";

function main(args: string[]) {
	const lang = args[0] ?? "en-US";
	fetchPackage(lang)
		.then(async (excelScriptPackage) => {
			const jsonFile = `ExcelScript-${excelScriptPackage.lang}.json`;
			console.log({
				interfaces: excelScriptPackage.interfaces.length,
				enums: excelScriptPackage.enums.length,
				types: excelScriptPackage.typeAliases.length,
				functions: excelScriptPackage.functions.length,
			});
			for (const item of excelScriptPackage.getPackageItems()) {
				await item.fetch();
				await sleep(1000);
			}
			const enc = new TextEncoder();
			Deno.writeFileSync(
				jsonFile,
				enc.encode(JSON.stringify(excelScriptPackage, null, 2)),
			);
			return jsonFile;
		})
		.then((file) => {
			console.log("✅ Created: ", file);
		});
}

function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

main(Deno.args);
