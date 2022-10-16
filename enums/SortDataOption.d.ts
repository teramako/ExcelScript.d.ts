declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.SortDataOption enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.sortdataoption?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script sorts a table based on the values in column 1.
	 * // If the text of a column-1 value can be treated as a number,
	 * // it will be sorted in numerical order, rather than Unicode order
	 * // (so 123 will come before 12.3).
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the first table on the current worksheet.
	 *   const currentSheet = workbook.getActiveWorksheet();
	 *   const table = currentSheet.getTables()[0];
	 *
	 *   // Create the sorting parameters.
	 *   const countSortField: ExcelScript.SortField = {
	 *     key: 1,
	 *     ascending: true,
	 *     dataOption: ExcelScript.SortDataOption.textAsNumber
	 *   };
	 *
	 *   // Apply the sort to the table.
	 *   const sort = table.getSort();
	 *   sort.apply([countSortField]);
	 * }
	 * ```
	 */
	export enum SortDataOption {
		normal,
		textAsNumber,
	}
}
