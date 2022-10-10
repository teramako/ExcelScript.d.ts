declare namespace ExcelScript {
	/**
	 * グラフの傾向線の書式プロパティを表します。
	 * @see [ExcelScript.ChartTrendlineFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.charttrendlineformat?view=office-scripts)
	 */
	export interface ChartTrendlineFormat {
		/**
		 * グラフの線の書式設定を表します。
		 */
		getLine(): ChartLineFormat;
	}
}
