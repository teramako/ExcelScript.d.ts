/// <reference path="../enums/SortDataOption.d.ts" />
/// <reference path="../enums/SortOn.d.ts" />
/// <reference path="./Icon.d.ts" />
declare namespace ExcelScript {
	/**
	 * 並べ替え操作の条件を表します。
	 * @see [ExcelScript.SortField interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.sortfield?view=office-scripts)
	 */
	export interface SortField {
		/**
		 * 並べ替えが昇順で行われるかどうかを指定します。
		 */
		ascending?: boolean;
		/**
		 * 並べ替えがフォントまたはセルの色にある場合に、条件のターゲットとなる色を指定します。
		 *
		 * @example
		 * ```
		 * // This script sorts a range based on the color of the cells.
		 * // It brings all red cells to the top of the range.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the range (A1:D8) to sort from the current worksheet.
		 *   const worksheet = workbook.getActiveWorksheet();
		 *   const rangeToSort = worksheet.getRange("A1:D8");
		 *
		 *   // Create a SortField for color sorting.
		 *   // This sorts the rows based on the fill color of each row's cell in the first column.
		 *   let colorSort: ExcelScript.SortField = {
		 *     ascending: true,
		 *     color: "FF0000", // red
		 *     key: 0,
		 *     sortOn: ExcelScript.SortOn.cellColor
		 *   };
		 *
		 *   // Apply the SortField to the range.
		 *   rangeToSort.getSort().apply([colorSort]);
		 * }
		 * ```
		 */
		color?: string;
		/**
		 * このフィールドのその他の並べ替えオプションを表します。
		 *
		 * @example
		 * ```
		 * // This script sorts a table based on the values in column 1.
		 * // If the text of a column-1 value can be treated as a number,
		 * // it will be sorted in numerical order, rather than Unicode order
		 * // (so 123 will come before 12.3).
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the first table on the current worksheet.
		 *   const currentSheet = workbook.getActiveWorksheet();
		 *   const table = currentSheet.getTables()[0];
		 *
		 *   // Create the sorting parameters.
		 *   const countSortField: ExcelScript.SortField = {
		 *     key: 1,
		 *     ascending: true,
		 *     dataOption: ExcelScript.SortDataOption.textAsNumber
		 *   };
		 *
		 *   // Apply the sort to the table.
		 *   const sort = table.getSort();
		 *   sort.apply([countSortField]);
		 * }
		 * ```
		 */
		dataOption?: SortDataOption;
		/**
		 * 並べ替えがセルのアイコン上にある場合に、条件のターゲットとなるアイコンを指定します。
		 */
		icon?: Icon;
		/**
		 * 条件がオンになっている列 (並べ替え方向に応じて行) を指定します。
		 * 最初の列 (または行) からのオフセットとして表されます。
		 */
		key: number;
		/**
		 * この条件の並べ替えの種類を指定します。
		 */
		sortOn?: SortOn;
		/**
		 * 並べ替えるリッチ値のターゲット プロパティ名であるサブフィールドを指定します。
		 */
		subField?: string;
	}
}
