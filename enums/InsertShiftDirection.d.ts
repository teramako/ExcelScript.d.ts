declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.InsertShiftDirection enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.insertshiftdirection?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script inserts headers at the top of the worksheet.
	 * function main(workbook: ExcelScript.Workbook)
	 * {
	 *   let currentSheet = workbook.getActiveWorksheet();
	 *
	 *   // Create headers for 3 columns.
	 *   let myHeaders = [["NAME", "ID", "ROLE"]];
	 *
	 *   // Add a blank first row and push existing data down a row.
	 *   let firstRow = currentSheet.getRange("1:1");
	 *   firstRow.insert(ExcelScript.InsertShiftDirection.down);
	 *
	 *   // Add the headers.
	 *   currentSheet.getRange("A1:C1").setValues(myHeaders);
	 * }
	 * ```
	 */
	export enum InsertShiftDirection {
		down,
		right,
	}
}
