import {
	fetchPackage,
	MemberType
} from "./lib/excelscript-fetcher.ts";

function main(args: string[]) {
	const lang = args[0] ?? "en-US";
	fetchPackage(lang)
		.then(async (excelScriptPackage) => {
			const jsonFile = `ExcelScript-${excelScriptPackage.lang}.json`;
			const totalCounts: Record<MemberType, number> = {
				interface: excelScriptPackage.interfaces.length,
				enum: excelScriptPackage.enums.length,
				type: excelScriptPackage.typeAliases.length,
				function: excelScriptPackage.functions.length
			}
			console.log(totalCounts);
			const progress: Record<MemberType, number> = { interface: 0, enum: 0, type: 0, function: 0 };
			for (const item of excelScriptPackage.getPackageItems()) {
				console.log(`fetching: [${item.type}]${item.name}`);
				await item.fetch();
				++progress[item.type];
				console.log(`✅ Done: ${progress[item.type]} / ${totalCounts[item.type]}`)
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
