declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.PrintComments enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.printcomments?view=office-scripts)
	 */
	export enum PrintComments {
		/**
		 * コメントは、ワークシートの末尾に印刷されます。
		 */
		endSheet,
		/**
		 * コメントは、ワークシートの挿入された位置に印刷されます。
		 */
		inPlace,
		/**
		 * コメントは印刷されません。
		 */
		noComments,
	}
}
