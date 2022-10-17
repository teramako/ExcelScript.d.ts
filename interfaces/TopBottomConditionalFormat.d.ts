/// <reference path="./ConditionalTopBottomRule.d.ts" />
declare namespace ExcelScript {
	/**
	 * 上/下の条件付き書式を表します。
	 * @see [ExcelScript.TopBottomConditionalFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.topbottomconditionalformat?view=office-scripts)
	 */
	export interface TopBottomConditionalFormat {
		/**
		 * 条件付き書式のフォント、塗りつぶし、罫線、その他のプロパティをカプセル化する format オブジェクトを返します。
		 */
		getFormat(): ConditionalRangeFormat;
		/**
		 * 上/下の条件付き書式の条件。
		 */
		getRule(): ConditionalTopBottomRule;
		/**
		 * 上/下の条件付き書式の条件。
		 * @param rule
		 */
		setRule(rule: ConditionalTopBottomRule): void;
	}
}
