/// <reference path="./ConditionalCellValueRule.d.ts"/>
/// <reference path="./ConditionalRangeFormat.d.ts"/>
declare namespace ExcelScript {
	/**
	 * セル値の条件付き書式を表します。
	 * @see [ExcelScript.CellValueConditionalFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.cellvalueconditionalformat?view=office-scripts)
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
	 *   const cellValueConditionalFormatting : ExcelScript.CellValueConditionalFormat
	 *     = ratingColumn.addConditionalFormat(ExcelScript.ConditionalFormatType.cellValue).getCellValue();
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
	export interface CellValueConditionalFormat {
		/**
		 * 書式オブジェクトを返し、条件付き書式のフォント、塗りつぶし、罫線、およびその他のプロパティをカプセル化します。
		 */
		getFormat(): ConditionalRangeFormat;
		/**
		 * この条件付き形式のルール オブジェクトを指定します。
		 */
		getRule(): ConditionalCellValueRule;
		/**
		 * この条件付き形式のルール オブジェクトを指定します。
		 * @param rule
		 */
		setRule(rule: ConditionalCellValueRule): void;
	}
}
