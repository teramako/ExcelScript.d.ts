declare namespace ExcelScript {
	/**
	 * ピボットフィールドのフィルターの種類を表す単純な列挙型。
	 * @see [ExcelScript.PivotFilterType enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.pivotfiltertype?view=office-scripts)
	 */
	export enum PivotFilterType {
		/**
		 * ラベルの代りで日付を持つピボットアイテムをフィルター処理します。
		 * 注: PivotField では、ラベル フィルターと日付フィルターを同時に適用することはできません。
		 */
		date,
		/**
		 * ラベルに基づいてピボットアイテムをフィルター処理します。
		 * 注: PivotField では、ラベル フィルターと日付フィルターを同時に適用することはできません。
		 */
		label,
		/**
		 * ピボットテーブルから手動で選択したピボットアイテムをフィルター処理します。
		 */
		manual,
		/**
		 * `PivotFilterType` 不明またはサポートされていません。
		 */
		unknown,
		/**
		 * ピボットアイテムの値に基づくフィルター `DataPivotHierarchy`.
		 */
		value
	}
}