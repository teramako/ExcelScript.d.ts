/// <reference path="../enums/ChartErrorBarsInclude.d.ts"/>
/// <reference path="../enums/ChartErrorBarsType.d.ts"/>
/// <reference path="./ChartErrorBarsFormat.d.ts"/>
declare namespace ExcelScript {
	/**
	 * このオブジェクトは、グラフのエラー バーの属性を表します。
	 * @see [ExcelScript.ChartErrorBars interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.charterrorbars?view=office-scripts)
	 */
	export interface ChartErrorBars {
		/**
		 * エラー バーに終了スタイル の上限が設定されている場合に指定します。
		 */
		getEndStyleCap(): boolean;
		/**
		 * 誤差範囲の書式の種類を指定します。
		 */
		getFormat(): ChartErrorBarsFormat;
		/**
		 * 誤差範囲のどの部分を含めるかを指定します。
		 */
		getInclude(): ChartErrorBarsInclude;
		/**
		 * 誤差範囲でマークされている範囲の種類。
		 */
		getType(): ChartErrorBarsType;
		/**
		 * エラー バーを表示するかどうかを指定します。
		 */
		getVisible(): boolean;
		/**
		 * エラー バーに終了スタイル の上限が設定されている場合に指定します。
		 * @param endStyleCap
		 */
		setEndStyleCap(endStyleCap: boolean): void;
		/**
		 * 誤差範囲のどの部分を含めるかを指定します。
		 * @param include
		 */
		setInclude(include: ChartErrorBarsInclude): void;
		/**
		 * 誤差範囲でマークされている範囲の種類。
		 * @param type
		 */
		setType(type: ChartErrorBarsType): void;
		/**
		 * エラー バーを表示するかどうかを指定します。
		 * @param visible
		 */
		setVisible(visible: boolean): void;
	}
}
