declare namespace ExcelScript {
	/**
	 * グラフ系列から値を取得する場合のディメンションを表します。
	 * @see [ExcelScript.ChartSeriesDimension enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartseriesdimension?view=office-scripts)
	 */
	export enum ChartSeriesDimension {
		/**
		 * バブル グラフのバブル サイズのグラフ系列軸。
		 */
		bubbleSizes,
		/**
		 * カテゴリのグラフ系列軸。
		 */
		categories,
		/**
		 * 値のグラフ系列軸。
		 */
		values,
		/**
		 * 散布図とバブル グラフの x 軸値のグラフ系列軸。
		 */
		xvalues,
		/**
		 * 散布図とバブル グラフの y 軸値のグラフ系列軸。
		 */
		yvalues
	}
}