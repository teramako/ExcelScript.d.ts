declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.ChartPlotBy enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartplotby?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This sample performs the "Switch Row/Column" action on a chart named "ColumnClusteredChart".
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the current worksheet.
	 *   let selectedSheet = workbook.getActiveWorksheet();
	 *
	 *   // Get an existing chart named "ColumnClusteredChart".
	 *   let columnClusteredChart = selectedSheet.getChart("ColumnClusteredChart");
	 *
	 *   // Switch the row and column for the chart's data source.
	 *   if (columnClusteredChart.getPlotBy() === ExcelScript.ChartPlotBy.columns) {
	 *     // If the chart is grouped by columns, switch it to rows.
	 *     columnClusteredChart.setPlotBy(ExcelScript.ChartPlotBy.rows);
	 *   } else {
	 *     // If the chart is grouped by rows, switch it to columns.
	 *     columnClusteredChart.setPlotBy(ExcelScript.ChartPlotBy.columns);
	 *   }
	 * }
	 * ```
	 */
	export enum ChartPlotBy {
		columns,
		rows,
	}
}
