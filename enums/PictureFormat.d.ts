declare namespace ExcelScript {
	/**
	 * イメージの形式。
	 * @see [ExcelScript.PictureFormat enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.pictureformat?view=office-scripts)
	 */
	export enum PictureFormat {
		/**
		 * ビットマップ イメージ。
		 */
		bmp,
		/**
		 * グラフィックス交換形式。
		 */
		gif,
		/**
		 * 共同写真専門家グループ。
		 */
		jpeg,
		/**
		 * ポータブル ネットワーク グラフィックス。
		 */
		png,
		/**
		 * スケーラブル ベクター グラフィック。
		 */
		svg,
		unknown
	}
}