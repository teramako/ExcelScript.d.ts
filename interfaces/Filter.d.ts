/// <reference path="../enums/DynamicFilterCriteria.d.ts"/>
/// <reference path="../enums/FilterOperator.d.ts"/>
/// <reference path="./FilterCriteria.d.ts"/>
/// <reference path="./FilterDatetime.d.ts"/>
declare namespace ExcelScript {
	/**
	 * テーブルの列のフィルター処理を管理します。
	 * @see [ExcelScript.Filter interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.filter?view=office-scripts)
	 */
	export interface Filter {
		/**
		 * 指定の列に、指定したフィルター条件を適用します。
		 * @param criteria 適用する基準。
		 */
		apply(criteria: FilterCriteria): void;
		/**
		 * 指定した数の要素の列に "下位アイテム" フィルターを適用します。
		 * @param count 表示する下位からの要素の数。
		 */
		applyBottomItemsFilter(count: number): void;
		/**
		 * 指定した割合の要素の列に "下位パーセント" フィルターを適用します。
		 * @param percent 表示する下位からの要素のパーセンテージ。
		 */
		applyBottomPercentFilter(percent: number): void;
		/**
		 * 指定した色の列に "セルの色" フィルターを適用します。
		 * @param color 表示するセルの背景色です。
		 */
		applyCellColorFilter(color: string): void;
		/**
		 * 指定した条件文字列の列に "アイコン" フィルターを適用します。
		 * @param criteria1 最初の条件の文字列です。
		 * @param criteria2 省略可能。 2 つ目の条件の文字列です。
		 * @param oper 省略可能。 2 つの条件を結合する方法を記述する演算子です。
		 *
		 * @example
		 * ```
		 * // The script filters rows from a table based on numerical values.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the first table in the current worksheet.
		 *   const currentSheet = workbook.getActiveWorksheet();
		 *   const table = currentSheet.getTables()[0];
		 *
		 *   // Filter to only show rows with values in the "Sales" column that are
		 *   // greater than or equal to 2000.
		 *   table.getColumnByName("Sales").getFilter().applyCustomFilter(">=2000");
		 * }
		 * ```
		 */
		applyCustomFilter(
			criteria1: string,
			criteria2?: string,
			oper?: FilterOperator,
		): void;
		/**
		 * 列に "動的" フィルターを適用します。
		 * @param criteria 適用する動的条件。
		 *
		 * @example
		 * ```
		 * // This script applies a filter to a table that filters it
		 * // to only show rows with dates from the previous month.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the table named "ReportTable".
		 *   const table = workbook.getTable("ReportTable");
		 *
		 *   // Get the column with the header "Date".
		 *   const dateColumn = table.getColumnByName("Date");
		 *
		 *   // Apply a dynamic filter to the column.
		 *   // `lastMonth` will only show rows with a date from the previous month.
		 *   dateColumn.getFilter().applyDynamicFilter(ExcelScript.DynamicFilterCriteria.lastMonth);
		 * }
		 * ```
		 */
		applyDynamicFilter(criteria: DynamicFilterCriteria): void;
		/**
		 * 指定した色の列に "フォントの色" フィルターを適用します。
		 * @param color 表示するセルのフォントの色です。
		 */
		applyFontColorFilter(color: string): void;
		/**
		 * 指定したアイコンの列に "アイコン" フィルターを適用します。
		 * @param icon 表示するセルのアイコンです。
		 */
		applyIconFilter(icon: Icon): void;
		/**
		 * 指定した数の要素の列に "上位アイテム" フィルターを適用します。
		 * @param count 表示する上位からの要素の数。
		 */
		applyTopItemsFilter(count: number): void;
		/**
		 * 指定した割合の要素の列に "上位パーセント" フィルターを適用します。
		 * @param percent 表示する上位からの要素のパーセンテージ。
		 */
		applyTopPercentFilter(percent: number): void;
		/**
		 * 指定した値の列に "値" フィルターを適用します。
		 * @param values 表示する値のリスト。
		 * これは、文字列の配列またはオブジェクトの `ExcelScript.FilterDateTime` 配列である必要があります。
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
		applyValuesFilter(values: Array<string | FilterDatetime>): void;
		/**
		 * 指定した列に適用されているフィルターをクリアします。
		 */
		clear(): void;
		/**
		 * 指定した列に現在適用されているフィルターです。
		 */
		getCriteria(): FilterCriteria;
	}
}
