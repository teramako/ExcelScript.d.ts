/// <reference path="./ConditionalTextComparisonRule.d.ts" />
declare namespace ExcelScript {
	/**
	 * 特定のテキストの条件付き書式を表します。
	 * @see [ExcelScript.TextConditionalFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.textconditionalformat?view=office-scripts)
	 */
	export interface TextConditionalFormat {
		/**
		 * 条件付き書式のフォント、塗りつぶし、罫線、およびその他のプロパティをカプセル化して、書式オブジェクトを返します。
		 */
		getFormat(): ConditionalRangeFormat;
		/**
		 * 条件付き書式のルール。
		 */
		getRule(): ConditionalTextComparisonRule;
		/**
		 * 条件付き書式のルール。
		 * @param rule
		 */
		setRule(rule: ConditionalTextComparisonRule): void;
	}
}
