declare namespace ExcelScript {
	/**
	 * ピボットテーブルの視覚的なレイアウトを表します。
	 * @see [ExcelScript.PivotLayout interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.pivotlayout?view=office-scripts)
	 */
	export interface PivotLayout {
		/**
		 * 書式設定が更新時またはフィールドの移動時に自動的に書式設定される場合を指定します。
		 */
		getAutoFormat(): boolean;
		/**
		 * ピボットテーブルのデータ値が存在する範囲を返します。
		 */
		getBodyAndTotalRange(): Range;
		/**
		 * ピボットテーブルの列ラベルが存在する範囲を返します。
		 */
		getColumnLabelRange(): Range;
		/**
		 * PivotTable 内で指定された範囲の値を計算するために使用される DataHierarchy を取得します。
		 * @param cell ピボットテーブル データ本文内の 1 つのセル。
		 */
		getDataHierarchy(cell: Range | string): DataPivotHierarchy;
		/**
		 * フィールド リストを UI に表示できる場合に指定します。
		 */
		getEnableFieldList(): boolean;
		/**
		 * ピボットテーブルのフィルター エリアの範囲を返します。
		 */
		getFilterAxisRange(): Range;
		/**
		 * このプロパティは、ピボットテーブルのすべてのフィールドの PivotLayoutType を示します。
		 * フィールドによって状態が異なる場合は `null` 値になります。
		 */
		getLayoutType(): PivotLayoutType;
		/**
		 * ピボット、並べ替え、ページ フィールド項目の変更などの操作によってレポートが更新または再計算される場合に書式設定を保持する場合に指定します。
		 */
		getPreserveFormatting(): boolean;
		/**
		 * フィルター エリアを除く、ピボットテーブルが存在する範囲を返します。
		 */
		getRange(): Range;
		/**
		 * ピボットテーブルの行ラベルが存在する範囲を返します。
		 */
		getRowLabelRange(): Range;
		/**
		 * ピボットテーブル レポートに列の総計が表示される場合に指定します。
		 */
		getShowColumnGrandTotals(): boolean;
		/**
		 * ピボットテーブル レポートに行の総計が表示される場合に指定します。
		 */
		getShowRowGrandTotals(): boolean;
		/**
		 * このプロパティは、ピボット `SubtotalLocationType` テーブルのすべてのフィールドを示します。
		 * フィールドの状態が異なる場合は、次の値になります。 `null`.
		 */
		getSubtotalLocation(): SubtotalLocationType;
		/**
		 * 書式設定が更新時またはフィールドの移動時に自動的に書式設定される場合を指定します。
		 * @param autoFormat
		 */
		setAutoFormat(autoFormat: boolean): void;
		/**
		 * 必要なすべての条件とコンテキストを自動的に選択するため、指定したセルを使用して自動的に並べ替えを実行するようピボットテーブルを設定します。
		 * これは、UI から自動並べ替えを適用するのと同じ動作です。
		 * @param cell オートソートを適用する条件を取得するために使用する 1 つのセル。
		 * @param sortBy 並べ替えの方向。
		 */
		setAutoSortOnCell(cell: Range | string, sortBy: SortBy): void;
		/**
		 * フィールド リストを UI に表示できる場合に指定します。
		 * @param enableFieldList
		 */
		setEnableFieldList(enableFieldList: boolean): void;
		/**
		 * このプロパティは、ピボットテーブルのすべてのフィールドの PivotLayoutType を示します。
		 * フィールドによって状態が異なる場合は `null` 値になります。
		 * @param layoutType
		 */
		setLayoutType(layoutType: PivotLayoutType): void;
		/**
		 * ピボット、並べ替え、ページ フィールド項目の変更などの操作によってレポートが更新または再計算される場合に書式設定を保持する場合に指定します。
		 * @param preserveFormatting
		 */
		setPreserveFormatting(preserveFormatting: boolean): void;
		/**
		 * ピボットテーブル レポートに列の総計が表示される場合に指定します。
		 * @param showColumnGrandTotals
		 */
		setShowColumnGrandTotals(showColumnGrandTotals: boolean): void;
		/**
		 * ピボットテーブル レポートに行の総計が表示される場合に指定します。
		 * @param showRowGrandTotals
		 */
		setShowRowGrandTotals(showRowGrandTotals: boolean): void;
		/**
		 * このプロパティは、ピボット `SubtotalLocationType` テーブルのすべてのフィールドを示します。
		 * フィールドの状態が異なる場合は、次の値になります。 `null`.
		 * @param subtotalLocation
		 */
		setSubtotalLocation(subtotalLocation: SubtotalLocationType): void;
	}
}
