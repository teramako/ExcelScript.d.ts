/// <reference path="./PivotField.d.ts" />
declare namespace ExcelScript {
	/**
	 * Excel PivotHierarchy を表します。
	 * @see [ExcelScript.PivotHierarchy interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.pivothierarchy?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script creates a PivotTable from an existing table and adds it to a new worksheet.
	 * // This script assumes there is a table in the current worksheet with columns named "Type" and "Sales".
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Create a PivotTable based on a table in the current worksheet.
	 *   let sheet = workbook.getActiveWorksheet();
	 *   let table = sheet.getTables()[0];
	 *
	 *   // Add the PivotTable to a new worksheet.
	 *   let newSheet = workbook.addWorksheet("Pivot");
	 *   let pivotTable = newSheet.addPivotTable("My Pivot", table, "A1");
	 *
	 *   // Add fields to the PivotTable to show "Sales" per "Type".
	 *   pivotTable.addRowHierarchy(pivotTable.getHierarchy("Type"));
	 *   pivotTable.addDataHierarchy(pivotTable.getHierarchy("Sales"));
	 * }
	 * ```
	 */
	export interface PivotHierarchy {
		/**
		 * PivotHierarchy に関連付けられているピボット フィールドを返します。
		 */
		getFields(): PivotField[];
		/**
		 * PivotHierarchy の ID。
		 */
		getId(): string;
		/**
		 * PivotHierarchy の名前。
		 */
		getName(): string;
		/**
		 * PivotField を名前で取得します。
		 * PivotField が存在しない場合、このメソッドは、その `isNullObject` プロパティが次に設定されたオブジェクトを返します。 `true`.
		 * @param name 取得するピボットフィールドの名前。
		 */
		getPivotField(name: string): PivotField | undefined;
		/**
		 * PivotHierarchy の名前。
		 * @param name
		 */
		setName(name: string): void;
	}
}
