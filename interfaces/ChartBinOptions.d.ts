/// <reference path="../enums/ChartBinType.d.ts"/>
declare namespace ExcelScript {
	/**
	 * ヒストグラム図とパレート図のビンのオプションをカプセル化します。
	 * @see [ExcelScript.ChartBinOptions interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartbinoptions?view=office-scripts)
	 */
	export interface ChartBinOptions {
		/**
		 * ヒストグラム グラフまたはパレート グラフでビン オーバーフローが有効になっている場合に指定します。
		 */
		getAllowOverflow(): boolean;
		/**
		 * ヒストグラム グラフまたはパレート グラフでビンアンダーフローが有効になっている場合に指定します。
		 */
		getAllowUnderflow(): boolean;
		/**
		 * ヒストグラム グラフまたはパレート グラフのビン数を指定します。
		 */
		getCount(): number;
		/**
		 * ヒストグラム グラフまたはパレート グラフのビン オーバーフロー値を指定します。
		 */
		getOverflowValue(): number;
		/**
		 * ヒストグラム グラフまたはパレート グラフのビンの種類を指定します。
		 */
		getType(): ChartBinType;
		/**
		 * ヒストグラム グラフまたはパレート グラフのビンアンダーフロー値を指定します。
		 */
		getUnderflowValue(): number;
		/**
		 * ヒストグラム グラフまたはパレート グラフのビン幅の値を指定します。
		 */
		getWidth(): number;
		/**
		 * ヒストグラム グラフまたはパレート グラフでビン オーバーフローが有効になっている場合に指定します。
		 * @param allowOverflow
		 */
		setAllowOverflow(allowOverflow: boolean): void;
		/**
		 * ヒストグラム グラフまたはパレート グラフでビンアンダーフローが有効になっている場合に指定します。
		 * @param allowUnderflow
		 */
		setAllowUnderflow(allowUnderflow: boolean): void;
		/**
		 * ヒストグラム グラフまたはパレート グラフのビン数を指定します。
		 * @param count
		 */
		setCount(count: number): void;
		/**
		 * ヒストグラム グラフまたはパレート グラフのビン オーバーフロー値を指定します。
		 * @param overflowValue
		 */
		setOverflowValue(overflowValue: number): void;
		/**
		 * ヒストグラム グラフまたはパレート グラフのビンの種類を指定します。
		 * @param type
		 */
		setType(type: ChartBinType): void;
		/**
		 * ヒストグラム グラフまたはパレート グラフのビンアンダーフロー値を指定します。
		 * @param underflowValue
		 */
		setUnderflowValue(underflowValue: number): void;
		/**
		 * ヒストグラム グラフまたはパレート グラフのビン幅の値を指定します。
		 * @param width
		 */
		setWidth(width: number): void;
	}
}
