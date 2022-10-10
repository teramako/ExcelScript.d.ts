declare namespace ExcelScript {
	/**
	 * ワークシート内の幾何学的な図形を表します。
	 * 幾何学的な図形には、四角形、ブロック矢印、数式記号、フローチャート項目、星、バナー、吹き出し、その他の基本的な図形Excel。
	 * @see [ExcelScript.GeometricShape interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.geometricshape?view=office-scripts)
	 */
	export interface GeometricShape {
		/**
		 * 図形 ID を返します。
		 */
		getId(): string;
	}
}
