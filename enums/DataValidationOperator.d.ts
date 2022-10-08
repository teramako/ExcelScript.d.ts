declare namespace ExcelScript {
	/**
	 * データ検証演算子の列挙型を表します。
	 * @see [ExcelScript.DataValidationOperator enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.datavalidationoperator?view=office-scripts)
	 */
	export enum DataValidationOperator {
		between,
		equalTo,
		greaterThan,
		greaterThanOrEqualTo,
		lessThan,
		lessThanOrEqualTo,
		notBetween,
		notEqualTo
	}
}