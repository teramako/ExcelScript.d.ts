/// <reference path="../enums/SortMethod.d.ts" />
/// <reference path="./SortField.d.ts" />
declare namespace ExcelScript {
	/**
	 * オブジェクトの並べ替え操作を `Table` 管理します。
	 * @see [ExcelScript.TableSort interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.tablesort?view=office-scripts)
	 */
	export interface TableSort {
		/**
		 * 並べ替え操作を実行します。
		 * @param fields 並べ替えに使用する条件の一覧。
		 * @param matchCase 省略可能。大文字小文字の区別が文字列の順序に影響を与えるかどうか。
		 * @param method 省略可能。 中国語文字に使用される順序付けの方法です。
		 */
		apply(
			fields: SortField[],
			matchCase?: boolean,
			method?: SortMethod,
		): void;
		/**
		 * テーブルに現在設定されている並べ替えをクリアします。
		 * これにより表の順序が変更されることはありませんが、ヘッダーのボタンの状態がクリアされます。
		 */
		clear(): void;
		/**
		 * テーブルの最後の並べ替えに使用される現在の条件を指定します。
		 */
		getFields(): SortField[];
		/**
		 * 大文字小文字がテーブルの最後の並べ替えに影響を与える場合に指定します。
		 */
		getMatchCase(): boolean;
		/**
		 * テーブルの並べ替えに最後に使用した中国語の文字順序付けメソッドを表します。
		 */
		getMethod(): SortMethod;
		/**
		 * テーブルに、現在の並べ替えパラメーターを再適用します。
		 */
		reapply(): void;
	}
}
