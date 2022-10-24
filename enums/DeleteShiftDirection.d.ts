declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.DeleteShiftDirection enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.deleteshiftdirection?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This sample creates a sample range, then deletes "A1" using different DeleteShiftDirection values.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Add sample data to better visualize the delete changes.
	 *   const currentSheet = workbook.getActiveWorksheet();
	 *   currentSheet.getRange("A1:D4").setValues([
	 *     [1,2,3,4],
	 *     [5,6,7,8],
	 *     [9,10,11,12],
	 *     [13,14,15,16]]);
	 *
	 *   // Delete A1 and shift the cells from the right to fill the space.
	 *   // The value being deleted is 1.
	 *   currentSheet.getRange("A1").delete(ExcelScript.DeleteShiftDirection.left);
	 *
	 *   // Delete A1 and shift the cells from the bottom to fill the space.
	 *   // The value being deleted is 2.
	 *   currentSheet.getRange("A1").delete(ExcelScript.DeleteShiftDirection.up);
	 *
	 *   // Log the sample range. The values should be:
	 *   //
	 *   // 5, 3, 4, "",
	 *   // 9, 6, 7, 8,
	 *   // 13, 10, 11, 12,
	 *   /  "", 14, 15, 16
	 *   //
	 *   console.log(currentSheet.getRange("A1:D4").getValues());
	 * }
	 * ```
	 */
	export enum DeleteShiftDirection {
		left,
		up,
	}
}
