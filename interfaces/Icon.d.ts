declare namespace ExcelScript {
	/**
	 * セルのアイコンを表します。
	 * @see [ExcelScript.Icon interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.icon?view=office-scripts)
	 */
	export interface Icon {
		/**
		 * 指定したセット内のアイコンのインデックスを指定します。
		 */
		index: number;
		/**
		 * アイコンが一部であるセットを指定します。
		 */
		set: IconSet;
	}
}