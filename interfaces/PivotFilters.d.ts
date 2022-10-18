/// <reference path="./PivotDateFilter.d.ts"/>
/// <reference path="./PivotLabelFilter.d.ts"/>
/// <reference path="./PivotManualFilter.d.ts"/>
/// <reference path="./PivotValueFilter.d.ts"/>
declare namespace ExcelScript {
	/**
	 * 特定の PivotField に現在適用されているすべての PivotFilter を表すインターフェイス。
	 * @see [ExcelScript.PivotFilters interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.pivotfilters?view=office-scripts)
	 */
	export interface PivotFilters {
		/**
		 * PivotField の現在適用されている日付フィルター。
		 * このプロパティは、 `null` 値フィルターが適用されていない場合です。
		 *
		 * @example
		 * ```
		 * // This script applies a filter to a PivotTable that filters out rows that aren't from this month.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the "Date Recorded" field to filter.
		 *   // The data in this field must be dates in order for the filter to work.
		 *   const pivot = workbook.getPivotTables()[0];
		 *   const rowHierarchy = pivot.getRowHierarchy("Date Recorded");
		 *   const rowField = rowHierarchy.getFields()[0];
		 *
		 *   // Apply the date filter.
		 *   rowField.applyFilter({
		 *     dateFilter: {
		 *       // Setting the condition to `thisMonth` means items that are before or
		 *       // after this month will not be displayed.
		 *       condition: ExcelScript.DateFilterCondition.thisMonth
		 *     }
		 *   });
		 * }
		 * ```
		 */
		dateFilter?: PivotDateFilter;
		/**
		 * PivotField の現在適用されているラベル フィルター。
		 * このプロパティは、 `null` 値フィルターが適用されていない場合です。
		 *
		 * @example
		 * ```
		 * // This script filters items that start with "L" from the "Type" field of the "Farm Sales" PivotTable.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the PivotTable.
		 *   const pivotTable = workbook.getActiveWorksheet().getPivotTable("Farm Sales");
		 *
		 *   // Get the "Type" field.
		 *   const field = pivotTable.getHierarchy("Type").getPivotField("Type");
		 *
		 *   // Filter out any types that start with "L" (such as "Lemons" and "Limes").
		 *   const filter: ExcelScript.PivotLabelFilter = {
		 *     condition: ExcelScript.LabelFilterCondition.beginsWith,
		 *     substring: "L",
		 *     exclusive: true
		 *   };
		 *
		 *   // Apply the label filter to the field.
		 *   field.applyFilter({ labelFilter: filter });
		 * }
		 * ```
		 */
		labelFilter?: PivotLabelFilter;
		/**
		 * PivotField の現在適用されている手動フィルター。
		 * このプロパティは、 `null` 値フィルターが適用されていない場合です。
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
		manualFilter?: PivotManualFilter;
		/**
		 * PivotField の現在適用されている値フィルター。
		 * このプロパティは、 `null` 値フィルターが適用されていない場合です。
		 *
		 * @example
		 * ```
		 * // This script applies a PivotValueFilter to the first row hierarchy in the PivotTable.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the PivotTable on the current worksheet.
		 *   let sheet = workbook.getActiveWorksheet();
		 *   let pivotTable = sheet.getPivotTables()[0];
		 *
		 *   // Get the first row hierarchy to use as the field which gets filtered.
		 *   let rowHierarchy = pivotTable.getRowHierarchies()[0];
		 *
		 *   // Get the first data hierarchy to use as the values for filtering the rows.
		 *   let dataHierarchy = pivotTable.getDataHierarchies()[0];
		 *
		 *   // Create a filter that excludes values greater than 500.
		 *   let filter: ExcelScript.PivotValueFilter = {
		 *     condition: ExcelScript.ValueFilterCondition.greaterThan,
		 *     comparator: 500,
		 *     value: dataHierarchy.getName()
		 *   };
		 *
		 *   // Apply the filter.
		 *   rowHierarchy.getPivotField(rowHierarchy.getName()).applyFilter({
		 *     valueFilter: filter
		 *   });
		 * }
		 * ```
		 */
		valueFilter?: PivotValueFilter;
	}
}
