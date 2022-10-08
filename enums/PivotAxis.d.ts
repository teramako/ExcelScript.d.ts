declare namespace ExcelScript {
	/**
	 * PivotItems を取得する軸を表します。
	 * @see [ExcelScript.PivotAxis enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.pivotaxis?view=office-scripts)
	 */
	export enum PivotAxis {
		/**
		 * 列軸。
		 */
		column,
		/**
		 * データ軸。
		 */
		data,
		/**
		 * フィルター軸。
		 */
		filter,
		/**
		 * 行軸。
		 */
		row,
		/**
		 * 軸または領域が不明またはサポートされていません。
		 */
		unknown
	}
}