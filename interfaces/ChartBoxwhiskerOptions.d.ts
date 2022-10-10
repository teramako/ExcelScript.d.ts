declare namespace ExcelScript {
	/**
	 * ボックスグラフとひげグラフのプロパティを表します。
	 * @see [ExcelScript.ChartBoxwhiskerOptions interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartboxwhiskeroptions?view=office-scripts)
	 */
	export interface ChartBoxwhiskerOptions {
		/**
		 * ボックスグラフとひげグラフの四分位計算の種類を指定します。
		 */
		getQuartileCalculation(): ChartBoxQuartileCalculation;
		/**
		 * ボックスとひげグラフに内側の点を表示する場合に指定します。
		 */
		getShowInnerPoints(): boolean;
		/**
		 * 平均線をボックスとひげグラフに表示する場合に指定します。
		 */
		getShowMeanLine(): boolean;
		/**
		 * 平均マーカーをボックスとひげグラフに表示する場合に指定します。
		 */
		getShowMeanMarker(): boolean;
		/**
		 * ボックスとひげグラフに外れ値ポイントを表示する場合に指定します。
		 */
		getShowOutlierPoints(): boolean;
		/**
		 * ボックスグラフとひげグラフの四分位計算の種類を指定します。
		 * @param quartileCalculation
		 */
		setQuartileCalculation(
			quartileCalculation: ChartBoxQuartileCalculation,
		): void;
		/**
		 * ボックスとひげグラフに内側の点を表示する場合に指定します。
		 * @param showInnerPoints
		 */
		setShowInnerPoints(showInnerPoints: boolean): void;
		/**
		 * 平均線をボックスとひげグラフに表示する場合に指定します。
		 * @param showMeanLine
		 */
		setShowMeanLine(showMeanLine: boolean): void;
		/**
		 * 平均マーカーをボックスとひげグラフに表示する場合に指定します。
		 * @param showMeanMarker
		 */
		setShowMeanMarker(showMeanMarker: boolean): void;
		/**
		 * ボックスとひげグラフに外れ値ポイントを表示する場合に指定します。
		 * @param showOutlierPoints
		 */
		setShowOutlierPoints(showOutlierPoints: boolean): void;
	}
}
