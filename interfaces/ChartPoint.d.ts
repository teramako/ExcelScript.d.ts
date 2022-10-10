declare namespace ExcelScript {
	/**
	 * グラフの系列のポイントを表します。
	 * @see [ExcelScript.ChartPoint interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartpoint?view=office-scripts)
	 */
	export interface ChartPoint {
		/**
		 * グラフ データ ポイントのデータ ラベルを返します。
		 */
		getDataLabel(): ChartDataLabel;
		/**
		 * グラフのポイントの書式設定プロパティをカプセル化します。
		 */
		getFormat(): ChartPointFormat;
		/**
		 * データ ポイントにデータ ラベルが含されているかどうかを表します。
		 * 等高線グラフには適用されません。
		 */
		getHasDataLabel(): boolean;
		/**
		 * データ ポイントのマーカー背景色の HTML カラー コード表現 # (FF0000 は赤を表すなど)。
		 */
		getMarkerBackgroundColor(): string;
		/**
		 * データ ポイントのマーカー前景色の HTML カラー コード表現 # (FF0000 は赤を表すなど)。
		 */
		getMarkerForegroundColor(): string;
		/**
		 * データ ポイントのマーカー サイズを表します。
		 */
		getMarkerSize(): number;
		/**
		 * データ ポイントのマーカー スタイルを表します。
		 * 詳細は「`ExcelScript.ChartMarkerStyle`」をご覧ください。
		 */
		getMarkerStyle(): ChartMarkerStyle;
		/**
		 * グラフのポイントの値を返します。
		 */
		getValue(): number;
		/**
		 * データ ポイントにデータ ラベルが含されているかどうかを表します。
		 * 等高線グラフには適用されません。
		 * @param hasDataLabel
		 */
		setHasDataLabel(hasDataLabel: boolean): void;
		/**
		 * データ ポイントのマーカー背景色の HTML カラー コード表現 # (FF0000 は赤を表すなど)。
		 * @param markerBackgroundColor
		 */
		setMarkerBackgroundColor(markerBackgroundColor: string): void;
		/**
		 * データ ポイントのマーカー前景色の HTML カラー コード表現 # (FF0000 は赤を表すなど)。
		 * @param markerForegroundColor
		 */
		setMarkerForegroundColor(markerForegroundColor: string): void;
		/**
		 * データ ポイントのマーカー サイズを表します。
		 * @param markerSize
		 */
		setMarkerSize(markerSize: number): void;
		/**
		 * データ ポイントのマーカー スタイルを表します。
		 * 詳細は「`ExcelScript.ChartMarkerStyle`」をご覧ください。
		 * @param markerStyle
		 */
		setMarkerStyle(markerStyle: ChartMarkerStyle): void;
	}
}
