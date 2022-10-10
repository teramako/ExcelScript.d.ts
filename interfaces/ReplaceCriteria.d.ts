declare namespace ExcelScript {
	/**
	 * 使用する置換条件を表します。
	 * @see [ExcelScript.ReplaceCriteria interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.replacecriteria?view=office-scripts)
	 */
	export interface ReplaceCriteria {
		/**
		 * 一致が完了する必要がある場合と部分的に行う必要がある場合に指定します。
		 * 完全一致は、セルの内容全体と一致します。
		 * 部分的な一致は、セルのコンテンツ内の部分文字列と一致します ( `cat` `caterpillar` 部分的に一致し、 `scatter`).
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
