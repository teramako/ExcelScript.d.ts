declare namespace ExcelScript {
	/**
	 * 系列が行別か列別かを指定します。
	 * デスクトップExcel場合、"auto" オプションはソース データの図形を検査して、データが行または列別であるかどうかを自動的に推測します。
	 * このExcel on the web"auto" は既定で "columns" になります。 
	 * @see [ExcelScript.ChartSeriesBy enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartseriesby?view=office-scripts)
	 */
	export enum ChartSeriesBy {
		/**
		 * デスクトップExcel場合、"auto" オプションはソース データの図形を検査して、データが行または列別であるかどうかを自動的に推測します。
		 * このExcel on the web"auto" は既定で "columns" になります。
		 */
		auto,
		columns,
		rows
	}
}