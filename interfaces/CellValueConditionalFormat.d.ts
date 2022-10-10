declare namespace ExcelScript {
	/**
	 * セル値の条件付き書式を表します。
	 * @see [ExcelScript.CellValueConditionalFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.cellvalueconditionalformat?view=office-scripts)
	 */
	export interface CellValueConditionalFormat {
		/**
		 * 書式オブジェクトを返し、条件付き書式のフォント、塗りつぶし、罫線、およびその他のプロパティをカプセル化します。
		 */
		getFormat(): ConditionalRangeFormat;
		/**
		 * この条件付き形式のルール オブジェクトを指定します。
		 */
		getRule(): ConditionalCellValueRule;
		/**
		 * この条件付き形式のルール オブジェクトを指定します。
		 * @param rule
		 */
		setRule(rule: ConditionalCellValueRule): void;
	}
}
