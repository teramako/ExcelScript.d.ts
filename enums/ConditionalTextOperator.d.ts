declare namespace ExcelScript {
	/**
	 * テキストの条件付き書式の型の演算子を表します。
	 * @see [ExcelScript.ConditionalTextOperator enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionaltextoperator?view=office-scripts)
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
	 *   const textConditionFormat = firstColumn.addConditionalFormat(ExcelScript.ConditionalFormatType.containsText).getTextComparison();
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
	export enum ConditionalTextOperator {
		beginsWith,
		contains,
		endsWith,
		invalid,
		notContains,
	}
}
