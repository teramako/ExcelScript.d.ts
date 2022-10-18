/// <reference path="../enums/ChartDisplayBlanksAs.d.ts"/>
/// <reference path="../enums/ChartPlotBy.d.ts"/>
/// <reference path="../enums/ChartType.d.ts"/>
/// <reference path="../enums/ImageFittingMode.d.ts"/>
/// <reference path="./ChartAreaFormat.d.ts"/>
/// <reference path="./ChartAxes.d.ts"/>
/// <reference path="./ChartDataLabels.d.ts"/>
/// <reference path="./ChartLegend.d.ts"/>
/// <reference path="./ChartPivotOptions.d.ts"/>
/// <reference path="./ChartPlotArea.d.ts"/>
/// <reference path="./ChartSeries.d.ts"/>
/// <reference path="./ChartTitle.d.ts"/>
/// <reference path="./Worksheet.d.ts"/>
declare namespace ExcelScript {
	/**
	 * ブック内のグラフ オブジェクトを表します。
	 * @see [ExcelScript.Chart interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chart?view=office-scripts)
	 */
	export interface Chart {
		/**
		 * Excel UI でグラフをアクティブにします。
		 */
		activate(): void;
		/**
		 * コレクションに新しい系列を追加します。
		 * 新しい追加された系列は、値、x 軸の値、またはバブル サイズが設定されるまで表示されません (グラフの種類によって異なります)。
		 * @param name 省略可能です。 系列の名前。
		 * @param index 省略可能です。 追加する系列のインデックス値。 0 を起点とする番号になります。
		 */
		addChartSeries(name?: string, index?: number): ChartSeries;
		/**
		 * グラフ オブジェクトを削除します。
		 */
		delete(): void;
		/**
		 * グラフの軸を表します。
		 */
		getAxes(): ChartAxes;
		/**
		 * ソース カテゴリ ラベルのレベルを参照して、グラフ カテゴリ ラベル レベル列挙定数を指定します。
		 */
		getCategoryLabelLevel(): number;
		/**
		 * グラフの種類を指定します。
		 * 詳細は「`ExcelScript.ChartType`」をご覧ください。
		 */
		getChartType(): ChartType;
		/**
		 * グラフのデータ ラベルを表します。
		 */
		getDataLabels(): ChartDataLabels;
		/**
		 * 空白のセルをグラフにプロットする方法を指定します。
		 */
		getDisplayBlanksAs(): ChartDisplayBlanksAs;
		/**
		 * グラフ領域の書式設定プロパティをカプセル化します。
		 */
		getFormat(): ChartAreaFormat;
		/**
		 * グラフ オブジェクトの高さをポイントで指定します。
		 */
		getHeight(): number;
		/**
		 * グラフの一意の ID。
		 */
		getId(): string;
		/**
		 * 指定したサイズに合わせてグラフを拡大、縮小することで、グラフを Base64 でエンコードされた画像としてレンダリングします。
		 * 縦横比はサイズ変更の一部として保持されます。
		 * @param width 省略可能。結果の画像の希望する幅。
		 * @param height 省略可能。結果の画像の希望する高さ。
		 * @param fittingMode 省略可能。 グラフを指定したディメンションにスケールするために使用するメソッド (高さと幅の両方が設定されている場合)。
		 */
		getImage(
			width?: number,
			height?: number,
			fittingMode?: ImageFittingMode,
		): string;
		/**
		 * グラフの左側からワークシートの原点までの距離 (ポイント単位)。
		 */
		getLeft(): number;
		/**
		 * グラフの凡例を表します。
		 */
		getLegend(): ChartLegend;
		/**
		 * グラフ オブジェクトの名前を指定します。
		 */
		getName(): string;
		/**
		 * ピボット グラフのオプションをカプセル化します。
		 */
		getPivotOptions(): ChartPivotOptions;
		/**
		 * グラフのプロット領域を表します。
		 */
		getPlotArea(): ChartPlotArea;
		/**
		 * 列や行がグラフのデータ系列として使用される方法を指定します。
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
		getPlotBy(): ChartPlotBy;
		/**
		 * true の場合、可視セルだけがプロットされます。
		 * false の場合、可視セルと非表示セルの両方がプロットされます。
		 */
		getPlotVisibleOnly(): boolean;
		/**
		 * グラフの 1 つのデータ系列またはデータ系列のコレクションを表します。
		 *
		 * @example
		 * ```
		 * // This sample sets the overlap of the columns in a chart named "ColumnClusteredChart".
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the current worksheet.
		 *   let selectedSheet = workbook.getActiveWorksheet();
		 *
		 *   // Get an existing chart named "ColumnClusteredChart".
		 *   let chart = selectedSheet.getChart("ColumnClusteredChart");
		 *
		 *   // Set the overlap of every column of each series within a category.
		 *   let seriesList = chart.getSeries();
		 *   seriesList.forEach((series) => {
		 *     // An overlap of 25 means the columns have 25% of their length overlapping with the adjacent columns in the same category.
		 *     series.setOverlap(25);
		 *   });
		 * }
		 * ```
		 */
		getSeries(): ChartSeries[];
		/**
		 * ソース 系列名のレベルを参照して、グラフ系列名レベルの列挙定数を指定します。
		 */
		getSeriesNameLevel(): number;
		/**
		 * すべてのフィールド ボタンを 1 つのウィンドウに表示するかどうかをピボットグラフ。
		 */
		getShowAllFieldButtons(): boolean;
		/**
		 * 値が値軸の最大値より大きい場合にデータ ラベルを表示するかどうかを指定します。
		 * 値軸がデータ ポイントのサイズよりも小さくなる場合は、このプロパティを使用してデータ ラベルを表示するかどうかを設定できます。
		 * このプロパティは、2-D グラフにのみ使用できます。
		 */
		getShowDataLabelsOverMaximum(): boolean;
		/**
		 * グラフのグラフ スタイルを指定します。
		 */
		getStyle(): number;
		/**
		 * 指定したグラフのタイトル (タイトルのテキスト、表示/非表示、位置、書式設定など) を表します。
		 */
		getTitle(): ChartTitle;
		/**
		 * オブジェクトの上端から行 1 の上端までの距離 (ワークシート上) またはグラフ領域の上端 (グラフ上) をポイントで指定します。
		 */
		getTop(): number;
		/**
		 * グラフ オブジェクトの幅をポイント単位で指定します。
		 */
		getWidth(): number;
		/**
		 * 現在のグラフを含んでいるワークシート。
		 */
		getWorksheet(): Worksheet;
		/**
		 * ソース カテゴリ ラベルのレベルを参照して、グラフ カテゴリ ラベル レベル列挙定数を指定します。
		 * @param categoryLabelLevel
		 */
		setCategoryLabelLevel(categoryLabelLevel: number): void;
		/**
		 * グラフの種類を指定します。
		 * 詳細は「`ExcelScript.ChartType`」をご覧ください。
		 * @param chartType
		 */
		setChartType(chartType: ChartType): void;
		/**
		 * グラフの元データをリセットします。
		 * @param sourceData ソース データに対応する range オブジェクト。
		 * @param seriesBy 列や行がグラフのデータ系列として使用される方法を指定します。
		 * 自動 (既定)、行、列のいずれかを指定できます。
		 * 詳細は「`ExcelScript.ChartSeriesBy`」をご覧ください。
		 */
		setData(sourceData: Range, seriesBy?: ChartSeriesBy): void;
		/**
		 * 空白のセルをグラフにプロットする方法を指定します。
		 * @param displayBlanksAs
		 */
		setDisplayBlanksAs(displayBlanksAs: ChartDisplayBlanksAs): void;
		/**
		 * グラフ オブジェクトの高さをポイントで指定します。
		 * @param height
		 */
		setHeight(height: number): void;
		/**
		 * グラフの左側からワークシートの原点までの距離 (ポイント単位)。
		 * @param left
		 */
		setLeft(left: number): void;
		/**
		 * グラフ オブジェクトの名前を指定します。
		 * @param name
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
		setName(name: string): void;
		/**
		 * 列や行がグラフのデータ系列として使用される方法を指定します。
		 * @param plotBy
		 */
		setPlotBy(plotBy: ChartPlotBy): void;
		/**
		 * true の場合、可視セルだけがプロットされます。
		 * false の場合、可視セルと非表示セルの両方がプロットされます。
		 * @param plotVisibleOnly
		 */
		setPlotVisibleOnly(plotVisibleOnly: boolean): void;
		/**
		 * ワークシート上のセルを基準にしてグラフを配置します。
		 * @param startCell 開始セル。これは、グラフの移動先です。
		 * 開始セルは、ユーザーの右から左への表示の設定に応じて、左上のセルか、右上のセルとなります。
		 * @param endCell 省略可能。終了セル。
		 * 指定されている場合、グラフの幅と高さは、このセルまたは範囲を完全にカバーするように設定されます。
		 */
		setPosition(startCell: Range | string, endCell?: Range | string): void;
		/**
		 * ソース 系列名のレベルを参照して、グラフ系列名レベルの列挙定数を指定します。
		 * @param seriesNameLevel
		 */
		setSeriesNameLevel(seriesNameLevel: number): void;
		/**
		 * すべてのフィールド ボタンを 1 つのウィンドウに表示するかどうかをピボットグラフ。
		 * @param showAllFieldButtons
		 */
		setShowAllFieldButtons(showAllFieldButtons: boolean): void;
		/**
		 * 値が値軸の最大値より大きい場合にデータ ラベルを表示するかどうかを指定します。
		 * 値軸がデータ ポイントのサイズよりも小さくなる場合は、このプロパティを使用してデータ ラベルを表示するかどうかを設定できます。
		 * このプロパティは、2-D グラフにのみ使用できます。
		 * @param showDataLabelsOverMaximum
		 */
		setShowDataLabelsOverMaximum(showDataLabelsOverMaximum: boolean): void;
		/**
		 * グラフのグラフ スタイルを指定します。
		 * @param style
		 */
		setStyle(style: number): void;
		/**
		 * オブジェクトの上端から行 1 の上端までの距離 (ワークシート上) またはグラフ領域の上端 (グラフ上) をポイントで指定します。
		 * @param top
		 */
		setTop(top: number): void;
		/**
		 * グラフ オブジェクトの幅をポイント単位で指定します。
		 * @param width
		 */
		setWidth(width: number): void;
	}
}
