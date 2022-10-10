declare namespace ExcelScript {
	/**
	 * 上位 N パーセントまたは下位 N パーセント、数値、または値の合計でフィルター処理するかどうかを選択する、上部/下部フィルターの単純な列挙型。
	 * @see [ExcelScript.TopBottomSelectionType enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.topbottomselectiontype?view=office-scripts)
	 */
	export enum TopBottomSelectionType {
		/**
		 * 選択した値で測定されたアイテムの上位/下位 N の数をフィルター処理します。
		 */
		items,
		/**
		 * 選択した値で測定された項目の上位/下位 N パーセントをフィルター処理します。
		 */
		percent,
		/**
		 * 選択した値で測定した上/下の N の合計をフィルター処理します。
		 */
		sum,
	}
}
