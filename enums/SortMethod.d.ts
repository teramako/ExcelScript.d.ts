declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.SortMethod enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.sortmethod?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script sorts a range using the values in the first column.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the range (A1:D8) to sort from the current worksheet.
	 *   const worksheet = workbook.getActiveWorksheet();
	 *   const rangeToSort = worksheet.getRange("A1:D8");
	 *
	 *   // Create a SortField for text sorting.
	 *   let valueSort: ExcelScript.SortField = {
	 *     ascending: true,
	 *     key: 0, // First column
	 *     sortOn: ExcelScript.SortOn.value
	 *   };
	 *
	 *   // Apply the SortField to the range.
	 *   rangeToSort.getSort().apply(
	 *     [valueSort],
	 *     false, // Don't let casing have an impact of sorting.
	 *     true, // The range has headers.
	 *     ExcelScript.SortOrientation.rows,
	 *     ExcelScript.SortMethod.pinYin // Use phonetic sorting for Chinese characters.
	 *     );
	 * }
	 * ```
	 */
	export enum SortMethod {
		pinYin,
		strokeCount,
	}
}
