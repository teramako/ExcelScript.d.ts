declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.HeaderFooterState enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.headerfooterstate?view=office-scripts)
	 */
	export enum HeaderFooterState {
		/**
		 * 印刷されるページには、一般的なヘッダー/フッターが 1 つしか使用されません。
		 */
		default,
		/**
		 * 別の最初のページヘッダー/フッターと、他のすべてのページに使用される一般的なヘッダー/フッターがあります。
		 */
		firstAndDefault,
		/**
		 * 別の最初のページヘッダー/フッターがあります。その後、奇数ページと偶数ページ用の個別のヘッダー/フッターがあります。
		 */
		firstOddAndEven,
		/**
		 * 奇数ページと偶数ページには異なるヘッダー/フッターがあります。
		 */
		oddAndEven
	}
}