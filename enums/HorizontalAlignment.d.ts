declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.HorizontalAlignment enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.horizontalalignment?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script centers the text in a table's header row cells.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the first table on the current worksheet.
	 *   const currentSheet = workbook.getActiveWorksheet();
	 *   const table = currentSheet.getTables()[0];
	 *
	 *   // Get the header range.
	 *   const headerRange = table.getHeaderRowRange();
	 *
	 *   // Set the horizontal text alignment to `center`.
	 *   headerRange.getFormat().setHorizontalAlignment(ExcelScript.HorizontalAlignment.center);
	 * }
	 * ```
	 */
	export enum HorizontalAlignment {
		center,
		centerAcrossSelection,
		distributed,
		fill,
		general,
		justify,
		left,
		right,
	}
}
