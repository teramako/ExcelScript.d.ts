declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.BorderWeight enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.borderweight?view=office-scripts)
	 *
	 * @example <caption>This script creates a border around a range.</caption>
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
	 */
	export enum BorderWeight {
		hairline,
		medium,
		thick,
		thin,
	}
}
