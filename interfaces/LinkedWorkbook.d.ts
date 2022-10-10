declare namespace ExcelScript {
	/**
	 * リンクされたブックに関する情報が含まれます。
	 * ブックに別のブック内のデータを指すリンクがある場合、2 番目のブックは最初のブックにリンクされます。
	 * このシナリオでは、2 番目のブックは "リンクされたブック" と呼ばれる。
	 * @see [ExcelScript.LinkedWorkbook interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.linkedworkbook?view=office-scripts)
	 */
	export interface LinkedWorkbook {
		/**
		 * リンクされたブックを指すリンクを壊す要求を行います。
		 * 数式内のリンクは、最新のフェッチされたデータに置き換えられる。
		 * 現在の `LinkedWorkbook` オブジェクトは無効化され、 `LinkedWorkbookCollection`から削除されます。
		 */
		breakLinks(): void;
		/**
		 * リンクされたブックから取得したデータを更新する要求を行います。
		 */
		refreshLinks(): void;
	}
}
