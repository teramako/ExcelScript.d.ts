/// <reference path="./WorksheetProtectionOptions.d.ts"/>
declare namespace ExcelScript {
	/**
	 * ワークシート オブジェクトの保護を表します。
	 * @see [ExcelScript.WorksheetProtection interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.worksheetprotection?view=office-scripts)
	 */
	export interface WorksheetProtection {
		/**
		 * ワークシートの保護オプションを指定します。
		 */
		getOptions(): WorksheetProtectionOptions;
		/**
		 * ワークシートが保護されているかどうかを指定します。
		 */
		getProtected(): boolean;
		/**
		 * ワークシートを保護します。
		 * ワークシートが既に保護されている場合は失敗します。
		 * @param options 省略可能。 シートの保護のオプション。
		 * @param password 省略可能。 シート保護パスワード。
		 */
		protect(options?: WorksheetProtectionOptions, password?: string): void;
		/**
		 * ワークシートの保護を解除します。
		 * @param password シート保護パスワード。
		 */
		unprotect(password?: string): void;
	}
}
