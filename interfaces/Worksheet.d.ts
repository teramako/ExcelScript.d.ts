declare namespace ExcelScript {
	/**
	 * Excel のワークシートは、セルのグリッドです。 データ、表、グラフなどを含めることができます。
	 * @see [ExcelScript.Worksheet interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.worksheet?view=office-scripts)
	 */
	export interface Worksheet {
		/**
		 * Excel UI でワークシートをアクティブにします。
		 */
		activate(): void;
		/**
		 * 新しいグラフを作成します。
		 * @param type グラフの種類を表します。 詳細は「`ExcelScript.ChartType`」をご覧ください。
		 * @param sourceData `Range`ソース データに対応するオブジェクト。
		 * @param seriesBy 省略可能。 列や行がグラフのデータ系列として使用される方法を指定します。
		 * 詳細は「`ExcelScript.ChartSeriesBy`」をご覧ください。
		 */
		addChart(type: ChartType, sourceData: Range, seriesBy?: ChartSeriesBy): Chart;
		/**
		 * 指定したセルで、指定した内容の新しいコメントを作成します。
		 * 指定 `InvalidArgument` された範囲が 1 つのセルより大きい場合、エラーがスローされます。
		 * @param cellAddress コメントが追加されるセル。 オブジェクトまたは文字列を `Range` 指定できます。
		 * 文字列の場合は、シート名を含む完全なアドレスを含む必要があります。
		 * 指定 `InvalidArgument` された範囲が 1 つのセルより大きい場合、エラーがスローされます。
		 * @param content コメントの内容。 これは、文字列または `CommentRichContent` オブジェクトのいずれかです。
		 * 文字列はプレーンテキストに使用されます。
		 * `CommentRichContent` オブジェクトでは、メンションなどの他のコメント機能を使用できます。
		 * @param contentType オプション。 コメントに含まれるコンテンツの種類。 既定値は enum です `ContentType.Plain`
		 */
		addComment(cellAddress: Range | string, content: CommentRichContent | string, contentType?: ContentType): Comment;
		/**
		 * 幾何学的図形をワークシートに追加します。
		 * 新しい図形を `Shape` 表すオブジェクトを返します。
		 * @param geometricShapeType ジオメトリ図形の型を表します。 詳細は「`ExcelScript.GeometricShapeType`」をご覧ください。
		 */
		addGeometricShape(geometricShapeType: GeometricShapeType): Shape;
		/**
		 * このコレクションのワークシート内の図形のサブセットをグループ化します。
		 * 図形の `Shape` 新しいグループを表すオブジェクトを返します。
		 * @param values 図形 ID または図形オブジェクトの配列。
		 */
		addGroup(values: Array<string | Shape>): Shape;
		/**
		 * 指定された範囲の左上セルの前に改ページを追加します。
		 * @param pageBreakRange 追加する改ページの直後の範囲。
		 */
		addHorizontalPageBreak(pageBreakRange: Range | string): PageBreak;
		/**
		 * base64 エンコード文字列から画像を作成し、それをワークシートに追加します。
		 * 新しいイメージを `Shape` 表すオブジェクトを返します。
		 * @param base64ImageString JPEG 形式または PNG 形式のイメージを表す base64 でエンコードされた文字列。
		 */
		addImage(base64ImageString: string): Shape;
		/**
		 * ワークシートに行を追加します。
		 * 新しい行を `Shape` 表すオブジェクトを返します。
		 * @param startLeft 線の始点からワークシートの左側までの距離 (ポイント単位)。
		 * @param startTop 線の始点からワークシートの上部までの距離 (ポイント単位)。
		 * @param endLeft 行の末尾からワークシートの左側までの距離 (ポイント単位)。
		 * @param endTop 行の末尾からワークシートの上部までの距離 (ポイント単位)。
		 * @param connectorType コネクタの種類を表します。 詳細は「`ExcelScript.ConnectorType`」をご覧ください。
		 */
		addLine(startLeft: number, startTop: number, endLeft: number, endTop: number, connectorType?: ConnectorType): Shape;
		/**
		 * 指定のスコープのコレクションに新しい名前を追加します。
		 * @param name 名前付きの項目の名前。
		 * @param reference 名前が参照する数式または範囲。
		 * @param comment オプション。 名前付きアイテムに関連付けられているコメント。
		 */
		addNamedItem(name: string, reference: Range | string, comment?: string): NamedItem;
		/**
		 * ユーザーのロケールを数式に使用して、指定のスコープのコレクションに新しい名前を追加します。
		 * @param name 名前付きの項目の名前。
		 * @param formula 名前が参照するユーザーのロケールの数式。
		 * @param comment オプション。 名前付きアイテムに関連付けられているコメント。
		 */
		addNamedItemFormulaLocal(name: string, formula: string, comment?: string): NamedItem;
		/**
		 * 指定した名前の新しいシート ビューを作成します。
		 * @param name 作成するシート ビューの名前。
		 * 指定された名前が既に存在するか、空であるか、ワークシートによって予約されている名前である場合に、エラーをスローします。
		 */
		addNamedSheetView(name: string): NamedSheetView;
		/**
		 * 指定したソース データに基づいてピボットテーブルを追加し、ターゲット範囲の左上のセルに挿入します。
		 * @param name 新しいピボットテーブルの名前。
		 * @param source 新しいピボットテーブルのソース データは、範囲 (またはワークシート名を含む文字列アドレス) またはテーブルのいずれかです。
		 * @param destination ピボットテーブル レポートの配置先範囲 (結果のレポートを配置するワークシートの範囲) の左上端のセルを指定します。
		 */
		addPivotTable(name: string, source: Range | string | Table, destination: Range | string): PivotTable;
		/**
		 * ブックに新しいスライサーを追加します。
		 * @param slicerSource 新しいスライサーの基になるデータ ソース。 オブジェクト、オブジェクト、`Table`または文字列を指定できます`PivotTable`。
		 * ピボットテーブル オブジェクトが渡されると、データ ソースはオブジェクトの `PivotTable` ソースになります。
		 * オブジェクトが `Table` 渡されると、データ ソースはオブジェクトになります `Table` 。
		 * 文字列が渡されると、ピボットテーブルまたはテーブルの名前または ID として解釈されます。
		 * @param sourceField フィルター処理するデータ ソース内のフィールド。 オブジェクト、オブジェクト、`TableColumn`
		 * A の ID、または a `PivotField` の名前または ID を指定できます`PivotField`。`TableColumn`.
		 * @param slicerDestination オプション。
		 * 新しいスライサーが作成されるワークシート。 オブジェクトまたはワークシートの名前または ID を指定できます `Worksheet` 。
		 * このパラメーターは、スライサー コレクションがワークシートから取得される場合は省略できます。
		 */
		addSlicer(
            slicerSource: string | PivotTable | Table,
            sourceField: string | PivotField | number | TableColumn,
            slicerDestination?: string | Worksheet
        ): Slicer;
		/**
		 * 新しいテーブルを作成します。
		 * 範囲オブジェクトまたはソース アドレスにより、テーブルが追加されるワークシートが判断されます。
		 * テーブルが追加できない場合 (たとえば、アドレスが無効な場合や、テーブルが別のテーブルと重複している場合) は、エラーがスローされます。
		 * @param address `Range`オブジェクト、またはデータ ソースを表す範囲の文字列アドレスまたは名前。
		 * アドレスにシート名が含まれていない場合は、現在作業中のシートが使用されます。
		 * @param hasHeaders インポートするデータに列ラベルがあるかどうかを示すブール値。
		 * ソースにヘッダーが含まれていない場合 (つまり、このプロパティが `false`)、Excel によってヘッダーが自動的に生成され、データが 1 行下にシフトされます。
		 */
		addTable(address: Range | string, hasHeaders: boolean): Table;
		/**
		 * 指定されたテキストを含むテキスト ボックスをワークシートに追加します。
		 * 新しいテキスト ボックスを `Shape` 表すオブジェクトを返します。
		 * @param text 作成したテキスト ボックスに表示されるテキストを表します。
		 */
		addTextBox(text?: string): Shape;
		/**
		 * 指定された範囲の左上セルの前に改ページを追加します。
		 * @param pageBreakRange 追加する改ページの直後の範囲。
		 */
		addVerticalPageBreak(pageBreakRange: Range | string): PageBreak;
		/**
		 * 指定したキーにマップする新しいカスタム プロパティを追加します。
		 * これにより、既存のカスタム プロパティがそのキーで上書きされます。
		 * @param key カスタム プロパティ オブジェクトを識別するキー。 大文字と小文字は区別されません。
		 * キーは 255 文字に制限されています (値を大きくすると InvalidArgument エラーがスローされます)。
		 * @param value このカスタム プロパティの値。
		 */
		addWorksheetCustomProperty(key: string, value: string): WorksheetCustomProperty;
		/**
		 * ワークシート上のすべてのセルを計算します。
		 * @param markAllDirty True。すべてダーティとしてマークします。
		 */
		calculate(markAllDirty: boolean): void;
		/**
		 * ワークシートをコピーし、指定した位置に配置します。
		 * @param positionType 新しく作成したワークシートを配置するブック内の場所。
		 * 既定値は "None" で、ワークシートの先頭にワークシートを挿入します。
		 * @param relativeTo 新しく作成されたワークシートの位置を決定する既存のワークシート。
		 * これは、"Before" または "After" の場合 `positionType` にのみ必要です。
		 */
		copy(positionType?: WorksheetPositionType, relativeTo?: Worksheet): Worksheet;
		/**
		 * ブックからワークシートを削除します。
		 * ワークシートの可視性が "VeryHidden" に設定されている場合、削除操作は例外で `InvalidOperation` 失敗します。
		 * 削除する前に、最初にその可視性を非表示または表示に変更する必要があります。
		 */
		delete(): void;
		/**
		 * 新しい一時シート ビューを作成してアクティブ化します。
		 * アプリケーションを閉じたり、終了メソッドを使用して一時ビューを終了したり、別のシート ビューに切り替えたりすると、一時ビューは削除されます。
		 * 一時シート ビューが存在する場合は、空の文字列 ("") を使用して一時シート ビューにアクセスすることもできます。
		 */
		enterTemporaryNamedSheetView(): NamedSheetView;
		/**
		 * 現在アクティブなシート ビューを終了します。
		 */
		exitActiveNamedSheetView(): void;
		/**
		 * 指定した条件に基づいて、指定された文字列のすべての出現箇所を検索し、1 つまたは複数の四角形の範囲で構成されるオブジェクトとして `RangeAreas` 返します。
		 * @param text 検索する文字列。
		 * @param criteria 検索がセル全体と一致する必要があるか、大文字と小文字が区別される必要があるかなど、追加の検索条件。
		 */
		findAll(text: string, criteria: WorksheetSearchCriteria): RangeAreas;
		/**
		 * ワークシートの現在アクティブなシート ビューを取得します。
		 */
		getActiveNamedSheetView(): NamedSheetView;
		/**
		 * ワークシートの `AutoFilter` オブジェクトを表します。
		 */
		getAutoFilter(): AutoFilter;
		/**
		 * `Range`行番号と列番号に基づいて、単一のセルを含むオブジェクトを取得します。
		 * セルは、ワークシート グリッド内に留まる限り、親範囲の範囲外にすることができます。
		 * @param row 取得するセルの行番号。 0 を起点とする番号になります。
		 * @param column 取得するセルの列番号。 0 を起点とする番号になります。
		 */
		getCell(row: number, column: number): Range;
		/**
		 * グラフ名を使用してグラフを取得します。
		 * 同じ名前の複数のグラフがある場合は、最初の 1 つが返されます。
		 * グラフが存在しない場合、このメソッドは返します `undefined`.
		 * @param name 取得するグラフの名前。
		 */
		getChart(name: string): Chart | undefined;
		/**
		 * ワークシートの一部であるグラフのコレクションを返します。
		 */
		getCharts(): Chart[];
		/**
		 * ID に基づいてコレクションからコメントを取得します。
		 * @param commentId コメントの識別子。
		 */
		getComment(commentId: string): Comment;
		/**
		 * 指定したセルからコメントを取得します。
		 * @param cellAddress コメントが表示されているセル。 オブジェクトまたは文字列を `Range` 指定できます。
		 * 文字列の場合は、シート名を含む完全なアドレスを含む必要があります。
		 * 指定 `InvalidArgument` された範囲が 1 つのセルより大きい場合、エラーがスローされます。
		 */
		getCommentByCell(cellAddress: Range | string): Comment;
		/**
		 * 指定した応答が接続されているコメントを取得します。
		 * @param replyId コメント応答の識別子。
		 */
		getCommentByReplyId(replyId: string): Comment;
		/**
		 * ワークシート上のすべての Comments オブジェクトの集まりを返します。
		 */
		getComments(): Comment[];
		/**
		 * ワークシート レベルのカスタム プロパティのコレクションを取得します。
		 */
		getCustomProperties(): WorksheetCustomProperty[];
		/**
		 * Excel が必要に応じてワークシートを再計算するかどうかを決定します。
		 * True の場合、Excel は必要に応じてワークシートを再計算します。
		 * Excel がシートを再計算しない場合は False。
		 */
		getEnableCalculation(): boolean;
		/**
		 * ワークシート上の固定ウィンドウを操作するために使用できるオブジェクトを取得します。
		 */
		getFreezePanes(): WorksheetFreezePanes;
		/**
		 * ワークシートの水平改ページをまとめて取得します。
		 * このコレクションには、手動の改ページのみが含まれます。
		 */
		getHorizontalPageBreaks(): PageBreak[];
		/**
		 * 指定されたブックのワークシートを一意に識別する値を返します。
		 * この識別子の値は、ワークシートの名前を変更したり移動したりしても同じままです。
		 */
		getId(): string;
		/**
		 * ワークシートの表示名。
		 */
		getName(): string;
		/**
		 * その名前を `NamedItem` 使用してオブジェクトを取得します。
		 * オブジェクトが存在しない場合、このメソッドは返します。 `undefined`.
		 * @param name Nameditem 名。
		 */
		getNamedItem(name: string): NamedItem | undefined;
		/**
		 * 名前を使用してシート ビューを取得します。
		 * @param key シート ビューの大文字と小文字を区別する名前。
		 * 一時ビューが存在する場合は、空の文字列 ("") を使用して一時シート ビューを取得します。
		 */
		getNamedSheetView(key: string): NamedSheetView;
		/**
		 * ワークシートに存在するシート ビューのコレクションを返します。
		 */
		getNamedSheetViews(): NamedSheetView[];
		/**
		 * 現在のワークシートにスコープされている名前のコレクション。
		 */
		getNames(): NamedItem[];
		/**
		 * このワークシートに続くワークシートを取得します。
		 * このワークシートの後にワークシートがない場合、このメソッドは返します。 `undefined`.
		 * @param visibleOnly オプション。
		 * もし trueでは、非表示のワークシートをスキップして、表示可能なワークシートのみを考慮します。
		 */
		getNext(visibleOnly?: boolean): Worksheet;
		/**
		 * ワークシートの `PageLayout` オブジェクトを取得します。
		 */
		getPageLayout(): PageLayout;
		/**
		 * 名前に基づいてピボットテーブルを取得します。
		 * ピボットテーブルが存在しない場合、このメソッドは返します `undefined`.
		 * @param name 取得するピボットテーブルの名前。
		 */
		getPivotTable(name: string): PivotTable | undefined;
		/**
		 * ワークシートの一部になっているピボットテーブルのコレクション。
		 */
		getPivotTables(): PivotTable[];
		/**
		 * 0 を起点とした、ブック内のワークシートの位置。
		 */
		getPosition(): number;
		/**
		 * このワークシートの前にあるワークシートを取得します。
		 * 前のワークシートがない場合、このメソッドは返します `undefined`.
		 * @param visibleOnly オプション。
		 * もし trueでは、非表示のワークシートをスキップして、表示可能なワークシートのみを考慮します。
		 */
		getPrevious(visibleOnly?: boolean): Worksheet;
		/**
		 * ワークシートのシート保護オブジェクトを返します。
		 */
		getProtection(): WorksheetProtection;
		/**
		 * `Range`アドレスまたは名前で指定された単一の四角形のセル ブロックを表すオブジェクトを取得します。
		 * @param address オプション。
		 * 範囲のアドレスまたは名前を表す文字列。
		 * たとえば、"A1:B2" です。 指定されていない場合は、ワークシート全体の範囲が返されます。
		 */
		getRange(address?: string): Range;
		/**
		 * 特定の行インデックス `Range` と列インデックスから始まり、特定の数の行と列にまたがるオブジェクトを取得します。
		 * @param startRow 開始行 (インデックスは 0)。
		 * @param startColumn 開始列 (インデックスは 0)。
		 * @param rowCount 範囲に含める行の数。
		 * @param columnCount 範囲に含める列の数。
		 */
		getRangeByIndexes(startRow: number, startColumn: number, rowCount: number, columnCount: number): Range;
		/**
		 * `RangeAreas`アドレスまたは名前で指定された四角形範囲の 1 つ以上のブロックを表すオブジェクトを取得します。
		 * @param address オプション。
		 * コンマ区切りまたはセミコロンで区切られたアドレスまたは個々の範囲の名前を含む文字列。
		 * たとえば、"A1:B2、A5:B5"、または "A1:B2;A5:B5"。 指定しない場合は `RangeAreas` 、ワークシート全体のオブジェクトが返されます。
		 */
		getRanges(address?: string): RangeAreas;
		/**
		 * 名前または ID を使用して図形を取得します。
		 * @param key 取得する図形の名前または ID。
		 */
		getShape(key: string): Shape;
		/**
		 * ワークシート上のすべての Shape オブジェクトをまとめて返します。
		 */
		getShapes(): Shape[];
		/**
		 * グリッド線をユーザーに表示するかどうかを指定します。
		 */
		getShowGridlines(): boolean;
		/**
		 * ユーザーに見出しを表示するかどうかを指定します。
		 */
		getShowHeadings(): boolean;
		/**
		 * 名前または ID を使用してスライサーを取得します。
		 * スライサーが存在しない場合、このメソッドは `undefined`.
		 * @param key 取得するスライサーの名前または ID。
		 */
		getSlicer(key: string): Slicer | undefined;
		/**
		 * ワークシートの一部であるスライサーのコレクションを返します。
		 */
		getSlicers(): Slicer[];
		/**
		 * ワークシート内のすべての行の標準 (既定) の高さ (ポイント数) を返します。
		 */
		getStandardHeight(): number;
		/**
		 * ワークシート内のすべての列の標準 (既定) の幅を指定します。
		 * 列幅の単位は、標準スタイルの 1 文字分の幅に相当します。
		 * プロポーショナル フォントでは、数字の 0 の幅が列幅の単位になります。
		 */
		getStandardWidth(): number;
		/**
		 * ワークシートのタブの色。
		 * タブの色を取得するときに、ワークシートが非表示の場合、値は次のように表示されます。`null`.
		 * ワークシートが表示されているのにタブの色が auto に設定されている場合は、空の文字列が返されます。
		 * それ以外の場合、プロパティは RRGGBB ("FFA500" など) の形式 #で色に設定されます。
		 * 色を設定するときは、空の文字列を使用して "自動" の色を設定するか、それ以外の場合は実際の色を設定します。
		 */
		getTabColor(): string;
		/**
		 * 名前または ID でテーブルを取得します。
		 * テーブルが存在しない場合、このメソッドは返します `undefined`.
		 * @param key 取得するテーブルの名前または ID。
		 */
		getTable(key: string): Table | undefined;
		/**
		 * ワークシートの一部になっているグラフのコレクション。
		 */
		getTables(): Table[];
		/**
		 * @param valuesOnly 省略可能。 値の入っているセルのみを使用セルと見なします。
		 */
		getUsedRange(valuesOnly?: boolean): Range;
		/**
		 * ワークシートの垂直改ページをまとめて取得します。
		 * このコレクションには、手動の改ページのみが含まれます。
		 */
		getVerticalPageBreaks(): PageBreak[];
		/**
		 * ワークシートの可視性。
		 */
		getVisibility(): SheetVisibility;
		/**
		 * キーを使用してカスタム プロパティ オブジェクトを取得します。大文字と小文字は区別されません。
		 * カスタム プロパティが存在しない場合、このメソッドは `undefined`.
		 * @param key カスタム プロパティ オブジェクトを識別するキー。 大文字と小文字は区別されません。
		 */
		getWorksheetCustomProperty(key: string): WorksheetCustomProperty | undefined;
		/**
		 * コレクション内のすべてのピボットテーブルを更新します。
		 */
		refreshAllPivotTables(): void;
		/**
		 * コレクション内の手動改ページをすべてリセットします。
		 */
		removeAllHorizontalPageBreaks(): void;
		/**
		 * コレクション内の手動改ページをすべてリセットします。
		 */
		removeAllVerticalPageBreaks(): void;
		/**
		 * 現在のワークシート内で、指定された条件に基づき、指定された文字列を検索し、置換します。
		 * @param text 検索する文字列。
		 * @param replacement 元の文字列を置き換える文字列。
		 * @param criteria 追加の置換条件。
		 */
		replaceAll(text: string, replacement: string, criteria: ReplaceCriteria): number;
		/**
		 * Excel が必要に応じてワークシートを再計算するかどうかを決定します。
		 * True の場合、Excel は必要に応じてワークシートを再計算します。
		 * Excel がシートを再計算しない場合は False。
		 * @param enableCalculation
		 */
		setEnableCalculation(enableCalculation: boolean): void;
		/**
		 * ワークシートの表示名。
		 * @param name
		 */
		setName(name: string): void;
		/**
		 * 0 を起点とした、ブック内のワークシートの位置。
		 * @param position
		 */
		setPosition(position: number): void;
		/**
		 * グリッド線をユーザーに表示するかどうかを指定します。
		 * @param showGridlines
		 */
		setShowGridlines(showGridlines: boolean): void;
		/**
		 * ユーザーに見出しを表示するかどうかを指定します。
		 * @param showHeadings
		 */
		setShowHeadings(showHeadings: boolean): void;
		/**
		 * ワークシート内のすべての列の標準 (既定) の幅を指定します。
		 * 列幅の単位は、標準スタイルの 1 文字分の幅に相当します。 プロポーショナル フォントでは、数字の 0 の幅が列幅の単位になります。
		 * @param standardWidth
		 */
		setStandardWidth(standardWidth: number): void;
		/**
		 * ワークシートのタブの色。
		 * タブの色を取得するときに、ワークシートが非表示の場合、値は次のように表示されます。`null`.
		 * ワークシートが表示されているのにタブの色が auto に設定されている場合は、空の文字列が返されます。
		 * それ以外の場合、プロパティは RRGGBB ("FFA500" など) の形式 #で色に設定されます。
		 * 色を設定するときは、空の文字列を使用して "自動" の色を設定するか、それ以外の場合は実際の色を設定します。
		 * @param tabColor
		 */
		setTabColor(tabColor: string): void;
		/**
		 * ワークシートの可視性。
		 * @param visibility
		 */
		setVisibility(visibility: SheetVisibility): void;
		/**
		 * アウトライン レベルで行または列グループを表示します。
		 * グループのアウトラインを作成し、ワークシート内のデータの一覧をまとめます。
		 * パラメーターとパラメーターは `rowLevels` 、 `columnLevels` アウトラインを表示するレベルの数を指定します。
		 * 許容される引数の範囲は 0 ~ 8 です。 値が 0 の場合、現在の表示は変更されません。
		 * 現在のレベル数より大きい値は、すべてのレベルを表示します。
		 * @param rowLevels 表示するアウトラインの行レベルの数。
		 * @param columnLevels 表示するアウトラインの列レベルの数。
		 */
		showOutlineLevels(rowLevels: number, columnLevels: number): void;
	}
}