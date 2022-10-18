/// <reference path="../enums/DataValidationType.d.ts"/>
/// <reference path="./DataValidationErrorAlert.d.ts"/>
/// <reference path="./DataValidationPrompt.d.ts"/>
/// <reference path="./DataValidationRule.d.ts"/>
/// <reference path="./RangeAreas.d.ts"/>
declare namespace ExcelScript {
	/**
	 * 現在の範囲に適用されているデータ検証を表します。
	 * @see [ExcelScript.DataValidation interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.datavalidation?view=office-scripts)
	 */
	export interface DataValidation {
		/**
		 * 現在の範囲からデータの入力規則をクリアします。
		 */
		clear(): void;
		/**
		 * 無効なデータが入力された場合のエラー警告。
		 */
		getErrorAlert(): DataValidationErrorAlert;
		/**
		 * 空白セルに対してデータ検証を実行するかどうかを指定します。
		 * 既定値は `true` です.
		 */
		getIgnoreBlanks(): boolean;
		/**
		 * 無効なセル値を `RangeAreas` 持つ 1 つ以上の四角形の範囲を含むオブジェクトを返します。
		 * すべてのセル値が有効な場合、このメソッドは返されます `null`.
		 */
		getInvalidCells(): RangeAreas;
		/**
		 * ユーザーがセルを選択したときにプロンプトが表示されます。
		 */
		getPrompt(): DataValidationPrompt;
		/**
		 * さまざまな種類のデータ検証条件を含むデータ検証ルール。
		 */
		getRule(): DataValidationRule;
		/**
		 * データ検証の種類
		 * @see ExcelScript.DataValidationType
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
		 *    // Log the data validation type.
		 *    // If the range has a single value, it logs that type.
		 *    // If the range doesn't have data validation applied, it logs "None".
		 *    // If the range has multiple different types of data validation, it logs "Inconsistent" or "MixedCriteria".
		 *   console.log(validationType.toString());
		 * }
		 * ```
		 */
		getType(): DataValidationType;
		/**
		 * すべてのセルの値がデータの入力規則に従っているかどうかを表します。
		 * `true` すべてのセル値が有効な場合、または`false`すべてのセル値が無効な場合に返されます。
		 * 範囲内に null 有効なセル値と無効なセル値の両方がある場合に返されます。
		 */
		getValid(): boolean;
		/**
		 * 無効なデータが入力された場合のエラー警告。
		 * @param errorAlert
		 */
		setErrorAlert(errorAlert: DataValidationErrorAlert): void;
		/**
		 * 空白セルに対してデータ検証を実行するかどうかを指定します。
		 * 既定値は `true` です.
		 * @param ignoreBlanks
		 */
		setIgnoreBlanks(ignoreBlanks: boolean): void;
		/**
		 * ユーザーがセルを選択したときにプロンプトが表示されます。
		 * @param prompt
		 */
		setPrompt(prompt: DataValidationPrompt): void;
		/**
		 * さまざまな種類のデータ検証条件を含むデータ検証ルール。
		 * @param rule
		 */
		setRule(rule: DataValidationRule): void;
	}
}
