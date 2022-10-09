declare namespace ExcelScript {
	/**
	 * `RangeAreas` は、同じワークシート内の 1 つまたは複数の四角形の範囲のコレクションを表します。
	 * @see [ExcelScript.RangeAreas interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.rangeareas?view=office-scripts)
	 */
	export interface RangeAreas {
		/**
		 * 最初または最も優先度の高い新しい条件付き書式をコレクションに追加します。
		 * @param type 追加する条件付き書式の種類。
		 * 詳細は「ExcelScript.ConditionalFormatType」をご覧ください。
		 */
		addConditionalFormat(type: ConditionalFormatType): ConditionalFormat;
		/**
		 * 内のすべてのセルを計算します。 `RangeAreas`.
		 */
		calculate(): void;
		/**
		 * この `RangeAreas` オブジェクトを構成する各領域の値、書式、塗りつぶし、罫線などのプロパティをクリアします。
		 * @param applyTo 省略可能。
		 * クリア操作の種類を決定します。
		 * 詳細は「`ExcelScript.ClearApplyTo`」をご覧ください。
		 * 既定値は "すべて" です。
		 */
		clear(applyTo?: ClearApplyTo): void;
		/**
		 * 現在指定している範囲でアクティブなすべての条件付き書式をクリアする。
		 */
		clearAllConditionalFormats(): void;
		/**
		 * with データ型内のすべてのセルを `RangeAreas` テキストに変換します。
		 */
		convertDataTypeToText(): void;
		/**
		 * ソース範囲または現在のセルデータまたは `RangeAreas` 書式をコピーします。
		 * `RangeAreas`. 変換先 `RangeAreas` は、ソース範囲またはソース範囲とは異なるサイズにすることができます。
		 * `RangeAreas`. コピー先がソースより小さい場合、変換先は自動的に展開されます。
		 * @param sourceRange ソース範囲または `RangeAreas` コピー元。
		 * ソース RangeAreas に複数の範囲がある場合は、四角形の範囲から完全な行または列を削除することによってフォームを作成できる必要があります。
		 * @param copyType コピーするセル データまたは書式の種類。 既定値は "すべて" です。
		 * @param skipBlanks True の場合は、ソース範囲内の空白のセルをスキップするか、または RangeAreas. 既定値は false です。
		 * @param transpose True の場合は、変換先のセルを入れ替えます RangeAreas. 既定値は false です。
		 */
		copyFrom(
            sourceRange: Range | RangeAreas | string,
            copyType?: RangeCopyType,
            skipBlanks?: boolean,
            transpose?: boolean
        ): void;
		/**
		 * A1 スタイルで参照を `RangeAreas` 返します。
		 * アドレス値には、セルの各四角形ブロックのワークシート名が含まれます (例: "Sheet1!A1:B4、Sheet1!D1:D4")。
		 */
		getAddress(): string;
		/**
		 * ユーザー ロケールの `RangeAreas` 参照を返します。
		 */
		getAddressLocal(): string;
		/**
		 * この `RangeAreas` オブジェクトを構成する四角形の範囲の数を返します。
		 */
		getAreaCount(): number;
		/**
		 * この `RangeAreas` オブジェクトを構成する四角形の範囲のコレクションを返します。
		 */
		getAreas(): Range[];
		/**
		 * オブジェクト内のセルの数を `RangeAreas` 返し、個々のすべての四角形範囲のセル数を合計します。
		 * セル数が 2^31-1 (2,147,483,647) を超える場合、-1 を返します。
		 */
		getCellCount(): number;
		/**
		 * 指定された ID に対応する条件付き書式を返します。
		 * @param id 条件付き形式の ID。
		 */
		getConditionalFormat(id: string): ConditionalFormat;
		/**
		 * この `RangeAreas` オブジェクト内の任意のセルと交差する条件付き書式のコレクションを返します。
		 */
		getConditionalFormats(): ConditionalFormat[];
		/**
		 * `RangeAreas`内のすべての範囲のデータ検証オブジェクトを返します。
		 */
		getDataValidation(): DataValidation;
		/**
		 * `RangeAreas`の列`RangeAreas`全体を表すオブジェクトを返します
		 *  (たとえば、現在`RangeAreas`のセルが "B4:E11, H2" を表す場合、"B:E, H:H") 列を表す a `RangeAreas` を返します。
		 */
		getEntireColumn(): RangeAreas;
		/**
		 * `RangeAreas`の行`RangeAreas`全体を表すオブジェクトを返します
		 *  (たとえば、現在`RangeAreas`のセルが "B4:E11" を表す場合は、行 "4:11" を表す a `RangeAreas` を返します)。
		 */
		getEntireRow(): RangeAreas;
		/**
		 * オブジェクト内 `RangeFormat` のすべての範囲のフォント、塗りつぶし、罫線、配置、およびその他のプロパティをカプセル化して、オブジェクトを `RangeAreas` 返します。
		 */
		getFormat(): RangeFormat;
		/**
		 * 指定した範囲または範囲の `RangeAreas` 交差部分を表すオブジェクトを返します。`RangeAreas`.
		 * 交差が見つからない場合、このメソッドは返します `undefined`.
		 * @param anotherRange 交差を決定するために使用する範囲、 `RangeAreas` オブジェクト、またはアドレス。
		 */
		getIntersection(anotherRange: Range | RangeAreas | string): RangeAreas;
		/**
		 * この `RangeAreas` オブジェクトのすべての範囲が列全体を表すかどうかを指定します (例: "A:C,Q:Z")。
		 */
		getIsEntireColumn(): boolean;
		/**
		 * この `RangeAreas` オブジェクトのすべての範囲が行全体を表すかどうかを指定します (例: "1:3、5:7")。
		 */
		getIsEntireRow(): boolean;
		/**
		 * 特定の行と列の `RangeAreas` オフセットによってシフトされるオブジェクトを返します。
		 * 返される `RangeAreas` ディメンションは元のオブジェクトと一致します。
		 * 結果 `RangeAreas` がワークシート グリッドの範囲外に強制された場合、エラーがスローされます。
		 * @param rowOffset オフセットする行の数 (正、負、または 0)。`RangeAreas` 正の値は下方向、負の値は上方向のオフセットを表します。
		 * @param columnOffset オフセットする列の数 (正、負、または 0)。`RangeAreas` 正の値は右方向、負の値は左方向のオフセットを表します。
		 */
		getOffsetRangeAreas(
            rowOffset: number,
            columnOffset: number
        ): RangeAreas;
		/**
		 * この `RangeAreas` オブジェクト内のすべての範囲のスタイルを表します。
		 * セルのスタイルが一貫性がない場合は、 `null` 返されます。
		 * カスタム スタイルの場合、スタイル名が返されます。
		 * 組み込みのスタイルの場合、列挙型の値を `BuiltInStyle` 表す文字列が返されます。
		 */
		getPredefinedCellStyle(): string;
		/**
		 * 指定した型と値に `RangeAreas` 一致するすべてのセルを表すオブジェクトを返します。
		 * 条件に一致する特殊なセルが見つからない場合、このメソッドは undefined.
		 * @param cellType 含めるセルの種類。
		 * @param cellValueType ある場合 `cellType` 、`constants` または `formulas`では、この引数を使用して、結果に含めるセルの種類を決定します。
		 * これらの値を結合して、複数の型を返すことができます。
		 * この引数を省略すると、すべての定数および数式が対象になります。
		 */
		getSpecialCells(
            cellType: SpecialCellType,
            cellValueType?: SpecialCellValueType
        ): RangeAreas;
		/**
		 * この `RangeAreas` オブジェクト内の任意の範囲と重複するテーブルのスコープ付きコレクションを返します。
		 * @param fullyContained もし `true`は、範囲内に完全に含まれるテーブルのみを返します。 既定値は `false` です.
		 */
		getTables(fullyContained?: boolean): Table[];
		/**
		 * オブジェクト内の個々の `RangeAreas` 四角形範囲のすべての使用領域を構成する使用済み領域を `RangeAreas` 返します。
		 * 内に使用済みセルがない場合は、 `RangeAreas`、次に、このメソッドが返します。 `undefined`.
		 * @param valuesOnly 使用するセルとして値を持つセルのみを考慮するかどうか。
		 */
		getUsedRangeAreas(valuesOnly?: boolean): RangeAreas;
		/**
		 * 現在のワークシートを返します。 `RangeAreas`.
		 */
		getWorksheet(): Worksheet;
		/**
		 * 次の `RangeAreas` 再計算が発生したときに再計算対象を設定します。
		 */
		setDirty(): void;
		/**
		 * この `RangeAreas` オブジェクト内のすべての範囲のスタイルを表します。
		 * セルのスタイルが一貫性がない場合は、 `null` 返されます。
		 * カスタム スタイルの場合、スタイル名が返されます。
		 * 組み込みのスタイルの場合、列挙型の値を `BuiltInStyle` 表す文字列が返されます。
		 * @param predefinedCellStyle 
		 */
		setPredefinedCellStyle(predefinedCellStyle: string): void;
	}
}