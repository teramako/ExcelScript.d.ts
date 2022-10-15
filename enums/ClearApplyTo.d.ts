declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.ClearApplyTo enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.clearapplyto?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script removes any extra formatting that's been applied to a table.
	 * // This leaves only the base table style effects.
	 * // Any formatting outside of the table will be left as is.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the first table on the current worksheet.
	 *   let worksheet = workbook.getActiveWorksheet();
	 *   let table = worksheet.getTables()[0];
	 *
	 *   // Get the range used by the table.
	 *   let range = table.getRange();
	 *
	 *   // Clear all the formatting that is not applied by the table and the table style.
	 *   range.clear(ExcelScript.ClearApplyTo.formats);
	 * }
	 * ```
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
