declare namespace ExcelScript {
	/**
	 * グラフ ポイントのデータ ラベルを表します。
	 * @see [ExcelScript.ChartDataLabel interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartdatalabel?view=office-scripts)
	 */
	export interface ChartDataLabel {
		/**
		 * データ ラベルがコンテキストに基づいて適切なテキストを自動的に生成する場合に指定します。
		 */
		getAutoText(): boolean;
		/**
		 * グラフのデータ ラベルの書式設定を表します。
		 */
		getFormat(): ChartDataLabelFormat;
		/**
		 * A1 スタイルの表記法を使用するグラフのデータ ラベルの数式を表す文字列値。
		 */
		getFormula(): string;
		/**
		 * グラフのデータ ラベルの高さ (ポイント数) を返します。
		 * 値は `null` 、グラフ データ ラベルが表示されない場合です。
		 */
		getHeight(): number;
		/**
		 * グラフのデータ ラベルの水平方向の配置を表します。
		 * 詳細は「`ExcelScript.ChartTextHorizontalAlignment`」をご覧ください。
		 * このプロパティは、データ ラベル `TextOrientation` が -90、90、または 180 の場合にのみ有効です。
		 */
		getHorizontalAlignment(): ChartTextHorizontalAlignment;
		/**
		 * グラフのデータ ラベルの左端からグラフ エリアの左端までの距離 (ポイント数) を表します。
		 * 値は `null` 、グラフ データ ラベルが表示されない場合です。
		 */
		getLeft(): number;
		/**
		 * セルに番号の書式をリンクする (セル内でラベルが変更された場合に数値の書式が変更される) 場合に指定します。
		 */
		getLinkNumberFormat(): boolean;
		/**
		 * データ ラベルの書式コードを表す文字列値。
		 */
		getNumberFormat(): string;
		/**
		 * データ ラベルの位置を表す値。
		 * 詳細は「`ExcelScript.ChartDataLabelPosition`」をご覧ください。
		 */
		getPosition(): ChartDataLabelPosition;
		/**
		 * グラフのデータ ラベルに使用される区切り文字を表す文字列。
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
		 * グラフのデータ ラベルのテキストを表す文字列。
		 */
		getText(): string;
		/**
		 * グラフ データ ラベルのテキストの向きを示す角度を表します。
		 * 値は、-90 ~ 90 の整数または垂直方向のテキストの整数 180 のいずれかである必要があります。
		 */
		getTextOrientation(): number;
		/**
		 * グラフのデータ ラベルの上端からグラフ エリアの上端までの距離 (ポイント数) を表します。
		 * 値は `null` 、グラフ データ ラベルが表示されない場合です。
		 */
		getTop(): number;
		/**
		 * グラフのデータ ラベルの垂直方向の配置を表します。
		 * 詳細は「`ExcelScript.ChartTextVerticalAlignment`」をご覧ください。
		 * このプロパティは、データ ラベルが `TextOrientation` 0 の場合にのみ有効です。
		 */
		getVerticalAlignment(): ChartTextVerticalAlignment;
		/**
		 * グラフのデータ ラベルの幅 (ポイント数) を返します。
		 * 値は `null` 、グラフ データ ラベルが表示されない場合です。
		 */
		getWidth(): number;
		/**
		 * データ ラベルがコンテキストに基づいて適切なテキストを自動的に生成する場合に指定します。
		 * @param autoText
		 */
		setAutoText(autoText: boolean): void;
		/**
		 * A1 スタイルの表記法を使用するグラフのデータ ラベルの数式を表す文字列値。
		 * @param formula
		 */
		setFormula(formula: string): void;
		/**
		 * グラフのデータ ラベルの水平方向の配置を表します。
		 * 詳細は「`ExcelScript.ChartTextHorizontalAlignment`」をご覧ください。
		 * このプロパティは、データ ラベル `TextOrientation` が -90、90、または 180 の場合にのみ有効です。
		 * @param horizontalAlignment
		 */
		setHorizontalAlignment(horizontalAlignment: ChartTextHorizontalAlignment): void;
		/**
		 * グラフのデータ ラベルの左端からグラフ エリアの左端までの距離 (ポイント数) を表します。
		 * 値は `null` 、グラフ データ ラベルが表示されない場合です。
		 * @param left
		 */
		setLeft(left: number): void;
		/**
		 * セルに番号の書式をリンクする (セル内でラベルが変更された場合に数値の書式が変更される) 場合に指定します。
		 * @param linkNumberFormat
		 */
		setLinkNumberFormat(linkNumberFormat: boolean): void;
		/**
		 * データ ラベルの書式コードを表す文字列値。
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
		 * グラフのデータ ラベルに使用される区切り文字を表す文字列。
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
		 * グラフのデータ ラベルのテキストを表す文字列。
		 * @param text
		 */
		setText(text: string): void;
		/**
		 * グラフ データ ラベルのテキストの向きを示す角度を表します。
		 * 値は、-90 ~ 90 の整数または垂直方向のテキストの整数 180 のいずれかである必要があります。
		 * @param textOrientation
		 */
		setTextOrientation(textOrientation: number): void;
		/**
		 * グラフのデータ ラベルの上端からグラフ エリアの上端までの距離 (ポイント数) を表します。
		 * 値は `null` 、グラフ データ ラベルが表示されない場合です。
		 * @param top
		 */
		setTop(top: number): void;
		/**
		 * グラフのデータ ラベルの垂直方向の配置を表します。
		 * 詳細は「`ExcelScript.ChartTextVerticalAlignment`」をご覧ください。
		 * このプロパティは、データ ラベルが `TextOrientation` 0 の場合にのみ有効です。
		 * @param verticalAlignment
		 */
		setVerticalAlignment(verticalAlignment: ChartTextVerticalAlignment): void;
	}
}
