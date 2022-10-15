declare namespace ExcelScript {
	/**
	 * テキストの条件付き書式の型の演算子を表します。
	 * @see [ExcelScript.ConditionalCellValueOperator enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionalcellvalueoperator?view=office-scripts)
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
	 *   // Set the format to apply when the condition is met.
	 *   let format = cellValueConditionalFormatting.getFormat();
	 *   format.getFill().setColor("yellow");
	 *   format.getFont().setItalic(true);
	 *
	 *   // Create the condition, in this case when the cell value is between 50 and 75.
	 *   let rule: ExcelScript.ConditionalCellValueRule = {
	 *     formula1: "50",
	 *     formula2: "75",
	 *     operator: ExcelScript.ConditionalCellValueOperator.between
	 *   };
	 *   cellValueConditionalFormatting.setRule(rule);
	 * }
	 * ```
	 */
	export enum ConditionalCellValueOperator {
		between,
		equalTo,
		greaterThan,
		greaterThanOrEqual,
		invalid,
		lessThan,
		lessThanOrEqual,
		notBetween,
		notEqualTo,
	}
}
