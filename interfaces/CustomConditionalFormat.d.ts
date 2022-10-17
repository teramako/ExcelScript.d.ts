/// <reference path="./ConditionalFormatRule.d.ts" />
declare namespace ExcelScript {
	/**
	 * ユーザー設定の条件付き書式の種類を表します。
	 * @see [ExcelScript.CustomConditionalFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.customconditionalformat?view=office-scripts)
	 */
	export interface CustomConditionalFormat {
		/**
		 * 条件付き書式のフォント、塗りつぶし、罫線、その他のプロパティをカプセル化する format オブジェクトを返します。
		 */
		getFormat(): ConditionalRangeFormat;
		/**
		 * この条件付き `Rule` 形式のオブジェクトを指定します。
		 */
		getRule(): ConditionalFormatRule;
	}
}
