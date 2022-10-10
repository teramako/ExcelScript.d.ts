declare namespace ExcelScript {
	/**
	 * ピボットアイテムのExcelします。
	 * @see [ExcelScript.PivotItem interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.pivotitem?view=office-scripts)
	 */
	export interface PivotItem {
		/**
		 * PivotItem の ID。
		 */
		getId(): string;
		/**
		 * 項目を展開して子項目を表示するか、または項目を折りたたんで子項目を非表示にするかを指定します。
		 */
		getIsExpanded(): boolean;
		/**
		 * PivotItem の名前。
		 */
		getName(): string;
		/**
		 * PivotItem が表示される場合に指定します。
		 */
		getVisible(): boolean;
		/**
		 * 項目を展開して子項目を表示するか、または項目を折りたたんで子項目を非表示にするかを指定します。
		 * @param isExpanded
		 */
		setIsExpanded(isExpanded: boolean): void;
		/**
		 * PivotItem の名前。
		 * @param name
		 */
		setName(name: string): void;
		/**
		 * PivotItem が表示される場合に指定します。
		 * @param visible
		 */
		setVisible(visible: boolean): void;
	}
}
