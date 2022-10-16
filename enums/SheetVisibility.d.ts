declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.SheetVisibility enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.sheetvisibility?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script unhides all the worksheets in the workbook.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Iterate over each worksheet.
	 *   workbook.getWorksheets().forEach((worksheet) => {
	 *     // Set the worksheet visibility to visible.
	 *     worksheet.setVisibility(ExcelScript.SheetVisibility.visible);
	 *   });
	 * }
	 * ```
	 */
	export enum SheetVisibility {
		hidden,
		veryHidden,
		visible,
	}
}
