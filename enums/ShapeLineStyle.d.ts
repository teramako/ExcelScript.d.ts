declare namespace ExcelScript {
	/**
	 * 線のスタイル。
	 * @see [ExcelScript.ShapeLineStyle enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.shapelinestyle?view=office-scripts)
	 */
	export enum ShapeLineStyle {
		/**
		 * 一重線を指定します。
		 */
		single,
		/**
		 * 両側を細い線にはさまれた太い線。
		 */
		thickBetweenThin,
		/**
		 * 細い線の横に太い線。
		 * 水平線の場合、太い線は細線の上になります。
		 * 垂直線の場合、太い線は細線の左側になります。
		 */
		thickThin,
		/**
		 * 細い線の横に太い線。
		 * 水平線の場合、太線は細線の下になります。
		 * 垂直線の場合、太い線は細線の右側になります。
		 */
		thinThick,
		/**
		 * 2 本の細い線。
		 */
		thinThin,
	}
}
