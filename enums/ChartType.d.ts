declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.ChartType enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.charttype?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This sample creates a column-clustered chart based on the current worksheet's data.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the current worksheet.
	 *   let selectedSheet = workbook.getActiveWorksheet();
	 *
	 *   // Get the data range.
	 *   let range = selectedSheet.getUsedRange();
	 *
	 *   // Insert a chart using the data on the current worksheet.
	 *   let chart = selectedSheet.addChart(ExcelScript.ChartType.columnClustered, range);
	 *
	 *   // Name the chart for easy access in other scripts.
	 *   chart.setName("ColumnChart");
	 * }
	 * ```
	 */
	export enum ChartType {
		area,
		areaStacked,
		areaStacked100,
		barClustered,
		barOfPie,
		barStacked,
		barStacked100,
		boxwhisker,
		bubble,
		bubble3DEffect,
		columnClustered,
		columnStacked,
		columnStacked100,
		coneBarClustered,
		coneBarStacked,
		coneBarStacked100,
		coneCol,
		coneColClustered,
		coneColStacked,
		coneColStacked100,
		cylinderBarClustered,
		cylinderBarStacked,
		cylinderBarStacked100,
		cylinderCol,
		cylinderColClustered,
		cylinderColStacked,
		cylinderColStacked100,
		doughnut,
		doughnutExploded,
		funnel,
		histogram,
		invalid,
		line,
		lineMarkers,
		lineMarkersStacked,
		lineMarkersStacked100,
		lineStacked,
		lineStacked100,
		pareto,
		pie,
		pieExploded,
		pieOfPie,
		pyramidBarClustered,
		pyramidBarStacked,
		pyramidBarStacked100,
		pyramidCol,
		pyramidColClustered,
		pyramidColStacked,
		pyramidColStacked100,
		radar,
		radarFilled,
		radarMarkers,
		regionMap,
		stockHLC,
		stockOHLC,
		stockVHLC,
		stockVOHLC,
		sunburst,
		surface,
		surfaceTopView,
		surfaceTopViewWireframe,
		surfaceWireframe,
		treemap,
		waterfall,
		xyscatter,
		xyscatterLines,
		xyscatterLinesNoMarkers,
		xyscatterSmooth,
		xyscatterSmoothNoMarkers,
	}
}
