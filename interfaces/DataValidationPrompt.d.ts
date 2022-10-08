declare namespace ExcelScript {
	/**
	 * データ検証のユーザー プロンプト プロパティを表します。
	 * @see [ExcelScript.DataValidationPrompt interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.datavalidationprompt?view=office-scripts)
	 */
	export interface DataValidationPrompt {
		/**
		 * プロンプトのメッセージを指定します。
		 */
		message: string;
		/**
		 * ユーザーがデータ検証を使用してセルを選択するときにプロンプトを表示する場合に指定します。
		 */
		showPrompt: boolean;
		/**
		 * プロンプトのタイトルを指定します。
		 */
		title: string;
	}
}