declare namespace ExcelScript {
	/**
	 * ブック内の範囲で AutoFill を使用する場合の動作の種類。
	 * @see [ExcelScript.AutoFillType enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.autofilltype?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script uses the autofill feature to complete a table with days of the month.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the current, active worksheet.
	 *   let currentWorksheet = workbook.getActiveWorksheet();
	 *   // Get the data range that shows the pattern.
	 *   let dataRange = currentWorksheet.getRange("C2:C3");
	 *   // Autofill the connected range. C2:C3 are filled in with dates. C4:C54 are blank.
	 *   dataRange.autoFill("C2:C54", ExcelScript.AutoFillType.fillDays);
	 * }
	 * ```
	 */
	export enum AutoFillType {
		/**
		 * 選択したデータに基づいて、隣接するセルにデータを設定します。
		 */
		fillCopy,
		/**
		 * コンテキストに応じて、月の日または週の日のどちらかにパターンを基にした日付の "FillSeries" のバージョン。
		 */
		fillDays,
		/**
		 * 周囲のデータ (標準のオートフィル動作) に基づいて、隣接するセルに値を設定します。
		 */
		fillDefault,
		/**
		 * 隣接するセルに、選択した数式を設定します。
		 */
		fillFormats,
		/**
		 * 月のパターンを基にした日付の "FillSeries" のバージョン。
		 */
		fillMonths,
		/**
		 * コピーしたセルのパターンに従うデータを隣接するセルに設定します。
		 */
		fillSeries,
		/**
		 * 隣接するセルに選択した値を設定します。
		 */
		fillValues,
		/**
		 * 曜日にパターンを基に、平日のみを含む日付のバージョン "FillSeries"。
		 */
		fillWeekdays,
		/**
		 * 年のパターンを基にした日付の "FillSeries" のバージョン。
		 */
		fillYears,
		/**
		 * ユーザーの Flash Fill 機能を使用してExcelセルに値を設定します。
		 */
		flashFill,
		/**
		 * 成長傾向モデルに従って隣接するセルの値を入力する数値の "FillSeries" のバージョン。
		 */
		growthTrend,
		/**
		 * 線形傾向モデルに従って隣接するセルの値を入力する数値の "FillSeries" のバージョン。
		 */
		linearTrend,
	}
}
