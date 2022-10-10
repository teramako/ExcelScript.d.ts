declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.PivotLayoutType enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.pivotlayouttype?view=office-scripts)
	 */
	export enum PivotLayoutType {
		/**
		 * 同じ列の次のフィールドのラベルを持つ水平方向に圧縮されたフォーム。
		 */
		compact,
		/**
		 * 内部フィールドのアイテムは外部フィールドのアイテムと同じ行に、小計は常に下部に表示されます。
		 */
		outline,
		/**
		 * 内部フィールドのアイテムは、常に外部フィールドのアイテムを基準に新しい行に表示されます。
		 */
		tabular,
	}
}
