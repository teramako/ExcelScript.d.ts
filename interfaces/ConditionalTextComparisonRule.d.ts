/// <reference path="../enums/ConditionalTextOperator.d.ts" />
declare namespace ExcelScript {
	/**
	 * セル値の条件付き書式ルールを表します。
	 * @see [ExcelScript.ConditionalTextComparisonRule interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionaltextcomparisonrule?view=office-scripts)
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
	 *   const textConditionFormat =
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
	export interface ConditionalTextComparisonRule {
		/**
		 * テキストの条件付き書式の演算子。
		 */
		operator: ConditionalTextOperator;
		/**
		 * 条件付き書式のテキスト値。
		 */
		text: string;
	}
}
