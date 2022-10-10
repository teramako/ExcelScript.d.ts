declare namespace ExcelScript {
	/**
	 * ブック リンクの更新モードを表します。
	 * @see [ExcelScript.WorkbookLinksRefreshMode enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.workbooklinksrefreshmode?view=office-scripts)
	 */
	export enum WorkbookLinksRefreshMode {
		/**
		 * ブックのリンクは、Excel アプリケーションによって決まる一定の間隔で更新されます。
		 */
		automatic,
		/**
		 * ブックのリンクは手動で更新されます。
		 */
		manual,
	}
}
