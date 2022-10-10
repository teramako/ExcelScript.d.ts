declare namespace ExcelScript {
	/**
	 * スライサーの領域によってスタイル要素を定義するスライサー スタイルを表します。
	 * @see [ExcelScript.SlicerStyle interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.slicerstyle?view=office-scripts)
	 */
	export interface SlicerStyle {
		/**
		 * スライサー スタイルを削除します。
		 */
		delete(): void;
		/**
		 * すべてのスタイル要素のコピーを使用して、このスライサー スタイルの複製を作成します。
		 */
		duplicate(): SlicerStyle;
		/**
		 * スライサー スタイルの名前を取得します。
		 */
		getName(): string;
		/**
		 * この `SlicerStyle` オブジェクトが読み取り専用かどうかを指定します。
		 */
		getReadOnly(): boolean;
		/**
		 * スライサー スタイルの名前を設定します。
		 * @param name
		 */
		setName(name: string): void;
	}
}
