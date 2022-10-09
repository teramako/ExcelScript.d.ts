declare namespace ExcelScript {
	/**
	 * ピボット フィールドの小計。
	 * @see [ExcelScript.Subtotals interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.subtotals?view=office-scripts)
	 */
	export interface Subtotals {
		/**
		 * If `Automatic` がに設定されている場合 `true`を設定すると、他のすべての値は無視されます。 `Subtotals`.
		 */
		automatic?: boolean;
		/**
		 * Average
		 */
		average?: boolean;
		/**
		 * カウント
		 */
		count?: boolean;
		/**
		 * CountNumbers
		 */
		countNumbers?: boolean;
		/**
		 * Max
		 */
		max?: boolean;
		/**
		 * Min
		 */
		min?: boolean;
		/**
		 * 製品
		 */
		product?: boolean;
		/**
		 * StandardDeviation
		 */
		standardDeviation?: boolean;
		/**
		 * StandardDeviationP
		 */
		standardDeviationP?: boolean;
		/**
		 * Sum
		 */
		sum?: boolean;
		/**
		 * 差異
		 */
		variance?: boolean;
		/**
		 * VarianceP
		 */
		varianceP?: boolean;
	}
}