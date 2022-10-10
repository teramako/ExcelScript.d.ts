declare namespace ExcelScript {
	/**
	 * リスト データの検証条件を表します。
	 * @see [ExcelScript.ListDataValidation interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.listdatavalidation?view=office-scripts)
	 */
	export interface ListDataValidation {
		/**
		 * セル ドロップダウンにリストを表示するかどうかを指定します。
		 * 既定値は `true`.
		 */
		inCellDropDown: boolean;
		/**
		 * データ検証のリストのソース 値を設定すると、値をオブジェクトとして渡したり、コンマで区切られた数値、ブール値、または日付を含む文字列 `Range` を渡したりできます。
		 */
		source: string | Range;
	}
}
