declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.RangeValueType enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.rangevaluetype?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script formats rows in a worksheet based on the first value in that row.
	 * // If it's the boolean value TRUE, the row is bolded.
	 * // If it's FALSE, nothing is changed.
	 * // If the value type isn't a boolean, the row is italicized.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the used range in the active worksheet.
	 *   const sheet = workbook.getActiveWorksheet();
	 *   const usedRange = sheet.getUsedRange();
	 *
	 *   // Get the values in the first column.
	 *   const firstColumnValues = usedRange.getColumn(0).getValues();
	 *
	 *   // Look at the first cell in each row.
	 *   const rowCount = usedRange.getRowCount();
	 *   for (let i = 0; i < rowCount; i++) {
	 *     // Get the type of the first cell to make sure it's a boolean.
	 *     let firstValueType = usedRange.getCell(i, 0).getValueType();
	 *
	 *     // Set the bold or italic of the row as described earlier.
	 *     if (firstValueType === ExcelScript.RangeValueType.boolean) {
	 *       if (firstColumnValues[i][0] as boolean === true) {
	 *         usedRange.getRow(i).getFormat().getFont().setBold(true);
	 *       } else {
	 *         usedRange.getRow(i).getFormat().getFont().setBold(false);
	 *       }
	 *     } else {
	 *       usedRange.getRow(i).getFormat().getFont().setItalic(true);
	 *     }
	 *   }
	 * }
	 * ```
	 */
	export enum RangeValueType {
		boolean,
		double,
		empty,
		error,
		integer,
		richValue,
		string,
		unknown,
	}
}
