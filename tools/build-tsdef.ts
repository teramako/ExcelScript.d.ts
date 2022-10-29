import { createTypeScriptDefinitionCode, ExcelScriptPackage } from "./lib/excelscript-fetcher.ts";
import { ensureDir } from "https://deno.land/std@0.161.0/fs/mod.ts";

function main(args: string[]) {
	for (const packageFile of args) {
		createTSDefinitionFrom(packageFile);
	}
}
async function createTSDefinitionFrom(file: string) {
	const enc = new TextEncoder();
	const pkg = await ExcelScriptPackage.loadFromJson(file);
	const rootFile = `./dest/${pkg.lang}/ExcelScript.d.ts`;
	await ensureDir(`./dest/${pkg.lang}`);
	const rootPkgFile = await Deno.open(rootFile, { create: true, truncate: true, write: true });
	for (const prop of ["interfaces", "enums"] as const) {
		const filePath = `./dest/${pkg.lang}/${prop}.d.ts`;
		rootPkgFile.write(enc.encode(`/// <reference path="./${prop}.d.ts" />\n`));
		Deno.open(
			filePath,
			{ create: true, truncate: true, write: true },
		).then(async (file) => {
			await file.write(
				enc.encode([...createTypeScriptDefinitionCode(pkg[prop], true)].join("\n")),
			);
			return file;
		}).then((file) => {
			file.close();
			console.log("✅ Created: ", filePath);
		});
	}
	rootPkgFile.write(enc.encode(
		[...createTypeScriptDefinitionCode([...pkg.typeAliases, ...pkg.functions], true)].join("\n"),
	)).then(() => {
		rootPkgFile.close();
		console.log("✅ Created: ", rootFile);
	});
}

main(Deno.args);
