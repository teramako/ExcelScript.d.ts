/// <reference path="./PivotItem.d.ts"/>
declare namespace ExcelScript {
	/**
	 * PivotField に適用する手動フィルターの構成可能なテンプレート。
	 * フィルター `condition` を操作するために設定する必要がある条件を定義します。
	 * @see [ExcelScript.PivotManualFilter interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.pivotmanualfilter?view=office-scripts)
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
	 *   const cityFilter: ExcelScript.PivotManualFilter = {
	 *     selectedItems: ["Seattle", "Chicago"]
	 *   };
	 *
	 *   // Apply the filter
	 *   // Note that hierarchies and fields have a 1:1 relationship in Excel, so `getFields()[0]` always gets the correct field.
	 *   location.getFields()[0].applyFilter({
	 *     manualFilter: cityFilter
	 *   });
	 * }
	 * ```
	 */
	export interface PivotManualFilter {
		/**
		 * 手動でフィルター処理する選択したアイテムの一覧。
		 * これらは、選択したフィールドの既存の有効なアイテムである必要があります。
		 */
		selectedItems?: (string | PivotItem)[];
	}
}
