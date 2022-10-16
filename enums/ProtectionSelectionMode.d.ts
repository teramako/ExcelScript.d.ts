declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.ProtectionSelectionMode enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.protectionselectionmode?view=office-scripts)
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
	export enum ProtectionSelectionMode {
		/**
		 * セルの選択は許可されません。
		 */
		none,
		/**
		 * すべてのセルに対して選択が許可されます。
		 */
		normal,
		/**
		 * 選択は、ロックされていないセルに対してのみ許可されます。
		 */
		unlocked,
	}
}
