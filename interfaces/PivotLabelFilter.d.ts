declare namespace ExcelScript {
	/**
	 * PivotField に適用するラベル フィルター用の構成可能なテンプレート。
	 * フィルター `condition` を動作させるには、どのような条件を設定する必要があるかを定義します。
	 * @see [ExcelScript.PivotLabelFilter interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.pivotlabelfilter?view=office-scripts)
	 */
	export interface PivotLabelFilter {
		/**
		 * 必要なフィルター条件を定義するフィルターの条件を指定します。
		 */
		condition: LabelFilterCondition;
		/**
		 * もし `true`、フィルター は、条件を 満たすアイテムを除外します。
		 * 既定値は `false` (条件を満たすアイテムを含めるフィルター) です。
		 */
		exclusive?: boolean;
		/**
		 * フィルター条件の範囲 `between` の下限。
		 *
		 * 注: 数値文字列は、他の数値文字列と比較されるときに数値として扱われます。
		 */
		lowerBound?: string;
		/**
		 * に使用される部分文字列 `beginsWith`, `endsWith`を選択し、 `contains` 条件をフィルター処理します。
		 */
		substring?: string;
		/**
		 * フィルター条件の範囲 `between` の上限。
		 *
		 * 注: 数値文字列は、他の数値文字列と比較されるときに数値として扱われます。
		 */
		upperBound?: string;
	}
}
