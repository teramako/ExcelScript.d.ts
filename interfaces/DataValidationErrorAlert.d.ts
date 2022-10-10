/// <reference path="../enums/DataValidationAlertStyle.d.ts"/>
declare namespace ExcelScript {
	/**
	 * データ検証のエラー通知プロパティを表します。
	 * @see [ExcelScript.DataValidationErrorAlert interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.datavalidationerroralert?view=office-scripts)
	 */
	export interface DataValidationErrorAlert {
		/**
		 * エラー通知メッセージを表します。
		 */
		message: string;
		/**
		 * ユーザーが無効なデータを入力した場合にエラー通知ダイアログを表示するかどうかを指定します。
		 * 既定値は `true`.
		 */
		showAlert: boolean;
		/**
		 * データ検証アラートの種類については、「`ExcelScript.DataValidationAlertStyle`」を参照してください。
		 */
		style: DataValidationAlertStyle;
		/**
		 * エラー通知ダイアログのタイトルを表します。
		 */
		title: string;
	}
}
