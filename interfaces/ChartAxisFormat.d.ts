/// <reference path="./ChartLineFormat.d.ts"/>
declare namespace ExcelScript {
	/**
	 * グラフ軸の書式設定プロパティをカプセル化します。
	 * @see [ExcelScript.ChartAxisFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartaxisformat?view=office-scripts)
	 */
	export interface ChartAxisFormat {
		/**
		 * グラフの塗りつぶしの書式設定を指定します。
		 */
		getFill(): ChartFill;
		/**
		 * グラフ軸要素のフォント属性 (フォント名、フォント サイズ、色など) を指定します。
		 */
		getFont(): ChartFont;
		/**
		 * グラフの線の書式設定を指定します。
		 */
		getLine(): ChartLineFormat;
	}
}
