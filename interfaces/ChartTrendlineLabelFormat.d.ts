declare namespace ExcelScript {
	/**
	 * グラフの傾向線ラベルの書式プロパティをカプセル化します。
	 * @see [ExcelScript.ChartTrendlineLabelFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.charttrendlinelabelformat?view=office-scripts)
	 */
	export interface ChartTrendlineLabelFormat {
		/**
		 * 色、線のスタイル、太さなど、罫線の形式を指定します。
		 */
		getBorder(): ChartBorder;
		/**
		 * 現在のグラフの傾向線ラベルの塗りつぶしの形式を指定します。
		 */
		getFill(): ChartFill;
		/**
		 * グラフの傾向線ラベルのフォント属性 (フォント名、フォント サイズ、色など) を指定します。
		 */
		getFont(): ChartFont;
	}
}
