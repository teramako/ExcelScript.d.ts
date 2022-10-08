declare namespace ExcelScript {
	/**
	 * テキストの条件付き書式の型の演算子を表します。
	 * @see [ExcelScript.ConditionalTextOperator enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionaltextoperator?view=office-scripts)
	 */
	export enum ConditionalTextOperator {
		beginsWith,
		contains,
		endsWith,
		invalid,
		notContains
	}
}