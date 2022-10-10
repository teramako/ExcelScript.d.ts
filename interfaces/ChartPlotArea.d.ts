declare namespace ExcelScript {
	/**
	 * このオブジェクトは、グラフ プロット領域の属性を表します。
	 * @see [ExcelScript.ChartPlotArea interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartplotarea?view=office-scripts)
	 */
	export interface ChartPlotArea {
		/**
		 * グラフプロット領域の書式を指定します。
		 */
		getFormat(): ChartPlotAreaFormat;
		/**
		 * プロット領域の高さの値を指定します。
		 */
		getHeight(): number;
		/**
		 * プロット領域の内側の高さの値を指定します。
		 */
		getInsideHeight(): number;
		/**
		 * プロット領域の内側の左の値を指定します。
		 */
		getInsideLeft(): number;
		/**
		 * プロット領域の内側の上の値を指定します。
		 */
		getInsideTop(): number;
		/**
		 * プロット領域の内側の幅の値を指定します。
		 */
		getInsideWidth(): number;
		/**
		 * プロット領域の左の値を指定します。
		 */
		getLeft(): number;
		/**
		 * プロット領域の位置を指定します。
		 */
		getPosition(): ChartPlotAreaPosition;
		/**
		 * プロット領域の上の値を指定します。
		 */
		getTop(): number;
		/**
		 * プロット領域の幅の値を指定します。
		 */
		getWidth(): number;
		/**
		 * プロット領域の高さの値を指定します。
		 * @param height
		 */
		setHeight(height: number): void;
		/**
		 * プロット領域の内側の高さの値を指定します。
		 * @param insideHeight
		 */
		setInsideHeight(insideHeight: number): void;
		/**
		 * プロット領域の内側の左の値を指定します。
		 * @param insideLeft
		 */
		setInsideLeft(insideLeft: number): void;
		/**
		 * プロット領域の内側の上の値を指定します。
		 * @param insideTop
		 */
		setInsideTop(insideTop: number): void;
		/**
		 * プロット領域の内側の幅の値を指定します。
		 * @param insideWidth
		 */
		setInsideWidth(insideWidth: number): void;
		/**
		 * プロット領域の左の値を指定します。
		 * @param left
		 */
		setLeft(left: number): void;
		/**
		 * プロット領域の位置を指定します。
		 * @param position
		 */
		setPosition(position: ChartPlotAreaPosition): void;
		/**
		 * プロット領域の上の値を指定します。
		 * @param top
		 */
		setTop(top: number): void;
		/**
		 * プロット領域の幅の値を指定します。
		 * @param width
		 */
		setWidth(width: number): void;
	}
}
