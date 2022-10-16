declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.SpecialCellType enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.specialcelltype?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script finds and highlights all the cells in the current worksheet that contain a formula.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the used range on the current sheet.
	 *   const currentSheet = workbook.getActiveWorksheet();
	 *   const usedRange = currentSheet.getUsedRange();
	 *
	 *   // Get the RangeAreas object for each cell with a formula.
	 *   const formulaCells = usedRange.getSpecialCells(ExcelScript.SpecialCellType.formulas);
	 *
	 *   // Add a light blue background to the cells containing formulas.
	 *   formulaCells.getFormat().getFill().setColor("#ADD8E6");
	 * }
	 * ```
	 */
	export enum SpecialCellType {
		/**
		 * コンテンツがないセル。
		 */
		blanks,
		/**
		 * 条件付き書式を持つすべてのセル。
		 */
		conditionalFormats,
		/**
		 * 定数が含まれているセル
		 */
		constants,
		/**
		 * 検証条件を持つセル。
		 */
		dataValidations,
		/**
		 * 数式が含まれているセル
		 */
		formulas,
		/**
		 * セル範囲の最初のセルと同じ条件付き書式を持つセル。
		 */
		sameConditionalFormat,
		/**
		 * 範囲内の最初のセルと同じデータ検証条件を持つセル。
		 */
		sameDataValidation,
		/**
		 * 表示されるセル。
		 */
		visible,
	}
}
