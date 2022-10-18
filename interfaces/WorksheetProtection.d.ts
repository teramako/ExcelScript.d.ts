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
		 *
		 * @example
		 * ```
		 * // This script protects cells from being selected on the current worksheet.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the protection settings for the current worksheet.
		 *   const currentSheet = workbook.getActiveWorksheet();
		 *   const sheetProtection = currentSheet.getProtection();
		 *
		 *   // Create a new WorksheetProtectionOptions object with the selectionMode property set to `none`.
		 *   let protectionOptions : ExcelScript.WorksheetProtectionOptions = {
		 *     selectionMode: ExcelScript.ProtectionSelectionMode.none
		 *   }
		 *
		 *   // Apply the given protection options.
		 *   sheetProtection.protect(protectionOptions);
		 * }
		 * ```
		 */
		protect(options?: WorksheetProtectionOptions, password?: string): void;
		/**
		 * ワークシートの保護を解除します。
		 * @param password シート保護パスワード。
		 */
		unprotect(password?: string): void;
	}
}
