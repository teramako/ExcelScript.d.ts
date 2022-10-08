declare namespace ExcelScript {
	/**
	 * データ検証エラー通知のスタイルを表します。
	 * 既定値は次の値です。 `Stop`.
	 * @see [ExcelScript.DataValidationAlertStyle enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.datavalidationalertstyle?view=office-scripts)
	 */
	export enum DataValidationAlertStyle {
		information,
		stop,
		warning
	}
}