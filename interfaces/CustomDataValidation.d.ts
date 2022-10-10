declare namespace ExcelScript {
	/**
	 * ユーザー設定のデータ検証条件を表します。
	 * @see [ExcelScript.CustomDataValidation interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.customdatavalidation?view=office-scripts)
	 */
	export interface CustomDataValidation {
		/**
		 * ユーザーの入力規則のカスタム数式。
		 * これにより、重複を防止したり、セル範囲の合計を制限したりなど、特別な入力ルールが作成されます。
		 */
		formula: string;
	}
}
