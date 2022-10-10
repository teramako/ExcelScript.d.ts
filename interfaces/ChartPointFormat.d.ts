declare namespace ExcelScript {
	/**
	 * グラフ ポイントの書式設定オブジェクトを表します。
	 * @see [ExcelScript.ChartPointFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartpointformat?view=office-scripts)
	 */
	export interface ChartPointFormat {
		/**
		 * 色、スタイル、および重み情報を含むグラフ データ ポイントの罫線の形式を表します。
		 */
		getBorder(): ChartBorder;
		/**
		 * 背景の書式設定情報を含むグラフの塗りつぶしの形式を表します。
		 */
		getFill(): ChartFill;
	}
}
