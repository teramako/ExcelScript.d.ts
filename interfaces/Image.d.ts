declare namespace ExcelScript {
	/**
	 * ワークシート内の画像を表します。 対応する `Shape` オブジェクトを取得するには、 `Image.shape`.
	 * @see [ExcelScript.Image interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.image?view=office-scripts)
	 */
	export interface Image {
		/**
		 * 画像の形式を返します。
		 */
		getFormat(): PictureFormat;
		/**
		 * イメージ オブジェクトの図形識別子を指定します。
		 */
		getId(): string;
		/**
		 * イメージに `Shape` 関連付けられているオブジェクトを返します。
		 */
		getShape(): Shape;
	}
}
