/// <reference path="../enums/ChartAxisGroup.d.ts"/>
/// <reference path="../enums/ChartAxisType.d.ts"/>
/// <reference path="./ChartAxis.d.ts"/>
declare namespace ExcelScript {
	/**
	 * グラフの軸を表します。
	 * @see [ExcelScript.ChartAxes interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartaxes?view=office-scripts)
	 */
	export interface ChartAxes {
		/**
		 * グラフの項目軸を表します。
		 */
		getCategoryAxis(): ChartAxis;
		/**
		 * 種類とグループで識別された特定の軸を返します。
		 * @param type 軸の種類を指定します。
		 * 詳細は「`ExcelScript.ChartAxisType`」をご覧ください。
		 * @param group 省略可能です。 軸のグループを指定します。
		 * 詳細は「`ExcelScript.ChartAxisGroup`」をご覧ください。
		 */
		getChartAxis(type: ChartAxisType, group?: ChartAxisGroup): ChartAxis;
		/**
		 * 3-D グラフの系列軸を表します。
		 */
		getSeriesAxis(): ChartAxis;
		/**
		 * 軸の数値軸を表します。
		 */
		getValueAxis(): ChartAxis;
	}
}
