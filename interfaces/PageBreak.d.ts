declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.PageBreak interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.pagebreak?view=office-scripts)
	 */
	export interface PageBreak {
		/**
		 * 改ページ オブジェクトを削除します。
		 */
		delete(): void;
		/**
		 * 改ページの後の最初のセルを取得します。
		 */
		getCellAfterBreak(): Range;
		/**
		 * ページブレークの列インデックスを指定します。
		 */
		getColumnIndex(): number;
	}
}
