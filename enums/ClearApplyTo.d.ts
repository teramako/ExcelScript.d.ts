declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.ClearApplyTo enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.clearapplyto?view=office-scripts)
	 */
	export enum ClearApplyTo {
		all,
		/**
		 * 範囲の内容をクリアします。
		 */
		contents,
		/**
		 * 範囲のすべての書式をクリアします。
		 */
		formats,
		/**
		 * すべてのハイパーリンクをクリアしますが、すべてのコンテンツと書式設定はそのままにします。
		 */
		hyperlinks,
		/**
		 * セルのハイパーリンクと書式を削除しますが、コンテンツ、条件付き書式、およびデータ検証はそのまま残ります。
		 */
		removeHyperlinks,
	}
}
