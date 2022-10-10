/// <reference path="../enums/ChartDataLabelPosition.d.ts"/>
/// <reference path="../enums/ChartTextHorizontalAlignment.d.ts"/>
/// <reference path="../enums/ChartTextVerticalAlignment.d.ts"/>
/// <reference path="./ChartDataLabelFormat.d.ts"/>
declare namespace ExcelScript {
	/**
	 * グラフのポイントにあるすべてのデータ ラベルのコレクションを表します。
	 * @see [ExcelScript.ChartDataLabels interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartdatalabels?view=office-scripts)
	 */
	export interface ChartDataLabels {
		/**
		 * データ ラベルがコンテキストに基づいて適切なテキストを自動的に生成する場合に指定します。
		 */
		getAutoText(): boolean;
		/**
		 * 塗りつぶしとフォントの書式設定を含むグラフ データ ラベルの形式を指定します。
		 */
		getFormat(): ChartDataLabelFormat;
		/**
		 * グラフ データ ラベルの水平方向の配置を指定します。
		 * 詳細は「`ExcelScript.ChartTextHorizontalAlignment`」をご覧ください。
		 * このプロパティは、データ ラベルの値 `TextOrientation` が 0 の場合にのみ有効です。
		 */
		getHorizontalAlignment(): ChartTextHorizontalAlignment;
		/**
		 * 数値の形式がセルにリンクされている場合に指定します。
		 * もし `true`をクリックすると、セル内でラベルが変更された際に数値の形式が変更されます。
		 */
		getLinkNumberFormat(): boolean;
		/**
		 * データ ラベルの形式コードを指定します。
		 */
		getNumberFormat(): string;
		/**
		 * データ ラベルの位置を表す値。
		 * 詳細は「`ExcelScript.ChartDataLabelPosition`」をご覧ください。
		 */
		getPosition(): ChartDataLabelPosition;
		/**
		 * グラフのデータ ラベルに使用される区切り文字を表す文字列を設定します。
		 */
		getSeparator(): string;
		/**
		 * データ ラベルのバブル サイズが表示される場合に指定します。
		 */
		getShowBubbleSize(): boolean;
		/**
		 * データ ラベル のカテゴリ名が表示される場合に指定します。
		 */
		getShowCategoryName(): boolean;
		/**
		 * データ ラベルの凡例キーが表示される場合に指定します。
		 */
		getShowLegendKey(): boolean;
		/**
		 * データ ラベルの割合を表示する場合に指定します。
		 */
		getShowPercentage(): boolean;
		/**
		 * データ ラベルの系列名が表示される場合に指定します。
		 */
		getShowSeriesName(): boolean;
		/**
		 * データ ラベルの値が表示される場合に指定します。
		 */
		getShowValue(): boolean;
		/**
		 * データ ラベルのテキストの向きを示す角度を表します。
		 * 値は、-90 ~ 90 の整数または垂直方向のテキストの整数 180 のいずれかである必要があります。
		 */
		getTextOrientation(): number;
		/**
		 * グラフのデータ ラベルの垂直方向の配置を表します。
		 * 詳細は「`ExcelScript.ChartTextVerticalAlignment`」をご覧ください。
		 * このプロパティは、データ ラベル `TextOrientation` が -90、90、または 180 の場合にのみ有効です。
		 */
		getVerticalAlignment(): ChartTextVerticalAlignment;
		/**
		 * データ ラベルがコンテキストに基づいて適切なテキストを自動的に生成する場合に指定します。
		 * @param autoText
		 */
		setAutoText(autoText: boolean): void;
		/**
		 * グラフ データ ラベルの水平方向の配置を指定します。
		 * 詳細は「`ExcelScript.ChartTextHorizontalAlignment`」をご覧ください。
		 * このプロパティは、データ ラベルの値 `TextOrientation` が 0 の場合にのみ有効です。
		 * @param horizontalAlignment
		 */
		setHorizontalAlignment(
			horizontalAlignment: ChartTextHorizontalAlignment,
		): void;
		/**
		 * 数値の形式がセルにリンクされている場合に指定します。
		 * もし `true`をクリックすると、セル内でラベルが変更された際に数値の形式が変更されます。
		 * @param linkNumberFormat
		 */
		setLinkNumberFormat(linkNumberFormat: boolean): void;
		/**
		 * データ ラベルの形式コードを指定します。
		 * @param numberFormat
		 */
		setNumberFormat(numberFormat: string): void;
		/**
		 * データ ラベルの位置を表す値。
		 * 詳細は「`ExcelScript.ChartDataLabelPosition`」をご覧ください。
		 * @param position
		 */
		setPosition(position: ChartDataLabelPosition): void;
		/**
		 * グラフのデータ ラベルに使用される区切り文字を表す文字列を設定します。
		 * @param separator
		 */
		setSeparator(separator: string): void;
		/**
		 * データ ラベルのバブル サイズが表示される場合に指定します。
		 * @param showBubbleSize
		 */
		setShowBubbleSize(showBubbleSize: boolean): void;
		/**
		 * データ ラベル のカテゴリ名が表示される場合に指定します。
		 * @param showCategoryName
		 */
		setShowCategoryName(showCategoryName: boolean): void;
		/**
		 * データ ラベルの凡例キーが表示される場合に指定します。
		 * @param showLegendKey
		 */
		setShowLegendKey(showLegendKey: boolean): void;
		/**
		 * データ ラベルの割合を表示する場合に指定します。
		 * @param showPercentage
		 */
		setShowPercentage(showPercentage: boolean): void;
		/**
		 * データ ラベルの系列名が表示される場合に指定します。
		 * @param showSeriesName
		 */
		setShowSeriesName(showSeriesName: boolean): void;
		/**
		 * データ ラベルの値が表示される場合に指定します。
		 * @param showValue
		 */
		setShowValue(showValue: boolean): void;
		/**
		 * データ ラベルのテキストの向きを示す角度を表します。
		 * 値は、-90 ~ 90 の整数または垂直方向のテキストの整数 180 のいずれかである必要があります。
		 * @param textOrientation
		 */
		setTextOrientation(textOrientation: number): void;
		/**
		 * グラフのデータ ラベルの垂直方向の配置を表します。
		 * 詳細は「`ExcelScript.ChartTextVerticalAlignment`」をご覧ください。
		 * このプロパティは、データ ラベル `TextOrientation` が -90、90、または 180 の場合にのみ有効です。
		 * @param verticalAlignment
		 */
		setVerticalAlignment(
			verticalAlignment: ChartTextVerticalAlignment,
		): void;
	}
}
