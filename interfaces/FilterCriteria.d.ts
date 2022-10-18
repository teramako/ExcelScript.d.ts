/// <reference path="../enums/DynamicFilterCriteria.d.ts" />
/// <reference path="../enums/FilterOn.d.ts"/>
/// <reference path="../enums/FilterOperator.d.ts"/>
/// <reference path="./FilterDatetime.d.ts" />
/// <reference path="./Icon.d.ts" />
declare namespace ExcelScript {
	/**
	 * 列に適用するフィルター条件を表します。
	 * @see [ExcelScript.FilterCriteria interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.filtercriteria?view=office-scripts)
	 */
	export interface FilterCriteria {
		/**
		 * セルをフィルター処理するために使用する HTML カラー文字列。
		 * フィルター処理と`fontColor`共に`cellColor`使用されます。
		 */
		color?: string;
		/**
		 * データをフィルター処理するために使用する最初の条件。
		 * フィルター処理の場合 `custom` に演算子として使用されます。
		 * たとえば">50 より大きい数値の場合は 50"、"s" で終わる値の場合は "=*s" です。
		 *
		 * 上/下のアイテム/パーセントの場合は数値として使用されます (たとえば、上位 5 項目の場合は "5" に設定されている場合 `filterOn` ) `topItems`).
		 *
		 * @example
		 * ```
		 * // This script creates an autoFilter on the worksheet that filters out rows based on column values.
		 * // The autoFilter filters to only include rows that have a value in column C in the lowest 10 values
		 * // (of column C values).
		 * function main(workbook: ExcelScript.Workbook) {
		 *   const currentSheet = workbook.getActiveWorksheet();
		 *   const dataRange = currentSheet.getUsedRange();
		 *
		 *   // Add a filter that will only show the rows with the lowest 10 values in column C
		 *   // (index 2, assuming the used range spans from at least A:C).
		 *   const filterCriteria: ExcelScript.FilterCriteria = {
		 *     criterion1: "10",
		 *     filterOn: ExcelScript.FilterOn.bottomItems
		 *   };
		 *   currentSheet.getAutoFilter().apply(dataRange, 2, filterCriteria);
		 * }
		 * ```
		 */
		criterion1?: string;
		/**
		 * データをフィルター処理するために使用する 2 番目の条件。
		 * フィルター処理の場合 `custom` にのみ演算子として使用されます。
		 *
		 * @example
		 * ```
		 * // This script applies a filter to a table so that it only shows rows with "Needs Review" in the "Type" column.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the first table in the workbook.
		 *   const table = workbook.getTables()[0];
		 *
		 *   // Apply the filter to the "Type" column.
		 *   const typeColumn = table.getColumnByName("Type");
		 *   typeColumn.getFilter().applyValuesFilter(["Needs Review"]);
		 * }
		 * ```
		 */
		criterion2?: string;
		/**
		 * この列に適用する `ExcelScript.DynamicFilterCriteria` セットの動的条件。
		 * フィルター処理で `dynamic` 使用されます。
		 */
		dynamicCriteria?: DynamicFilterCriteria;
		/**
		 * 値を表示したままにする必要があるかどうかを判断するためにフィルターで使用されるプロパティ。
		 */
		filterOn: FilterOn;
		/**
		 * セルをフィルター処理するために使用するアイコン。
		 * フィルター処理で `icon` 使用されます。
		 */
		icon?: Icon;
		/**
		 * フィルター処理を使用するときに条件 1 と 2 を結合するために使用される `custom` 演算子。
		 */
		operator?: FilterOperator;
		/**
		 * 豊富な値に対してリッチ フィルターを実行するためにフィルターによって使用されるプロパティ。
		 */
		subField?: string;
		/**
		 * フィルター処理の一部として使用する値の `values` セット。
		 */
		values?: Array<string | FilterDatetime>;
	}
}
