declare namespace ExcelScript {
	/**
	 * テーブルの領域によってスタイル要素を定義するテーブル スタイルを表します。
	 * @see [ExcelScript.TableStyle interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.tablestyle?view=office-scripts)
	 */
	export interface TableStyle {
		/**
		 * テーブル スタイルを削除します。
		 */
		delete(): void;
		/**
		 * すべてのスタイル要素のコピーを使用して、このテーブル スタイルの複製を作成します。
		 */
		duplicate(): TableStyle;
		/**
		 * テーブル スタイルの名前を取得します。
		 */
		getName(): string;
		/**
		 * この `TableStyle` オブジェクトが読み取り専用かどうかを指定します。
		 */
		getReadOnly(): boolean;
		/**
		 * テーブル スタイルの名前を設定します。
		 * @param name
		 */
		setName(name: string): void;
	}
}
