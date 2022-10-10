declare namespace ExcelScript {
	/**
	 * このオブジェクトは、グラフの傾向線ラベル オブジェクトの属性を表します。
	 * @see [ExcelScript.ChartTrendlineLabel interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.charttrendlinelabel?view=office-scripts)
	 */
	export interface ChartTrendlineLabel {
		/**
		 * 傾向線ラベルがコンテキストに基づいて適切なテキストを自動的に生成する場合に指定します。
		 */
		getAutoText(): boolean;
		/**
		 * グラフの傾向線ラベルの形式。
		 */
		getFormat(): ChartTrendlineLabelFormat;
		/**
		 * A1 スタイル表記を使用してグラフの傾向線ラベルの数式を表す文字列値。
		 */
		getFormula(): string;
		/**
		 * グラフの近似曲線ラベルの高さ (ポイント数) を返します。
		 * 値は `null` 、グラフの傾向線ラベルが表示されない場合です。
		 */
		getHeight(): number;
		/**
		 * グラフの傾向線ラベルの水平方向の配置を表します。
		 * 詳細は「`ExcelScript.ChartTextHorizontalAlignment`」をご覧ください。
		 * このプロパティは、傾向線 `TextOrientation` ラベルが -90、90、または 180 の場合にのみ有効です。
		 */
		getHorizontalAlignment(): ChartTextHorizontalAlignment;
		/**
		 * グラフのトレンドライン ラベルの左端からグラフ領域の左端までの距離をポイントで表します。
		 * 値は `null` 、グラフの傾向線ラベルが表示されない場合です。
		 */
		getLeft(): number;
		/**
		 * セルに番号の書式をリンクする (セル内でラベルが変更された場合に数値の書式が変更される) 場合に指定します。
		 */
		getLinkNumberFormat(): boolean;
		/**
		 * 傾向線ラベルの書式コードを表す文字列値。
		 */
		getNumberFormat(): string;
		/**
		 * グラフの近似曲線ラベルのテキストを表す文字列。
		 */
		getText(): string;
		/**
		 * グラフの傾向線ラベルのテキストの向きを示す角度を表します。
		 * 値は、-90 ~ 90 の整数または垂直方向のテキストの整数 180 のいずれかである必要があります。
		 */
		getTextOrientation(): number;
		/**
		 * グラフのトレンドライン ラベルの上端からグラフ領域の上端までの距離をポイントで表します。
		 * 値は `null` 、グラフの傾向線ラベルが表示されない場合です。
		 */
		getTop(): number;
		/**
		 * グラフの傾向線ラベルの垂直方向の配置を表します。
		 * 詳細は「`ExcelScript.ChartTextVerticalAlignment`」をご覧ください。
		 * このプロパティは、傾向線 `TextOrientation` ラベルが 0 の場合にのみ有効です。
		 */
		getVerticalAlignment(): ChartTextVerticalAlignment;
		/**
		 * グラフの近似曲線ラベルの幅 (ポイント数) を返します。
		 * 値は `null` 、グラフの傾向線ラベルが表示されない場合です。
		 */
		getWidth(): number;
		/**
		 * 傾向線ラベルがコンテキストに基づいて適切なテキストを自動的に生成する場合に指定します。
		 * @param autoText
		 */
		setAutoText(autoText: boolean): void;
		/**
		 * A1 スタイル表記を使用してグラフの傾向線ラベルの数式を表す文字列値。
		 * @param formula
		 */
		setFormula(formula: string): void;
		/**
		 * グラフの傾向線ラベルの水平方向の配置を表します。
		 * 詳細は「`ExcelScript.ChartTextHorizontalAlignment`」をご覧ください。
		 * このプロパティは、傾向線 `TextOrientation` ラベルが -90、90、または 180 の場合にのみ有効です。
		 * @param horizontalAlignment
		 */
		setHorizontalAlignment(horizontalAlignment: ChartTextHorizontalAlignment): void;
		/**
		 * グラフのトレンドライン ラベルの左端からグラフ領域の左端までの距離をポイントで表します。
		 * 値は `null` 、グラフの傾向線ラベルが表示されない場合です。
		 * @param left
		 */
		setLeft(left: number): void;
		/**
		 * セルに番号の書式をリンクする (セル内でラベルが変更された場合に数値の書式が変更される) 場合に指定します。
		 * @param linkNumberFormat
		 */
		setLinkNumberFormat(linkNumberFormat: boolean): void;
		/**
		 * 傾向線ラベルの書式コードを表す文字列値。
		 * @param numberFormat
		 */
		setNumberFormat(numberFormat: string): void;
		/**
		 * グラフの近似曲線ラベルのテキストを表す文字列。
		 * @param text
		 */
		setText(text: string): void;
		/**
		 * グラフの傾向線ラベルのテキストの向きを示す角度を表します。
		 * 値は、-90 ~ 90 の整数または垂直方向のテキストの整数 180 のいずれかである必要があります。
		 * @param textOrientation
		 */
		setTextOrientation(textOrientation: number): void;
		/**
		 * グラフのトレンドライン ラベルの上端からグラフ領域の上端までの距離をポイントで表します。
		 * 値は `null` 、グラフの傾向線ラベルが表示されない場合です。
		 * @param top
		 */
		setTop(top: number): void;
		/**
		 * グラフの傾向線ラベルの垂直方向の配置を表します。
		 * 詳細は「`ExcelScript.ChartTextVerticalAlignment`」をご覧ください。
		 * このプロパティは、傾向線 `TextOrientation` ラベルが 0 の場合にのみ有効です。
		 * @param verticalAlignment
		 */
		setVerticalAlignment(verticalAlignment: ChartTextVerticalAlignment): void;
	}
}
