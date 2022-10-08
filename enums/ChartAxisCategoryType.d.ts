declare namespace ExcelScript {
	/**
	 * 項目軸の種類を指定します。
	 * @see [ExcelScript.ChartAxisCategoryType enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartaxiscategorytype?view=office-scripts)
	 */
	export enum ChartAxisCategoryType {
		/**
		 * Excel が軸の種類を制御します。
		 */
		automatic,
		/**
		 * 軸は時系列軸上でデータをグループ化します。
		 */
		dateAxis,
		/**
		 * 軸は項目の任意のセットによってデータをグループ化します。
		 */
		textAxis
	}
}