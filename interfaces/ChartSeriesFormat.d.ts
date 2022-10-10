declare namespace ExcelScript {
	/**
	 * グラフ系列の書式プロパティをカプセル化する
	 * @see [ExcelScript.ChartSeriesFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartseriesformat?view=office-scripts)
	 */
	export interface ChartSeriesFormat {
		/**
		 * 背景書式情報を含むグラフ系列の塗りつぶし形式を表します。
		 */
		getFill(): ChartFill;
		/**
		 * 線の書式設定を表します。
		 */
		getLine(): ChartLineFormat;
	}
}
