declare namespace ExcelScript {
	/**
	 * グラフ軸のタイトルの書式設定を表します。
	 * @see [ExcelScript.ChartAxisTitleFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartaxistitleformat?view=office-scripts)
	 */
	export interface ChartAxisTitleFormat {
		/**
		 * 色、線のスタイル、太さなど、グラフ軸のタイトルの罫線の形式を指定します。
		 */
		getBorder(): ChartBorder;
		/**
		 * グラフ軸のタイトルの塗りつぶしの書式設定を指定します。
		 */
		getFill(): ChartFill;
		/**
		 * グラフ軸タイトル オブジェクトのグラフ軸タイトルのフォント属性 (フォント名、フォント サイズ、色など) を指定します。
		 */
		getFont(): ChartFont;
	}
}
