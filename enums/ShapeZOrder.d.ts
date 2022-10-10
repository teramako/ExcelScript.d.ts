declare namespace ExcelScript {
	/**
	 * 他の図形を基準として、図形を移動する位置を Z オーダーで指定します。
	 * @see [ExcelScript.ShapeZOrder enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.shapezorder?view=office-scripts)
	 */
	export enum ShapeZOrder {
		bringForward,
		bringToFront,
		sendBackward,
		sendToBack,
	}
}
