declare namespace ExcelScript {
	/**
	 * 使用する検索条件を表します。
	 * @see [ExcelScript.SearchCriteria interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.searchcriteria?view=office-scripts)
	 */
	export interface SearchCriteria {
		/**
		 * 一致が完了する必要がある場合と部分的に行う必要がある場合に指定します。
		 * 完全一致は、セルの内容全体と一致します。
		 * 部分的な一致は、セルのコンテンツ内の部分文字列と一致します (部分的に一致し `cat` `caterpillar`、`scatter`). 既定値は `false` (部分) です。
		 */
		completeMatch?: boolean;
		/**
		 * 一致で大文字と小文字が区別される場合を指定します。
		 * 既定値は `false` (大文字と小文字を区別しない) です。
		 */
		matchCase?: boolean;
		/**
		 * 検索の方向を指定します。 既定値は前方向です。
		 * @see ExcelScript.SearchDirection.
		 */
		searchDirection?: SearchDirection;
	}
}