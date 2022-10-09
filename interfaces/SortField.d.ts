declare namespace ExcelScript {
	/**
	 * 並べ替え操作の条件を表します。
	 * @see [ExcelScript.SortField interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.sortfield?view=office-scripts)
	 */
	export interface SortField {
		/**
		 * 並べ替えが昇順で行われるかどうかを指定します。
		 */
		ascending?: boolean;
		/**
		 * 並べ替えがフォントまたはセルの色にある場合に、条件のターゲットとなる色を指定します。
		 */
		color?: string;
		/**
		 * このフィールドのその他の並べ替えオプションを表します。
		 */
		dataOption?: SortDataOption;
		/**
		 * 並べ替えがセルのアイコン上にある場合に、条件のターゲットとなるアイコンを指定します。
		 */
		icon?: Icon;
		/**
		 * 条件がオンになっている列 (並べ替え方向に応じて行) を指定します。
		 * 最初の列 (または行) からのオフセットとして表されます。
		 */
		key: number;
		/**
		 * この条件の並べ替えの種類を指定します。
		 */
		sortOn?: SortOn;
		/**
		 * 並べ替えるリッチ値のターゲット プロパティ名であるサブフィールドを指定します。
		 */
		subField?: string;
	}
}