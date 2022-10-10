declare namespace ExcelScript {
	/**
	 * グラフ軸のタイトルを表します。
	 * @see [ExcelScript.ChartAxisTitle interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartaxistitle?view=office-scripts)
	 */
	export interface ChartAxisTitle {
		/**
		 * グラフ軸のタイトルの書式を指定します。
		 */
		getFormat(): ChartAxisTitleFormat;
		/**
		 * 軸のタイトルを指定します。
		 */
		getText(): string;
		/**
		 * グラフ軸タイトルのテキストの向きを指定します。
		 * 値は、-90 ~ 90 の整数または垂直方向のテキストの整数 180 のいずれかである必要があります。
		 */
		getTextOrientation(): number;
		/**
		 * 軸のタイトルが表示される場合に指定します。
		 */
		getVisible(): boolean;
		/**
		 * A1 スタイルの表記法を使用するグラフの軸タイトルの数式を表す文字列値。
		 * @param formula 設定する数式を表す文字列。
		 */
		setFormula(formula: string): void;
		/**
		 * 軸のタイトルを指定します。
		 * @param text
		 */
		setText(text: string): void;
		/**
		 * グラフ軸タイトルのテキストの向きを指定します。
		 * 値は、-90 ~ 90 の整数または垂直方向のテキストの整数 180 のいずれかである必要があります。
		 * @param textOrientation
		 */
		setTextOrientation(textOrientation: number): void;
		/**
		 * 軸のタイトルが表示される場合に指定します。
		 * @param visible
		 */
		setVisible(visible: boolean): void;
	}
}
