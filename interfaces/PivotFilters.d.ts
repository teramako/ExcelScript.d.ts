declare namespace ExcelScript {
	/**
	 * 特定の PivotField に現在適用されているすべての PivotFilter を表すインターフェイス。
	 * @see [ExcelScript.PivotFilters interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.pivotfilters?view=office-scripts)
	 */
	export interface PivotFilters {
		/**
		 * PivotField の現在適用されている日付フィルター。
		 * このプロパティは、 `null` 値フィルターが適用されていない場合です。
		 */
		dateFilter?: PivotDateFilter;
		/**
		 * PivotField の現在適用されているラベル フィルター。
		 * このプロパティは、 `null` 値フィルターが適用されていない場合です。
		 */
		labelFilter?: PivotLabelFilter;
		/**
		 * PivotField の現在適用されている手動フィルター。
		 * このプロパティは、 `null` 値フィルターが適用されていない場合です。
		 */
		manualFilter?: PivotManualFilter;
		/**
		 * PivotField の現在適用されている値フィルター。
		 * このプロパティは、 `null` 値フィルターが適用されていない場合です。
		 */
		valueFilter?: PivotValueFilter;
	}
}
