declare namespace ExcelScript {
	/**
	 * 名前付きアイテムの値と型を含むオブジェクトを表します。
	 * @see [ExcelScript.NamedItemArrayValues interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.nameditemarrayvalues?view=office-scripts)
	 */
	export interface NamedItemArrayValues {
		/**
		 * 名前付きアイテム配列内の各アイテムの型を表します。
		 */
		getTypes(): RangeValueType[][];
		/**
		 * 名前付きアイテムの配列に含まれる各アイテムの値を表します。
		 * 読み取り専用。
		 */
		getValues(): (string | number | boolean)[][];
	}
}
