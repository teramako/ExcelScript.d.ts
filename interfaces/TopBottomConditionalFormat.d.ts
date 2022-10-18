/// <reference path="./ConditionalTopBottomRule.d.ts" />
/// <reference path="./ConditionalRangeFormat.d.ts" />
declare namespace ExcelScript {
	/**
	 * 上/下の条件付き書式を表します。
	 * @see [ExcelScript.TopBottomConditionalFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.topbottomconditionalformat?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This sample applies conditional formatting to the currently used range in the worksheet.
	 * // The conditional formatting is a green fill for the top 10% of values.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the current worksheet.
	 *   let selectedSheet = workbook.getActiveWorksheet();
	 *
	 *   // Get the used range in the worksheet.
	 *   let range = selectedSheet.getUsedRange();
	 *
	 *   // Set the fill color to green for the top 10% of values in the range.
	 *   let conditionalFormat = range.addConditionalFormat(ExcelScript.ConditionalFormatType.topBottom)
	 *   conditionalFormat.getTopBottom().getFormat().getFill().setColor("green");
	 *   conditionalFormat.getTopBottom().setRule({
	 *     rank: 10, // The percentage threshold.
	 *     type: ExcelScript.ConditionalTopBottomCriterionType.topPercent // The type of the top/bottom condition.
	 *   });
	 * }
	 * ```
	 */
	export interface TopBottomConditionalFormat {
		/**
		 * 条件付き書式のフォント、塗りつぶし、罫線、その他のプロパティをカプセル化する format オブジェクトを返します。
		 */
		getFormat(): ConditionalRangeFormat;
		/**
		 * 上/下の条件付き書式の条件。
		 */
		getRule(): ConditionalTopBottomRule;
		/**
		 * 上/下の条件付き書式の条件。
		 * @param rule
		 */
		setRule(rule: ConditionalTopBottomRule): void;
	}
}
