declare namespace ExcelScript {
	/**
	 * ブック オブジェクトの保護を表します。
	 * @see [ExcelScript.WorkbookProtection interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.workbookprotection?view=office-scripts)
	 */
	export interface WorkbookProtection {
		/**
		 * ブックが保護される場合に指定します。
		 */
		getProtected(): boolean;
		/**
		 * ブックを保護します。
		 * ブックが保護されている場合は失敗します。
		 * @param password ブック保護パスワード。
		 */
		protect(password?: string): void;
		/**
		 * ブックの保護を解除します。
		 * @param password ブック保護パスワード。
		 */
		unprotect(password?: string): void;
	}
}
