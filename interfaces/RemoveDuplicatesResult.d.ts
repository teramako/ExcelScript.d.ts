declare namespace ExcelScript {
	/**
	 * 結果を表します。 `Range.removeDuplicates`.
	 * @see [ExcelScript.RemoveDuplicatesResult interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.removeduplicatesresult?view=office-scripts)
	 */
	export interface RemoveDuplicatesResult {
		/**
		 * 操作によって削除された重複行の数。
		 */
		getRemoved(): number;
		/**
		 * 結果として生じた範囲に存在する残りの一意の行の数。
		 */
		getUniqueRemaining(): number;
	}
}
