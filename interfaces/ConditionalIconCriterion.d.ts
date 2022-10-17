/// <reference path="../enums/ConditionalFormatIconRuleType.d.ts" />
/// <reference path="../enums/ConditionalIconCriterionOperator.d.ts" />
/// <reference path="./Icon.d.ts" />
declare namespace ExcelScript {
	/**
	 * アイコン セットを使用しない場合は、種類、値、演算子、およびオプションのカスタム アイコンを含むアイコン条件を表します。
	 * @see [ExcelScript.ConditionalIconCriterion interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionaliconcriterion?view=office-scripts)
	 */
	export interface ConditionalIconCriterion {
		/**
		 * 既定のアイコン セットと異なる場合は、現在の条件のカスタム アイコンが `null` 返されます。
		 */
		customIcon?: Icon;
		/**
		 * 種類によっては数値または数式。
		 */
		formula: string;
		/**
		 * `greaterThan` または `greaterThanOrEqual` 、アイコンの条件付き書式のルールの種類ごとに指定します。
		 */
		operator: ConditionalIconCriterionOperator;
		/**
		 * アイコンの条件式は次のものに基づいています。
		 */
		type: ConditionalFormatIconRuleType;
	}
}
