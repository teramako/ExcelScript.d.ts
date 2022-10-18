/// <reference path="../enums/FilterDatetimeSpecificity.d.ts"/>
declare namespace ExcelScript {
	/**
	 * 値をフィルター処理するときに日付をフィルター処理する方法を表します。
	 * @see [ExcelScript.FilterDatetime interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.filterdatetime?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script applies a filter to a PivotTable that filters it
	 * // to only show rows from between June 20th, 2022 and July 10th, 2022.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the "Date Recorded" field to filter.
	 *   // The data in this field must be dates in order for the filter to work.
	 *   const pivot = workbook.getPivotTables()[0];
	 *   const rowHierarchy = pivot.getRowHierarchy("Date Recorded");
	 *   const rowField = rowHierarchy.getFields()[0];
	 *
	 *   // Create the filter's date boundaries.
	 *   let earliestDate: ExcelScript.FilterDatetime = {
	 *     date: "2022-06-20",
	 *     specificity: ExcelScript.FilterDatetimeSpecificity.day
	 *   };
	 *   let latestDate: ExcelScript.FilterDatetime = {
	 *     date: "2022-07-10",
	 *     specificity: ExcelScript.FilterDatetimeSpecificity.day
	 *   };
	 *
	 *   // Apply the date filter.
	 *   rowField.applyFilter({
	 *     dateFilter: {
	 *       condition: ExcelScript.DateFilterCondition.between,
	 *       lowerBound: earliestDate,
	 *       upperBound: latestDate
	 *     }
	 *   });
	 * }
	 * ```
	 */
	export interface FilterDatetime {
		/**
		 * データのフィルター処理に使用する ISO8601 形式の日付です。
		 */
		date: string;
		/**
		 * データを保持するのに、日付をどの程度詳細に使用するか。
		 * たとえば、日付が 2005-04-02 で、仕様が "month" に設定されている場合、フィルター操作では、2005 年 4 月の日付を持つすべての行が保持されます。
		 */
		specificity: FilterDatetimeSpecificity;
	}
}
