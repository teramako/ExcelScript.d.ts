declare namespace ExcelScript {
	/**
	 * テーブル内にある 1 つの列を表します。
	 * @see [ExcelScript.TableColumn interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.tablecolumn?view=office-scripts)
	 */
	export interface TableColumn {
		/**
		 * テーブルから列を削除します。
		 */
		delete(): void;
		/**
		 * 列に適用されたフィルターを取得します。
		 */
		getFilter(): Filter;
		/**
		 * 列のヘッダー行に関連付けられた範囲オブジェクトを取得します。
		 */
		getHeaderRowRange(): Range;
		/**
		 * テーブル内の列を識別する一意のキーを返します。
		 */
		getId(): number;
		/**
		 * テーブルの列コレクション内の列のインデックス番号を返します。
		 * 0 を起点とする番号になります。
		 */
		getIndex(): number;
		/**
		 * テーブル列の名前を指定します。
		 */
		getName(): string;
		/**
		 * 列全体に関連付けられた範囲オブジェクトを取得します。
		 */
		getRange(): Range;
		/**
		 * 列のデータ本体に関連付けられた範囲オブジェクトを取得します。
		 */
		getRangeBetweenHeaderAndTotal(): Range;
		/**
		 * 列の集計行に関連付けられた範囲オブジェクトを取得します。
		 */
		getTotalRowRange(): Range;
		/**
		 * テーブル列の名前を指定します。
		 * @param name 
		 */
		setName(name: string): void;
	}
}