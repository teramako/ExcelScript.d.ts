/// <reference path="./ConditionalPresetCriteriaRule.d.ts" />
declare namespace ExcelScript {
	/**
	 * 平均以上、平均以下、一意の値などの事前設定された条件の条件付き形式を表し、空白、非ブランク、エラー、およびエラーが含まれます。
	 * @see [ExcelScript.PresetCriteriaConditionalFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.presetcriteriaconditionalformat?view=office-scripts)
	 */
	export interface PresetCriteriaConditionalFormat {
		/**
		 * 条件付き書式のフォント、塗りつぶし、罫線、その他のプロパティをカプセル化する format オブジェクトを返します。
		 */
		getFormat(): ConditionalRangeFormat;
		/**
		 * 条件付き書式のルール。
		 */
		getRule(): ConditionalPresetCriteriaRule;
		/**
		 * 条件付き書式のルール。
		 * @param rule
		 */
		setRule(rule: ConditionalPresetCriteriaRule): void;
	}
}
