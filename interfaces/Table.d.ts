/// <reference path="./Range.d.ts"/>
/// <reference path="./TableColumn.d.ts"/>
/// <reference path="./TableSort.d.ts"/>
declare namespace ExcelScript {
	/**
	 * Excel の表を表します。
	 * @see [ExcelScript.Table interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.table?view=office-scripts)
	 */
	export interface Table {
		/**
		 * テーブルに新しい列を追加します。
		 * @param index 省略可能。新しい列の相対位置を指定します。
		 * null または -1 の場合、最後に追加が行われます。
		 * 上位のインデックスを持つ列は横にシフトされます。0 を起点とする番号になります。
		 * @param values 省略可能。 テーブル列の書式設定されていない値の 1 次元配列。
		 * @param name 省略可能。 新しい列の名前を指定します。 null の場合は既定の名前が使用されます。
		 */
		addColumn(
			index?: number,
			values?: (boolean | string | number)[],
			name?: string,
		): TableColumn;
		/**
		 * テーブルに 1 行を追加します。
		 * @param index 省略可能。新しい行の相対位置を指定します。
		 * null または -1 の場合、最後に追加が行われます。挿入した行の下のすべての行が下方向にシフトします。0 を起点とする番号になります。
		 * @param values 省略可能。 テーブル行の書式設定されていない値の 1 次元配列。
		 */
		addRow(index?: number, values?: (boolean | string | number)[]): void;
		/**
		 * テーブルに 1 つ以上の行を追加します。
		 * @param index 省略可能。新しい行の相対位置を指定します。
		 * null または -1 の場合、最後に追加が行われます。挿入した行の下のすべての行が下方向にシフトします。0 を起点とする番号になります。
		 * @param values 省略可能。 テーブルの行の書式設定されていない値の 2 次元の配列。
		 */
		addRows(index?: number, values?: (boolean | string | number)[][]): void;
		/**
		 * 現在テーブルに適用されているすべてのフィルターをクリアします。
		 */
		clearFilters(): void;
		/**
		 * テーブルを通常の範囲のセルに変換します。 すべてのデータが保持されます。
		 */
		convertToRange(): Range;
		/**
		 * テーブルを削除します。
		 */
		delete(): void;
		/**
		 * 特定のインデックスで指定した数の行を削除します。
		 * @param index 削除する行のインデックス値。
		 *
		 * 注意: 削除に使用する値を決定した時点から行のインデックスが移動した可能性があります。
		 * @param count 削除する行数。 既定では、1 つの行が削除されます。
		 *
		 * 注: 同時に 1,000 行を超える行を削除すると、Power Automate タイムアウトが発生する可能性があります。
		 */
		deleteRowsAt(index: number, count?: number): void;
		/**
		 * テーブルの `AutoFilter` オブジェクトを表します。
		 */
		getAutoFilter(): AutoFilter;
		/**
		 * 名前または ID によって、列オブジェクトを取得します。
		 * 列が存在しない場合、このメソッドは返します。 `undefined`.
		 * @param key 列名または ID。
		 */
		getColumn(key: number | string): TableColumn | undefined;
		/**
		 * ID で列オブジェクトを取得します。 列が存在しない場合は、未定義が返されます。
		 * @param key 列 ID。
		 */
		getColumnById(key: number): TableColumn | undefined;
		/**
		 * Name で列オブジェクトを取得します。 列が存在しない場合は、未定義が返されます。
		 * @param key 列名。
		 */
		getColumnByName(key: string): TableColumn | undefined;
		/**
		 * テーブルに含まれるすべての列のコレクションを表します。
		 */
		getColumns(): TableColumn[];
		/**
		 * 表のヘッダー行に関連付けられた範囲オブジェクトを取得します。
		 *
		 * @example
		 * ```
		 * // This script centers the text in a table's header row cells.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the first table on the current worksheet.
		 *   const currentSheet = workbook.getActiveWorksheet();
		 *   const table = currentSheet.getTables()[0];
		 *
		 *   // Get the header range.
		 *   const headerRange = table.getHeaderRowRange();
		 *
		 *   // Set the horizontal text alignment to `center`.
		 *   headerRange.getFormat().setHorizontalAlignment(ExcelScript.HorizontalAlignment.center);
		 * }
		 * ```
		 */
		getHeaderRowRange(): Range;
		/**
		 * 最初の列に特殊な書式が含まれているかどうかを指定します。
		 */
		getHighlightFirstColumn(): boolean;
		/**
		 * 最後の列に特殊な書式が含まれているかどうかを指定します。
		 */
		getHighlightLastColumn(): boolean;
		/**
		 * 指定されたブックのテーブルを一意に識別する値を返します。
		 * 識別子の値は、テーブルの名前が変更された場合も変わりません。
		 */
		getId(): string;
		/**
		 * 数値 ID を返します。
		 */
		getLegacyId(): string;
		/**
		 * テーブルの名前。
		 */
		getName(): string;
		/**
		 * テーブル スタイルを表す定数値。
		 * 指定できる値は、"TableStyleLight1" から "TableStyleLight21"、
		 * "TableStyleMedium1" から "TableStyleMedium28"、
		 * "TableStyleDark1" から "TableStyleDark11" です。
		 * ブックに存在するカスタムのユーザー定義スタイルも指定できます。
		 */
		getPredefinedTableStyle(): string;
		/**
		 * テーブル全体に関連付けられた範囲オブジェクトを取得します。
		 *
		 * @example
		 * ```
		 * // This script removes any extra formatting that's been applied to a table.
		 * // This leaves only the base table style effects.
		 * // Any formatting outside of the table will be left as is.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the first table on the current worksheet.
		 *   let worksheet = workbook.getActiveWorksheet();
		 *   let table = worksheet.getTables()[0];
		 *
		 *   // Get the range used by the table.
		 *   let range = table.getRange();
		 *
		 *   // Clear all the formatting that is not applied by the table and the table style.
		 *   range.clear(ExcelScript.ClearApplyTo.formats);
		 * }
		 * ```
		 */
		getRange(): Range;
		/**
		 * テーブルのデータ本体に関連付けられた範囲オブジェクトを取得します。
		 */
		getRangeBetweenHeaderAndTotal(): Range;
		/**
		 * 表の行数を取得します。
		 */
		getRowCount(): number;
		/**
		 * テーブルの読み取りを容易にするために、奇数の列が強調表示される書式を列に表示するかどうかを指定します。
		 */
		getShowBandedColumns(): boolean;
		/**
		 * テーブルの読み取りを容易にするために、奇数行が強調表示される書式が偶数行と異なる場合に、行にバンド形式を表示するかどうかを指定します。
		 */
		getShowBandedRows(): boolean;
		/**
		 * フィルター ボタンが各列ヘッダーの上部に表示されるかどうかを指定します。
		 * これは、テーブルにヘッダー行が含まれている場合のみ設定できます。
		 */
		getShowFilterButton(): boolean;
		/**
		 * ヘッダー行が表示されるかどうかを指定します。
		 * この値によって、ヘッダー行の表示または削除を設定できます。
		 */
		getShowHeaders(): boolean;
		/**
		 * 合計行が表示されるかどうかを指定します。
		 * この値によって、集計行の表示または削除を設定できます。
		 */
		getShowTotals(): boolean;
		/**
		 * テーブル内の並べ替えを表します。
		 */
		getSort(): TableSort;
		/**
		 * 表の集計行に関連付けられた範囲オブジェクトを取得します。
		 */
		getTotalRowRange(): Range;
		/**
		 * 現在のテーブルを含んでいるワークシート。
		 */
		getWorksheet(): Worksheet;
		/**
		 * 現在テーブルにあるすべてのフィルターを再適用します。
		 */
		reapplyFilters(): void;
		/**
		 * テーブルのサイズを新しい範囲に変更します。
		 * 新しい範囲は元のテーブル範囲と重複している必要があり、ヘッダー (またはテーブルの上部) は同じ行に含まれている必要があります。
		 * @param newRange テーブルの新しいサイズを決定するために使用される範囲オブジェクトまたは範囲アドレス。
		 */
		resize(newRange: Range | string): void;
		/**
		 * 最初の列に特殊な書式が含まれているかどうかを指定します。
		 * @param highlightFirstColumn
		 */
		setHighlightFirstColumn(highlightFirstColumn: boolean): void;
		/**
		 * 最後の列に特殊な書式が含まれているかどうかを指定します。
		 * @param highlightLastColumn
		 */
		setHighlightLastColumn(highlightLastColumn: boolean): void;
		/**
		 * テーブルの名前。
		 * @param name
		 */
		setName(name: string): void;
		/**
		 * テーブル スタイルを表す定数値。
		 * 指定できる値は、"TableStyleLight1" から "TableStyleLight21"、
		 * "TableStyleMedium1" から "TableStyleMedium28"、
		 * "TableStyleDark1" から "TableStyleDark11" です。
		 * ブックに存在するカスタムのユーザー定義スタイルも指定できます。
		 * @param predefinedTableStyle
		 */
		setPredefinedTableStyle(predefinedTableStyle: string): void;
		/**
		 * テーブルの読み取りを容易にするために、奇数の列が強調表示される書式を列に表示するかどうかを指定します。
		 * @param showBandedColumns
		 */
		setShowBandedColumns(showBandedColumns: boolean): void;
		/**
		 * テーブルの読み取りを容易にするために、奇数行が強調表示される書式が偶数行と異なる場合に、行にバンド形式を表示するかどうかを指定します。
		 * @param showBandedRows
		 */
		setShowBandedRows(showBandedRows: boolean): void;
		/**
		 * フィルター ボタンが各列ヘッダーの上部に表示されるかどうかを指定します。
		 * これは、テーブルにヘッダー行が含まれている場合のみ設定できます。
		 * @param showFilterButton
		 */
		setShowFilterButton(showFilterButton: boolean): void;
		/**
		 * ヘッダー行が表示されるかどうかを指定します。
		 * この値によって、ヘッダー行の表示または削除を設定できます。
		 * @param showHeaders
		 */
		setShowHeaders(showHeaders: boolean): void;
		/**
		 * 合計行が表示されるかどうかを指定します。
		 * この値によって、集計行の表示または削除を設定できます。
		 * @param showTotals
		 */
		setShowTotals(showTotals: boolean): void;
	}
}
