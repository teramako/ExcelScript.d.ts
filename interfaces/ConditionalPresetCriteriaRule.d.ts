/// <reference path="../enums/ConditionalFormatPresetCriterion.d.ts" />
declare namespace ExcelScript {
	/**
	 * 事前設定された条件の条件付き書式ルールを表します。
	 * @see [ExcelScript.ConditionalPresetCriteriaRule interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionalpresetcriteriarule?view=office-scripts)
	 */
	export interface ConditionalPresetCriteriaRule {
		/**
		 * 条件付き書式の条件。
		 */
		criterion: ConditionalFormatPresetCriterion;
	}
}
