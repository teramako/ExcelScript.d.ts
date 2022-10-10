declare namespace ExcelScript {
	/**
	 * グラフに凡例を表します。
	 * @see [ExcelScript.ChartLegend interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartlegend?view=office-scripts)
	 */
	export interface ChartLegend {
		/**
		 * 塗りつぶしとフォントの書式設定を含むグラフの凡例の書式設定を表します。
		 */
		getFormat(): ChartLegendFormat;
		/**
		 * グラフ上の凡例の高さをポイントで指定します。
		 * 値は `null` 、凡例が表示されない場合です。
		 */
		getHeight(): number;
		/**
		 * グラフ上の凡例の左の値をポイントで指定します。
		 * 値は `null` 、凡例が表示されない場合です。
		 */
		getLeft(): number;
		/**
		 * 凡例に含まれる凡例エントリのコレクションを表します。
		 */
		getLegendEntries(): ChartLegendEntry[];
		/**
		 * グラフの凡例がグラフの本体と重なっている必要がある場合に指定します。
		 */
		getOverlay(): boolean;
		/**
		 * グラフ上の凡例の位置を指定します。
		 * 詳細は「`ExcelScript.ChartLegendPosition`」をご覧ください。
		 */
		getPosition(): ChartLegendPosition;
		/**
		 * 凡例にグラフに影が付く場合を指定します。
		 */
		getShowShadow(): boolean;
		/**
		 * グラフの凡例の上部を指定します。
		 */
		getTop(): number;
		/**
		 * グラフの凡例が表示される場合に指定します。
		 */
		getVisible(): boolean;
		/**
		 * グラフ上の凡例の幅をポイント単位で指定します。
		 * 値は `null` 、凡例が表示されない場合です。
		 */
		getWidth(): number;
		/**
		 * グラフ上の凡例の高さをポイントで指定します。
		 * 値は `null` 、凡例が表示されない場合です。
		 * @param height
		 */
		setHeight(height: number): void;
		/**
		 * グラフ上の凡例の左の値をポイントで指定します。
		 * 値は `null` 、凡例が表示されない場合です。
		 * @param left
		 */
		setLeft(left: number): void;
		/**
		 * グラフの凡例がグラフの本体と重なっている必要がある場合に指定します。
		 * @param overlay
		 */
		setOverlay(overlay: boolean): void;
		/**
		 * グラフ上の凡例の位置を指定します。
		 * 詳細は「`ExcelScript.ChartLegendPosition`」をご覧ください。
		 * @param position
		 */
		setPosition(position: ChartLegendPosition): void;
		/**
		 * 凡例にグラフに影が付く場合を指定します。
		 * @param showShadow
		 */
		setShowShadow(showShadow: boolean): void;
		/**
		 * グラフの凡例の上部を指定します。
		 * @param top
		 */
		setTop(top: number): void;
		/**
		 * グラフの凡例が表示される場合に指定します。
		 * @param visible
		 */
		setVisible(visible: boolean): void;
		/**
		 * グラフ上の凡例の幅をポイント単位で指定します。
		 * 値は `null` 、凡例が表示されない場合です。
		 * @param width
		 */
		setWidth(width: number): void;
	}
}
