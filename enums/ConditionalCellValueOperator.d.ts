declare namespace ExcelScript {
	/**
	 * テキストの条件付き書式の型の演算子を表します。
	 * @see [ExcelScript.ConditionalCellValueOperator enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionalcellvalueoperator?view=office-scripts)
	 */
	export enum ConditionalCellValueOperator {
		between,
		equalTo,
		greaterThan,
		greaterThanOrEqual,
		invalid,
		lessThan,
		lessThanOrEqual,
		notBetween,
		notEqualTo,
	}
}
