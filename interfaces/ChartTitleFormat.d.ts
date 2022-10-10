declare namespace ExcelScript {
	/**
	 * グラフタイトルの書式設定オプションへのアクセスを提供します。
	 * @see [ExcelScript.ChartTitleFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.charttitleformat?view=office-scripts)
	 */
	export interface ChartTitleFormat {
		/**
		 * 色、線のスタイル、太さなど、グラフタイトルの罫線の形式を表します。
		 */
		getBorder(): ChartBorder;
		/**
		 * 背景の書式設定情報を含む、オブジェクトの塗りつぶしの書式を表します。
		 */
		getFill(): ChartFill;
		/**
		 * オブジェクトのフォント属性 (フォント名、フォント サイズ、色など) を表します。
		 */
		getFont(): ChartFont;
	}
}
