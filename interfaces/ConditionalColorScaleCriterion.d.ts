/// <reference path="../enums/ConditionalFormatColorCriterionType.d.ts"/>
declare namespace ExcelScript {
	/**
	 * 型、値、および色を含む色スケール基準を表します。
	 * @see [ExcelScript.ConditionalColorScaleCriterion interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionalcolorscalecriterion?view=office-scripts)
	 */
	export interface ConditionalColorScaleCriterion {
		/**
		 * カラー スケールの色の HTML カラー コード表現 # (FF00000 は赤を表すなど)。
		 */
		color?: string;
		/**
		 * 数値、数式、または `null` (if `type` is `lowestValue`).
		 */
		formula?: string;
		/**
		 * 条件式の基準の基になる条件。
		 */
		type: ConditionalFormatColorCriterionType;
	}
}
