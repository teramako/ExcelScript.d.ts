/// <reference path="../enums/ProtectionSelectionMode.d.ts" />
declare namespace ExcelScript {
	/**
	 * シート保護のオプションを表します。
	 * @see [ExcelScript.WorksheetProtectionOptions interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.worksheetprotectionoptions?view=office-scripts)
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
	export interface WorksheetProtectionOptions {
		/**
		 * オートフィルター機能の使用を許可するワークシート保護オプションを表します。
		 */
		allowAutoFilter?: boolean;
		/**
		 * 列の削除を許可するワークシート保護オプションを表します。
		 */
		allowDeleteColumns?: boolean;
		/**
		 * 行の削除を許可するワークシート保護オプションを表します。
		 */
		allowDeleteRows?: boolean;
		/**
		 * オブジェクトの編集を許可するワークシート保護オプションを表します。
		 */
		allowEditObjects?: boolean;
		/**
		 * シナリオの編集を許可するワークシート保護オプションを表します。
		 */
		allowEditScenarios?: boolean;
		/**
		 * セルの書式設定を許可するワークシート保護オプションを表します。
		 */
		allowFormatCells?: boolean;
		/**
		 * 列の書式設定を許可するワークシート保護オプションを表します。
		 */
		allowFormatColumns?: boolean;
		/**
		 * 行の書式設定を許可するワークシート保護オプションを表します。
		 */
		allowFormatRows?: boolean;
		/**
		 * 列の挿入を許可するワークシート保護オプションを表します。
		 */
		allowInsertColumns?: boolean;
		/**
		 * ハイパーリンクの挿入を許可するワークシート保護オプションを表します。
		 */
		allowInsertHyperlinks?: boolean;
		/**
		 * 行の挿入を許可するワークシート保護オプションを表します。
		 */
		allowInsertRows?: boolean;
		/**
		 * ピボットテーブル機能の使用を許可するワークシート保護オプションを表します。
		 */
		allowPivotTables?: boolean;
		/**
		 * 並べ替え機能の使用を許可するワークシート保護オプションを表します。
		 */
		allowSort?: boolean;
		/**
		 * 選択モードのワークシート保護オプションを表します。
		 */
		selectionMode?: ProtectionSelectionMode;
	}
}
