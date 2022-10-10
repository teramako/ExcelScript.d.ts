declare namespace ExcelScript {
	/**
	 * グラフの目盛線の書式設定プロパティをカプセル化します。
	 * @see [ExcelScript.ChartGridlinesFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartgridlinesformat?view=office-scripts)
	 */
	export interface ChartGridlinesFormat {
		/**
		 * グラフの線の書式設定を表します。
		 */
		getLine(): ChartLineFormat;
	}
}
