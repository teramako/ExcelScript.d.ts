declare namespace ExcelScript {
	/**
	 * グラフのデータ ラベルの書式設定プロパティをカプセル化します。
	 * @see [ExcelScript.ChartDataLabelFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartdatalabelformat?view=office-scripts)
	 */
	export interface ChartDataLabelFormat {
		/**
		 * グラフの罫線の書式設定 (色、線のスタイル、線の太さなど) を表します。
		 */
		getBorder(): ChartBorder;
		/**
		 * 現在のグラフのデータ ラベルの塗りつぶしの書式を表します。
		 */
		getFill(): ChartFill;
		/**
		 * グラフ データ ラベルのフォント属性 (フォント名、フォント サイズ、色など) を表します。
		 */
		getFont(): ChartFont;
	}
}
