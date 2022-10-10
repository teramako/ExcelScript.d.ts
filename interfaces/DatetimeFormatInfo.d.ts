declare namespace ExcelScript {
	/**
	 * 数値を表示する文化的に適切な形式を定義します。
	 * これは、現在のシステム カルチャ設定に基づいて行います。
	 * @see [ExcelScript.DatetimeFormatInfo interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.datetimeformatinfo?view=office-scripts)
	 */
	export interface DatetimeFormatInfo {
		/**
		 * 日付区切り記号として使用される文字列を取得します。
		 * これは、現在のシステム設定に基づいて行います。
		 */
		getDateSeparator(): string;
		/**
		 * 長い日付値の書式文字列を取得します。
		 * これは、現在のシステム設定に基づいて行います。
		 */
		getLongDatePattern(): string;
		/**
		 * 長い時間の値の書式文字列を取得します。
		 * これは、現在のシステム設定に基づいて行います。
		 */
		getLongTimePattern(): string;
		/**
		 * 短い日付の値の書式文字列を取得します。
		 * これは、現在のシステム設定に基づいて行います。
		 */
		getShortDatePattern(): string;
		/**
		 * 時刻の区切り記号として使用される文字列を取得します。
		 * これは、現在のシステム設定に基づいて行います。
		 */
		getTimeSeparator(): string;
	}
}
