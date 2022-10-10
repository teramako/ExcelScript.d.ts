declare namespace ExcelScript {
	/**
	 * 複数のワークシート内の 1 つまたは複数の四角形範囲のコレクションを表します。
	 * @see [ExcelScript.WorkbookRangeAreas interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.workbookrangeareas?view=office-scripts)
	 */
	export interface WorkbookRangeAreas {
		/**
		 * A1 スタイルのアドレスの配列を返します。
		 * アドレス値には、セルの四角形ブロックごとのワークシート名が含まれます (例: "Sheet1!A1:B4、Sheet1!D1:D4")。
		 * 読み取り専用です。
		 */
		getAddresses(): string[];
		/**
		 * オブジェクトを `RangeAreasCollection` 返します。
		 * コレクション内のそれぞれ `RangeAreas` は、1 つのワークシート内の 1 つ以上の四角形の範囲を表します。
		 */
		getAreas(): RangeAreas[];
		/**
		 * コレクション内の `RangeAreas` ワークシート名または ID に基づいてオブジェクトを返します。
		 * ワークシートが存在しない場合、 `undefined`を返します.
		 * @param key ワークシートの名前または ID。
		 */
		getRangeAreasBySheet(key: string): RangeAreas;
		/**
		 * オブジェクト内でこのオブジェクトを構成する範囲を `RangeCollection` 返します。
		 */
		getRanges(): Range[];
	}
}
