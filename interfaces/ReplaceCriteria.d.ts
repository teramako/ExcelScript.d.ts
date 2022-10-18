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
		 *
		 * @example
		 * ```
		 * // This script normalizes the text in a column so that values don't include both "OK" and "okay".
		 * // It replaces "OK" and all the case-based variants with "okay".
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the range representing column D.
		 *   const currentSheet = workbook.getActiveWorksheet();
		 *   const column = currentSheet.getRange("D:D");
		 *
		 *   // Create a ReplaceCriteria object for the Range.replaceAll call.
		 *   const criteria: ExcelScript.ReplaceCriteria = {
		 *     completeMatch: true, // Use a complete match to skip cells that already say "okay".
		 *     matchCase: false // Ignore case when comparing strings.
		 *   };
		 *
		 *   // Replace all instances of "ok" (case-insensitive) with "okay".
		 *   column.replaceAll("ok", "okay", criteria);
		 * }
		 * ```
		 */
		completeMatch?: boolean;
		/**
		 * 一致で大文字と小文字が区別される場合を指定します。
		 * 既定値は `false` (大文字と小文字を区別しない) です。
		 *
		 * @example
		 * ```
		 * // This script replaces instances of "NA" with "North America",
		 * // using the casing to ignore parts of words.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the currently used range.
		 *   const currentSheet = workbook.getActiveWorksheet();
		 *   const usedRange = currentSheet.getUsedRange();
		 *
		 *   // Create a ReplaceCriteria object for the Range.replaceAll call.
		 *   const criteria: ExcelScript.ReplaceCriteria = {
		 *     completeMatch: false,
		 *     matchCase: true // Match with "NA market", not "navigate"
		 *   }
		 *
		 *   // Replace all instances of "NA" (case-sensitive) with "North America".
		 *   usedRange.replaceAll("NA", "North America", criteria);
		 * }
		 * ```
		 */
		matchCase?: boolean;
	}
}
