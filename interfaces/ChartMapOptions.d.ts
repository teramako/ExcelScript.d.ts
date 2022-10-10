declare namespace ExcelScript {
	/**
	 * 地域マップ グラフのプロパティをカプセル化します。
	 * @see [ExcelScript.ChartMapOptions interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartmapoptions?view=office-scripts)
	 */
	export interface ChartMapOptions {
		/**
		 * 地域マップ グラフの系列マップ ラベル戦略を指定します。
		 */
		getLabelStrategy(): ChartMapLabelStrategy;
		/**
		 * 地域マップ グラフの系列マッピング レベルを指定します。
		 */
		getLevel(): ChartMapAreaLevel;
		/**
		 * 地域マップ グラフの系列投影の種類を指定します。
		 */
		getProjectionType(): ChartMapProjectionType;
		/**
		 * 地域マップ グラフの系列マップ ラベル戦略を指定します。
		 * @param labelStrategy
		 */
		setLabelStrategy(labelStrategy: ChartMapLabelStrategy): void;
		/**
		 * 地域マップ グラフの系列マッピング レベルを指定します。
		 * @param level
		 */
		setLevel(level: ChartMapAreaLevel): void;
		/**
		 * 地域マップ グラフの系列投影の種類を指定します。
		 * @param projectionType
		 */
		setProjectionType(projectionType: ChartMapProjectionType): void;
	}
}
