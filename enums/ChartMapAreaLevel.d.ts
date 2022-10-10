declare namespace ExcelScript {
	/**
	 * グラフ系列のマッピング レベルを表します。
	 * これは地域マップ グラフにのみ適用されます。
	 * @see [ExcelScript.ChartMapAreaLevel enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartmaparealevel?view=office-scripts)
	 */
	export enum ChartMapAreaLevel {
		automatic,
		city,
		continent,
		country,
		county,
		dataOnly,
		state,
		world,
	}
}
