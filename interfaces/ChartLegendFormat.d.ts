declare namespace ExcelScript {
	/**
	 * グラフの凡例の書式設定プロパティをカプセル化します。
	 * @see [ExcelScript.ChartLegendFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartlegendformat?view=office-scripts)
	 */
	export interface ChartLegendFormat {
		/**
		 * グラフの罫線の書式設定 (色、線のスタイル、線の太さなど) を表します。
		 */
		getBorder(): ChartBorder;
		/**
		 * 背景の書式設定情報を含む、オブジェクトの塗りつぶしの書式を表します。
		 */
		getFill(): ChartFill;
		/**
		 * グラフの凡例のフォント名、フォント サイズ、色などのフォント属性を表します。
		 */
		getFont(): ChartFont;
	}
}
