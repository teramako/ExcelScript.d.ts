/// <reference path="../enums/ConditionalTopBottomCriterionType.d.ts" />
declare namespace ExcelScript {
	/**
	 * 上/下の条件付き書式のルールを表します。
	 * @see [ExcelScript.ConditionalTopBottomRule interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionaltopbottomrule?view=office-scripts)
	 */
	export interface ConditionalTopBottomRule {
		/**
		 * 数値のランクに対する 1 から 1000、またはパーセントのランクに対する 1 から 100 のランク。
		 */
		rank: number;
		/**
		 * 上または下のランクに基づいて値を書式設定します。
		 */
		type: ConditionalTopBottomCriterionType;
	}
}
