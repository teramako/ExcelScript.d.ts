declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.FilterOn enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.filteron?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script applies a filter to a table so that
	 * // only rows with values in column 1 that start with "L" are shown.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the autoFilter of the first table in the current worksheet.
	 *   const table = workbook.getActiveWorksheet().getTables()[0];
	 *   const autoFilter = table.getAutoFilter();
	 *
	 *   // Filter to only include values that start with "L".
	 *   const filterCriteria: ExcelScript.FilterCriteria = {
	 *     filterOn: ExcelScript.FilterOn.custom,
	 *     criterion1: "L*"
	 *   };
	 *
	 *   // Apply the filter to column 1 (zero-based).
	 *   autoFilter.apply(table.getRange(), 1, filterCriteria);
	 * }
	 * ```
	 */
	export enum FilterOn {
		bottomItems,
		bottomPercent,
		cellColor,
		custom,
		dynamic,
		fontColor,
		icon,
		topItems,
		topPercent,
		values,
	}
}
