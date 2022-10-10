declare namespace ExcelScript {
	/**
	 * ページ レイアウト余白のオプションを表します。
	 * @see [ExcelScript.PageLayoutMarginOptions interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.pagelayoutmarginoptions?view=office-scripts)
	 */
	export interface PageLayoutMarginOptions {
		/**
		 * 印刷に使用する単位でページ レイアウトの下部余白を指定します。
		 */
		bottom?: number;
		/**
		 * 印刷に使用する単位のページ レイアウト フッター余白を指定します。
		 */
		footer?: number;
		/**
		 * 印刷に使用する単位のページ レイアウト ヘッダー余白を指定します。
		 */
		header?: number;
		/**
		 * 印刷に使用する単位のページ レイアウト左余白を指定します。
		 */
		left?: number;
		/**
		 * 印刷に使用する単位のページ レイアウト右余白を指定します。
		 */
		right?: number;
		/**
		 * 印刷に使用する単位でページ レイアウトの上余白を指定します。
		 */
		top?: number;
	}
}
