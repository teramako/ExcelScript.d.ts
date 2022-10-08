declare namespace ExcelScript {
	/**
	 * 数値を表示する文化的に適切な形式を定義します。
	 * これは、現在のシステム カルチャ設定に基づいて行います。
	 * @see [ExcelScript.NumberFormatInfo interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.numberformatinfo?view=office-scripts)
	 */
	export interface NumberFormatInfo {
		/**
		 * 数値の小数点として使用される文字列を取得します。
		 * これは、現在のシステム設定に基づいて行います。
		 */
		getNumberDecimalSeparator(): string;
		/**
		 * 数値の 10 進数の左側に数字のグループを区切る文字列を取得します。
		 * これは、現在のシステム設定に基づいて行います。
		 */
		getNumberGroupSeparator(): string;
	}
}