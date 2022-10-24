declare namespace ExcelScript {
	/**
	 * データ検証の種類の列挙型を表します。
	 * @see [ExcelScript.DataValidationType enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.datavalidationtype?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This sample reads and logs the data validation type of the currently selected range.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the currently selected range.
	 *   let range = workbook.getSelectedRange();
	 *
	 *   // Get the type (`DataValidationType`) of data validation applied to the range.
	 *   let validationType = range.getDataValidation().getType();
	 *
	 *   // Log the data validation type.
	 *   // If the range has a single value, it logs that type.
	 *   // If the range doesn't have data validation applied, it logs "None".
	 *   // If the range has multiple different types of data validation, it logs "Inconsistent" or "MixedCriteria".
	 *   console.log(validationType.toString());
	 * }
	 * ```
	 */
	export enum DataValidationType {
		/**
		 * カスタム データ検証の種類。
		 */
		custom,
		/**
		 * 日付データ検証の種類。
		 */
		date,
		/**
		 * 10 進データ検証の種類。
		 */
		decimal,
		/**
		 * 不整合は、範囲のデータ検証が矛盾し、異なるセルに異なるルールが存在する場合を示します。
		 */
		inconsistent,
		/**
		 * リスト データ検証の種類。
		 */
		list,
		/**
		 * 条件が混在している場合は、一部のセルにデータ検証が存在しますが、一部のセルには存在しません。
		 */
		mixedCriteria,
		/**
		 * None は、範囲内にデータ検証が存在しないことを示す任意の値を許可します。
		 */
		none,
		/**
		 * テキストの長さデータ検証の種類。
		 */
		textLength,
		/**
		 * 時間データ検証の種類。
		 */
		time,
		/**
		 * 数値のデータ検証の種類です。
		 */
		wholeNumber,
	}
}
