declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.ReadingOrder enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.readingorder?view=office-scripts)
	 */
	export enum ReadingOrder {
		/**
		 * 読みの順序は入力された最初の文字の言語によって決まります。
		 * 右から左に記述する言語が最初に入力された場合、読みの順序は右から左になります。
		 * 左から右に記述する言語が最初に入力された場合、読みの順序は左から右になります。
		 */
		context,
		/**
		 * 左から右の読み取り順序
		 */
		leftToRight,
		/**
		 * 右から左の読み取り順序
		 */
		rightToLeft
	}
}