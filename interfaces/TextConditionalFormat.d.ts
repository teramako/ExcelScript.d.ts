/// <reference path="./ConditionalTextComparisonRule.d.ts" />
/// <reference path="./ConditionalRangeFormat.d.ts" />
declare namespace ExcelScript {
	/**
	 * 特定のテキストの条件付き書式を表します。
	 * @see [ExcelScript.TextConditionalFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.textconditionalformat?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script adds conditional formatting to the first column in the worksheet.
	 * // This formatting gives the cells a green fill if they have text starting with "Excel".
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the first column in the current worksheet.
	 *   const currentSheet = workbook.getActiveWorksheet();
	 *   const firstColumn = currentSheet.getRange("A:A");
	 *
	 *   // Add conditional formatting based on the text in the cells.
	 *   const textConditionFormat: ExcelScript.TextConditionalFormat =
	 *     firstColumn.addConditionalFormat(ExcelScript.ConditionalFormatType.containsText).getTextComparison();
	 *
	 *   // Set the conditional format to provide a green fill.
	 *   textConditionFormat.getFormat().getFill().setColor("green");
	 *
	 *   // Apply the condition rule that the text begins with "Excel".
	 *   const textRule: ExcelScript.ConditionalTextComparisonRule = {
	 *     operator: ExcelScript.ConditionalTextOperator.beginsWith,
	 *     text: "Excel"
	 *   };
	 *   textConditionFormat.setRule(textRule);
	 * }
	 * ```
	 */
	export interface TextConditionalFormat {
		/**
		 * 条件付き書式のフォント、塗りつぶし、罫線、およびその他のプロパティをカプセル化して、書式オブジェクトを返します。
		 */
		getFormat(): ConditionalRangeFormat;
		/**
		 * 条件付き書式のルール。
		 */
		getRule(): ConditionalTextComparisonRule;
		/**
		 * 条件付き書式のルール。
		 * @param rule
		 */
		setRule(rule: ConditionalTextComparisonRule): void;
	}
}
