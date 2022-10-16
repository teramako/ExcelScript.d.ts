declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.KeyboardDirection enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.keyboarddirection?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script makes the font bold on all the contiguous cells between
	 * // A1 and the bottom of the used range of the first column.
	 * function main(workbook: ExcelScript.Workbook)
	 * {
	 *   // Get the current worksheet.
	 *   let selectedSheet = workbook.getActiveWorksheet();
	 *
	 *   // Get every cell that's used between A1 and the end of the column.
	 *   // This recreates the Ctrl+Shift+Down arrow key behavior.
	 *   let firstCell = selectedSheet.getRange("A1");
	 *   let firstColumn = firstCell.getExtendedRange(ExcelScript.KeyboardDirection.down);
	 *
	 *   // Set the font to bold in that range.
	 *   firstColumn.getFormat().getFont().setBold(true);
	 * }
	 * ```
	 */
	export enum KeyboardDirection {
		down,
		left,
		right,
		up,
	}
}
