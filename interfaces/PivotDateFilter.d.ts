/// <reference path="../enums/DateFilterCondition.d.ts"/>
/// <reference path="./FilterDatetime.d.ts"/>
declare namespace ExcelScript {
	/**
	 * PivotField に適用する日付フィルターの構成可能なテンプレート。
	 * フィルター `condition` を動作させるには、どのような条件を設定する必要があるかを定義します。
	 * @see [ExcelScript.PivotDateFilter interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.pivotdatefilter?view=office-scripts)
	 */
	export interface PivotDateFilter {
		/**
		 * 比較器は、他の値が比較される静的な値です。
		 * 比較の種類は、条件によって定義されます。
		 */
		comparator?: FilterDatetime;
		/**
		 * 必要なフィルター条件を定義するフィルターの条件を指定します。
		 *
		 * @example
		 * ```
		 * // This script applies a filter to a PivotTable that filters out rows
		 * // that aren't from this month.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the "Date Recorded" field to filter.
		 *   // The data in this field must be dates in order for the filter to work.
		 *   const pivot = workbook.getPivotTables()[0];
		 *   const rowHierarchy = pivot.getRowHierarchy("Date Recorded");
		 *   const rowField = rowHierarchy.getFields()[0];
		 *
		 *   // Apply the date filter.
		 *   rowField.applyFilter({
		 *     dateFilter: {
		 *       // Setting the condition to `thisMonth` means items that are before or
		 *       // after this month will not be displayed.
		 *       condition: ExcelScript.DateFilterCondition.thisMonth
		 *     }
		 *   });
		 * }
		 * ```
		 */
		condition: DateFilterCondition;
		/**
		 * もし `true`、フィルター は、条件を 満たすアイテムを除外します。
		 * 既定値は `false` (条件を満たすアイテムを含めるフィルター) です。
		 */
		exclusive?: boolean;
		/**
		 * フィルター条件の範囲 `between` の下限。
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
		lowerBound?: FilterDatetime;
		/**
		 * フィルター条件の範囲 `between` の上限。
		 */
		upperBound?: FilterDatetime;
		/**
		 * `equals` の場合, `before`, `after`、および `between` フィルター条件は、比較を日単位で行う必要があるかどうかを示します。
		 */
		wholeDays?: boolean;
	}
}
