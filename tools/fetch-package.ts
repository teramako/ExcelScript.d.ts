import {
	fetchPackage,
} from "./lib/excelscript-fetcher.ts";

function main(args: string[]) {
	const lang = args[0] ?? "en-US";
	fetchPackage(lang)
		.then((json) => {
			const outFile = `package-${json.lang}.json`;
			console.log({
				interfaces: json.interfaces?.length ?? 0,
				enums: json.enums?.length ?? 0,
				types: json.typeAliases?.length ?? 0,
			});
			const enc = new TextEncoder();
			Deno.writeFileSync(outFile, enc.encode(JSON.stringify(json, null, 2)));
			return outFile;
		})
		.then((file) => {
			console.log("✅ Created: ", file);
		});
}

main(Deno.args);
