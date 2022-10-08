declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.PrintOrder enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.printorder?view=office-scripts)
	 */
	export enum PrintOrder {
		/**
		 * 反対側のページや右側のページのフィールドを処理する前に下の行を処理します。
		 */
		downThenOver,
		/**
		 * 下の行を処理する前に反対側のページや右側のページのフィールドを処理します。
		 */
		overThenDown
	}
}