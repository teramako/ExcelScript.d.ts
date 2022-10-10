declare namespace ExcelScript {
	/**
	 * 条件付き書式の値の種類を表します。
	 * @see [ExcelScript.ConditionalFormatRuleType enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionalformatruletype?view=office-scripts)
	 */
	export enum ConditionalFormatRuleType {
		automatic,
		formula,
		highestValue,
		invalid,
		lowestValue,
		number,
		percent,
		percentile,
	}
}
