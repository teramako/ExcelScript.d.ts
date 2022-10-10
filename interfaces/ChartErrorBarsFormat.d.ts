declare namespace ExcelScript {
	/**
	 * グラフのエラー バーの書式プロパティをカプセル化します。
	 * @see [ExcelScript.ChartErrorBarsFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.charterrorbarsformat?view=office-scripts)
	 */
	export interface ChartErrorBarsFormat {
		/**
		 * グラフの線の書式設定を表します。
		 */
		getLine(): ChartLineFormat;
	}
}
