/// <reference path="../enums/ConditionalFormatRuleType.d.ts" />
declare namespace ExcelScript {
	/**
	 * データ バーのルールの種類を表します。
	 * @see [ExcelScript.ConditionalDataBarRule interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionaldatabarrule?view=office-scripts)
	 */
	export interface ConditionalDataBarRule {
		/**
		 * 必要に応じて、データ バー ルールを評価する数式。
		 */
		formula?: string;
		/**
		 * データ バーのルールの種類。
		 */
		type: ConditionalFormatRuleType;
	}
}
