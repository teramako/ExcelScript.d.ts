/// <reference path="../enums/AggregationFunction.d.ts"/>
/// <reference path="./PivotField.d.ts"/>
/// <reference path="./ShowAsRule.d.ts"/>
declare namespace ExcelScript {
	/**
	 * Excel DataPivotHierarchy を表します。
	 * @see [ExcelScript.DataPivotHierarchy interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.datapivothierarchy?view=office-scripts)
	 */
	export interface DataPivotHierarchy {
		/**
		 * DataPivotHierarchy に関連付けられているピボット フィールドを返します。
		 */
		getField(): PivotField;
		/**
		 * DataPivotHierarchy の ID。
		 */
		getId(): string;
		/**
		 * DataPivotHierarchy の名前。
		 */
		getName(): string;
		/**
		 * DataPivotHierarchy の数値形式。
		 */
		getNumberFormat(): string;
		/**
		 * DataPivotHierarchy の位置。
		 */
		getPosition(): number;
		/**
		 * データを特定の集計計算として表示するかどうかを指定します。
		 */
		getShowAs(): ShowAsRule;
		/**
		 * DataPivotHierarchy のすべての項目を表示するかどうかを指定します。
		 */
		getSummarizeBy(): AggregationFunction;
		/**
		 * DataPivotHierarchy の名前。
		 * @param name
		 */
		setName(name: string): void;
		/**
		 * DataPivotHierarchy の数値形式。
		 * @param numberFormat
		 */
		setNumberFormat(numberFormat: string): void;
		/**
		 * DataPivotHierarchy の位置。
		 * @param position
		 */
		setPosition(position: number): void;
		/**
		 * データを特定の集計計算として表示するかどうかを指定します。
		 * @param showAs
		 */
		setShowAs(showAs: ShowAsRule): void;
		/**
		 * DataPivotHierarchy のすべての項目を表示するかどうかを指定します。
		 * @param summarizeBy
		 *
		 * @example
		 * ```
		 * // This script changes how the data in a PivotTable is aggregated.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the first PivotTable in the workbook.
		 *   const pivotTable = workbook.getPivotTables()[0];
		 *
		 *   // Set the first data hierarchy to summarize with an average value, instead of a sum.
		 *   const dataHierarchy = pivotTable.getDataHierarchies()[0];
		 *   dataHierarchy.setSummarizeBy(ExcelScript.AggregationFunction.average);
		 * }
		 * ```
		 */
		setSummarizeBy(summarizeBy: AggregationFunction): void;
		/**
		 * DataPivotHierarchy を既定値にリセットします。
		 */
		setToDefault(): void;
	}
}
