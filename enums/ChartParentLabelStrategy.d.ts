declare namespace ExcelScript {
	/**
	 * グラフ系列レイアウトの親ラベル戦略を表します。
	 * これはツリーマップ グラフにのみ適用されます。
	 * @see [ExcelScript.ChartParentLabelStrategy enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartparentlabelstrategy?view=office-scripts)
	 */
	export enum ChartParentLabelStrategy {
		banner,
		none,
		overlapping
	}
}