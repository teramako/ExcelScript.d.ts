declare namespace ExcelScript {
	/**
	 * 図形のテキスト フレームの垂直方向のオーバーフローを指定します。
	 * @see [ExcelScript.ShapeTextVerticalOverflow enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.shapetextverticaloverflow?view=office-scripts)
	 */
	export enum ShapeTextVerticalOverflow {
		/**
		 * 垂直方向のレイアウト枠内に収まらないテキストを非表示にします。
		 */
		clip,
		/**
		 * 垂直方向のレイアウト枠内に収まらないテキストを非表示にし、表示されるテキストの終わりに省略記号 (...) を追加します。
		 */
		ellipsis,
		/**
		 * テキストはレイアウト枠を垂直方向にはみ出すことができます (テキストの配置によって、上、下、または両方からはみ出します)。
		 */
		overflow
	}
}