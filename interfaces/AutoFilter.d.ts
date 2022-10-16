/// <reference path="./FilterCriteria.d.ts"/>
/// <reference path="./Range.d.ts" />
declare namespace ExcelScript {
	/**
	 * オブジェクトを `AutoFilter` 表します。
	 * AutoFilter は、セルの内容に基づいて、Excel列の値を特定のフィルターに変換します。
	 * @see [ExcelScript.AutoFilter interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.autofilter?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script creates an autoFilter on the worksheet that filters out rows based on column values.
	 * // The autoFilter filters to only include rows that have a value in column C in the lowest 10 values
	 * // (of column C values).
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the autoFilter of the first table in the current worksheet.
	 *   const currentSheet = workbook.getActiveWorksheet();
	 *   const dataRange = currentSheet.getUsedRange();
	 *   const autoFilter = currentSheet.getAutoFilter();
	 *
	 *   // Add a filter that will only show the rows with the lowest 10 values in column C
	 *   // (index 2, assuming the used range spans from at least A:C).
	 *   autoFilter.apply(dataRange, 2, {
	 *     criterion1: "10",
	 *     filterOn: ExcelScript.FilterOn.bottomItems
	 *   });
	 * }
	 * ```
	 */
	export interface AutoFilter {
		/**
		 * 範囲にオートフィルターを適用します。 列インデックスやフィルター条件が指定されている場合、列にフィルターを適用します。
		 * @param range オートフィルターが適用される範囲。
		 * @param columnIndex オートフィルターが適用される 0 から始まる列インデックス。
		 * @param criteria フィルター条件。
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
		apply(
			range: Range | string,
			columnIndex?: number,
			criteria?: FilterCriteria,
		): void;
		/**
		 * オートフィルターのフィルター条件と並べ替え状態をクリアします。
		 */
		clearCriteria(): void;
		/**
		 * オートフィルターが適用された範囲のすべてのフィルター条件を保持する配列です。
		 */
		getCriteria(): FilterCriteria[];
		/**
		 * オートフィルターが有効になっているかどうかを指定します。
		 */
		getEnabled(): boolean;
		/**
		 * オートフィルターにフィルター条件があるかどうかを指定します。
		 */
		getIsDataFiltered(): boolean;
		/**
		 * オートフィルターが `Range` 適用される範囲を表すオブジェクトを返します。
		 * AutoFilter に関連付けられているオブジェクトがない `Range` 場合、このメソッドは `undefined`.
		 */
		getRange(): Range;
		/**
		 * 現在範囲に指定されている AutoFilter オブジェクトを適用します。
		 */
		reapply(): void;
		/**
		 * 範囲の AutoFilter を削除します。
		 */
		remove(): void;
	}
}
