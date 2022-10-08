declare namespace ExcelScript {
	/**
	 * スライサーの並べ替え動作を指定します。 `Slicer.sortBy`.
	 * @see [ExcelScript.SlicerSortType enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.slicersorttype?view=office-scripts)
	 */
	export enum SlicerSortType {
		/**
		 * スライサー アイテムをアイテムキャプションで昇順に並べ替えます。
		 */
		ascending,
		/**
		 * データ ソースによって提供される順序でスライサー アイテムを並べ替える。
		 */
		dataSourceOrder,
		/**
		 * スライサー アイテムを項目のキャプションで降順に並べ替える。
		 */
		descending
	}
}