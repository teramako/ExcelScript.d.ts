declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.SortOn enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.sorton?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script sorts a range based on the color of the cells.
	 * // It brings all red cells to the top of the range.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the range (A1:D8) to sort from the current worksheet.
	 *   const worksheet = workbook.getActiveWorksheet();
	 *   const rangeToSort = worksheet.getRange("A1:D8");
	 *
	 *   // Create a SortField for color sorting.
	 *   // This sorts the rows based on the fill color of each row's cell in the first column.
	 *   let colorSort: ExcelScript.SortField = {
	 *     ascending: true,
	 *     color: "FF0000", // red
	 *     key: 0,
	 *     sortOn: ExcelScript.SortOn.cellColor
	 *   };
	 *
	 *   // Apply the SortField to the range.
	 *   rangeToSort.getSort().apply([colorSort]);
	 * }
	 * ```
	 */
	export enum SortOn {
		cellColor,
		fontColor,
		icon,
		value,
	}
}
