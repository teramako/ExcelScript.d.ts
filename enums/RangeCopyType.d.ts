declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.RangeCopyType enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.rangecopytype?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script copies all of the values from the current worksheet to a new worksheet.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the used range on the current worksheet.
	 *   let usedRange = workbook.getActiveWorksheet().getUsedRange();
	 *
	 *   // Create a new worksheet with a default name.
	 *   let newSheet = workbook.addWorksheet();
	 *
	 *   // Copy the values from the used range to the new worksheet.
	 *   let copyType = ExcelScript.RangeCopyType.values; // Change this to copy different information, such as formats.
	 *   let targetRange = newSheet.getRangeByIndexes(
	 *     usedRange.getRowIndex(),
	 *     usedRange.getColumnIndex(),
	 *     usedRange.getRowCount(),
	 *     usedRange.getColumnCount());
	 *   targetRange.copyFrom(usedRange, copyType);
	 *
	 *   // Switch the view to the new worksheet.
	 *   newSheet.activate();
	 * }
	 * ```
	 */
	export enum RangeCopyType {
		all,
		formats,
		formulas,
		link,
		values,
	}
}
