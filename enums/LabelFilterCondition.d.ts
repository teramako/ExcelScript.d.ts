declare namespace ExcelScript {
	/**
	 * ラベル フィルターを適用できる、受け入れられたすべての条件を表す列挙型。
	 * フィールドに適用される PivotFilter の種類を構成するために使用します。
	 * `PivotFilter.criteria.exclusive` これらの条件の多くを反転するように `true` 設定できます。
	 * @see [ExcelScript.LabelFilterCondition enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.labelfiltercondition?view=office-scripts)
	 */
	export enum LabelFilterCondition {
		/**
		 * ラベルは部分文字列の条件で始まります。
		 * 必須条件: {`substring`}. オプションの条件: {`wexclusive`}.
		 */
		beginsWith,
		/**
		 * 間 lowerBound と upperBound 条件。
		 * 必須条件: {`lowerBound`, `upperBound`}. オプションの条件: {`exclusive`}.
		 */
		between,
		/**
		 * Label には部分文字列の条件が含まれています。
		 * 必須条件: {`substring`}. オプションの条件: {`exclusive`}.
		 */
		contains,
		/**
		 * ラベルは部分文字列の条件で終わります。
		 * 必須条件: {`substring`}. オプションの条件: {`exclusive`}.
		 */
		endsWith,
		/**
		 * 比較条件に等しい。
		 * 必須条件: {`comparator`}. オプションの条件: {`exclusive`}.
		 */
		equals,
		/**
		 * 比較条件より大きい。
		 * 必須条件: {`comparator`}.
		 */
		greaterThan,
		/**
		 * 比較条件以上。
		 * 必須条件: {`comparator`}.
		 */
		greaterThanOrEqualTo,
		/**
		 * 比較基準より小さい。
		 * 必須条件: {`comparator`}.
		 */
		lessThan,
		/**
		 * 比較基準以下。
		 * 必須条件: {`comparator`}.
		 */
		lessThanOrEqualTo,
		/**
		 * LabelFilterCondition が不明であるか、サポートされていません。
		 */
		unknown
	}
}