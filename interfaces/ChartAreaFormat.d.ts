/// <reference path="../enums/ChartColorScheme.d.ts"/>
/// <reference path="./ChartBorder.d.ts"/>
/// <reference path="./ChartFill.d.ts"/>
/// <reference path="./ChartFont.d.ts"/>
declare namespace ExcelScript {
	/**
	 * グラフ領域全体の書式設定プロパティをカプセル化します。
	 * @see [ExcelScript.ChartAreaFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartareaformat?view=office-scripts)
	 */
	export interface ChartAreaFormat {
		/**
		 * 色、線のスタイル、太さなど、グラフ領域の罫線の形式を表します。
		 */
		getBorder(): ChartBorder;
		/**
		 * グラフの配色を指定します。
		 */
		getColorScheme(): ChartColorScheme;
		/**
		 * 背景の書式設定情報を含む、オブジェクトの塗りつぶしの書式を表します。
		 */
		getFill(): ChartFill;
		/**
		 * 現在のオブジェクトのフォント属性 (フォント名、フォント サイズ、色など) を表します。
		 */
		getFont(): ChartFont;
		/**
		 * グラフのグラフ領域の角が丸い場合に指定します。
		 */
		getRoundedCorners(): boolean;
		/**
		 * グラフの配色を指定します。
		 * @param colorScheme
		 */
		setColorScheme(colorScheme: ChartColorScheme): void;
		/**
		 * グラフのグラフ領域の角が丸い場合に指定します。
		 * @param roundedCorners
		 */
		setRoundedCorners(roundedCorners: boolean): void;
	}
}
