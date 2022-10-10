declare namespace ExcelScript {
	/**
	 * データ検証ルールには、さまざまな種類のデータ検証が含まれる。
	 * 一度に 1 つのみ使用できます。 `ExcelScript.DataValidationType`.
	 * @see [ExcelScript.DataValidationRule interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.datavalidationrule?view=office-scripts)
	 */
	export interface DataValidationRule {
		/**
		 * データ検証条件のカスタム数式。
		 */
		custom?: CustomDataValidation;
		/**
		 * 日付のデータ検証条件。
		 */
		date?: DateTimeDataValidation;
		/**
		 * 10 進数のデータ検証条件。
		 */
		decimal?: BasicDataValidation;
		/**
		 * リストのデータ検証条件。
		 */
		list?: ListDataValidation;
		/**
		 * テキストの長さデータの検証条件。
		 */
		textLength?: BasicDataValidation;
		/**
		 * 時刻のデータ検証条件。
		 */
		time?: DateTimeDataValidation;
		/**
		 * 数値データの検証条件。
		 */
		wholeNumber?: BasicDataValidation;
	}
}
