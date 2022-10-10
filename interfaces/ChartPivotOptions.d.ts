declare namespace ExcelScript {
	/**
	 * ピボット グラフのオプションをカプセル化します。
	 * @see [ExcelScript.ChartPivotOptions interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartpivotoptions?view=office-scripts)
	 */
	export interface ChartPivotOptions {
		/**
		 * 軸フィールド ボタンをウィンドウに表示するかどうかを指定ピボットグラフ。
		 * プロパティは、[分析] タブの [フィールド ボタン] ドロップダウン リストの [軸フィールド ボタンの表示] コマンドに対応し、
		 * ピボットグラフ が選択されている場合に `showAxisFieldButtons` 使用できます。
		 */
		getShowAxisFieldButtons(): boolean;
		/**
		 * 凡例フィールド ボタンを凡例フィールド ボタンで表示するかどうかを指定ピボットグラフ。
		 */
		getShowLegendFieldButtons(): boolean;
		/**
		 * レポート にレポート フィルター フィールド ボタンを表示するかどうかを指定ピボットグラフ。
		 */
		getShowReportFilterFieldButtons(): boolean;
		/**
		 * フィールドの [値の表示] ボタンを表示するかどうかを指定ピボットグラフ。
		 */
		getShowValueFieldButtons(): boolean;
		/**
		 * 軸フィールド ボタンをウィンドウに表示するかどうかを指定ピボットグラフ。
		 * プロパティは、[分析] タブの [フィールド ボタン] ドロップダウン リストの [軸フィールド ボタンの表示] コマンドに対応し、
		 * ピボットグラフ が選択されている場合に `showAxisFieldButtons` 使用できます。
		 * @param showAxisFieldButtons
		 */
		setShowAxisFieldButtons(showAxisFieldButtons: boolean): void;
		/**
		 * 凡例フィールド ボタンを凡例フィールド ボタンで表示するかどうかを指定ピボットグラフ。
		 * @param showLegendFieldButtons
		 */
		setShowLegendFieldButtons(showLegendFieldButtons: boolean): void;
		/**
		 * レポート にレポート フィルター フィールド ボタンを表示するかどうかを指定ピボットグラフ。
		 * @param showReportFilterFieldButtons
		 */
		setShowReportFilterFieldButtons(
			showReportFilterFieldButtons: boolean,
		): void;
		/**
		 * フィールドの [値の表示] ボタンを表示するかどうかを指定ピボットグラフ。
		 * @param showValueFieldButtons
		 */
		setShowValueFieldButtons(showValueFieldButtons: boolean): void;
	}
}
