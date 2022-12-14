/// <reference path="../enums/FillPattern.d.ts"/>
declare namespace ExcelScript {
	/**
	 * Range オブジェクトの背景を表します。
	 * @see [ExcelScript.RangeFill interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.rangefill?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script sets the fill color of the used range to green.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the used range of the current worksheet.
	 *   let currentSheet = workbook.getActiveWorksheet();
	 *   let usedRange = currentSheet.getUsedRange();
	 *
	 *   // Get the RangeFill object.
	 *   let fill = usedRange.getFormat().getFill();
	 *
	 *   // Set the fill color to green.
	 *   fill.setColor("green");
	 * }
	 * ```
	 */
	export interface RangeFill {
		/**
		 * 範囲の背景をリセットします。
		 *
		 * @example
		 * ```
		 * // This script removes all fill color and styles from the used range.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the used range of the current worksheet.
		 *   let currentSheet = workbook.getActiveWorksheet();
		 *   let usedRange = currentSheet.getUsedRange();
		 *
		 *   // Clear the fill from the entire range.
		 *   usedRange.getFormat().getFill().clear();
		 * }
		 * ```
		 */
		clear(): void;
		/**
		 * 背景の #色を表す HTML カラー コード(RRGGBB 形式 ("FFA500"など)、または名前付き HTML 色 ("orange"など)
		 */
		getColor(): string;
		/**
		 * 範囲のパターン。
		 * 詳細は「`ExcelScript.FillPattern`」をご覧ください。
		 * LinearGradient と RectangularGradient はサポートされていません。
		 * 値 `null` は、範囲全体に均一なパターン設定が設定できない場合を示します。
		 */
		getPattern(): FillPattern;
		/**
		 * 範囲パターンの #色を表す HTML カラー コードは、RRGGBB 形式 ("FFA500"など)、または名前付き HTML 色 ("オレンジ色" など) として表されます。
		 */
		getPatternColor(): string;
		/**
		 * 範囲塗りつぶしのパターンの色を明るくまたは暗くする倍数を指定します。
		 * 値は -1 (最も暗い) から 1 (最も明るい) の間で、元の色の場合は 0 です。
		 * 値 `null` は、範囲に一様な設定が含めなかった場合を示 `patternTintAndShade` します。
		 */
		getPatternTintAndShade(): number;
		/**
		 * 範囲塗りつぶしの色を明るくまたは暗くする倍数を指定します。
		 * 値は -1 (最も暗い) から 1 (最も明るい) の間で、元の色の場合は 0 です。
		 * 値 `null` は、範囲に一様な設定が含めなかった場合を示 `tintAndShade` します。
		 */
		getTintAndShade(): number;
		/**
		 * 背景の #色を表す HTML カラー コード(RRGGBB 形式 ("FFA500"など)、または名前付き HTML 色 ("orange"など)
		 * @param color
		 *
		 * @example
		 * ```
		 * // This script sets the fill color of cell A2 to blue.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the range representing cell A2 from the current worksheet.
		 *   let cell = workbook.getActiveWorksheet().getRange("A2");
		 *
		 *   // Set the fill color to blue.
		 *   cell.getFormat().getFill().setColor("blue");
		 * }
		 * ```
		 */
		setColor(color: string): void;
		/**
		 * 範囲のパターン。
		 * 詳細は「`ExcelScript.FillPattern`」をご覧ください。
		 * LinearGradient と RectangularGradient はサポートされていません。
		 * 値 `null` は、範囲全体に均一なパターン設定が設定できない場合を示します。
		 * @param pattern
		 */
		setPattern(pattern: FillPattern): void;
		/**
		 * 範囲パターンの #色を表す HTML カラー コードは、RRGGBB 形式 ("FFA500"など)、または名前付き HTML 色 ("オレンジ色" など) として表されます。
		 * @param patternColor
		 */
		setPatternColor(patternColor: string): void;
		/**
		 * 範囲塗りつぶしのパターンの色を明るくまたは暗くする倍数を指定します。
		 * 値は -1 (最も暗い) から 1 (最も明るい) の間で、元の色の場合は 0 です。
		 * 値 `null` は、範囲に一様な設定が含めなかった場合を示 `patternTintAndShade` します。
		 * @param patternTintAndShade
		 */
		setPatternTintAndShade(patternTintAndShade: number): void;
		/**
		 * 範囲塗りつぶしの色を明るくまたは暗くする倍数を指定します。
		 * 値は -1 (最も暗い) から 1 (最も明るい) の間で、元の色の場合は 0 です。
		 * 値 `null` は、範囲に一様な設定が含めなかった場合を示 `tintAndShade` します。
		 * @param tintAndShade
		 */
		setTintAndShade(tintAndShade: number): void;
	}
}
