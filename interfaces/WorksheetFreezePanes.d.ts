declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.WorksheetFreezePanes interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.worksheetfreezepanes?view=office-scripts)
	 */
	export interface WorksheetFreezePanes {
		/**
		 * アクティブなワークシート ビューに固定セルを設定します。
		 * 指定された範囲は、上部と左端のペインで固定されるセルに対応します。
		 * @param frozenRange 固定するセルを表す範囲、または `null` で固定されているすべてのペインを削除します。
		 */
		freezeAt(frozenRange: Range | string): void;
		/**
		 * ワークシートの最初の列を固定します。
		 * @param count 固定する列の省略可能な数、または 0 ですべての列の凍結解除します。
		 */
		freezeColumns(count?: number): void;
		/**
		 * ワークシートの一番上の行を固定します。
		 * @param count 固定する行の省略可能な数、または 0 ですべての行の凍結解除します。
		 */
		freezeRows(count?: number): void;
		/**
		 * アクティブなワークシート ビュー内の固定セルを記述する範囲を取得します。
		 * 固定範囲は、上部と左端のペインで固定されているセルに対応します。
		 * 固定ウィンドウがない場合、`undefined` を返します。
		 */
		getLocation(): Range;
		/**
		 * ワークシートからすべての固定ウィンドウを削除します。
		 */
		unfreeze(): void;
	}
}
