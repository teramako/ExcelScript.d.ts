declare namespace ExcelScript {
	/**
	 * オブジェクトやオブジェクトなど、テキストを含むグラフ関連オブジェクトの部分 `ChartTitle` 文字列を表 `ChartAxisTitle` します。
	 * @see [ExcelScript.ChartFormatString interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartformatstring?view=office-scripts)
	 */
	export interface ChartFormatString {
		/**
		 * グラフ文字オブジェクトのフォント名、フォント サイズ、色などのフォント属性を表します。
		 */
		getFont(): ChartFont;
	}
}
