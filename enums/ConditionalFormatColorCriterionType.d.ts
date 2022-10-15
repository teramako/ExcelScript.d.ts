declare namespace ExcelScript {
	/**
	 * 条件付き書式の色基準の種類を表します。
	 * @see [ExcelScript.ConditionalFormatColorCriterionType enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionalformatcolorcriteriontype?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script applies a red, white, and blue color scale to the selected range.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the selected range.
	 *   let selectedRange = workbook.getSelectedRange();
	 *
	 *   // Create a new conditional formatting object by adding one to the range.
	 *   let conditionalFormatting = selectedRange.addConditionalFormat(ExcelScript.ConditionalFormatType.colorScale);
	 *
	 *   // Set the colors for the three parts of the scale: minimum, midpoint, and maximum.
	 *   conditionalFormatting.getColorScale().setCriteria({
	 *     minimum: {
	 *       color:"#F8696B", // A pale red.
	 *       type:ExcelScript.ConditionalFormatColorCriterionType.lowestValue
	 *     },
	 *     midpoint: {
	 *       color: "#FCFCFF", // Slightly off-white.
	 *       formula:'=50',type:ExcelScript.ConditionalFormatColorCriterionType.percentile
	 *     },
	 *     maximum: {
	 *       color: "#5A8AC6", // A pale blue.
	 *       type:ExcelScript.ConditionalFormatColorCriterionType.highestValue
	 *     }
	 *   });
	 * }
	 * ```
	 */
	export enum ConditionalFormatColorCriterionType {
		formula,
		highestValue,
		invalid,
		lowestValue,
		number,
		percent,
		percentile,
	}
}
