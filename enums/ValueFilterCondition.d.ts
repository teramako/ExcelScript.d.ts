declare namespace ExcelScript {
	/**
	 * 値フィルターを適用できる、受け入れられるすべての条件を表す列挙型。
	 * フィールドに適用されるピボットフィルターの種類を構成するために使用します。
	 * `PivotFilter.exclusive` これらの条件の多くを `true` 反転させる設定が可能です。
	 * @see [ExcelScript.ValueFilterCondition enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.valuefiltercondition?view=office-scripts)
	 */
	export enum ValueFilterCondition {
		/**
		 * 間と lowerBound 条件 upperBound 。
		 * 必須の条件: {`value`, `lowerBound`, `upperBound`}. オプションの条件: {`exclusive`}.
		 */
		between,
		/**
		 * 下の N (threshold) [アイテム、パーセント、値カテゴリ] の合計。
		 * 必須の条件: {`value`, `threshold`, `selectionType`}.
		 */
		bottomN,
		/**
		 * 比較条件に等しい。
		 * 必須の条件: {`value`, `comparator`}. オプションの条件: {`exclusive`}.
		 */
		equals,
		/**
		 * 比較条件より大きい。
		 * 必須の条件: {`value`, `comparator`}.
		 */
		greaterThan,
		/**
		 * コンパレータ条件以上。
		 * 必須の条件: {`value`, `comparator`}.
		 */
		greaterThanOrEqualTo,
		/**
		 * 比較条件より小さい。 必須の条件: {`value`, `comparator`}.
		 */
		lessThan,
		/**
		 * コンパレータ条件以下。
		 * 必須の条件: {`value`, `comparator`}.
		 */
		lessThanOrEqualTo,
		/**
		 * 上位 N (threshold) [アイテム、パーセント、値カテゴリ] の合計。
		 * 必須の条件: {`value`, `threshold`, `selectionType`}.
		 */
		topN,
		/**
		 * `ValueFilterCondition` 不明またはサポートされていません。
		 */
		unknown,
	}
}
