declare namespace ExcelScript {
	/**
	 * グラフのグラフ タイトルのオブジェクトを表します。
	 * @see [ExcelScript.ChartTitle interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.charttitle?view=office-scripts)
	 */
	export interface ChartTitle {
		/**
		 * 塗りつぶしとフォントの書式設定を含むグラフ タイトルの書式設定を表します。
		 */
		getFormat(): ChartTitleFormat;
		/**
		 * グラフ タイトルの高さ (ポイント数) を返します。
		 * 値は `null` 、グラフのタイトルが表示されない場合です。
		 */
		getHeight(): number;
		/**
		 * グラフタイトルの水平方向の配置を指定します。
		 */
		getHorizontalAlignment(): ChartTextHorizontalAlignment;
		/**
		 * グラフ タイトルの左端からグラフ領域の左端までの距離をポイントで指定します。
		 * 値は `null` 、グラフのタイトルが表示されない場合です。
		 */
		getLeft(): number;
		/**
		 * グラフのタイトルがグラフをオーバーレイする場合に指定します。
		 */
		getOverlay(): boolean;
		/**
		 * グラフ タイトルの位置を表します。
		 * 詳細は「`ExcelScript.ChartTitlePosition`」をご覧ください。
		 */
		getPosition(): ChartTitlePosition;
		/**
		 * グラフ タイトルが影付きにされるかどうかを指定するブール値を表します。
		 */
		getShowShadow(): boolean;
		/**
		 * グラフタイトルの部分文字列を取得します。
		 * 行の折れ線 '\n' は 1 文字をカウントします。
		 * @param start 取得する部分文字列の開始位置。 0 を起点とする番号になります。
		 * @param length 取得するサブ文字列の長さ。
		 */
		getSubstring(start: number, length: number): ChartFormatString;
		/**
		 * グラフのタイトル テキストを指定します。
		 */
		getText(): string;
		/**
		 * グラフ タイトルのテキストの向きを指定します。
		 * 値は、-90 ~ 90 の整数または垂直方向のテキストの整数 180 のいずれかである必要があります。
		 */
		getTextOrientation(): number;
		/**
		 * グラフ タイトルの上端からグラフ領域の上端までの距離をポイントで指定します。
		 * 値は `null` 、グラフのタイトルが表示されない場合です。
		 */
		getTop(): number;
		/**
		 * グラフ タイトルの垂直方向の配置を指定します。
		 * 詳細は「`ExcelScript.ChartTextVerticalAlignment`」をご覧ください。
		 */
		getVerticalAlignment(): ChartTextVerticalAlignment;
		/**
		 * グラフのタイトルが目に見えて表示される場合に指定します。
		 */
		getVisible(): boolean;
		/**
		 * グラフ タイトルの幅をポイント単位で指定します。
		 * 値は `null` 、グラフのタイトルが表示されない場合です。
		 */
		getWidth(): number;
		/**
		 * A1 スタイルの表記法を使用するグラフ タイトルの数式を表す文字列値を設定します。
		 * @param formula 設定する数式を表す文字列。
		 */
		setFormula(formula: string): void;
		/**
		 * グラフタイトルの水平方向の配置を指定します。
		 * @param horizontalAlignment
		 */
		setHorizontalAlignment(
			horizontalAlignment: ChartTextHorizontalAlignment,
		): void;
		/**
		 * グラフ タイトルの左端からグラフ領域の左端までの距離をポイントで指定します。
		 * 値は `null` 、グラフのタイトルが表示されない場合です。
		 * @param left
		 */
		setLeft(left: number): void;
		/**
		 * グラフのタイトルがグラフをオーバーレイする場合に指定します。
		 * @param overlay
		 */
		setOverlay(overlay: boolean): void;
		/**
		 * グラフ タイトルの位置を表します。
		 * 詳細は「`ExcelScript.ChartTitlePosition`」をご覧ください。
		 * @param position
		 */
		setPosition(position: ChartTitlePosition): void;
		/**
		 * グラフ タイトルが影付きにされるかどうかを指定するブール値を表します。
		 * @param showShadow
		 */
		setShowShadow(showShadow: boolean): void;
		/**
		 * グラフのタイトル テキストを指定します。
		 * @param text
		 */
		setText(text: string): void;
		/**
		 * グラフ タイトルのテキストの向きを指定します。
		 * 値は、-90 ~ 90 の整数または垂直方向のテキストの整数 180 のいずれかである必要があります。
		 * @param textOrientation
		 */
		setTextOrientation(textOrientation: number): void;
		/**
		 * グラフ タイトルの上端からグラフ領域の上端までの距離をポイントで指定します。
		 * 値は `null` 、グラフのタイトルが表示されない場合です。
		 * @param top
		 */
		setTop(top: number): void;
		/**
		 * グラフ タイトルの垂直方向の配置を指定します。
		 * 詳細は「`ExcelScript.ChartTextVerticalAlignment`」をご覧ください。
		 * @param verticalAlignment
		 */
		setVerticalAlignment(
			verticalAlignment: ChartTextVerticalAlignment,
		): void;
		/**
		 * グラフのタイトルが目に見えて表示される場合に指定します。
		 * @param visible
		 */
		setVisible(visible: boolean): void;
	}
}
