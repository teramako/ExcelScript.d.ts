declare namespace ExcelScript {
	/**
	 * 値をフィルター処理するときに日付をフィルター処理する方法を表します。
	 * @see [ExcelScript.FilterDatetime interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.filterdatetime?view=office-scripts)
	 */
	export interface FilterDatetime {
		/**
		 * データのフィルター処理に使用する ISO8601 形式の日付です。
		 */
		date: string;
		/**
		 * データを保持するのに、日付をどの程度詳細に使用するか。
		 * たとえば、日付が 2005-04-02 で、仕様が "month" に設定されている場合、フィルター操作では、2005 年 4 月の日付を持つすべての行が保持されます。
		 */
		specificity: FilterDatetimeSpecificity;
	}
}
