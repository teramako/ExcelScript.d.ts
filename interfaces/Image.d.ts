/// <reference path="../enums/PictureFormat.d.ts" />
/// <reference path="./Shape.d.ts" />
declare namespace ExcelScript {
	/**
	 * ワークシート内の画像を表します。 対応する `Shape` オブジェクトを取得するには、 `Image.shape`.
	 * @see [ExcelScript.Image interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.image?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script transfers an image from one worksheet to another.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the worksheet with the image on it.
	 *   const firstWorksheet = workbook.getWorksheet("FirstSheet");
	 *
	 *   // Get the first image from the worksheet.
	 *   // If a script added the image, you could add a name to make it easier to find.
	 *   let image: ExcelScript.Image;
	 *   firstWorksheet.getShapes().forEach((shape, index) => {
	 *     if (shape.getType() === ExcelScript.ShapeType.image) {
	 *       image = shape.getImage();
	 *       return;
	 *     }
	 *   });
	 *
	 *   // Copy the image to another worksheet.
	 *   image.getShape().copyTo("SecondSheet");
	 * }
	 * ```
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
