/// <reference path="./ChartTrendlineFormat.d.ts"/>
/// <reference path="./ChartTrendlineLabel.d.ts"/>
declare namespace ExcelScript {
	/**
	 * このオブジェクトは、グラフの傾向線オブジェクトの属性を表します。
	 * @see [ExcelScript.ChartTrendline interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.charttrendline?view=office-scripts)
	 */
	export interface ChartTrendline {
		/**
		 * trendline オブジェクトを削除します。
		 */
		delete(): void;
		/**
		 * 近似曲線を後方へ拡張するときの区間数を表します。
		 */
		getBackwardPeriod(): number;
		/**
		 * グラフの近似曲線の書式設定を表します。
		 */
		getFormat(): ChartTrendlineFormat;
		/**
		 * 近似曲線を前方へ拡張するときの区間数を表します。
		 */
		getForwardPeriod(): number;
		/**
		 * 傾向線の切片の値を指定します。
		 */
		getIntercept(): number;
		/**
		 * グラフの近似曲線のラベルを表します。
		 */
		getLabel(): ChartTrendlineLabel;
		/**
		 * グラフの傾向線の期間を表します。
		 * タイプの傾向線にのみ適用されます。 `MovingAverage`.
		 */
		getMovingAveragePeriod(): number;
		/**
		 * 近似曲線の名前を表します。
		 * 文字列値に設定できます。値は `null` 自動値を表します。
		 * 戻り値は常に文字列です。
		 */
		getName(): string;
		/**
		 * グラフの傾向線の順序を表します。
		 * タイプの傾向線にのみ適用されます。 `Polynomial`.
		 */
		getPolynomialOrder(): number;
		/**
		 * true の場合、グラフに近似曲線の数式が表示されます。
		 */
		getShowEquation(): boolean;
		/**
		 * True の場合、トレンドラインの r-2 乗値がグラフに表示されます。
		 */
		getShowRSquared(): boolean;
		/**
		 * グラフの近似曲線の種類を表します。
		 */
		getType(): ChartTrendlineType;
		/**
		 * 近似曲線を後方へ拡張するときの区間数を表します。
		 * @param backwardPeriod
		 */
		setBackwardPeriod(backwardPeriod: number): void;
		/**
		 * 近似曲線を前方へ拡張するときの区間数を表します。
		 * @param forwardPeriod
		 */
		setForwardPeriod(forwardPeriod: number): void;
		/**
		 * 傾向線の切片の値を指定します。
		 * @param intercept
		 */
		setIntercept(intercept: number): void;
		/**
		 * グラフの傾向線の期間を表します。
		 * タイプの傾向線にのみ適用されます。 `MovingAverage`.
		 * @param movingAveragePeriod
		 */
		setMovingAveragePeriod(movingAveragePeriod: number): void;
		/**
		 * 近似曲線の名前を表します。
		 * 文字列値に設定できます。値は `null` 自動値を表します。
		 * 戻り値は常に文字列です。
		 * @param name
		 */
		setName(name: string): void;
		/**
		 * グラフの傾向線の順序を表します。
		 * タイプの傾向線にのみ適用されます。 `Polynomial`.
		 * @param polynomialOrder
		 */
		setPolynomialOrder(polynomialOrder: number): void;
		/**
		 * true の場合、グラフに近似曲線の数式が表示されます。
		 * @param showEquation
		 */
		setShowEquation(showEquation: boolean): void;
		/**
		 * True の場合、トレンドラインの r-2 乗値がグラフに表示されます。
		 * @param showRSquared
		 */
		setShowRSquared(showRSquared: boolean): void;
		/**
		 * グラフの近似曲線の種類を表します。
		 * @param type
		 */
		setType(type: ChartTrendlineType): void;
	}
}
