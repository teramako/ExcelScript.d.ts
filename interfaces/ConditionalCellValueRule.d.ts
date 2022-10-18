/// <reference path="../enums/ConditionalCellValueOperator.d.ts"/>
declare namespace ExcelScript {
	/**
	 * セル値の条件付き書式ルールを表します。
	 * @see [ExcelScript.ConditionalCellValueRule interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionalcellvaluerule?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script applies conditional formatting to a range.
	 * // That formatting is conditional upon the cell's numerical value.
	 * // Any value between 50 and 75 will have the cell fill color changed and the font made italic.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the range to format.
	 *   const sheet = workbook.getActiveWorksheet();
	 *   const ratingColumn = sheet.getRange("D2:D20");
	 *
	 *   // Add cell value conditional formatting.
	 *   const cellValueConditionalFormatting =
	 *     ratingColumn.addConditionalFormat(ExcelScript.ConditionalFormatType.cellValue).getCellValue();
	 *
	 *   // Create the condition, in this case when the cell value is between 50 and 75.
	 *   let rule: ExcelScript.ConditionalCellValueRule = {
	 *     formula1: "50",
	 *     formula2: "75",
	 *     operator: ExcelScript.ConditionalCellValueOperator.between
	 *   };
	 *   cellValueConditionalFormatting.setRule(rule);
	 *
	 *   // Set the format to apply when the condition is met.
	 *   let format = cellValueConditionalFormatting.getFormat();
	 *   format.getFill().setColor("yellow");
	 *   format.getFont().setItalic(true);
	 * }
	 * ```
	 */
	export interface ConditionalCellValueRule {
		/**
		 * 必要に応じて、条件付き書式規則を評価する数式。
		 */
		formula1: string;
		/**
		 * 必要に応じて、条件付き書式規則を評価する数式。
		 */
		formula2: string;
		/**
		 * セル値の条件付き書式の演算子。
		 */
		operator: ConditionalCellValueOperator;
	}
}
