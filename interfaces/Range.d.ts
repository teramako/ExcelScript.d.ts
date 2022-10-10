/**
 * 範囲は、セル、行、列、セルのブロックなど、1 つ以上の連続するセルのセットを表します。
 * @see [ExcelScript.Range interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.range?view=office-scripts)
 */
declare namespace ExcelScript {
	export interface Range {
		/**
		 * 最初または最も優先度の高い新しい条件付き書式をコレクションに追加します。
		 * @param type 追加する条件付き書式の種類。
		 * 詳細は「ExcelScript.ConditionalFormatType」をご覧ください。
		 */
		addConditionalFormat(type: ConditionalFormatType): ConditionalFormat;
		/**
		 * 指定したオートフィル ロジックを使用して、現在の範囲から宛先範囲までの範囲を入力します。
		 * 変換先の範囲は、 `null` ソース範囲を水平方向または垂直方向に拡張できます。 Discontiguous 範囲はサポートされていません。
		 * @param destinationRange AutoFill の宛先範囲。
		 * 変換先の範囲が `null`では、周囲のセル (UI の範囲塗りつぶしハンドルをダブルクリックしたときの動作) に基づいてデータが入力されます。
		 * @param autoFillType オートフィルの種類。
		 * 現在の範囲の内容に基づいて、変換先の範囲を入力する方法を指定します。
		 * 既定値は "FillDefault" です。
		 */
		autoFill(
			destinationRange?: Range | string,
			autoFillType?: AutoFillType,
		): void;
		/**
		 * ワークシート上のセルの範囲を計算します。
		 */
		calculate(): void;
		/**
		 * 範囲の値、書式、塗りつぶし、罫線などをクリアします。
		 * @param applyTo 省略可能。
		 * クリア操作の種類を決定します。
		 * 詳細は「`ExcelScript.ClearApplyTo`」をご覧ください。
		 */
		clear(applyTo?: ClearApplyTo): void;
		/**
		 * 現在指定している範囲でアクティブなすべての条件付き書式をクリアする。
		 */
		clearAllConditionalFormats(): void;
		/**
		 * データ型を含む範囲セルをテキストに変換します。
		 */
		convertDataTypeToText(): void;
		/**
		 * セル データまたは書式設定をソース範囲または `RangeAreas` 現在の範囲にコピーします。
		 * コピー先の範囲は、ソース範囲またはコピー元の範囲とは異なるサイズにすることができます。
		 * `RangeAreas`. コピー先がソースより小さい場合、変換先は自動的に展開されます。
		 * @param sourceRange ソース範囲または RangeAreas コピー元。
		 * ソース RangeAreas に複数の範囲がある場合は、四角形の範囲から完全な行または列を削除してフォームを作成できる必要があります。
		 * @param copyType コピーするセル データまたは書式の種類。 既定値は "すべて" です。
		 * @param skipBlanks True の場合は、ソース範囲内の空白のセルをスキップします。 既定値は false です。
		 * @param transpose True の場合は、変換先の範囲内のセルを入れ替えます。 既定値は false です。
		 */
		copyFrom(
			sourceRange: Range | RangeAreas | string,
			copyType?: RangeCopyType,
			skipBlanks?: boolean,
			transpose?: boolean,
		): void;
		/**
		 * 範囲に関連付けられているセルを削除します。
		 * @param shift セルをシフトする方向を指定します。
		 * 詳細は「`ExcelScript.DeleteShiftDirection`」をご覧ください。
		 */
		delete(shift: DeleteShiftDirection): void;
		/**
		 * 指定された条件に基づいて指定された文字列を見つけます。
		 * 現在の範囲が 1 つのセルより大きい場合、検索はその範囲に制限されます。
		 * それ以外の場合は、そのセルの後から始まるシート全体が検索対象になります。
		 * 一致しない場合は、このメソッドが返します。 undefined.
		 * @param text 検索する文字列。
		 * @param criteria 検索方向や、検索がセル全体と一致する必要があるか、大文字と小文字を区別する必要があるかなど、追加の検索条件。
		 */
		find(text: string, criteria: SearchCriteria): Range;
		/**
		 * フラッシュフィルを現在の範囲に設定します。
		 * パターンを検出すると、フラッシュフィルによってデータが自動的に塗りつぶされるため、
		 * パターンを見つけるには、範囲が 1 つの列範囲であり、その周囲にデータが含まれている必要があります。
		 */
		flashFill(): void;
		/**
		 * 現在`Range`の`Range`オブジェクトと同じ左上のセルを持ち、指定された行数と列数を持つオブジェクトを取得します。
		 * @param numRows 新しい範囲サイズの行数。
		 * @param numColumns 新しい範囲サイズの列の数。
		 */
		getAbsoluteResizedRange(numRows: number, numColumns: number): Range;
		/**
		 * 範囲参照を A1 スタイルで指定します。
		 * アドレス値にはシート参照が含まれています (例: "Sheet1!A1:B4")。
		 */
		getAddress(): string;
		/**
		 * ユーザーの言語で指定した範囲の範囲参照を表します。
		 */
		getAddressLocal(): string;
		/**
		 * 指定した範囲を包含する、最小の Range オブジェクトを取得します。
		 * たとえば、 `GetBoundingRect` "B2:C5" と "D10:E15" は "B2:E15" です。
		 * @param anotherRange 範囲オブジェクト、アドレス、または範囲名。
		 */
		getBoundingRect(anotherRange: Range | string): Range;
		/**
		 * 行と列の番号に基づいて、1 つのセルを含んだ範囲オブジェクトを取得します。
		 * セルは、ワークシート グリッド内に留まる限り、親範囲の範囲外にすることができます。
		 * 返されるセルは、範囲の左上のセルを基準に配置されます。
		 * @param row 取得するセルの行番号。 0 を起点とする番号になります。
		 * @param column 取得セルの列番号。 0 を起点とする番号になります。
		 */
		getCell(row: number, column: number): Range;
		/**
		 * 範囲内のセルの数を指定します。
		 * セルの数が 2^31-1 (2,147,483,647) を超えると、この API は -1 を返します。
		 */
		getCellCount(): number;
		/**
		 * 範囲に含まれる列を 1 つ取得します。
		 * @param column 取得する範囲の列番号。 0 を起点とする番号になります。
		 */
		getColumn(column: number): Range;
		/**
		 * 範囲内の列の合計数を指定します。
		 */
		getColumnCount(): number;
		/**
		 * 現在の範囲内のすべての列が非表示になっているかどうかを表します。
		 * - 値は、 `true` 範囲内のすべての列が非表示になっている場合です。
		 * - 値は、 `false` 範囲内の列が非表示になっていない場合です。
		 * - 値は、 `null` 範囲内の一部の列が非表示になっていて、同じ範囲内の他の列が非表示になっていない場合です。
		 */
		getColumnHidden(): boolean;
		/**
		 * 範囲内の最初のセルの列番号を指定します。 0 を起点とする番号になります。
		 */
		getColumnIndex(): number;
		/**
		 * 現在 `Range` のオブジェクトの右側にある特定の数の列を取得します。
		 * @param count 省略可能。結果の範囲に含める列の数です。
		 * 通常、正の数値を使用して現在の範囲外に範囲を作成します。
		 * 負の数値を使用して、現在の範囲内に範囲を作成することもできます。
		 * 既定値は 1 です。
		 */
		getColumnsAfter(count?: number): Range;
		/**
		 * 現在 `Range` のオブジェクトの左側にある特定の数の列を取得します。
		 * @param count 省略可能。結果の範囲に含める列の数です。
		 * 通常、正の数値を使用して現在の範囲外に範囲を作成します。
		 * 負の数値を使用して、現在の範囲内に範囲を作成することもできます。
		 * 既定値は 1 です。
		 */
		getColumnsBefore(count?: number): Range;
		/**
		 * 指定された ID に対応する条件付き書式を返します。
		 * @param id 条件付き形式の ID。
		 */
		getConditionalFormat(id: string): ConditionalFormat;
		/**
		 * そのコレクション `ConditionalFormats` が範囲と交差します。
		 */
		getConditionalFormats(): ConditionalFormat[];
		/**
		 * dataValidation オブジェクトを返します。
		 */
		getDataValidation(): DataValidation;
		/**
		 * `WorkbookRangeAreas`同じワークシートまたは複数のワークシート内のセルの直接の前例をすべて含む範囲を表すオブジェクトを返します。
		 */
		getDirectPrecedents(): WorkbookRangeAreas;
		/**
		 * 範囲の列全体を表すオブジェクトを取得します
		 * (たとえば、現在の範囲がセル "B4:E11" を表す場合、その `getEntireColumn` セルは列 "B:E" を表す範囲です)。
		 */
		getEntireColumn(): Range;
		/**
		 * 範囲の行全体を表すオブジェクトを取得します
		 * (たとえば、現在の範囲がセル "B4:E11" を表す場合、その `getEntireRow` 範囲は行 "4:11" を表す範囲です)。
		 */
		getEntireRow(): Range;
		/**
		 * 指定した方向に基づいて、現在の範囲と範囲の端までの範囲を含む範囲オブジェクトを返します。
		 * これは、Windows UI 上の Excel の Ctrl + Shift + Arrow キーの動作と一致します。
		 * @param direction アクティブセルからの方向。
		 * @param activeCell この範囲内のアクティブセル。 既定では、アクティブセルは範囲の左上のセルです。
		 * アクティブセルがこの範囲内にない場合は、エラーがスローされます。
		 */
		getExtendedRange(
			direction: KeyboardDirection,
			activeCell?: Range | string,
		): Range;
		/**
		 * Format オブジェクト (範囲のフォント、塗りつぶし、罫線、配置などのプロパティをカプセル化するオブジェクト) を返します。
		 */
		getFormat(): RangeFormat;
		/**
		 * A1 形式の表記でセル数式を表します。
		 * 範囲に複数のセルが含まれている場合は、最初のセルのデータ (0 の行インデックスと 0 の列インデックスで表されます) が返されます。
		 */
		getFormula(): string;
		/**
		 * ユーザーの言語と数値書式ロケールで、A1 形式の表記でセル数式を表します。
		 * たとえば、英語の数式 "=SUM(A1, 1.5)" は、ドイツ語では "=SUMME(A1; 1,5)" になります。
		 * 範囲に複数のセルが含まれている場合は、最初のセルのデータ (0 の行インデックスと 0 の列インデックスで表されます) が返されます。
		 */
		getFormulaLocal(): string;
		/**
		 * セル数式を R1C1 スタイルの表記で表します。
		 * 範囲に複数のセルが含まれている場合は、最初のセルのデータ (0 の行インデックスと 0 の列インデックスで表されます) が返されます。
		 */
		getFormulaR1C1(): string;
		/**
		 * A1 スタイル表記の数式を表します。
		 * セルに数式がない場合は、代わりにその値が返されます。
		 */
		getFormulas(): string[][];
		/**
		 * ユーザーの言語と数値書式ロケールで、A1 スタイル表記の数式を表します。
		 * たとえば、英語の数式 "=SUM(A1, 1.5)" は、ドイツ語では "=SUMME(A1; 1,5)" になります。
		 * セルに数式がない場合は、代わりにその値が返されます。
		 */
		getFormulasLocal(): string[][];
		/**
		 * R1C1 スタイル表記の数式を表します。
		 * セルに数式がない場合は、代わりにその値が返されます。
		 */
		getFormulasR1C1(): string[][];
		/**
		 * すべてのセルにスピル ボーダーがあるかどうかを表します。
		 * すべてのセルに `true` スピル罫線がある場合、または `false` すべてのセルにスピル罫線がない場合に返されます。
		 * 範囲内に `null` スピル罫線があるセルとスピル罫線のないセルの両方がある場合に返されます。
		 */
		getHasSpill(): boolean;
		/**
		 * 範囲の上端から範囲の下端までの 100% ズームの距離をポイント単位で返します。
		 */
		getHeight(): number;
		/**
		 * 現在の範囲内のすべてのセルが非表示になっているかどうかを表します。
		 * - 値は、 `true` 範囲内のすべてのセルが非表示になっている場合です。
		 * - 値は、 `false` 範囲内のセルが非表示になっている場合です。
		 * - 値は、 `null` 範囲内の一部のセルが非表示になっていて、同じ範囲内の他のセルが非表示になっていない場合です。
		 */
		getHidden(): boolean;
		/**
		 * 現在の範囲のハイパーリンクを表します。
		 */
		getHyperlink(): RangeHyperlink;
		/**
		 * 範囲を base64 でエンコードされた png イメージとしてレンダリングします。
		 *
		 * 注: 折り返されたテキストまたはセル幅を超えるテキストが、行折り返しなしで同じ行にレンダリングされる原因となる既知の問題 `Range.getImage` があります。
		 * これにより、行全体にテキストがオーバーフローするため、結果の画像は読み取れなくなるようになります。
		 * 回避策として、範囲内のデータが各セルに 1 行として収まることを確認します。
		 */
		getImage(): string;
		/**
		 * 指定した範囲の長方形の交差を表す範囲オブジェクトを取得します。
		 * 交差が見つからない場合、このメソッドは返します `undefined`.
		 * @param anotherRange 範囲の交差を判断するために使用される、Range オブジェクトまたは Range アドレス。
		 */
		getIntersection(anotherRange: Range | string): Range;
		/**
		 * 現在の範囲が列全体であるかどうかを表します。
		 */
		getIsEntireColumn(): boolean;
		/**
		 * 現在の範囲が行全体であるかどうかを表します。
		 */
		getIsEntireRow(): boolean;
		/**
		 * 範囲内の最後のセルを取得します。
		 * たとえば、"B2:D5" の最後のセルは "D5" になります。
		 */
		getLastCell(): Range;
		/**
		 * 範囲内の最後の列を取得します。
		 * たとえば、"B2:D5" の最後の列は "D2:D5" になります。
		 */
		getLastColumn(): Range;
		/**
		 * 範囲内の最後の行を取得します。
		 * たとえば、"B2:D5" の最後の行は "B5:D5" になります。
		 */
		getLastRow(): Range;
		/**
		 * ワークシートの左端から範囲の左端までの、100% ズームのポイント単位の距離を返します。
		 */
		getLeft(): number;
		/**
		 * セルのデータ型の状態を表します。
		 */
		getLinkedDataTypeState(): LinkedDataTypeState;
		/**
		 * 各セルのデータ型の状態を表します。
		 */
		getLinkedDataTypeStates(): LinkedDataTypeState[][];
		/**
		 * この範囲内の `RangeAreas` マージされた領域を表すオブジェクトを返します。
		 * この範囲のマージされた領域数が 512 を超える場合、このメソッドは結果を返しません。
		 * オブジェクトが `RangeAreas` 存在しない場合、このメソッドは、その `isNullObject` プロパティが設定されたオブジェクトを返します。 `true`.
		 */
		getMergedAreas(): RangeAreas;
		/**
		 * 指定した範囲のセル Excel 番号書式コードを表します。
		 * 範囲に複数のセルが含まれている場合は、最初のセルのデータ (0 の行インデックスと 0 の列インデックスで表されます) が返されます。
		 */
		getNumberFormat(): string;
		/**
		 * 各セルの数値形式のカテゴリを表します。
		 */
		getNumberFormatCategories(): NumberFormatCategory[][];
		/**
		 * 範囲内の最初のセルの数値書式カテゴリを指定します (行インデックス 0 と列インデックス 0 で表されます)。
		 */
		getNumberFormatCategory(): NumberFormatCategory;
		/**
		 * ユーザーの言語設定に基づいて、特定の範囲のセル Excel 番号書式コードを表します。
		 * プロパティを取得または設定するときに、Excel では言語や書式の強制は `numberFormatLocal` 実行されません。
		 *  返されるテキストは、システム設定で指定された言語に基づいて、ローカルで書式設定された文字列を使用します。
		 * 範囲に複数のセルが含まれている場合は、最初のセルのデータ (0 の行インデックスと 0 の列インデックスで表されます) が返されます。
		 */
		getNumberFormatLocal(): string;
		/**
		 * 指定した範囲の Excel の数値書式コードを表します。
		 */
		getNumberFormats(): string[][];
		/**
		 * ユーザーの言語設定に基づいて、指定した範囲の Excel の数値書式コードを表します。
		 * プロパティを取得または設定するときに、Excel では言語や書式の強制は `numberFormatLocal` 実行されません。
		 * 返されるテキストは、システム設定で指定された言語に基づいて、ローカルで書式設定された文字列を使用します。
		 */
		getNumberFormatsLocal(): string[][];
		/**
		 * 指定した範囲からのオフセットで範囲を表すオブジェクトを取得します。
		 * 返される範囲のディメンションは、この範囲と一致します。
		 * 結果の範囲がワークシートのグリッドの境界線の外にはみ出る場合は、エラーがスローされます。
		 * @param rowOffset 範囲をオフセットする行数 (正、負、または 0)。正の値は下方向へのオフセットです。また、負の値は上方向へのオフセットです。
		 * @param columnOffset 範囲をオフセットする列数 (正、負、または 0)。正の値は右方向へのオフセットです。また、負の値は左方向へのオフセットです。
		 */
		getOffsetRange(rowOffset: number, columnOffset: number): Range;
		/**
		 * 範囲と重複するピボットテーブルのスコープ付きコレクションを取得します。
		 * @param fullyContained もし `true`は、範囲内に完全に含まれるピボットテーブルのみを返します。 既定値は次の値です。 `false`.
		 */
		getPivotTables(fullyContained?: boolean): PivotTable[];
		/**
		 * 現在の範囲のスタイルを表します。
		 * セルのスタイルが一貫性がない場合は、`null` 返されます。
		 * カスタム スタイルの場合、スタイル名が返されます。
		 * 組み込みのスタイルの場合、列挙型の値を `BuiltInStyle` 表す文字列が返されます。
		 */
		getPredefinedCellStyle(): string;
		/**
		 * 指定された方向に対応するデータ領域のエッジ セルである範囲オブジェクトを返します。
		 * これは、Windows UI 上の Excel の Ctrl + 方向キーの動作と一致します。
		 * @param direction アクティブセルからの方向。
		 * @param activeCell この範囲内のアクティブセル。
		 * 既定では、アクティブセルは範囲の左上のセルです。
		 * アクティブセルがこの範囲内にない場合は、エラーがスローされます。
		 */
		getRangeEdge(
			direction: KeyboardDirection,
			activeCell?: Range | string,
		): Range;
		/**
		 * 現在`Range`の`Range`オブジェクトに似たオブジェクトを取得しますが、右下隅が行数と列数だけ拡大 (または縮小) されます。
		 * @param deltaRows 現在の範囲を基準にして、右下隅を拡張する行の数です。範囲を拡張するには正の数値、または範囲を縮小するには負の数値を使用します。
		 * @param deltaColumns 現在の範囲を基準にして右下隅を展開する列の数。 範囲を拡張するには正の数値、または範囲を縮小するには負の数値を使用します。
		 */
		getResizedRange(deltaRows: number, deltaColumns: number): Range;
		/**
		 * 範囲に含まれている行を 1 つ取得します。
		 * @param row 取得する範囲の行番号。 0 を起点とする番号になります。
		 */
		getRow(row: number): Range;
		/**
		 * 範囲に含まれる行の合計数を返します。
		 */
		getRowCount(): number;
		/**
		 * 現在の範囲内のすべての行が非表示になっているかどうかを表します。
		 * - 値は、 `true` 範囲内のすべての行が非表示になっている場合です。
		 * - 値は、 `false` 範囲内の行が非表示になっていない場合です。
		 * - 値は、 `null` 範囲内の一部の行が非表示になっていて、同じ範囲内の他の行が非表示になっていない場合です。
		 */
		getRowHidden(): boolean;
		/**
		 * 範囲に含まれる最初のセルの行番号を返します。 0 を起点とする番号になります。
		 */
		getRowIndex(): number;
		/**
		 * 現在 `Range` のオブジェクトの上にある特定の数の行を取得します。
		 * @param count 省略可能。結果の範囲に含める行の数です。
		 * 通常、正の数値を使用して現在の範囲外に範囲を作成します。
		 * 負の数値を使用して、現在の範囲内に範囲を作成することもできます。
		 * 既定値は 1 です。
		 */
		getRowsAbove(count?: number): Range;
		/**
		 * 現在 `Range` のオブジェクトの下にある特定の数の行を取得します。
		 * @param count 省略可能。結果の範囲に含める行の数です。
		 * 通常、正の数値を使用して現在の範囲外に範囲を作成します。
		 * 負の数値を使用して、現在の範囲内に範囲を作成することもできます。
		 * 既定値は 1 です。
		 */
		getRowsBelow(count?: number): Range;
		/**
		 * すべてのセルを配列数式として保存するかどうかを表します。
		 * `true`すべてのセルを配列数式として保存するか、すべての`false`セルを配列数式として保存しない場合に返します。
		 * 一部の `null` セルが配列数式として保存され、一部のセルが保存されない場合に返されます。
		 */
		getSavedAsArray(): boolean;
		/**
		 * 現在の範囲について、範囲の並べ替えを表します。
		 */
		getSort(): RangeSort;
		/**
		 * 指定した型と値に `RangeAreas` 一致するすべてのセルを表す 1 つ以上の範囲を含むオブジェクトを取得します。
		 * 特別なセルが見つからない場合、このメソッドは `undefined`.
		 * @param cellType 含めるセルの種類。
		 * @param cellValueType ある場合 `cellType`、`constants` または `formulas`では、この引数を使用して、結果に含めるセルの種類を決定します。
		 * これらの値を結合して、複数の型を返すことができます。
		 * この引数を省略すると、すべての定数および数式が対象になります。
		 */
		getSpecialCells(
			cellType: SpecialCellType,
			cellValueType?: SpecialCellValueType,
		): RangeAreas;
		/**
		 * アンカー セルで呼び出されたとき、スピル範囲を含む範囲オブジェクトを取得します。
		 * 範囲がアンカー セルでない場合、またはスピル範囲が見つからない場合、このメソッドは返します。 `undefined`.
		 */
		getSpillingToRange(): Range;
		/**
		 * セルが流出するアンカー セルを含む範囲オブジェクトを取得します。
		 * スピルされたセルではない場合、または複数のセルが指定されている場合、このメソッドは返します `undefined`.
		 */
		getSpillParent(): Range;
		/**
		 * この範囲内の `Range` 左上のセルの周囲の領域を表すオブジェクトを返します。
		 * 周囲の領域は、この範囲に相対の空白の行と空白の列の任意の組み合わせで囲まれた範囲です。
		 */
		getSurroundingRegion(): Range;
		/**
		 * 範囲と重なるテーブルの集まりを範囲限定で取得します。
		 * @param fullyContained もし `true`は、範囲内に完全に含まれるテーブルのみを返します。 既定値は次の値です。 `false`.
		 */
		getTables(fullyContained?: boolean): Table[];
		/**
		 * 指定した範囲のテキスト値を表します。
		 * テキスト値は、セルの幅には依存しません。
		 * Excel UI で行われる符号の置換は # 、API によって返されるテキスト値には影響しません。
		 * 範囲に複数のセルが含まれている場合は、最初のセルのデータ (0 の行インデックスと 0 の列インデックスで表されます) が返されます。
		 */
		getText(): string;
		/**
		 * 指定した範囲のテキスト値。 テキスト値は、セルの幅には依存しません。
		 * Excel UI で行われる数値記号 (#) の置換は、API によって返されるテキスト値には影響しません。
		 */
		getTexts(): string[][];
		/**
		 * ワークシートの上端から範囲の上端までの 100% ズームのポイント単位の距離を返します。
		 */
		getTop(): number;
		/**
		 * 指定した範囲オブジェクトのうち使用されている範囲を返します。
		 * 範囲内に使用されているセルがない場合、このメソッドは返します。 `undefined`.
		 * @param valuesOnly 値の入っているセルのみを使用セルと見なします。
		 */
		getUsedRange(valuesOnly?: boolean): Range;
		/**
		 * 指定した範囲の生の値を表します。
		 * 返されるデータの型は、文字列、数値、ブール値のいずれかになります。
		 * エラーが含まれているセルは、エラー文字列を返します。
		 * 範囲に複数のセルが含まれている場合は、最初のセルのデータ (0 の行インデックスと 0 の列インデックスで表されます) が返されます。
		 */
		getValue(): string | number | boolean;
		/**
		 * 指定した範囲の Raw 値を表します。
		 * 返されるデータには、文字列、数値、またはブール値を指定できます。
		 * エラーが含まれているセルは、エラー文字列を返します。
		 * 返される値がプラス ("+")、マイナス ("-")、または等号 ("=") で始まる場合、Excel はこの値を数式として解釈します。
		 */
		getValues(): (string | number | boolean)[][];
		/**
		 * セル内のデータの種類を表します。
		 * 範囲に複数のセルが含まれている場合は、最初のセルのデータ (0 の行インデックスと 0 の列インデックスで表されます) が返されます。
		 */
		getValueType(): RangeValueType;
		/**
		 * 各セルのデータの種類を指定します。
		 */
		getValueTypes(): RangeValueType[][];
		/**
		 * 現在の範囲の表示されている行を表します。
		 */
		getVisibleView(): RangeView;
		/**
		 * 範囲の左端から範囲の右端までの 100% ズームのポイント単位の距離を返します。
		 */
		getWidth(): number;
		/**
		 * 現在の範囲を含んでいるワークシート。
		 */
		getWorksheet(): Worksheet;
		/**
		 * アウトラインの列と行をグループ化します。
		 * @param groupOption 行または列で範囲をグループ化する方法を指定します。
		 * `InvalidArgument`グループ オプションが範囲`isEntireRow`または`isEntireColumn`プロパティと異なる
		 *  (つまり、true `groupOption` で "ByColumns" `range.isEntireColumn` であるか、
		 *  `range.isEntireRow` true `groupOption` で "ByRows" である) 場合、エラーがスローされます。
		 */
		group(groupOption: GroupOption): void;
		/**
		 * 行または列グループの詳細を非表示にします。
		 * @param groupOption グループ化された行またはグループ化された列の詳細を非表示にするかどうかを指定します。
		 */
		hideGroupDetails(groupOption: GroupOption): void;
		/**
		 * この範囲を占めるセルまたはセルの範囲をワークシートに挿入し、領域を空けるために他のセルをシフトします。
		 * 空の領域に新しい `Range` オブジェクトを返します。
		 * @param shift セルをシフトする方向を指定します。
		 * 詳細は「`ExcelScript.InsertShiftDirection`」をご覧ください。
		 */
		insert(shift: InsertShiftDirection): Range;
		/**
		 * 範囲内のセルをワークシートの 1 つの領域に結合します。
		 * @param across オプション。
		 * 指定した範囲の各行のセルを個別の結合セルとして結合するように設定 `true` します。
		 * 既定値は次の値です。 `false`.
		 */
		merge(across?: boolean): void;
		/**
		 * セルの値、書式設定、数式を現在の範囲からコピー先の範囲に移動し、それらのセル内の古い情報を置き換えます。
		 * 現在の範囲より小さい場合、コピー先の範囲は自動的に展開されます。
		 * 元の範囲の範囲外にあるコピー先範囲内のセルは変更されません。
		 * @param destinationRange destinationRange この範囲内の情報を移動する範囲を指定します。
		 */
		moveTo(destinationRange: Range | string): void;
		/**
		 * 列によって指定される範囲から重複する値を削除します。
		 * @param columns 重複を含む可能性がある範囲内の列。
		 * 少なくとも 1 つの列を指定する必要があります。 0 を起点とする番号になります。
		 * @param includesHeader True の場合は、入力データにヘッダーが含まれています。 既定値は false です。
		 */
		removeDuplicates(
			columns: number[],
			includesHeader: boolean,
		): RemoveDuplicatesResult;
		/**
		 * 現在の範囲内で、指定された条件に基づき、指定された文字列を検索し、置換します。
		 * @param text 検索する文字列。
		 * @param replacement 元の文字列を置き換える文字列。
		 * @param criteria 追加の置換条件。
		 */
		replaceAll(
			text: string,
			replacement: string,
			criteria: ReplaceCriteria,
		): number;
		/**
		 * Excel UI で指定した範囲を選択します。
		 */
		select(): void;
		/**
		 * 現在の範囲内のすべての列が非表示になっているかどうかを表します。
		 * - 値は、 true 範囲内のすべての列が非表示になっている場合です。 値は、 false 範囲内の列が非表示になっていない場合です。 値は、 null 範囲内の一部の列が非表示になっていて、同じ範囲内の他の列が非表示になっていない場合です。
		 * @param columnHidden
		 */
		setColumnHidden(columnHidden: boolean): void;
		/**
		 * 次の再計算が発生したときに再計算する範囲を設定します。
		 */
		setDirty(): void;
		/**
		 * セル数式を A1 スタイルの表記で設定します。
		 * 範囲に複数のセルが含まれている場合、指定された範囲内の各セルは入力データで更新されます。
		 * @param formula
		 */
		setFormula(formula: string): void;
		/**
		 * ユーザーの言語と数値書式ロケールで、セル数式を A1 スタイルの表記で設定します。
		 * たとえば、英語の数式 "=SUM(A1, 1.5)" は、ドイツ語では "=SUMME(A1; 1,5)" になります。
		 * 範囲に複数のセルが含まれている場合、指定された範囲内の各セルは入力データで更新されます。
		 * @param formulaLocal
		 */
		setFormulaLocal(formulaLocal: string): void;
		/**
		 * セル数式を R1C1 スタイルの表記で設定します。
		 * 範囲に複数のセルが含まれている場合、指定された範囲内の各セルは入力データで更新されます。
		 * @param formulaR1C1
		 */
		setFormulaR1C1(formulaR1C1: string): void;
		/**
		 * A1 スタイル表記の数式を表します。
		 * セルに数式がない場合は、代わりにその値が返されます。
		 * @param formulas
		 */
		setFormulas(formulas: string[][]): void;
		/**
		 * ユーザーの言語と数値書式ロケールで、A1 スタイル表記の数式を表します。
		 * たとえば、英語の数式 "=SUM(A1, 1.5)" は、ドイツ語では "=SUMME(A1; 1,5)" になります。
		 * セルに数式がない場合は、代わりにその値が返されます。
		 * @param formulasLocal
		 */
		setFormulasLocal(formulasLocal: string[][]): void;
		/**
		 * R1C1 スタイル表記の数式を表します。
		 * セルに数式がない場合は、代わりにその値が返されます。
		 * @param formulasR1C1
		 */
		setFormulasR1C1(formulasR1C1: string[][]): void;
		/**
		 * 現在の範囲のハイパーリンクを表します。
		 * @param hyperlink
		 */
		setHyperlink(hyperlink: RangeHyperlink): void;
		/**
		 * 指定した範囲のセル Excel 番号書式コードを設定します。
		 * 範囲に複数のセルが含まれている場合、指定された範囲内の各セルは入力データで更新されます。
		 * @param numberFormat
		 */
		setNumberFormat(numberFormat: string): void;
		/**
		 * ユーザーの言語設定に基づいて、指定した範囲のセル Excel 番号書式コードを設定します。
		 * プロパティを取得または設定するときに、Excel では言語や書式の強制は `numberFormatLocal` 実行されません。
		 * 返されるテキストは、システム設定で指定された言語に基づいて、ローカルで書式設定された文字列を使用します。
		 * 範囲に複数のセルが含まれている場合、指定された範囲内の各セルは入力データで更新されます。
		 * @param numberFormatLocal
		 */
		setNumberFormatLocal(numberFormatLocal: string): void;
		/**
		 * 指定した範囲の Excel の数値書式コードを表します。
		 * @param numberFormats
		 */
		setNumberFormats(numberFormats: string[][]): void;
		/**
		 * ユーザーの言語設定に基づいて、指定した範囲の Excel の数値書式コードを表します。
		 * プロパティを取得または設定するときに、Excel では言語や書式の強制は `numberFormatLocal` 実行されません。
		 * 返されるテキストは、システム設定で指定された言語に基づいて、ローカルで書式設定された文字列を使用します。
		 * @param numberFormatsLocal
		 */
		setNumberFormatsLocal(numberFormatsLocal: string[][]): void;
		/**
		 * 現在の範囲のスタイルを表します。
		 * セルのスタイルが一貫性がない場合は、 `null` 返されます。
		 * カスタム スタイルの場合、スタイル名が返されます。
		 * 組み込みのスタイルの場合、列挙型の値を `BuiltInStyle` 表す文字列が返されます。
		 * @param predefinedCellStyle
		 */
		setPredefinedCellStyle(predefinedCellStyle: string): void;
		/**
		 * 現在の範囲内のすべての行が非表示になっているかどうかを表します。
		 * - 値は、 `true` 範囲内のすべての行が非表示になっている場合です。
		 * - 値は、 `false` 範囲内の行が非表示になっていない場合です。
		 * - 値は、 `null` 範囲内の一部の行が非表示になっていて、同じ範囲内の他の行が非表示になっていない場合です。
		 * @param rowHidden
		 */
		setRowHidden(rowHidden: boolean): void;
		/**
		 * 指定した範囲の生の値を設定します。
		 * 設定するデータには、文字列型、数値型、またはブール型を指定できます。
		 * `null` 値は無視されます (Excel では設定または上書きされません)。
		 * 範囲に複数のセルが含まれている場合、指定された範囲内の各セルは入力データで更新されます。
		 * @param value
		 */
		setValue(value: any): void;
		/**
		 * 指定した範囲の未加工の値を設定します。
		 * 指定されたデータには、文字列、数値、ブール値を指定できます。
		 * 指定された値がプラス ("+")、マイナス ("-")、または等号 ("=") で始まる場合、Excel はこの値を数式として解釈します。
		 * @param values
		 */
		setValues(values: (string | number | boolean)[][]): void;
		/**
		 * アクティブ セルに多数の値が含まれる場合、そのセルのカードを表示します。
		 */
		showCard(): void;
		/**
		 * 行または列グループの詳細を表示します。
		 * @param groupOption グループ化された行またはグループ化された列の詳細を表示するかどうかを指定します。
		 */
		showGroupDetails(groupOption: GroupOption): void;
		/**
		 * アウトラインの列と行のグループ化を解除します。
		 * @param groupOption 行または列で範囲をグループ解除する方法を指定します。
		 */
		ungroup(groupOption: GroupOption): void;
		/**
		 * 範囲内のセルを結合解除して別々のセルにします。
		 */
		unmerge(): void;
	}
}
