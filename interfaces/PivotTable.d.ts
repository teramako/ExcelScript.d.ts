/// <reference path="./DataPivotHierarchy.d.ts"/>
/// <reference path="./FilterPivotHierarchy.d.ts"/>
/// <reference path="./PivotHierarchy.d.ts"/>
/// <reference path="./PivotLayout.d.ts"/>
/// <reference path="./RowColumnPivotHierarchy.d.ts"/>
/// <reference path="./Worksheet.d.ts"/>
declare namespace ExcelScript {
	/**
	 * Excel のピボットテーブルを表します。
	 * @see [ExcelScript.PivotTable interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.pivottable?view=office-scripts)
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
	export interface PivotTable {
		/**
		 * 現在の軸にピボット階層を追加します。
		 * 階層が行、列、またはフィルター軸の他の場所に存在する場合は、その場所から削除されます。
		 * @param pivotHierarchy
		 *
		 * @example
		 * ```
		 * // This script adds a row hierarchy to the PivotTable on the current worksheet.
		 * // This assumes the source data has columns named "Type", "Classification", and "Sales".
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the PivotTable on the current worksheet.
		 *   let sheet = workbook.getActiveWorksheet();
		 *   let pivotTable = sheet.getPivotTables()[0];
		 *
		 *   // Add the field "Type" to the PivotTable as a row hierarchy.
		 *   pivotTable.addRowHierarchy(pivotTable.getHierarchy("Type"));
		 *
		 *   // Add the field "Classification" to the PivotTable as a column hierarchy.
		 *   pivotTable.addColumnHierarchy(pivotTable.getHierarchy("Classification"));
		 *
		 *   // Add the field "Sales" to the PivotTable as a data hierarchy.
		 *   // By default, this displays the sums of the values in "Sales" based on the "Type".
		 *   pivotTable.addDataHierarchy(pivotTable.getHierarchy("Sales"));
		 * }
		 * ```
		 */
		addColumnHierarchy(
			pivotHierarchy: PivotHierarchy,
		): RowColumnPivotHierarchy;
		/**
		 * 現在の軸にピボット階層を追加します。
		 * @param pivotHierarchy
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
		addDataHierarchy(pivotHierarchy: PivotHierarchy): DataPivotHierarchy;
		/**
		 * 現在の軸にピボット階層を追加します。
		 * 階層が行、列、またはフィルター軸の他の場所に存在する場合は、その場所から削除されます。
		 * @param pivotHierarchy
		 *
		 * @example
		 * ```
		 * // This script adds a manual filter to a PivotTable.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the first PivotTable in the workbook.
		 *   const pivot = workbook.getPivotTables()[0];
		 *
		 *   // Get the hierarchy to use as the filter.
		 *   const location = pivot.getHierarchy("Location");
		 *
		 *   // Use "Location" as the FilterHierarchy.
		 *   pivot.addFilterHierarchy(location);
		 *
		 *   // Select items for the filter.
		 *   // Note that hierarchies and fields have a 1:1 relationship in Excel,
		 *   // so `getFields()[0]` always gets the correct field.
		 *   location.getFields()[0].applyFilter({
		 *     manualFilter: {
		 *       selectedItems: ["Seattle", "Chicago"]
		 *     }
		 *   });
		 * }
		 * ```
		 */
		addFilterHierarchy(
			pivotHierarchy: PivotHierarchy,
		): FilterPivotHierarchy;
		/**
		 * 現在の軸にピボット階層を追加します。
		 * 階層が行、列、またはフィルター軸の他の場所に存在する場合は、その場所から削除されます。
		 * @param pivotHierarchy
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
		addRowHierarchy(
			pivotHierarchy: PivotHierarchy,
		): RowColumnPivotHierarchy;
		/**
		 * ピボットテーブルを削除します。
		 */
		delete(): void;
		/**
		 * ピボットテーブルで、テーブル内の特定のピボットフィールドに対して複数のピボットフィルターの適用を許可するかどうかを指定します。
		 */
		getAllowMultipleFiltersPerField(): boolean;
		/**
		 * ピボットテーブルの列ピボット階層。
		 */
		getColumnHierarchies(): RowColumnPivotHierarchy[];
		/**
		 * 名前に基づいて RowColumnPivotHierarchy を取得します。
		 * RowColumnPivotHierarchy が存在しない場合、このメソッドは返します。 `undefined`.
		 * @param name 取得する RowColumnPivotHierarchy の名前。
		 */
		getColumnHierarchy(name: string): RowColumnPivotHierarchy | undefined;
		/**
		 * ピボットテーブルのデータ ピボット階層。
		 */
		getDataHierarchies(): DataPivotHierarchy[];
		/**
		 * 名前に基づいて DataPivotHierarchy を取得します。
		 * DataPivotHierarchy が存在しない場合、このメソッドは `undefined`.
		 * @param name 取得する DataPivotHierarchy の名前。
		 */
		getDataHierarchy(name: string): DataPivotHierarchy | undefined;
		/**
		 * ピボットテーブルでデータ本文の値をユーザーが編集できるかどうかを指定します。
		 */
		getEnableDataValueEditing(): boolean;
		/**
		 * ピボットテーブルのフィルター ピボット階層。
		 */
		getFilterHierarchies(): FilterPivotHierarchy[];
		/**
		 * 名前に基づいて FilterPivotHierarchy を取得します。
		 * FilterPivotHierarchy が存在しない場合、このメソッドは `undefined`.
		 * @param name 取得する FilterPivotHierarchy の名前。
		 */
		getFilterHierarchy(name: string): FilterPivotHierarchy | undefined;
		/**
		 * ピボットテーブルのピボット階層。
		 */
		getHierarchies(): PivotHierarchy[];
		/**
		 * 名前に基づいて PivotHierarchy を取得します。
		 * PivotHierarchy が存在しない場合、このメソッドは `undefined`.
		 * @param name 取得する PivotHierarchy の名前。
		 */
		getHierarchy(name: string): PivotHierarchy | undefined;
		/**
		 * ピボットテーブルの ID。
		 */
		getId(): string;
		/**
		 * ピボットテーブルのレイアウトとビジュアル構造を記述する PivotLayout。
		 */
		getLayout(): PivotLayout;
		/**
		 * ピボットテーブルの名前。
		 */
		getName(): string;
		/**
		 * ピボットテーブルの行ピボット階層。
		 */
		getRowHierarchies(): RowColumnPivotHierarchy[];
		/**
		 * 名前に基づいて RowColumnPivotHierarchy を取得します。
		 * RowColumnPivotHierarchy が存在しない場合、このメソッドは返します。 `undefined`.
		 * @param name 取得する RowColumnPivotHierarchy の名前。
		 */
		getRowHierarchy(name: string): RowColumnPivotHierarchy | undefined;
		/**
		 * ピボットテーブルが並べ替え時にカスタム リストを使用するかどうかを指定します。
		 */
		getUseCustomSortLists(): boolean;
		/**
		 * 現在のピボットテーブルを含んでいるワークシート。
		 */
		getWorksheet(): Worksheet;
		/**
		 * ピボットテーブルを更新します。
		 */
		refresh(): void;
		/**
		 * 現在の軸からピボット階層を削除します。
		 * @param rowColumnPivotHierarchy
		 */
		removeColumnHierarchy(
			rowColumnPivotHierarchy: RowColumnPivotHierarchy,
		): void;
		/**
		 * 現在の軸からピボット階層を削除します。
		 * @param DataPivotHierarchy
		 */
		removeDataHierarchy(DataPivotHierarchy: DataPivotHierarchy): void;
		/**
		 * 現在の軸からピボット階層を削除します。
		 * @param filterPivotHierarchy
		 */
		removeFilterHierarchy(filterPivotHierarchy: FilterPivotHierarchy): void;
		/**
		 * 現在の軸からピボット階層を削除します。
		 * @param rowColumnPivotHierarchy
		 */
		removeRowHierarchy(
			rowColumnPivotHierarchy: RowColumnPivotHierarchy,
		): void;
		/**
		 * ピボットテーブルで、テーブル内の特定のピボットフィールドに対して複数のピボットフィルターの適用を許可するかどうかを指定します。
		 * @param allowMultipleFiltersPerField
		 */
		setAllowMultipleFiltersPerField(
			allowMultipleFiltersPerField: boolean,
		): void;
		/**
		 * ピボットテーブルでデータ本文の値をユーザーが編集できるかどうかを指定します。
		 * @param enableDataValueEditing
		 */
		setEnableDataValueEditing(enableDataValueEditing: boolean): void;
		/**
		 * ピボットテーブルの名前。
		 * @param name
		 */
		setName(name: string): void;
		/**
		 * ピボットテーブルが並べ替え時にカスタム リストを使用するかどうかを指定します。
		 * @param useCustomSortLists
		 */
		setUseCustomSortLists(useCustomSortLists: boolean): void;
	}
}
