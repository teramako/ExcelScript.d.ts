/// <reference path="./DatetimeFormatInfo.d.ts" />
/// <reference path="./NumberFormatInfo.d.ts" />
declare namespace ExcelScript {
	/**
	 * 現在のシステム カルチャ設定に基づく情報を提供します。
	 * これには、カルチャ名、数値の書式設定、その他の文化的に依存する設定が含まれます。
	 * @see [ExcelScript.CultureInfo interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.cultureinfo?view=office-scripts)
	 */
	export interface CultureInfo {
		/**
		 * 日付と時刻を表示する文化的に適切な形式を定義します。
		 * これは、現在のシステム カルチャ設定に基づいて行います。
		 */
		getDatetimeFormat(): DatetimeFormatInfo;
		/**
		 * languagecode2-country/regioncode2 形式のカルチャ名 ("zh-cn" や "ja-us" など) を取得します。
		 * これは、現在のシステム設定に基づいて行います。
		 */
		getName(): string;
		/**
		 * 数値を表示する文化的に適切な形式を定義します。
		 * これは、現在のシステム カルチャ設定に基づいて行います。
		 */
		getNumberFormat(): NumberFormatInfo;
	}
}