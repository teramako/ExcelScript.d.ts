declare namespace ExcelScript {
	/**
	 * ピボットテーブル領域によってスタイル要素を定義するピボットテーブル スタイルを表します。
	 * @see [ExcelScript.PivotTableStyle interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.pivottablestyle?view=office-scripts)
	 */
	export interface PivotTableStyle {
		/**
		 * ピボットテーブル スタイルを削除します。
		 */
		delete(): void;
		/**
		 * すべてのスタイル要素のコピーを使用して、このピボットテーブル スタイルの複製を作成します。
		 */
		duplicate(): PivotTableStyle;
		/**
		 * ピボットテーブル スタイルの名前を取得します。
		 */
		getName(): string;
		/**
		 * この `PivotTableStyle` オブジェクトが読み取り専用かどうかを指定します。
		 */
		getReadOnly(): boolean;
		/**
		 * ピボットテーブル スタイルの名前を設定します。
		 * @param name
		 */
		setName(name: string): void;
	}
}
