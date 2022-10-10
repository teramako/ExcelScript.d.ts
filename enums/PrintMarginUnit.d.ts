declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.PrintMarginUnit enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.printmarginunit?view=office-scripts)
	 */
	export enum PrintMarginUnit {
		/**
		 * ページ余白をセンチメートルで割り当てる。
		 */
		centimeters,
		/**
		 * ページ余白をインチ単位で割り当てる。
		 */
		inches,
		/**
		 * ページ余白をポイントで割り当てる。 ポイントは 1/72 インチです。
		 */
		points,
	}
}
