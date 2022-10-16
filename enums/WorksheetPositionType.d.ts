declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.WorksheetPositionType enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.worksheetpositiontype?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script duplicates a worksheet named "Template".
	 * // The new worksheet is added after the template.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the worksheet named "Template".
	 *   let template = workbook.getWorksheet("Template");
	 *
	 *   // Copy the worksheet.
	 *   let newSheet = template.copy(
	 *     ExcelScript.WorksheetPositionType.after,
	 *     template
	 *   );
	 *
	 *   // Name the worksheet using the current date.
	 *   let date = new Date(Date.now());
	 *   newSheet.setName(`${date.toDateString()}`);
	 * }
	 * ```
	 */
	export enum WorksheetPositionType {
		after,
		before,
		beginning,
		end,
		none,
	}
}
