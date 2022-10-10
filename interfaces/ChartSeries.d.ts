declare namespace ExcelScript {
	/**
	 * グラフのデータ系列を表します。
	 * @see [ExcelScript.ChartSeries interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartseries?view=office-scripts)
	 */
	export interface ChartSeries {
		/**
		 * 近似曲線のコレクションに新しい近似曲線を追加します。
		 * @param type 傾向線の種類を指定します。 既定値は "Linear" です。
		 * 詳細は「`ExcelScript.ChartTrendline`」をご覧ください。
		 */
		addChartTrendline(type?: ChartTrendlineType): ChartTrendline;
		/**
		 * グラフ系列を削除します。
		 */
		delete(): void;
		/**
		 * 指定した系列のグループを指定します。
		 */
		getAxisGroup(): ChartAxisGroup;
		/**
		 * ヒストグラム図とパレート図のビンのオプションをカプセル化します。
		 */
		getBinOptions(): ChartBinOptions;
		/**
		 * 箱ひげ図グラフのオプションをカプセル化します。
		 */
		getBoxwhiskerOptions(): ChartBoxwhiskerOptions;
		/**
		 * 既定のサイズのパーセンテージを表す 0 (ゼロ) から 300 までの整数値とすることができます。
		 * このプロパティは、バブルチャートにのみ使用できます。
		 */
		getBubbleScale(): number;
		/**
		 * items 配列の挿入順序である、インデックス別の trendline オブジェクトを取得します。
		 * @param index items 配列の挿入順序を表します。
		 */
		getChartTrendline(index: number): ChartTrendline;
		/**
		 * グラフ系列の種類を表します。
		 * 詳細は「`ExcelScript.ChartType`」をご覧ください。
		 */
		getChartType(): ChartType;
		/**
		 * 系列内のすべてのデータ ラベルのコレクションを表します。
		 */
		getDataLabels(): ChartDataLabels;
		/**
		 * グラフ系列の 1 つのディメンションから値を取得します。
		 * これらは、指定したディメンションとグラフ系列のデータのマップ方法に応じて、カテゴリ値またはデータ値のいずれかになります。
		 * @param dimension データの基点である軸の次元。
		 */
		getDimensionValues(dimension: ChartSeriesDimension): string[];
		/**
		 * グラフ系列のドーナツの穴の大きさを表します。
		 * ドーナツグラフとドーナツ分解グラフでのみ有効です。
		 * 無効なグラフ `InvalidArgument` にエラーをスローします。
		 */
		getDoughnutHoleSize(): number;
		/**
		 * 円グラフまたはドーナツ グラフのスライスの展開値を指定します。
		 * 切り出し表示は行われず、スライスの先端が円の中心と一致する場合、0 を返します。
		 */
		getExplosion(): number;
		/**
		 * 系列をフィルター処理する場合に指定します。 等高線グラフには適用されません。
		 */
		getFiltered(): boolean;
		/**
		 * 最初の円グラフまたはドーナツ グラフのスライスの角度を度 (垂直方向から時計回り) で指定します。
		 * 円グラフ、3-D 円グラフ、およびドーナツ グラフにのみ適用されます。
		 * 0 から 360 の範囲内で値を指定できます。
		 */
		getFirstSliceAngle(): number;
		/**
		 * 塗りつぶしと線の書式設定を含むグラフ系列の書式設定を表します。
		 */
		getFormat(): ChartSeriesFormat;
		/**
		 * グラフ系列間に設けられる間隔を表します。
		 * 棒グラフと棒グラフ、および線グラフと円グラフの特定のクラスでのみ有効です。
		 * 無効なグラフに無効な引数例外をスローします。
		 */
		getGapWidth(): number;
		/**
		 * 地域マップ グラフ系列の最大値の色を指定します。
		 */
		getGradientMaximumColor(): string;
		/**
		 * 地域マップ グラフ系列の最大値の種類を指定します。
		 */
		getGradientMaximumType(): ChartGradientStyleType;
		/**
		 * 地域マップ グラフ系列の最大値を指定します。
		 */
		getGradientMaximumValue(): number;
		/**
		 * 地域マップ グラフ系列の中点の値の色を指定します。
		 */
		getGradientMidpointColor(): string;
		/**
		 * 地域マップ グラフ系列の中点値の種類を指定します。
		 */
		getGradientMidpointType(): ChartGradientStyleType;
		/**
		 * 地域マップ グラフ系列の中点の値を指定します。
		 */
		getGradientMidpointValue(): number;
		/**
		 * 地域マップ グラフ系列の最小値の色を指定します。
		 */
		getGradientMinimumColor(): string;
		/**
		 * 地域マップ グラフ系列の最小値の種類を指定します。
		 */
		getGradientMinimumType(): ChartGradientStyleType;
		/**
		 * 地域マップ グラフ系列の最小値を指定します。
		 */
		getGradientMinimumValue(): number;
		/**
		 * 地域マップ グラフの系列グラデーション スタイルを指定します。
		 */
		getGradientStyle(): ChartGradientStyle;
		/**
		 * 系列にデータ ラベルが含む場合を指定します。
		 */
		getHasDataLabels(): boolean;
		/**
		 * 系列内の負のデータ ポイントの塗りつぶしの色を指定します。
		 */
		getInvertColor(): string;
		/**
		 * True の場合Excelに対応する場合は、アイテム内のパターンを反転します。
		 */
		getInvertIfNegative(): boolean;
		/**
		 * リージョン マップ グラフのオプションをカプセル化します。
		 */
		getMapOptions(): ChartMapOptions;
		/**
		 * グラフ系列のマーカーの背景色を指定します。
		 */
		getMarkerBackgroundColor(): string;
		/**
		 * グラフ系列のマーカーの前景色を指定します。
		 */
		getMarkerForegroundColor(): string;
		/**
		 * グラフ系列のマーカー サイズを指定します。
		 */
		getMarkerSize(): number;
		/**
		 * グラフ系列のマーカー スタイルを指定します。
		 * 詳細は「`ExcelScript.ChartMarkerStyle`」をご覧ください。
		 */
		getMarkerStyle(): ChartMarkerStyle;
		/**
		 * グラフ内の系列の名前を指定します。
		 * 名前の長さは 255 文字を超えることはできません。
		 */
		getName(): string;
		/**
		 * 横棒と縦棒の配置方法を指定します。
		 * –100 ~ 100 の値を指定できます。
		 * 2-D 横棒グラフと 2-D 縦棒グラフにのみ適用されます。
		 */
		getOverlap(): number;
		/**
		 * ツリーマップ グラフの系列の親ラベル戦略領域を指定します。
		 */
		getParentLabelStrategy(): ChartParentLabelStrategy;
		/**
		 * グラフ グループ内のグラフ系列のプロット順序を指定します。
		 */
		getPlotOrder(): number;
		/**
		 * 系列内のすべてのポイントのコレクションを返します。
		 */
		getPoints(): ChartPoint[];
		/**
		 * 円グラフまたは円グラフの 2 番目のセクションのサイズを、プライマリ 円グラフのサイズに対する割合で指定します。
		 * 5 から 200 の範囲内で値を指定できます。
		 */
		getSecondPlotSize(): number;
		/**
		 * ウォーターフォール グラフにコネクタ線を表示するかどうかを指定します。
		 */
		getShowConnectorLines(): boolean;
		/**
		 * 系列内のデータ ラベルごとに引き出し線を表示するかどうかを指定します。
		 */
		getShowLeaderLines(): boolean;
		/**
		 * 系列に影が付く場合を指定します。
		 */
		getShowShadow(): boolean;
		/**
		 * 系列が滑らかな場合に指定します。
		 * 線グラフと散布図にのみ適用されます。
		 */
		getSmooth(): boolean;
		/**
		 * 円グラフまたは円グラフの 2 つのセクションを分割する方法を指定します。
		 */
		getSplitType(): ChartSplitType;
		/**
		 * 円グラフまたは棒グラフの 2 つのセクションを分割するしきい値を指定します。
		 */
		getSplitValue(): number;
		/**
		 * 系列内の傾向線のコレクション。
		 */
		getTrendlines(): ChartTrendline[];
		/**
		 * True の場合Excelデータ マーカーに異なる色またはパターンを割り当てる必要があります。
		 * グラフに含まれるデータ系列は 1 つだけでなければなりません。
		 */
		getVaryByCategories(): boolean;
		/**
		 * グラフ系列の誤差範囲オブジェクトを表します。
		 */
		getXErrorBars(): ChartErrorBars;
		/**
		 * グラフ系列の誤差範囲オブジェクトを表します。
		 */
		getYErrorBars(): ChartErrorBars;
		/**
		 * 指定した系列のグループを指定します。
		 * @param axisGroup
		 */
		setAxisGroup(axisGroup: ChartAxisGroup): void;
		/**
		 * 既定のサイズのパーセンテージを表す 0 (ゼロ) から 300 までの整数値とすることができます。
		 * このプロパティは、バブルチャートにのみ使用できます。
		 * @param bubbleScale
		 */
		setBubbleScale(bubbleScale: number): void;
		/**
		 * グラフ系列のバブル サイズを設定します。
		 * バブル チャートにのみ適用されます。
		 * @param sourceData ソース `Range` データに対応するオブジェクト。
		 */
		setBubbleSizes(sourceData: Range): void;
		/**
		 * グラフ系列の種類を表します。
		 * 詳細は「`ExcelScript.ChartType`」をご覧ください。
		 * @param chartType
		 */
		setChartType(chartType: ChartType): void;
		/**
		 * グラフ系列のドーナツの穴の大きさを表します。
		 * ドーナツグラフとドーナツ分解グラフでのみ有効です。
		 * 無効なグラフ `InvalidArgument` にエラーをスローします。
		 * @param doughnutHoleSize
		 */
		setDoughnutHoleSize(doughnutHoleSize: number): void;
		/**
		 * 円グラフまたはドーナツ グラフのスライスの展開値を指定します。
		 * 切り出し表示は行われず、スライスの先端が円の中心と一致する場合、0 を返します。
		 * @param explosion
		 */
		setExplosion(explosion: number): void;
		/**
		 * 系列をフィルター処理する場合に指定します。
		 * 等高線グラフには適用されません。
		 * @param filtered
		 */
		setFiltered(filtered: boolean): void;
		/**
		 * 最初の円グラフまたはドーナツ グラフのスライスの角度を度 (垂直方向から時計回り) で指定します。
		 * 円グラフ、3-D 円グラフ、およびドーナツ グラフにのみ適用されます。
		 * 0 から 360 の範囲内で値を指定できます。
		 * @param firstSliceAngle
		 */
		setFirstSliceAngle(firstSliceAngle: number): void;
		/**
		 * グラフ系列間に設けられる間隔を表します。
		 * 棒グラフと棒グラフ、および線グラフと円グラフの特定のクラスでのみ有効です。無効なグラフに無効な引数例外をスローします。
		 * @param gapWidth
		 */
		setGapWidth(gapWidth: number): void;
		/**
		 * 地域マップ グラフ系列の最大値の色を指定します。
		 * @param gradientMaximumColor
		 */
		setGradientMaximumColor(gradientMaximumColor: string): void;
		/**
		 * 地域マップ グラフ系列の最大値の種類を指定します。
		 * @param gradientMaximumType
		 */
		setGradientMaximumType(
			gradientMaximumType: ChartGradientStyleType,
		): void;
		/**
		 * 地域マップ グラフ系列の最大値を指定します。
		 * @param gradientMaximumValue
		 */
		setGradientMaximumValue(gradientMaximumValue: number): void;
		/**
		 * 地域マップ グラフ系列の中点の値の色を指定します。
		 * @param gradientMidpointColor
		 */
		setGradientMidpointColor(gradientMidpointColor: string): void;
		/**
		 * 地域マップ グラフ系列の中点値の種類を指定します。
		 * @param gradientMidpointType
		 */
		setGradientMidpointType(
			gradientMidpointType: ChartGradientStyleType,
		): void;
		/**
		 * 地域マップ グラフ系列の中点の値を指定します。
		 * @param gradientMidpointValue
		 */
		setGradientMidpointValue(gradientMidpointValue: number): void;
		/**
		 * 地域マップ グラフ系列の最小値の色を指定します。
		 * @param gradientMinimumColor
		 */
		setGradientMinimumColor(gradientMinimumColor: string): void;
		/**
		 * 地域マップ グラフ系列の最小値の種類を指定します。
		 * @param gradientMinimumType
		 */
		setGradientMinimumType(
			gradientMinimumType: ChartGradientStyleType,
		): void;
		/**
		 * 地域マップ グラフ系列の最小値を指定します。
		 * @param gradientMinimumValue
		 */
		setGradientMinimumValue(gradientMinimumValue: number): void;
		/**
		 * 地域マップ グラフの系列グラデーション スタイルを指定します。
		 * @param gradientStyle
		 */
		setGradientStyle(gradientStyle: ChartGradientStyle): void;
		/**
		 * 系列にデータ ラベルが含む場合を指定します。
		 * @param hasDataLabels
		 */
		setHasDataLabels(hasDataLabels: boolean): void;
		/**
		 * 系列内の負のデータ ポイントの塗りつぶしの色を指定します。
		 * @param invertColor
		 */
		setInvertColor(invertColor: string): void;
		/**
		 * True の場合Excelに対応する場合は、アイテム内のパターンを反転します。
		 * @param invertIfNegative
		 */
		setInvertIfNegative(invertIfNegative: boolean): void;
		/**
		 * グラフ系列のマーカーの背景色を指定します。
		 * @param markerBackgroundColor
		 */
		setMarkerBackgroundColor(markerBackgroundColor: string): void;
		/**
		 * グラフ系列のマーカーの前景色を指定します。
		 * @param markerForegroundColor
		 */
		setMarkerForegroundColor(markerForegroundColor: string): void;
		/**
		 * グラフ系列のマーカー サイズを指定します。
		 * @param markerSize
		 */
		setMarkerSize(markerSize: number): void;
		/**
		 * グラフ系列のマーカー スタイルを指定します。
		 * 詳細は「`ExcelScript.ChartMarkerStyle`」をご覧ください。
		 * @param markerStyle
		 */
		setMarkerStyle(markerStyle: ChartMarkerStyle): void;
		/**
		 * グラフ内の系列の名前を指定します。
		 * 名前の長さは 255 文字を超えることはできません。
		 * @param name
		 */
		setName(name: string): void;
		/**
		 * 横棒と縦棒の配置方法を指定します。
		 * –100 ~ 100 の値を指定できます。
		 * 2-D 横棒グラフと 2-D 縦棒グラフにのみ適用されます。
		 * @param overlap
		 */
		setOverlap(overlap: number): void;
		/**
		 * ツリーマップ グラフの系列の親ラベル戦略領域を指定します。
		 * @param parentLabelStrategy
		 */
		setParentLabelStrategy(
			parentLabelStrategy: ChartParentLabelStrategy,
		): void;
		/**
		 * グラフ グループ内のグラフ系列のプロット順序を指定します。
		 * @param plotOrder
		 */
		setPlotOrder(plotOrder: number): void;
		/**
		 * 円グラフまたは円グラフの 2 番目のセクションのサイズを、プライマリ 円グラフのサイズに対する割合で指定します。
		 * 5 から 200 の範囲内で値を指定できます。
		 * @param secondPlotSize
		 */
		setSecondPlotSize(secondPlotSize: number): void;
		/**
		 * ウォーターフォール グラフにコネクタ線を表示するかどうかを指定します。
		 * @param showConnectorLines
		 */
		setShowConnectorLines(showConnectorLines: boolean): void;
		/**
		 * 系列内のデータ ラベルごとに引き出し線を表示するかどうかを指定します。
		 * @param showLeaderLines
		 */
		setShowLeaderLines(showLeaderLines: boolean): void;
		/**
		 * 系列に影が付く場合を指定します。
		 * @param showShadow
		 */
		setShowShadow(showShadow: boolean): void;
		/**
		 * 系列が滑らかな場合に指定します。 線グラフと散布図にのみ適用されます。
		 * @param smooth
		 */
		setSmooth(smooth: boolean): void;
		/**
		 * 円グラフまたは円グラフの 2 つのセクションを分割する方法を指定します。
		 * @param splitType
		 */
		setSplitType(splitType: ChartSplitType): void;
		/**
		 * 円グラフまたは棒グラフの 2 つのセクションを分割するしきい値を指定します。
		 * @param splitValue
		 */
		setSplitValue(splitValue: number): void;
		/**
		 * グラフ系列の値を設定します。
		 * 散布図の場合は、y 軸の値を参照します。
		 * @param sourceData
		 */
		setValues(sourceData: Range): void;
		/**
		 * True の場合Excelデータ マーカーに異なる色またはパターンを割り当てる必要があります。
		 * グラフに含まれるデータ系列は 1 つだけでなければなりません。
		 * @param varyByCategories
		 */
		setVaryByCategories(varyByCategories: boolean): void;
		/**
		 * グラフ系列の x 軸の値を設定します。
		 * 散布図にのみ適用されます。
		 * @param sourceData ソース `Range` データに対応するオブジェクト。
		 */
		setXAxisValues(sourceData: Range): void;
	}
}
