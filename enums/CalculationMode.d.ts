declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.CalculationMode enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.calculationmode?view=office-scripts)
	 */
	export enum CalculationMode {
		/**
		 * Excel が新しい数式の結果を計算する既定の再計算動作は、関連するデータが変更されるたびに行われます。
		 */
		automatic,
		/**
		 * 数式がデータ テーブル内にある場合を除き、関連するデータが変更されるたびに新しい数式の結果を計算します。
		 */
		automaticExceptTables,
		/**
		 * 計算は、ユーザーまたはアドインが要求した場合にのみ発生します。
		 */
		manual,
	}
}
