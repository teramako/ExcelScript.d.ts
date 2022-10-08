declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.SpecialCellValueType enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.specialcellvaluetype?view=office-scripts)
	 */
	export enum SpecialCellValueType {
		/**
		 * エラー、ブール値、数値、または文字列値を持つセル。
		 */
		all,
		/**
		 * エラーがあるセル。
		 */
		errors,
		/**
		 * エラーまたはブール値を持つセル。
		 */
		errorsLogical,
		/**
		 * エラー、ブール値、または数値を持つセル。
		 */
		errorsLogicalNumber,
		/**
		 * エラー、ブール値、または文字列値を持つセル。
		 */
		errorsLogicalText,
		/**
		 * エラーまたは数値を持つセル。
		 */
		errorsNumbers,
		/**
		 * エラー、数値、または文字列値を持つセル。
		 */
		errorsNumberText,
		/**
		 * エラーまたは文字列値を持つセル。
		 */
		errorsText,
		/**
		 * ブール値を持つセル。
		 */
		logical,
		/**
		 * ブール値または数値を持つセル。
		 */
		logicalNumbers,
		/**
		 * ブール値、数値、または文字列値を持つセル。
		 */
		logicalNumbersText,
		/**
		 * ブール値または文字列値を持つセル。
		 */
		logicalText,
		/**
		 * 数値を持つセル。
		 */
		numbers,
		/**
		 * 数値または文字列値を持つセル。
		 */
		numbersText,
		/**
		 * 文字列値を持つセル。
		 */
		text
	}
}