/// <reference path="./ConditionalFormatRule.d.ts" />
declare namespace ExcelScript {
	/**
	 * ユーザー設定の条件付き書式の種類を表します。
	 * @see [ExcelScript.CustomConditionalFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.customconditionalformat?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script applies a custom three-color conditional formatting to the selected range.
	 * // The three colors represent positive, negative, or no changes from the values in the previous column.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the selected cells.
	 *   let selectedRange = workbook.getSelectedRange();
	 *
	 *   // Apply a rule for positive change from the previous column.
	 *   let positiveChange = selectedRange.addConditionalFormat(ExcelScript.ConditionalFormatType.custom);
	 *   positiveChange.getCustom().getFormat().getFill().setColor("lightgreen");
	 *   positiveChange.getCustom().getRule().setFormula(`=${selectedRange.getCell(0, 0).getAddress()}>${selectedRange.getOffsetRange(0, -1).getCell(0, 0).getAddress()}`);
	 *
	 *   // Apply a rule for negative change from the previous column.
	 *   let negativeChange = selectedRange.addConditionalFormat(ExcelScript.ConditionalFormatType.custom);
	 *   negativeChange.getCustom().getFormat().getFill().setColor("pink");
	 *   negativeChange.getCustom().getRule().setFormula(`=${selectedRange.getCell(0, 0).getAddress()}<${selectedRange.getOffsetRange(0, -1).getCell(0, 0).getAddress()}`);
	 *
	 *   // Apply a rule for no change from the previous column.
	 *   let noChange = selectedRange.addConditionalFormat(ExcelScript.ConditionalFormatType.custom);
	 *   noChange.getCustom().getFormat().getFill().setColor("lightyellow");
	 *   noChange.getCustom().getRule().setFormula(`=${selectedRange.getCell(0, 0).getAddress()}=${selectedRange.getOffsetRange(0, -1).getCell(0, 0).getAddress()}`);
	 * }
	 * ```
	 */
	export interface CustomConditionalFormat {
		/**
		 * 条件付き書式のフォント、塗りつぶし、罫線、その他のプロパティをカプセル化する format オブジェクトを返します。
		 */
		getFormat(): ConditionalRangeFormat;
		/**
		 * この条件付き `Rule` 形式のオブジェクトを指定します。
		 */
		getRule(): ConditionalFormatRule;
	}
}
