declare namespace ExcelScript {
	/**
	 * エラー バーの範囲の種類を表します。
	 * @see [ExcelScript.ChartErrorBarsType enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.charterrorbarstype?view=office-scripts)
	 */
	export enum ChartErrorBarsType {
		custom,
		fixedValue,
		percent,
		stDev,
		stError
	}
}