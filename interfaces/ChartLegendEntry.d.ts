declare namespace ExcelScript {
	/**
	 * 内の凡例エントリを表します。 `legendEntryCollection`.
	 * @see [ExcelScript.ChartLegendEntry interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartlegendentry?view=office-scripts)
	 */
	export interface ChartLegendEntry {
		/**
		 * グラフの凡例の凡例エントリの高さを指定します。
		 */
		getHeight(): number;
		/**
		 * グラフ凡例の凡例エントリのインデックスを指定します。
		 */
		getIndex(): number;
		/**
		 * グラフの凡例エントリの左の値を指定します。
		 */
		getLeft(): number;
		/**
		 * グラフ凡例エントリの上部を指定します。
		 */
		getTop(): number;
		/**
		 * グラフの凡例エントリの表示を表します。
		 */
		getVisible(): boolean;
		/**
		 * グラフの凡例エントリの幅を表します。
		 */
		getWidth(): number;
		/**
		 * グラフの凡例エントリの表示を表します。
		 * @param visible
		 */
		setVisible(visible: boolean): void;
	}
}
