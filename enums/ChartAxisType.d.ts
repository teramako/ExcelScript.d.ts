declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.ChartAxisType enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartaxistype?view=office-scripts)
	 */
	export enum ChartAxisType {
		/**
		 * 軸は項目を表示します。
		 */
		category,
		invalid,
		/**
		 * 軸はデータ系列を表示します。
		 */
		series,
		/**
		 * 軸は値を表示します。
		 */
		value,
	}
}
