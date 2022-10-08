declare namespace ExcelScript {
	/**
	 * 条件付き書式の色基準の種類を表します。
	 * @see [ExcelScript.ConditionalFormatColorCriterionType enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionalformatcolorcriteriontype?view=office-scripts)
	 */
	export enum ConditionalFormatColorCriterionType {
		formula,
		highestValue,
		invalid,
		lowestValue,
		number,
		percent,
		percentile
	}
}