/// <reference path="../enums/DateFilterCondition.d.ts"/>
/// <reference path="./FilterDatetime.d.ts"/>
declare namespace ExcelScript {
	/**
	 * PivotField に適用する日付フィルターの構成可能なテンプレート。
	 * フィルター `condition` を動作させるには、どのような条件を設定する必要があるかを定義します。
	 * @see [ExcelScript.PivotDateFilter interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.pivotdatefilter?view=office-scripts)
	 */
	export interface PivotDateFilter {
		/**
		 * 比較器は、他の値が比較される静的な値です。
		 * 比較の種類は、条件によって定義されます。
		 */
		comparator?: FilterDatetime;
		/**
		 * 必要なフィルター条件を定義するフィルターの条件を指定します。
		 */
		condition: DateFilterCondition;
		/**
		 * もし `true`、フィルター は、条件を 満たすアイテムを除外します。
		 * 既定値は `false` (条件を満たすアイテムを含めるフィルター) です。
		 */
		exclusive?: boolean;
		/**
		 * フィルター条件の範囲 `between` の下限。
		 */
		lowerBound?: FilterDatetime;
		/**
		 * フィルター条件の範囲 `between` の上限。
		 */
		upperBound?: FilterDatetime;
		/**
		 * `equals` の場合, `before`, `after`、および `between` フィルター条件は、比較を日単位で行う必要があるかどうかを示します。
		 */
		wholeDays?: boolean;
	}
}
