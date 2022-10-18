/// <reference path="../enums/BorderIndex.d.ts"/>
/// <reference path="../enums/BorderLineStyle.d.ts"/>
/// <reference path="../enums/BorderWeight.d.ts"/>
declare namespace ExcelScript {
	/**
	 * オブジェクトの輪郭を表します。
	 * @see [ExcelScript.RangeBorder interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.rangeborder?view=office-scripts)
	 */
	export interface RangeBorder {
		/**
		 * 罫線 #の色を表す HTML カラー コード(RRGGBB (例: "FFA500")、または名前付き HTML の色 (例: "オレンジ") です。
		 */
		getColor(): string;
		/**
		 * 罫線の特定の辺を表す定数値。
		 * 詳細は「`ExcelScript.BorderIndex`」をご覧ください。
		 */
		getSideIndex(): BorderIndex;
		/**
		 * 罫線の線スタイルを指定する、線スタイル定数のいずれか 1 つ。
		 * 詳細は「`ExcelScript.BorderLineStyle`」をご覧ください。
		 */
		getStyle(): BorderLineStyle;
		/**
		 * 範囲の罫線の色を明るくまたは暗くする double を指定し、値は -1 (最も暗い) から 1 (最も明るい) の間で、元の色の場合は 0 を指定します。
		 * 値は `null` 、罫線に均一 `tintAndShade` な設定がないことを示します。
		 */
		getTintAndShade(): number;
		/**
		 * 範囲周辺の罫線の太さを指定します。
		 * 詳細は「`ExcelScript.BorderWeight`」をご覧ください。
		 */
		getWeight(): BorderWeight;
		/**
		 * 罫線 #の色を表す HTML カラー コード(RRGGBB (例: "FFA500")、または名前付き HTML の色 (例: "オレンジ") です。
		 * @param color
		 */
		setColor(color: string): void;
		/**
		 * 罫線の線スタイルを指定する、線スタイル定数のいずれか 1 つ。
		 * 詳細は「`ExcelScript.BorderLineStyle`」をご覧ください。
		 * @param style
		 *
		 * @example
		 * ```
		 * // This script adds a border around the outside of a range.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get a range from the current worksheet.
		 *   let range = workbook.getActiveWorksheet().getRange("B2:E15");
		 *
		 *   // Add a border around the whole bounding range.
		 *   let format = range.getFormat();
		 *   format.getRangeBorder(ExcelScript.BorderIndex.edgeTop).setStyle(ExcelScript.BorderLineStyle.continuous); // Top border
		 *   format.getRangeBorder(ExcelScript.BorderIndex.edgeBottom).setStyle(ExcelScript.BorderLineStyle.continuous); // Bottom border
		 *   format.getRangeBorder(ExcelScript.BorderIndex.edgeLeft).setStyle(ExcelScript.BorderLineStyle.continuous); // Left border
		 *   format.getRangeBorder(ExcelScript.BorderIndex.edgeRight).setStyle(ExcelScript.BorderLineStyle.continuous); // Right border
		 * }
		 * ```
		 */
		setStyle(style: BorderLineStyle): void;
		/**
		 * 範囲の罫線の色を明るくまたは暗くする double を指定し、値は -1 (最も暗い) から 1 (最も明るい) の間で、元の色の場合は 0 を指定します。
		 * 値は `null` 、罫線に均一 `tintAndShade` な設定がないことを示します。
		 * @param tintAndShade
		 */
		setTintAndShade(tintAndShade: number): void;
		/**
		 * 範囲周辺の罫線の太さを指定します。
		 * 詳細は「`ExcelScript.BorderWeight`」をご覧ください。
		 * @param weight
		 *
		 * @example
		 * ```
		 * // This script creates a border around a range.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the RangeFormat object for the range "B2:G10".
		 *   const currentSheet = workbook.getActiveWorksheet();
		 *   const rangeForBorder = currentSheet.getRange("B2:G10");
		 *   const format = rangeForBorder.getFormat();
		 *
		 *   // Get a RangeBorder object for each edge of the range and set the border properties.
		 *   let edgeTop = format.getRangeBorder(ExcelScript.BorderIndex.edgeTop);
		 *   edgeTop.setStyle(ExcelScript.BorderLineStyle.dashDot);
		 *   edgeTop.setWeight(ExcelScript.BorderWeight.thick);
		 *
		 *   let edgeBottom = format.getRangeBorder(ExcelScript.BorderIndex.edgeBottom);
		 *   edgeBottom.setStyle(ExcelScript.BorderLineStyle.dashDot);
		 *   edgeBottom.setWeight(ExcelScript.BorderWeight.thick);
		 *
		 *   let edgeLeft = format.getRangeBorder(ExcelScript.BorderIndex.edgeLeft);
		 *   edgeLeft.setStyle(ExcelScript.BorderLineStyle.dashDot);
		 *   edgeLeft.setWeight(ExcelScript.BorderWeight.thick);
		 *
		 *   let edgeRight = format.getRangeBorder(ExcelScript.BorderIndex.edgeRight);
		 *   edgeRight.setStyle(ExcelScript.BorderLineStyle.dashDot);
		 *   edgeRight.setWeight(ExcelScript.BorderWeight.thick);
		 * }
		 * ```
		 */
		setWeight(weight: BorderWeight): void;
	}
}
