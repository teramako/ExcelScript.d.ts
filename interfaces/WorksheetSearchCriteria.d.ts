declare namespace ExcelScript {
	/**
	 * 使用するワークシートの検索条件を表します。
	 * @see [ExcelScript.WorksheetSearchCriteria interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.worksheetsearchcriteria?view=office-scripts)
	 */
	export interface WorksheetSearchCriteria {
		/**
		 * 一致が完了する必要がある場合と部分的に行う必要がある場合に指定します。
		 * 完全一致は、セルの内容全体と一致します。
		 * 部分的な一致は、セルのコンテンツ内の部分文字列と一致します (`cat`で`caterpillar`、`scatter`が部分的に一致します).
		 * 既定値は `false` (部分) です。
		 */
		completeMatch?: boolean;
		/**
		 * 一致で大文字と小文字が区別される場合を指定します。
		 * 既定値は `false` (大文字と小文字を区別しない) です。
		 */
		matchCase?: boolean;
	}
}
