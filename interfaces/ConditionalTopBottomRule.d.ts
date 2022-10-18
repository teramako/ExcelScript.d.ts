/// <reference path="../enums/ConditionalTopBottomCriterionType.d.ts" />
declare namespace ExcelScript {
	/**
	 * 上/下の条件付き書式のルールを表します。
	 * @see [ExcelScript.ConditionalTopBottomRule interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionaltopbottomrule?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This sample applies conditional formatting to the currently used range in the worksheet.
	 * // The conditional formatting is a pink fill for the 5 lowest values.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the current worksheet.
	 *   let selectedSheet = workbook.getActiveWorksheet();
	 *
	 *   // Get the used range in the worksheet.
	 *   let range = selectedSheet.getUsedRange();
	 *
	 *   // Set the fill color to pink for the lowest 5 values in the range.
	 *   let conditionalFormat = range.addConditionalFormat(ExcelScript.ConditionalFormatType.topBottom)
	 *   conditionalFormat.getTopBottom().getFormat().getFill().setColor("pink");
	 *   conditionalFormat.getTopBottom().setRule({
	 *     rank: 5, // The numerical threshold.
	 *     type: ExcelScript.ConditionalTopBottomCriterionType.bottomItems // The type of the top/bottom condition.
	 *   });
	 * }
	 * ```
	 */
	export interface ConditionalTopBottomRule {
		/**
		 * 数値のランクに対する 1 から 1000、またはパーセントのランクに対する 1 から 100 のランク。
		 */
		rank: number;
		/**
		 * 上または下のランクに基づいて値を書式設定します。
		 */
		type: ConditionalTopBottomCriterionType;
	}
}
