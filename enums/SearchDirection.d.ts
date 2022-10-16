declare namespace ExcelScript {
	/**
	 * 検索の方向を指定します。
	 * @see [ExcelScript.SearchDirection enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.searchdirection?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script searches for the next instance of the text "TK" on the current worksheet.
	 * // It then selects that cell and removes "TK" and all formatting from the cell.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the used range on the current worksheet.
	 *   let range = workbook.getActiveWorksheet().getUsedRange();
	 *
	 *   // Get the next cell that contains "TK".
	 *   let tkCell = range.find("TK", {
	 *     completeMatch: true, // Don't match if the cell text only contains "TK" as part of another string.
	 *     matchCase: false,
	 *     searchDirection: ExcelScript.SearchDirection.forward // Start at the beginning of the range and go to later columns and rows.
	 *   });
	 *
	 *   // Set focus on the found cell.
	 *   tkCell.select();
	 *
	 *   // Remove the "TK" text value from the cell, as well as any formatting that may have been added.
	 *   tkCell.clear(ExcelScript.ClearApplyTo.all);
	 * }
	 * ```
	 */
	export enum SearchDirection {
		/**
		 * 逆の順序で検索します。
		 */
		backwards,
		/**
		 * 順方向に検索します。
		 */
		forward,
	}
}
