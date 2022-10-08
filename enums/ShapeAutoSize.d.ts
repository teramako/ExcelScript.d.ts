declare namespace ExcelScript {
	/**
	 * 許可される自動サイズ変更を決定します。
	 * @see [ExcelScript.ShapeAutoSize enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.shapeautosize?view=office-scripts)
	 */
	export enum ShapeAutoSize {
		/**
		 * 自動サイズ変更の組み合わせが使用されます。
		 */
		autoSizeMixed,
		/**
		 * 自動サイズ変更は実行されません。
		 */
		autoSizeNone,
		/**
		 * 図形はテキストに合わせて調整されます。
		 */
		autoSizeShapeToFitText,
		/**
		 * テキストは図形に合わせて調整されます。
		 */
		autoSizeTextToFitShape
	}
}