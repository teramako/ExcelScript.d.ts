declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.NamedItemType enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.nameditemtype?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script looks for every named range with "Review" in the name and marks the range with a yellow fill.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Look at every named item in the workbook.
	 *   workbook.getNames().forEach((namedItem) => {
	 *     // Find names containing "Review".
	 *     if (namedItem.getName().includes("Review")) {
	 *       // Only change the fill color if the named item is a range (not a formula).
	 *       let itemType: ExcelScript.NamedItemType = namedItem.getType();
	 *       if (itemType === ExcelScript.NamedItemType.range) {
	 *         // Set the range's fill color to yellow.
	 *         namedItem.getRange().getFormat().getFill().setColor("yellow");
	 *       }
	 *     }
	 *   });
	 * }
	 * ```
	 */
	export enum NamedItemType {
		array,
		boolean,
		double,
		error,
		integer,
		range,
		string,
	}
}
