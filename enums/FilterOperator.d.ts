declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.FilterOperator enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.filteroperator?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // The script filters rows from a table based on a numerical range.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the first table in the current worksheet.
	 *   const currentSheet = workbook.getActiveWorksheet();
	 *   const table = currentSheet.getTables()[0];
	 *
	 *   // Filter to only show rows with a value in the "Exam Score" column that is
	 *   // greater than 0 and less than or equal to 60.
	 *   table.getColumnByName("Exam Score").getFilter().applyCustomFilter(">0", "<=60", ExcelScript.FilterOperator.and);
	 * }
	 * ```
	 */
	export enum FilterOperator {
		and,
		or,
	}
}
