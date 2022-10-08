declare namespace ExcelScript {
	/**
	 * 並べ替え方向を表します。
	 * @see [ExcelScript.SortBy enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.sortby?view=office-scripts)
	 */
	export enum SortBy {
		/**
		 * 昇順の並べ替え。 最小から最大、または A から Z。
		 */
		ascending,
		/**
		 * 降順の並べ替え。 最大から最小、または Z から A。
		 */
		descending
	}
}