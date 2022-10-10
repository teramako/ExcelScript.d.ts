declare namespace ExcelScript {
	/**
	 * 上/下の値フィルターの条件を表します。
	 * @see [ExcelScript.PivotFilterTopBottomCriterion enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.pivotfiltertopbottomcriterion?view=office-scripts)
	 */
	export enum PivotFilterTopBottomCriterion {
		bottomItems,
		bottomPercent,
		bottomSum,
		invalid,
		topItems,
		topPercent,
		topSum,
	}
}
