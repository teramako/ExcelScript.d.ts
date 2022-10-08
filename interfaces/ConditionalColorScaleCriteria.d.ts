declare namespace ExcelScript {
	/**
	 * カラー スケールの条件を表します。
	 * @see [ExcelScript.ConditionalColorScaleCriteria interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionalcolorscalecriteria?view=office-scripts)
	 */
	export interface ConditionalColorScaleCriteria {
		/**
		 * カラー スケール条件の最大ポイント。
		 */
		maximum: ConditionalColorScaleCriterion;
		/**
		 * カラー スケールの基準の中間点 (カラー スケールが 3 色スケールの場合)。
		 */
		midpoint?: ConditionalColorScaleCriterion;
		/**
		 * 色スケール基準の最小点。
		 */
		minimum: ConditionalColorScaleCriterion;
	}
}