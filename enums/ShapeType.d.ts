declare namespace ExcelScript {
	/**
	 * 図形の種類を指定します。
	 * @see [ExcelScript.ShapeType enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.shapetype?view=office-scripts)
	 */
	export enum ShapeType {
		geometricShape,
		group,
		image,
		line,
		unsupported
	}
}