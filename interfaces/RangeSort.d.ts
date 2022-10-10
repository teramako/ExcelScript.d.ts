declare namespace ExcelScript {
	/**
	 * オブジェクトの並べ替え操作を `Range` 管理します。
	 * @see [ExcelScript.RangeSort interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.rangesort?view=office-scripts)
	 */
	export interface RangeSort {
		/**
		 * 並べ替え操作を実行します。
		 * @param fields 並べ替えに使用する条件の一覧。
		 * @param matchCase 省略可能。大文字小文字の区別が文字列の順序に影響を与えるかどうか。
		 * @param hasHeaders 省略可能。範囲にヘッダーがあるかどうか。
		 * @param orientation 省略可能。 操作が行と列のどちらの並べ替えかを示します。
		 * @param method 省略可能。 中国語文字に使用される順序付けの方法です。
		 */
		apply(
			fields: SortField[],
			matchCase?: boolean,
			hasHeaders?: boolean,
			orientation?: SortOrientation,
			method?: SortMethod,
		): void;
	}
}
