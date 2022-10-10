declare namespace ExcelScript {
	/**
	 * グラフ プロット領域の書式プロパティを表します。
	 * @see [ExcelScript.ChartPlotAreaFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartplotareaformat?view=office-scripts)
	 */
	export interface ChartPlotAreaFormat {
		/**
		 * グラフプロット領域の罫線属性を指定します。
		 */
		getBorder(): ChartBorder;
		/**
		 * 背景の書式設定情報を含むオブジェクトの塗りつぶしの形式を指定します。
		 */
		getFill(): ChartFill;
	}
}
