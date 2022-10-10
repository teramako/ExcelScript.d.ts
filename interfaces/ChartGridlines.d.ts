/// <reference path="./ChartGridlinesFormat.d.ts"/>
declare namespace ExcelScript {
	/**
	 * グラフの軸の目盛線または補助目盛線を表します。
	 * @see [ExcelScript.ChartGridlines interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartgridlines?view=office-scripts)
	 */
	export interface ChartGridlines {
		/**
		 * グラフの目盛線の書式設定を表します。
		 */
		getFormat(): ChartGridlinesFormat;
		/**
		 * 軸のグリッド線が表示される場合に指定します。
		 */
		getVisible(): boolean;
		/**
		 * 軸のグリッド線が表示される場合に指定します。
		 * @param visible
		 */
		setVisible(visible: boolean): void;
	}
}
