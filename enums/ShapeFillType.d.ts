declare namespace ExcelScript {
	/**
	 * 図形の塗りつぶしの種類を指定します。
	 * @see [ExcelScript.ShapeFillType enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.shapefilltype?view=office-scripts)
	 */
	export enum ShapeFillType {
		/**
		 * 塗りつぶし (グラデーション)
		 */
		gradient,
		/**
		 * 塗りつぶし (混在)
		 */
		mixed,
		/**
		 * 塗りつぶしなし。
		 */
		noFill,
		/**
		 * パターン塗りつぶし。
		 */
		pattern,
		/**
		 * 画像とテクスチャの塗りつぶし。
		 */
		pictureAndTexture,
		/**
		 * 塗りつぶし (単色)
		 */
		solid
	}
}