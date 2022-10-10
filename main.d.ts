/// <reference path="./interfaces/Workbook.d.ts" />
declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.run(callback)](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript?view=office-scripts#excelscript-excelscript-run-function(1))
	 */
	export function run(
		callback: (workbook: Workbook) => Promise<void>,
	): Promise<void>;
}
