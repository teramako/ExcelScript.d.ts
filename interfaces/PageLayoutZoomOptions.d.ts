declare namespace ExcelScript {
	/**
	 * ページズームのプロパティを表します。
	 * @see [ExcelScript.PageLayoutZoomOptions interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.pagelayoutzoomoptions?view=office-scripts)
	 */
	export interface PageLayoutZoomOptions {
		/**
		 * 横方向に合わせるページ数。
		 * この値は、パーセンテージ `null` スケールを使用する場合に使用できます。
		 */
		horizontalFitToPages?: number;
		/**
		 * 印刷ページのスケール値は 10 から 400 までです。
		 * この値は、ページ `null` の高さまたは幅に合わせて指定できます。
		 */
		scale?: number;
		/**
		 * 縦方向に合わせるページ数。
		 * この値は、パーセンテージ `null` スケールを使用する場合に使用できます。
		 */
		verticalFitToPages?: number;
	}
}
