declare namespace ExcelScript {
	/**
	 * タイムライン内のリージョン別にスタイル要素を定義する`TimelineStyle`を表します。
	 * @see [ExcelScript.TimelineStyle interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.timelinestyle?view=office-scripts)
	 */
	export interface TimelineStyle {
		/**
		 * テーブル スタイルを削除します。
		 */
		delete(): void;
		/**
		 * すべてのスタイル要素のコピーを使用して、このタイムライン スタイルの複製を作成します。
		 */
		duplicate(): TimelineStyle;
		/**
		 * タイムライン スタイルの名前を取得します。
		 */
		getName(): string;
		/**
		 * この `TimelineStyle` オブジェクトが読み取り専用かどうかを指定します。
		 */
		getReadOnly(): boolean;
		/**
		 * タイムライン スタイルの名前を設定します。
		 * @param name
		 */
		setName(name: string): void;
	}
}
