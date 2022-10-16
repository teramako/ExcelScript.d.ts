declare namespace ExcelScript {
	/**
	 * ブック リンクの更新モードを表します。
	 * @see [ExcelScript.WorkbookLinksRefreshMode enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.workbooklinksrefreshmode?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script refreshes all the links to external workbooks,
	 * // if the linked workbook refresh mode is set to manual.
	 * // To learn about linked workbooks, see https://support.microsoft.com/office/create-an-external-reference-link-to-a-cell-range-in-another-workbook-c98d1803-dd75-4668-ac6a-d7cca2a9b95f.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Check the refresh mode.
	 *   if (workbook.getLinkedWorkbookRefreshMode() === ExcelScript.WorkbookLinksRefreshMode.manual) {
	 *     console.log("Refreshing workbook links");
	 *
	 *     // Trigger a refresh of linked workbook content.
	 *     workbook.refreshAllLinksToLinkedWorkbooks();
	 *   }
	 * }
	 * ```
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
