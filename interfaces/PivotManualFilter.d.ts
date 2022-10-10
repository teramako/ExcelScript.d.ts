/// <reference path="./PivotItem.d.ts"/>
declare namespace ExcelScript {
	/**
	 * PivotField に適用する手動フィルターの構成可能なテンプレート。
	 * フィルター `condition` を操作するために設定する必要がある条件を定義します。
	 * @see [ExcelScript.PivotManualFilter interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.pivotmanualfilter?view=office-scripts)
	 */
	export interface PivotManualFilter {
		/**
		 * 手動でフィルター処理する選択したアイテムの一覧。
		 * これらは、選択したフィールドの既存の有効なアイテムである必要があります。
		 */
		selectedItems?: (string | PivotItem)[];
	}
}
