declare namespace ExcelScript {
	/**
	 * 条件付き書式の色スケール条件を表します。
	 * @see [ExcelScript.ColorScaleConditionalFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.colorscaleconditionalformat?view=office-scripts)
	 */
	export interface ColorScaleConditionalFormat {
		/**
		 * カラー スケールの条件。2 ポイントのカラー スケールを使用する場合、中間値はオプションです。
		 */
		getCriteria(): ConditionalColorScaleCriteria;
		/**
		 * もし `true`を指定すると、カラー スケールには 3 つのポイント (最小、中点、最大値) が設定されます。
		 * それ以外の場合は、2 つ (最小、最大値) になります。
		 */
		getThreeColorScale(): boolean;
		/**
		 * カラー スケールの条件。2 ポイントのカラー スケールを使用する場合、中間値はオプションです。
		 * @param criteria
		 */
		setCriteria(criteria: ConditionalColorScaleCriteria): void;
	}
}
