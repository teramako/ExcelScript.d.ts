/// <reference path="../enums/BindingType.d.ts" />
/// <reference path="../enums/ContentType.d.ts"/>
/// <reference path="../enums/WorkbookLinksRefreshMode.d.ts"/>
/// <reference path="./Application.d.ts"/>
/// <reference path="./Binding.d.ts"/>
/// <reference path="./Chart.d.ts"/>
/// <reference path="./Comment.d.ts"/>
/// <reference path="./CommentRichContent.d.ts"/>
/// <reference path="./CustomXmlPart.d.ts"/>
/// <reference path="./DocumentProperties.d.ts"/>
/// <reference path="./LinkedWorkbook.d.ts"/>
/// <reference path="./NamedItem.d.ts"/>
/// <reference path="./PivotField.d.ts"/>
/// <reference path="./PivotTable.d.ts"/>
/// <reference path="./PivotTableStyle.d.ts"/>
/// <reference path="./PredefinedCellStyle.d.ts"/>
/// <reference path="./Range.d.ts"/>
/// <reference path="./RangeAreas.d.ts"/>
/// <reference path="./Slicer.d.ts"/>
/// <reference path="./SlicerStyle.d.ts"/>
/// <reference path="./Table.d.ts"/>
/// <reference path="./TableColumn.d.ts"/>
/// <reference path="./TableStyle.d.ts"/>
/// <reference path="./TimelineStyle.d.ts"/>
/// <reference path="./WorkbookProtection.d.ts"/>
/// <reference path="./Worksheet.d.ts"/>
declare namespace ExcelScript {
	/**
	 * ブックは、ワークシート、テーブル、範囲などの関連するブック オブジェクトを含む最上位レベルのオブジェクトです。
	 * @see [ExcelScript.Workbook interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.workbook?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script adds a new worksheet to the workbook, then switches to it.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Add a new worksheet with the default name.
	 *   let worksheet = workbook.addWorksheet();
	 *
	 *   // Switch focus to the new worksheet.
	 *   worksheet.activate();
	 * }
	 * ```
	 */
	export interface Workbook {
		/**
		 * 特定の範囲に新しいバインドを追加します。
		 * @param range バインドをバインドする範囲です。
		 * `Range`オブジェクトまたは文字列を指定できます。
		 * 文字列の場合は、シート名を含む完全なアドレスが含まれている必要があります
		 * @param bindingType バインドの種類。`ExcelScript.BindingType`を参照。
		 * @param id バインドの名前。
		 */
		addBinding(
			range: Range | string,
			bindingType: BindingType,
			id: string,
		): Binding;
		/**
		 * ブック内の名前付きアイテムに基づいて新しいバインドを追加します。
		 * 名前付きアイテムが複数の領域を参照している場合、 `InvalidReference` エラーを返します。
		 * @param name バインドの作成元の名前です。
		 * @param bindingType バインドの種類。 `ExcelScript.BindingType`を参照
		 * @param id バインドの名前。
		 */
		addBindingFromNamedItem(
			name: string,
			bindingType: BindingType,
			id: string,
		): Binding;
		/**
		 * 現在の選択範囲に基づいて新しいバインドを追加します。
		 * 選択範囲に複数の領域がある場合は、 `InvalidReference` エラーを返します。
		 * @param bindingType バインドの種類。 `ExcelScript.BindingType`を参照
		 * @param id バインドの名前。
		 */
		addBindingFromSelection(bindingType: BindingType, id: string): Binding;
		/**
		 * 指定したセルで、指定した内容の新しいコメントを作成します。
		 * 指定された範囲が 1 つのセルより大きい場合、`InvalidArgument` エラーがスローされます。
		 * @param cellAddress コメントが追加されるセル。 オブジェクトまたは文字列を `Range` 指定できます。
		 * 文字列の場合は、シート名を含む完全なアドレスを含む必要があります。
		 * 指定された範囲が 1 つのセルより大きい場合、`InvalidArgument` エラーがスローされます。
		 * @param content コメントの内容。 これは、文字列または `CommentRichContent` オブジェクトのいずれかです。
		 * 文字列はプレーンテキストに使用されます。
		 * `CommentRichContent` オブジェクトでは、メンションなどの他のコメント機能を使用できます。
		 * @param contentType 省略可能。 コメントに含まれるコンテンツの種類。 既定値は enum `ContentType.Plain` です。
		 */
		addComment(
			cellAddress: Range | string,
			content: CommentRichContent | string,
			contentType?: ContentType,
		): Comment;
		/**
		 * ブックに新しいカスタム XML パーツを追加します。
		 * @param xml XML コンテンツ。 有効な XML フラグメントである必要があります。
		 */
		addCustomXmlPart(xml: string): CustomXmlPart;
		/**
		 * 指定のスコープのコレクションに新しい名前を追加します。
		 * @param name 名前付きの項目の名前。
		 * @param reference 名前が参照する数式または範囲。
		 * @param comment 省略可能。 名前付きアイテムに関連付けられているコメント。
		 *
		 * @example
		 * ```
		 * // This script creates a named formula and uses it in another part of the workbook.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Create a named item for a formula.
		 *   // This formula is the sum of the cells F2:F21 on Sheet1.
		 *   const namedItem: ExcelScript.NamedItem = workbook.addNamedItem(
		 *     "GrandTotal",
		 *     "=SUM(Sheet1!$F$2:$F$21)",
		 *     "The sum of table sums."
		 *   );
		 *
		 *   // Add this named formula to a new sheet in the workbook.
		 *   const otherSheet = workbook.addWorksheet();
		 *   otherSheet.getRange("A1").setFormula(namedItem.getFormula());
		 *
		 *   // Switch to the new worksheet.
		 *   otherSheet.activate();
		 * }
		 * ```
		 */
		addNamedItem(
			name: string,
			reference: Range | string,
			comment?: string,
		): NamedItem;
		/**
		 * ユーザーのロケールを数式に使用して、指定のスコープのコレクションに新しい名前を追加します。
		 * @param name 名前付きの項目の名前。
		 * @param formula 名前が参照するユーザーのロケールの数式。
		 * @param comment 省略可能。 名前付きアイテムに関連付けられているコメント。
		 */
		addNamedItemFormulaLocal(
			name: string,
			formula: string,
			comment?: string,
		): NamedItem;
		/**
		 * 指定したソース データに基づいてピボットテーブルを追加し、ターゲット範囲の左上のセルに挿入します。
		 * @param name 新しいピボットテーブルの名前。
		 * @param source 新しいピボットテーブルのソース データは、範囲 (またはワークシート名を含む文字列アドレス) またはテーブルのいずれかです。
		 * @param destination ピボットテーブル レポートの配置先範囲 (結果のレポートを配置するワークシートの範囲) の左上端のセルを指定します。
		 *
		 * @example
		 * ```
		 * // This script creates a PivotTable from an existing table and adds it to an existing worksheet.
		 * // This script assumes there is a table in the current worksheet with columns named "Type" and "Sales".
		 * // It also assumes there is a worksheet named "PivotSheet".
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Create a PivotTable based on a table in the current worksheet.
		 *   let sheet = workbook.getActiveWorksheet();
		 *   let table = sheet.getTables()[0];
		 *   let pivotTable = workbook.addPivotTable("My Pivot", table, "PivotSheet!A1");
		 *
		 *   // Add fields to the PivotTable to show "Sales" per "Type".
		 *   pivotTable.addRowHierarchy(pivotTable.getHierarchy("Type"));
		 *   pivotTable.addDataHierarchy(pivotTable.getHierarchy("Sales"));
		 * }
		 * ```
		 */
		addPivotTable(
			name: string,
			source: Range | string | Table,
			destination: Range | string,
		): PivotTable;
		/**
		 * 指定した名前の空白 `PivotTableStyle` を作成します。
		 * @param name 新しいピボットテーブル スタイルの一意の名前。 名前が既に使用されている場合は、`InvalidArgument` エラーがスローされます。
		 * @param makeUniqueName 省略可能。 既定値は `false`。. もし `true`は、必要に応じて一意にするために、名前に番号を追加します。
		 */
		addPivotTableStyle(
			name: string,
			makeUniqueName?: boolean,
		): PivotTableStyle;
		/**
		 * コレクションに新しいスタイルを追加します。
		 * @param name 追加するスタイルの名前。
		 */
		addPredefinedCellStyle(name: string): void;
		/**
		 * ブックに新しいスライサーを追加します。
		 * @param slicerSource 新しいスライサーの基になるデータ ソース。 オブジェクト、オブジェクト、`Table`、`PivotTable`、または文字列を指定できます。
		 * ピボットテーブル オブジェクトが渡されると、データ ソースはオブジェクトの `PivotTable` ソースになります。
		 * `Table` オブジェクトが渡されると、データ ソースはオブジェクトは `Table` になります。
		 * 文字列が渡されると、ピボットテーブルまたはテーブルの名前または ID として解釈されます。
		 * @param sourceField フィルター処理するデータ ソース内のフィールド。 オブジェクト、オブジェクト、`TableColumn` の ID、または `PivotField` の名前または ID を指定できます。
		 * @param slicerDestination 省略可能。 新しいスライサーが作成されるワークシート。 `Worksheet`オブジェクトまたはワークシートの名前または ID を指定できます。
		 * このパラメーターは、スライサー コレクションがワークシートから取得される場合は省略できます。
		 *
		 * @example
		 * ```
		 * // This script adds a slicer for an existing PivotTable.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the PivotTable named "Farm Pivot".
		 *   const farmPivot = workbook.getPivotTable("Farm Pivot");
		 *
		 *   // Create the slicer.
		 *   // Note that this assumes "Type" is already added as a hierarchy to the PivotTable.
		 *   const fruitSlicer: ExcelScript.Slicer = workbook.addSlicer(
		 *     farmPivot, // The table or PivotTale to be sliced.
		 *     farmPivot.getHierarchy("Type").getFields()[0] // What source field to use as the slicer options.
		 * 	);
		 *
		 * 	// Select the items to display.
		 * 	fruitSlicer.selectItems(["Lemon", "Lime"]);
		 *
		 * 	// Set the left margin of the slicer.
		 * 	fruitSlicer.setLeft(400);
		 *   }
		 * ```
		 */
		addSlicer(
			slicerSource: string | PivotTable | Table,
			sourceField: string | PivotField | number | TableColumn,
			slicerDestination?: string | Worksheet,
		): Slicer;
		/**
		 * 指定した名前の空白のスライサー スタイルを作成します。
		 * @param name 新しいスライサー スタイルの一意の名前。 名前が既に使用されている場合は例外`InvalidArgument` をスローします。
		 * @param makeUniqueName 省略可能。 既定値は `false`。もし `true`は、必要に応じて一意にするために、名前に番号を追加します。
		 */
		addSlicerStyle(name: string, makeUniqueName?: boolean): SlicerStyle;
		/**
		 * 新しいテーブルを作成します。
		 * 範囲オブジェクトまたはソース アドレスにより、テーブルが追加されるワークシートが判断されます。
		 * テーブルが追加できない場合 (たとえば、アドレスが無効な場合や、テーブルが別のテーブルと重複している場合) は、エラーがスローされます。
		 * @param address `Range`オブジェクト、またはデータ ソースを表す範囲の文字列アドレスまたは名前。
		 * アドレスにシート名が含まれていない場合は、現在作業中のシートが使用されます。
		 * @param hasHeaders インポートするデータに列ラベルがあるかどうかを示すブール値。
		 * ソースにヘッダーが含まれていない場合 (つまり、このプロパティが `false`)、Excel によってヘッダーが自動的に生成され、データが 1 行下にシフトされます。
		 *
		 * @example
		 * ```
		 * // This sample converts the information in the first worksheet into a table with headers.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // This assumes there is one contiguous range in the first worksheet.
		 *   const dataRange = workbook.getFirstWorksheet().getUsedRange();
		 *
		 *   // Add a table at the workbook level.
		 *   workbook.addTable(dataRange.getAddress(), true);
		 * }
		 * ```
		 */
		addTable(address: Range | string, hasHeaders: boolean): Table;
		/**
		 * 指定した名前の空白 `TableStyle` を作成します。
		 * @param name 新しいテーブル スタイルの一意の名前。 名前が既に使用されている場合は、`InvalidArgument` エラーがスローされます。
		 * @param makeUniqueName 省略可能。 既定値は `false`。もし `true`は、必要に応じて一意にするために、名前に番号を追加します。
		 */
		addTableStyle(name: string, makeUniqueName?: boolean): TableStyle;
		/**
		 * 指定した名前の空白 `TimelineStyle` を作成します。
		 * @param name 新しいタイムライン スタイルの一意の名前。 名前が既に使用されている場合は、`InvalidArgument` エラーがスローされます。
		 * @param makeUniqueName 省略可能。 既定値は `false`。もし `true`は、必要に応じて一意にするために、名前に番号を追加します。
		 */
		addTimelineStyle(name: string, makeUniqueName?: boolean): TimelineStyle;
		/**
		 * 新しいワークシートをブックに追加します。
		 * ワークシートは、既存のワークシートの末尾に追加されます。
		 * 新しく追加されたワークシートをアクティブ化する場合は、`.activate()`を呼び出します。
		 * @param name 省略可能。 追加するワークシートの名前。 指定した場合、名前は一意である必要があります。
		 * 指定されていない場合は、Excel が新しいワークシートの名前を決定します。
		 *
		 * @example
		 * ```
		 * // This script adds a new worksheet named "Data" to the workbook.
		 * // If a worksheet with that name already exists, the script logs a note.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Check if the "Data" worksheet already exists.
		 *   if (workbook.getWorksheet("Data")) {
		 *     console.log("The Data worksheet is already in the workbook.");
		 *   } else {
		 *     // Add a new worksheet.
		 *     let worksheet = workbook.addWorksheet("Data");
		 *   }
		 * }
		 * ```
		 */
		addWorksheet(name?: string): Worksheet;
		/**
		 * リンクされたブックへのリンクをすべて解除します。
		 * リンクが解除されると、ブック リンクを参照するすべての数式が完全に削除され、最近取得された値に置き換えられます。
		 */
		breakAllLinksToLinkedWorkbooks(): void;
		/**
		 * ブックで現在アクティブなセルを取得します。
		 *
		 * @example
		 * ```
		 * // This script logs the value of the current active cell.
		 * // If multiple cells are selected, the top-leftmost cell will be logged.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the current active cell in the workbook.
		 *   let cell = workbook.getActiveCell();
		 *   console.log(`The current cell's value is ${cell.getValue()}`);
		 * }
		 * ```
		 */
		getActiveCell(): Range;
		/**
		 * ブックで現在アクティブになっているグラフを取得します。
		 * アクティブなグラフがない場合、このメソッドは `undefined`を返します。
		 */
		getActiveChart(): Chart;
		/**
		 * ブックで現在アクティブになっているスライサーを取得します。
		 * アクティブなスライサーがない場合、このメソッドは `undefined`を返します。
		 */
		getActiveSlicer(): Slicer;
		/**
		 * ブックの、現在作業中のワークシートを取得します。
		 */
		getActiveWorksheet(): Worksheet;
		/**
		 * このブックを含む Excel アプリケーション インスタンスを表します。
		 */
		getApplication(): Application;
		/**
		 * ブックが自動保存モードであるかどうかを指定します。
		 */
		getAutoSave(): boolean;
		/**
		 * ID を使用してバインド オブジェクトを取得します。
		 * バインド オブジェクトが存在しない場合、このメソッドは`undefined`を返します。
		 * @param id 取得するバインド オブジェクトの ID。
		 */
		getBinding(id: string): Binding | undefined;
		/**
		 * ブックの一部であるバインドのコレクションを表します。
		 */
		getBindings(): Binding[];
		/**
		 * Excel 計算エンジンのバージョンとして数字を返します。
		 */
		getCalculationEngineVersion(): number;
		/**
		 * 関連付けられている実際のデータ ポイントをブックの全グラフが追跡している場合、true となります。
		 * False の場合、グラフはデータ ポイントのインデックスを追跡します。
		 */
		getChartDataPointTrack(): boolean;
		/**
		 * ID に基づいてコレクションからコメントを取得します。
		 * @param commentId コメントの識別子。
		 */
		getComment(commentId: string): Comment;
		/**
		 * 指定したセルからコメントを取得します。
		 * @param cellAddress コメントが表示されているセル。
		 * オブジェクトまたは文字列を `Range` 指定できます。
		 * 文字列の場合は、シート名を含む完全なアドレスを含む必要があります。
		 * 指定された範囲が 1 つのセルより大きい場合、`InvalidArgument`エラーがスローされます。
		 */
		getCommentByCell(cellAddress: Range | string): Comment;
		/**
		 * 指定した応答が接続されているコメントを取得します。
		 * @param replyId コメント応答の識別子。
		 */
		getCommentByReplyId(replyId: string): Comment;
		/**
		 * ブックに関連付けられているコメントのコレクションを表します。
		 */
		getComments(): Comment[];
		/**
		 * ID に基づいて、カスタム XML パーツを取得します。
		 * `CustomXmlPart`が存在しない場合、このメソッドは`undefined`を返します。
		 * @param id 取得するオブジェクトの ID。
		 */
		getCustomXmlPart(id: string): CustomXmlPart | undefined;
		/**
		 * 指定した名前空間と一致する名前空間を持つカスタム XML パーツの新しいコレクションを取得します。
		 * @param namespaceUri これは完全修飾スキーマ URI である必要があります。
		 * たとえば、"http://schemas.contoso.com/review/1.0" です。
		 * @deprecated この API は非推奨になりました。Use `getCustomXmlPartsByNamespace` instead.
		 */
		getCustomXmlPartByNamespace(namespaceUri: string): CustomXmlPart[];
		/**
		 * このブックに含まれるカスタム XML パーツのコレクションを表します。
		 */
		getCustomXmlParts(): CustomXmlPart[];
		/**
		 * 指定した名前空間と一致する名前空間を持つカスタム XML パーツの新しいコレクションを取得します。
		 * @param namespaceUri これは完全修飾スキーマ URI である必要があります。
		 * たとえば、"http://schemas.contoso.com/review/1.0" です。
		 */
		getCustomXmlPartsByNamespace(namespaceUri: string): CustomXmlPart[];
		/**
		 * 親オブジェクトのスコープの既定のピボットテーブル スタイルを取得します。
		 */
		getDefaultPivotTableStyle(): PivotTableStyle;
		/**
		 * 親オブジェクトのスコープの既定値 `SlicerStyle` を取得します。
		 */
		getDefaultSlicerStyle(): SlicerStyle;
		/**
		 * 親オブジェクトのスコープの既定のテーブル スタイルを取得します。
		 */
		getDefaultTableStyle(): TableStyle;
		/**
		 * 親オブジェクトのスコープの既定のタイムライン スタイルを取得します。
		 */
		getDefaultTimelineStyle(): TimelineStyle;
		/**
		 * コレクション内の最初のワークシートを取得します。
		 * @param visibleOnly 省略可能。 もし `true`では、非表示のワークシートをスキップして、表示可能なワークシートのみを考慮します。
		 */
		getFirstWorksheet(visibleOnly?: boolean): Worksheet;
		/**
		 * ブックが最後に保存されてから変更が加えられたかどうかを指定します。
		 * このプロパティは、変更したブックを `true` 保存せずに閉じたり、保存を求められたりしない場合に設定できます。
		 */
		getIsDirty(): boolean;
		/**
		 * コレクション内の最後のワークシートを取得します。
		 * @param visibleOnly 省略可能。 もし `true`では、非表示のワークシートをスキップして、表示可能なワークシートのみを考慮します。
		 */
		getLastWorksheet(visibleOnly?: boolean): Worksheet;
		/**
		 * リンクされたブックに関する情報を URL で取得します。
		 * ブックが存在しない場合、このメソッドは、`isNullObject` プロパティを `true` 設定したオブジェクトを返します。
		 * @param key リンクされたブックの URL。
		 */
		getLinkedWorkbookByUrl(key: string): LinkedWorkbook | undefined;
		/**
		 * ブック リンクの更新モードを表します。
		 * モードは、ブックに存在するすべてのブック リンクで同じです。
		 *
		 * @example
		 * ```
		 * // This script refreshes all the links to external workbooks,
		 * // if the linked workbook refresh mode is set to manual.
		 * // To learn about linked workbooks, see https://support.microsoft.com/office/create-an-external-reference-link-to-a-cell-range-in-another-workbook-c98d1803-dd75-4668-ac6a-d7cca2a9b95f.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Check the refresh mode.
		 *   if (workbook.getLinkedWorkbookRefreshMode() === ExcelScript.WorkbookLinksRefreshMode.manual) {
		 *     console.log("Refreshing workbook links");
		 *
		 *     // Trigger a refresh of linked workbook content.
		 *     workbook.refreshAllLinksToLinkedWorkbooks();
		 *   }
		 * }
		 * ```
		 */
		getLinkedWorkbookRefreshMode(): WorkbookLinksRefreshMode;
		/**
		 * リンクされたブックのコレクションを返します。
		 * 数式では、ブックリンクを使用して、現在のブックの外部のデータ (セル値と名前) を参照できます。
		 */
		getLinkedWorkbooks(): LinkedWorkbook[];
		/**
		 * ブックの名前を取得します。
		 *
		 * @example
		 * ```
		 * // This script logs the name of the workbook without the ".xlsx" extension.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the workbook's name.
		 *   let name = workbook.getName();
		 *
		 *   // Remove the file extension.
		 *   name = name.substring(0, name.lastIndexOf(".xlsx"));
		 *
		 *   // Display the name in the console.
		 *   console.log(name);
		 * }
		 * ```
		 */
		getName(): string;
		/**
		 * その名前の `NamedItem` オブジェクトを取得します。
		 * オブジェクトが存在しない場合、このメソッドは`undefined`を返します。
		 * @param name Nameditem 名。
		 */
		getNamedItem(name: string): NamedItem | undefined;
		/**
		 * ブック スコープの名前付きアイテム (名前付き範囲と定数) のコレクションを表します。
		 *
		 * @example
		 * ```
		 * // This script looks for every named range with "Review" in the name and marks the range with a yellow fill.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Look at every named item in the workbook.
		 *   workbook.getNames().forEach((namedItem) => {
		 *     // Find names containing "Review".
		 *     if (namedItem.getName().includes("Review")) {
		 *       // Only change the fill color if the named item is a range (not a formula).
		 *       let itemType: ExcelScript.NamedItemType = namedItem.getType();
		 *       if (itemType === ExcelScript.NamedItemType.range) {
		 *         // Set the range's fill color to yellow.
		 *         namedItem.getRange().getFormat().getFill().setColor("yellow");
		 *       }
		 *     }
		 *   });
		 * }
		 * ```
		 */
		getNames(): NamedItem[];
		/**
		 * その名前のピボットテーブルを取得します。
		 * ピボットテーブルが存在しない場合、このメソッドは`undefined`を返します。
		 * @param name 取得するピボットテーブルの名前。
		 */
		getPivotTable(name: string): PivotTable | undefined;
		/**
		 * ブックに関連付けられているピボットテーブルのコレクションを表します。
		 */
		getPivotTables(): PivotTable[];
		/**
		 * その名前の `PivotTableStyle` を取得します。
		 * `PivotTableStyle`が存在しない場合、このメソッドは`undefined`を返します。
		 * @param name 取得するピボットテーブル スタイルの名前。
		 */
		getPivotTableStyle(name: string): PivotTableStyle | undefined;
		/**
		 * ブックに関連付けられている PivotTableStyle のコレクションを表します。
		 */
		getPivotTableStyles(): PivotTableStyle[];
		/**
		 * その名前の `Style` を取得します。
		 * @param name 取得するスタイルの名前。
		 */
		getPredefinedCellStyle(name: string): PredefinedCellStyle;
		/**
		 * ブックに関連付けられているスタイルのコレクションを表します。
		 */
		getPredefinedCellStyles(): PredefinedCellStyle[];
		/**
		 * ブックがローカルまたはオンラインで保存されたかどうかを指定します。
		 */
		getPreviouslySaved(): boolean;
		/**
		 * ブックのプロパティを取得します。
		 */
		getProperties(): DocumentProperties;
		/**
		 * ブックの保護オブジェクトを返します。
		 */
		getProtection(): WorkbookProtection;
		/**
		 * ブックが読み取り専用モードで開かれている場合に`true`が返されます。
		 */
		getReadOnly(): boolean;
		/**
		 * ブックから現在選択されている 1 つの範囲を取得します。
		 * 複数の範囲が選択されている場合、このメソッドはエラーをスローします。
		 */
		getSelectedRange(): Range;
		/**
		 * ブックから現在選択されている 1 つまたは複数の範囲を取得します。
		 * `getSelectedRange()`と違って、このメソッドは、選択したすべての範囲を `RangeAreas` 表すオブジェクトを返します。
		 */
		getSelectedRanges(): RangeAreas;
		/**
		 * 名前または ID のスライサーを取得します。
		 * スライサーが存在しない場合、このメソッドは `undefined` を返します。
		 * @param key 取得するスライサーの名前または ID。
		 */
		getSlicer(key: string): Slicer | undefined;
		/**
		 * ブックに関連付けられているスライサーのコレクションを表します。
		 */
		getSlicers(): Slicer[];
		/**
		 * その名前の `SlicerStyle` を取得します。
		 * スライサー スタイルが存在しない場合、このメソッドは `undefined` を返します。
		 * @param name 取得するスライサー スタイルの名前。
		 */
		getSlicerStyle(name: string): SlicerStyle | undefined;
		/**
		 * ブックに関連付けられている SlicerStyle のコレクションを表します。
		 */
		getSlicerStyles(): SlicerStyle[];
		/**
		 * その名前または ID のテーブルを取得します。
		 * テーブルが存在しない場合、このメソッドは `undefined` を返します。
		 * @param key 取得するテーブルの名前または ID。
		 */
		getTable(key: string): Table | undefined;
		/**
		 * ブックに関連付けられているテーブルのコレクションを表します。
		 */
		getTables(): Table[];
		/**
		 * その名前の `TableStyle` を取得します。
		 * テーブル スタイルが存在しない場合、このメソッドは `undefined` を返します。
		 * @param name 取得するテーブル スタイルの名前。
		 */
		getTableStyle(name: string): TableStyle | undefined;
		/**
		 * ブックに関連付けられている TableStyle のコレクションを表します。
		 */
		getTableStyles(): TableStyle[];
		/**
		 * その名前の `TimelineStyle` を取得します。
		 * タイムライン スタイルが存在しない場合は、このメソッドは `undeinfed` を返します。
		 * @param name 取得するタイムライン スタイルの名前。
		 */
		getTimelineStyle(name: string): TimelineStyle | undefined;
		/**
		 * ブックに関連付けられている TimelineStyle のコレクションを表します。
		 */
		getTimelineStyles(): TimelineStyle[];
		/**
		 * ブックを表示桁数でのみ計算する場合、`true` となります。
		 * このプロパティを `false` から `true` 値に切り替えると、データの精度が完全に失われます。
		 */
		getUsePrecisionAsDisplayed(): boolean;
		/**
		 * その名前または ID のワークシート オブジェクトを取得します。
		 * ワークシートが存在しない場合、このメソッドは `undefined` 返します。
		 * @param key ワークシートの名前または ID。
		 *
		 * @example
		 * ```
		 * // This script switches the active view to a worksheet named "Data", if it exists.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Check if the "Data" worksheet exists.
		 *   let dataWorksheet = workbook.getWorksheet("Data");
		 *   if (dataWorksheet) {
		 *     // Switch to the "Data" worksheet.
		 *     dataWorksheet.activate();
		 *   } else {
		 *     console.log(`No worksheet named "Data" in this workbook.`);
		 *   }
		 * }
		 * ```
		 */
		getWorksheet(key: string): Worksheet | undefined;
		/**
		 * ブックに関連付けられているワークシートのコレクションを表します。
		 *
		 * @example
		 * ```
		 * // This script logs the names of all the worksheets in the workbook.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get all the worksheets in the workbook.
		 *   let sheets = workbook.getWorksheets();
		 *
		 *   // Get a list of all the worksheet names.
		 *   let names = sheets.map ((sheet) => sheet.getName());
		 *
		 *   // Write in the console all the worksheet names and the total count.
		 *   console.log(names);
		 *   console.log(`Total worksheets inside of this workbook: ${sheets.length}`);
		 * }
		 * ```
		 */
		getWorksheets(): Worksheet[];
		/**
		 * すべてのデータ接続を更新します。
		 */
		refreshAllDataConnections(): void;
		/**
		 * すべてのブック リンクを更新するように要求します。
		 */
		refreshAllLinksToLinkedWorkbooks(): void;
		/**
		 * コレクション内のすべてのピボットテーブルを更新します。
		 */
		refreshAllPivotTables(): void;
		/**
		 * 関連付けられている実際のデータ ポイントをブックの全グラフが追跡している場合、true となります。
		 * False の場合、グラフはデータ ポイントのインデックスを追跡します。
		 * @param chartDataPointTrack
		 */
		setChartDataPointTrack(chartDataPointTrack: boolean): void;
		/**
		 * 親オブジェクトのスコープで使用する既定のピボットテーブル スタイルを設定します。
		 * @param newDefaultStyle 新しい既定値である`PivotTableStyle`オブジェクト (`PivotTableStyle`オブジェクトの名前)。
		 */
		setDefaultPivotTableStyle(
			newDefaultStyle: PivotTableStyle | string,
		): void;
		/**
		 * 親オブジェクトのスコープで使用する既定のスライサー スタイルを設定します。
		 * @param newDefaultStyle 新しい既定値である`SlicerStyle`オブジェクト (`SlicerStyle`オブジェクトの名前)。
		 */
		setDefaultSlicerStyle(newDefaultStyle: SlicerStyle | string): void;
		/**
		 * 親オブジェクトのスコープで使用する既定のテーブル スタイルを設定します。
		 * @param newDefaultStyle 新しい既定値である`TableStyle`オブジェクト (`TableStyle`オブジェクトの名前)。
		 */
		setDefaultTableStyle(newDefaultStyle: TableStyle | string): void;
		/**
		 * 親オブジェクトのスコープで使用する既定のタイムライン スタイルを設定します。
		 * @param newDefaultStyle 新しい既定値である`TimelineStyle`オブジェクト (`TimelineStyle`オブジェクトの名前)。
		 */
		setDefaultTimelineStyle(newDefaultStyle: TimelineStyle | string): void;
		/**
		 * ブックが最後に保存されてから変更が加えられたかどうかを指定します。
		 * このプロパティは、変更したブックを `true` 保存せずに閉じたり、保存を求められたりしない場合に設定できます。
		 * @param isDirty
		 */
		setIsDirty(isDirty: boolean): void;
		/**
		 * ブック リンクの更新モードを表します。
		 * モードは、ブックに存在するすべてのブック リンクで同じです。
		 * @param linkedWorkbookRefreshMode
		 */
		setLinkedWorkbookRefreshMode(
			linkedWorkbookRefreshMode: WorkbookLinksRefreshMode,
		): void;
		/**
		 * ブックを表示桁数でのみ計算する場合、`true` となります。
		 * このプロパティ `false` を `true` 値に切り替えると、データの精度が完全に失われます。
		 * @param usePrecisionAsDisplayed
		 */
		setUsePrecisionAsDisplayed(usePrecisionAsDisplayed: boolean): void;
	}
}
