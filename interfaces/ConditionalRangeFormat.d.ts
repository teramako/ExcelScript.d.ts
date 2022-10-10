declare namespace ExcelScript {
	/**
	 * 条件付き書式範囲のフォント、塗りつぶし、罫線、その他のプロパティをカプセル化する format オブジェクト。
	 * @see [ExcelScript.ConditionalRangeFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionalrangeformat?view=office-scripts)
	 */
	export interface ConditionalRangeFormat {
		/**
		 * 条件付き書式範囲全体に適用される罫線オブジェクトのコレクション。
		 */
		getBorders(): ConditionalRangeBorder[];
		/**
		 * オブジェクトの名前を使用して、境界線オブジェクトを取得します。
		 * @param index 取得する罫線オブジェクトのインデックス値。
		 * 詳細は「`ExcelScript.ConditionalRangeBorderIndex`」をご覧ください。
		 */
		getConditionalRangeBorder(
			index: ConditionalRangeBorderIndex,
		): ConditionalRangeBorder;
		/**
		 * 下の罫線を取得します。
		 */
		getConditionalRangeBorderBottom(): ConditionalRangeBorder;
		/**
		 * 左側の罫線を取得します。
		 */
		getConditionalRangeBorderLeft(): ConditionalRangeBorder;
		/**
		 * 右の罫線を取得します。
		 */
		getConditionalRangeBorderRight(): ConditionalRangeBorder;
		/**
		 * 上の罫線を取得します。
		 */
		getConditionalRangeBorderTop(): ConditionalRangeBorder;
		/**
		 * 条件付き書式の範囲全体で定義されている fill オブジェクトを返します。
		 */
		getFill(): ConditionalRangeFill;
		/**
		 * 条件付き書式の範囲全体で定義されているフォント オブジェクトを返します。
		 */
		getFont(): ConditionalRangeFont;
		/**
		 * 指定したExcelの数値書式コードを表します。 渡された場合 `null` はクリアされます。
		 */
		getNumberFormat(): string;
		/**
		 * 指定したExcelの数値書式コードを表します。 渡された場合 `null` はクリアされます。
		 * @param numberFormat
		 */
		setNumberFormat(numberFormat: string): void;
	}
}
