declare namespace ExcelScript {
	/**
	 * オブジェクトがその基となるセルにアタッチされる方法を指定します。
	 * @see [ExcelScript.Placement enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.placement?view=office-scripts)
	 */
	export enum Placement {
		/**
		 * オブジェクトは自由浮動です。
		 */
		absolute,
		/**
		 * オブジェクトはセルと一緒に移動およびサイズ変更されます。
		 */
		oneCell,
		/**
		 * オブジェクトはセルと一緒に移動されます。
		 */
		twoCell
	}
}