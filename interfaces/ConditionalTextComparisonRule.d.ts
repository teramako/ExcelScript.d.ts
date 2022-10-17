/// <reference path="../enums/ConditionalTextOperator.d.ts" />
declare namespace ExcelScript {
	/**
	 * セル値の条件付き書式ルールを表します。
	 * @see [ExcelScript.ConditionalTextComparisonRule interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionaltextcomparisonrule?view=office-scripts)
	 */
	export interface ConditionalTextComparisonRule {
		/**
		 * テキストの条件付き書式の演算子。
		 */
		operator: ConditionalTextOperator;
		/**
		 * 条件付き書式のテキスト値。
		 */
		text: string;
	}
}
