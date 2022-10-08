declare namespace ExcelScript {
	/**
	 * アイコンの条件付き書式の種類を表します。
	 * @see [ExcelScript.ConditionalFormatIconRuleType enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionalformaticonruletype?view=office-scripts)
	 */
	export enum ConditionalFormatIconRuleType {
		formula,
		invalid,
		number,
		percent,
		percentile
	}
}