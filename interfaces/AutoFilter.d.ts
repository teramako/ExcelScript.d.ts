/// <reference path="./FilterCriteria.d.ts"/>
declare namespace ExcelScript {
	/**
	 * オブジェクトを `AutoFilter` 表します。
	 * AutoFilter は、セルの内容に基づいて、Excel列の値を特定のフィルターに変換します。
	 * @see [ExcelScript.AutoFilter interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.autofilter?view=office-scripts)
	 */
	export interface AutoFilter {
		/**
		 * 範囲にオートフィルターを適用します。 列インデックスやフィルター条件が指定されている場合、列にフィルターを適用します。
		 * @param range オートフィルターが適用される範囲。
		 * @param columnIndex オートフィルターが適用される 0 から始まる列インデックス。
		 * @param criteria フィルター条件。
		 */
		apply(
			range: Range | string,
			columnIndex?: number,
			criteria?: FilterCriteria,
		): void;
		/**
		 * オートフィルターのフィルター条件と並べ替え状態をクリアします。
		 */
		clearCriteria(): void;
		/**
		 * オートフィルターが適用された範囲のすべてのフィルター条件を保持する配列です。
		 */
		getCriteria(): FilterCriteria[];
		/**
		 * オートフィルターが有効になっているかどうかを指定します。
		 */
		getEnabled(): boolean;
		/**
		 * オートフィルターにフィルター条件があるかどうかを指定します。
		 */
		getIsDataFiltered(): boolean;
		/**
		 * オートフィルターが `Range` 適用される範囲を表すオブジェクトを返します。
		 * AutoFilter に関連付けられているオブジェクトがない `Range` 場合、このメソッドは `undefined`.
		 */
		getRange(): Range;
		/**
		 * 現在範囲に指定されている AutoFilter オブジェクトを適用します。
		 */
		reapply(): void;
		/**
		 * 範囲の AutoFilter を削除します。
		 */
		remove(): void;
	}
}
