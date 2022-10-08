declare namespace ExcelScript {
	/**
	 * DataPivotField の集計関数。
	 * @see [ExcelScript.AggregationFunction enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.aggregationfunction?view=office-scripts)
	 */
	export enum AggregationFunction {
		/**
		 * Excel では、データ項目に基づいて集計が自動的に選択されます。
		 */
		automatic,
		/**
		 * AVERAGE 関数と同等のデータの平均を使用して集計します。
		 */
		average,
		/**
		 * COUNTA 関数と同等のデータ内の項目数を使用して集計します。
		 */
		count,
		/**
		 * COUNT 関数に相当するデータ内の数値の数を使用して集計します。
		 */
		countNumbers,
		/**
		 * MAX 関数と同等のデータの最大値を使用して集計します。
		 */
		max,
		/**
		 * MIN 関数と同等のデータの最小値を使用して集計します。
		 */
		min,
		/**
		 * PRODUCT 関数と同等のデータの積を使用して集計します。
		 */
		product,
		/**
		 * STDEV 関数と同等のデータの標準偏差を使用して集計します。
		 */
		standardDeviation,
		/**
		 * STDEVP 関数に相当するデータの標準偏差を使用して集計します。
		 */
		standardDeviationP,
		/**
		 * SUM 関数と同等のデータの合計を使用して集計します。
		 */
		sum,
		/**
		 * 集計関数が不明であるか、サポートされていません。
		 */
		unkown,
		/**
		 * VAR 関数と同等のデータの分散を使用して集計します。
		 */
		variance,
		/**
		 * VARP 関数と同等のデータの分散を使用して集計します。
		 */
		varianceP
	}
}