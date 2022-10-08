declare namespace ExcelScript {
	/**
	 * グラフ系列レイアウトの地域投影の種類を表します。
	 * これは地域マップ グラフにのみ適用されます。
	 * @see [ExcelScript.ChartMapProjectionType enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartmapprojectiontype?view=office-scripts)
	 */
	export enum ChartMapProjectionType {
		albers,
		automatic,
		mercator,
		miller,
		robinson
	}
}