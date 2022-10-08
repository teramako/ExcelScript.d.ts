declare namespace ExcelScript {
	/**
	 * 図形を元のサイズまたは現在のサイズを基準に拡大/縮小するかどうかを指定します。
	 * @see [ExcelScript.ShapeScaleType enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.shapescaletype?view=office-scripts)
	 */
	export enum ShapeScaleType {
		currentSize,
		originalSize
	}
}