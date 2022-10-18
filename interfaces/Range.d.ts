/// <reference path="../enums/AutoFillType.d.ts"/>
/// <reference path="../enums/DeleteShiftDirection.d.ts"/>
/// <reference path="../enums/GroupOption.d.ts"/>
/// <reference path="../enums/InsertShiftDirection.d.ts"/>
/// <reference path="../enums/KeyboardDirection.d.ts"/>
/// <reference path="../enums/LinkedDataTypeState.d.ts"/>
/// <reference path="../enums/NumberFormatCategory.d.ts"/>
/// <reference path="../enums/RangeValueType.d.ts"/>
/// <reference path="./ConditionalFormat.d.ts"/>
/// <reference path="./PivotTable.d.ts"/>
/// <reference path="./RangeHyperlink.d.ts"/>
/// <reference path="./RangeSort.d.ts"/>
/// <reference path="./RangeView.d.ts"/>
/// <reference path="./RemoveDuplicatesResult.d.ts"/>
/// <reference path="./SearchCriteria.d.ts"/>
/// <reference path="./Table.d.ts"/>
/// <reference path="./WorkBookRangeAreas.d.ts"/>
declare namespace ExcelScript {
	/**
	 * 範囲は、セル、行、列、セルのブロックなど、1 つ以上の連続するセルのセットを表します。
	 * @see [ExcelScript.Range interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.range?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script logs the address of the used range in the current worksheet.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the current, active worksheet.
	 *   let currentWorksheet = workbook.getActiveWorksheet();
	 *
	 *   // Get the range containing all the cells with data or formatting.
	 *   let usedRange = currentWorksheet.getUsedRange();
	 *
	 *   // Log the range's address to the console.
	 *   console.log(usedRange.getAddress());
	 * }
	 * ```
	 */
	export interface Range {
		/**
		 * 最初または最も優先度の高い新しい条件付き書式をコレクションに追加します。
		 * @param type 追加する条件付き書式の種類。
		 * 詳細は「ExcelScript.ConditionalFormatType」をご覧ください。
		 *
		 * @example
		 * ```
		 * // This sample applies conditional formatting to the currently used range in the worksheet.
		 * // The conditional formatting is a green fill for the top 10% of values.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the current worksheet.
		 *   let selectedSheet = workbook.getActiveWorksheet();
		 *
		 *   // Get the used range in the worksheet.
		 *   let range = selectedSheet.getUsedRange();
		 *
		 *   // Set the fill color to green for the top 10% of values in the range.
		 *   let conditionalFormat = range.addConditionalFormat(ExcelScript.ConditionalFormatType.topBottom)
		 *   conditionalFormat.getTopBottom().getFormat().getFill().setColor("green");
		 *   conditionalFormat.getTopBottom().setRule({
		 *     rank: 10, // The percentage threshold.
		 *     type: ExcelScript.ConditionalTopBottomCriterionType.topPercent // The type of the top/bottom condition.
		 *   });
		 * }
		 * ```
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
		 *
		 * @example
		 * ```
		 * // This script uses the autofill feature to complete a table.
		 * // See https://support.microsoft.com/74e31bdd-d993-45da-aa82-35a236c5b5db
		 * // for examples of autofill scenarios.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the current, active worksheet.
		 *   let currentWorksheet = workbook.getActiveWorksheet();
		 *
		 *   // Get the data range that shows the pattern.
		 *   let dataRange = currentWorksheet.getRange("C2:C3");
		 *
		 *   // Autofill the connected range. C2:C3 are filled in. C4:C14 are blank.
		 *   // This uses the default behavior to match a pattern with the table's contents.
		 *   dataRange.autoFill("C2:C14");
		 * }
		 * ```
		 */
		autoFill(
			destinationRange?: Range | string,
			autoFillType?: AutoFillType,
		): void;
		/**
		 * ワークシート上のセルの範囲を計算します。
		 *
		 * @example
		 * ```
		 * // This script recalculates the used range of a specific worksheet.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Only recalculate if the calculation mode is not set to automatic.
		 *   if (workbook.getApplication().getCalculationMode() !== ExcelScript.CalculationMode.automatic) {
		 *     // Get the used range from a worksheet named "Monthly Report".
		 *     const sheet = workbook.getWorksheet("Monthly Report");
		 *     const range = sheet.getUsedRange();
		 *     console.log(`Calculating ${range.getAddress()}`);
		 *
		 *     // Force all the used cells in that worksheet to calculate.
		 *     sheet.getUsedRange().calculate();
		 *   }
		 * }
		 * ```
		 */
		calculate(): void;
		/**
		 * 範囲の値、書式、塗りつぶし、罫線などをクリアします。
		 * @param applyTo 省略可能。
		 * クリア操作の種類を決定します。
		 * 詳細は「`ExcelScript.ClearApplyTo`」をご覧ください。
		 *
		 * @example
		 * ```
		 * This script removes all the formatting from the selected range.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the selected range.
		 *   let range = workbook.getSelectedRange();
		 *
		 *   // Clear all the formatting in that range.
		 *   range.clear(ExcelScript.ClearApplyTo.formats);
		 * }
		 * ```
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
		 *
		 * @example
		 * ```
		 * // This script copies a table from one worksheet to a new worksheet.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the worksheet named "TableTemplate".
		 *   let base = workbook.getWorksheet("TableTemplate");
		 *
		 *   // Get the range to be copied based on the first table.
		 *   let tableRange = base.getTables()[0].getRange();
		 *
		 *   // Get the area in a new worksheet for the new table.
		 *   let newWorksheet = workbook.addWorksheet();
		 *   let newRange = newWorksheet.getRangeByIndexes(0,0, tableRange.getRowCount(), tableRange.getColumnCount());
		 *
		 *   // Copy the existing data into the new range.
		 *   newRange.copyFrom(tableRange);
		 * }
		 * ```
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
		 *
		 * @example
		 * ```
		 * // This sample creates a sample range, then deletes "A1" using different DeleteShiftDirection values.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Add sample data to better visualize the delete changes.
		 *   const currentSheet = workbook.getActiveWorksheet();
		 *   currentSheet.getRange("A1:D4").setValues([
		 *     [1,2,3,4],
		 *     [5,6,7,8],
		 *     [9,10,11,12],
		 *     [13,14,15,16]]);
		 *
		 *   // Delete A1 and shift the cells from the right to fill the space.
		 *   // The value being deleted is 1.
		 *   currentSheet.getRange("A1").delete(ExcelScript.DeleteShiftDirection.left);
		 *
		 *   // Delete A1 and shift the cells from the bottom to fill the space.
		 *   // The value being deleted is 2.
		 *   currentSheet.getRange("A1").delete(ExcelScript.DeleteShiftDirection.up);
		 *
		 *   // Log the sample range. The values should be:
		 *   //
		 *   //  5, 3, 4, "",
		 *   //  9, 6, 7, 8,
		 *   // 13, 10, 11, 12,
		 *   // "", 14, 15, 16
		 *   //
		 *   console.log(currentSheet.getRange("A1:D4").getValues());
		 * }
		 * ```
		 */
		delete(shift: DeleteShiftDirection): void;
		/**
		 * 指定された条件に基づいて指定された文字列を見つけます。
		 * 現在の範囲が 1 つのセルより大きい場合、検索はその範囲に制限されます。
		 * それ以外の場合は、そのセルの後から始まるシート全体が検索対象になります。
		 * 一致しない場合は、このメソッドが返します。 undefined.
		 * @param text 検索する文字列。
		 * @param criteria 検索方向や、検索がセル全体と一致する必要があるか、大文字と小文字を区別する必要があるかなど、追加の検索条件。
		 *
		 * @example
		 * ```
		 * // This script searches through a table column and finds cells marked "no change".
		 * // Those cells have "no change" replaced with the value from the cell to the left.
		 * // This script uses Range.find instead of Worksheet.findAll to limit the search to a specific range.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the range of a table named "Orders".
		 *   let table = workbook.getTable("Orders");
		 *   let range = table.getColumnByName("March").getRange();
		 *
		 *   // Find all cells with the value "no change".
		 *   let cellToOverwrite = range.find("no change", { completeMatch: true });
		 *   while (cellToOverwrite) {
		 *     let cellToCopyFrom = cellToOverwrite.getOffsetRange(0,-1);
		 *     cellToOverwrite.setValue(cellToCopyFrom.getValue());
		 *     cellToOverwrite = range.find("no change", { completeMatch: true });
		 *   }
		 * }
		 * ```
		 */
		find(text: string, criteria: SearchCriteria): Range;
		/**
		 * フラッシュフィルを現在の範囲に設定します。
		 * パターンを検出すると、フラッシュフィルによってデータが自動的に塗りつぶされるため、
		 * パターンを見つけるには、範囲が 1 つの列範囲であり、その周囲にデータが含まれている必要があります。
		 *
		 * @example
		 * ```
		 * // This script uses the Flash Fill feature to complete a table.
		 * // See https://support.microsoft.com/office/3f9bcf1e-db93-4890-94a0-1578341f73f7 for the example table.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the current, active worksheet.
		 *   let currentWorksheet = workbook.getActiveWorksheet();
		 *
		 *   // Get the data range with a pattern and cells to fill. C2 is filled in. C3:C6 are blank.
		 *   let dataRange = currentWorksheet.getRange("C2:C6");
		 *
		 *   // Flash fill the connected range.
		 *   dataRange.flashFill();
		 * }
		 * ```
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
		 *
		 * @example
		 * ```
		 * // This script logs the address of the used range in each worksheet.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Iterate over every worksheet in the workbook.
		 *   workbook.getWorksheets().forEach((sheet) => {
		 *     // Get the used range for a single worksheet.
		 *     let range = sheet.getUsedRange();
		 *
		 *     // Print the address of the used range to the console.
		 *     console.log(range.getAddress());
		 *   });
		 * }
		 * ```
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
		 *
		 * @example
		 * ```
		 * // This script gets the bounding range of two existing ranges and puts a border around it.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the current worksheet.
		 *   let sheet = workbook.getActiveWorksheet();
		 *
		 *   // Create two range objects for the sample.
		 *   let range1 = sheet.getRange("B2:C5");
		 *   let range2 = sheet.getRange("D10:E15");
		 *
		 *   // Get the rectangular range that fully includes both ranges.
		 *   let boundingRectangle = range1.getBoundingRect(range2);
		 *
		 *   // Add a border around the whole bounding range (B2:E15).
		 *   let format = boundingRectangle.getFormat();
		 *   format.getRangeBorder(ExcelScript.BorderIndex.edgeTop).setStyle(ExcelScript.BorderLineStyle.continuous); // Top border
		 *   format.getRangeBorder(ExcelScript.BorderIndex.edgeBottom).setStyle(ExcelScript.BorderLineStyle.continuous); // Bottom border
		 *   format.getRangeBorder(ExcelScript.BorderIndex.edgeLeft).setStyle(ExcelScript.BorderLineStyle.continuous); // Left border
		 *   format.getRangeBorder(ExcelScript.BorderIndex.edgeRight).setStyle(ExcelScript.BorderLineStyle.continuous); // Right border
		 * }
		 * ```
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
		 *
		 * @example
		 * ```
		 * // This sample provides the count of negative numbers that are present in the used range of the current worksheet.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the working range.
		 *   let usedRange = workbook.getActiveWorksheet().getUsedRange();
		 *   let rowCount = usedRange.getRowCount();
		 *   let columnCount = usedRange.getColumnCount();
		 *
		 *   // Save the values locally to avoid repeatedly asking the workbook.
		 *   let usedRangeValues = usedRange.getValues();
		 *
		 *   // Start the negative number counter.
		 *   let negativeCount = 0;
		 *
		 *   // Iterate over the entire range looking for negative numbers.
		 *   for (let i = 0; i < rowCount; i++) {
		 *     for (let j = 0; j < columnCount; j++) {
		 *       if (usedRangeValues[i][j] < 0) {
		 *         negativeCount++;
		 *       }
		 *     }
		 *   }
		 *
		 *   // Log the negative number count to the console.
		 *   console.log(negativeCount);
		 * }
		 * ```
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
		 *
		 * @example
		 * ```
		 * // This script creates a drop-down selection list for a cell. It uses the existing values of the selected range as the choices for the list.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the values for data validation.
		 *   let selectedRange = workbook.getSelectedRange();
		 *   let rangeValues = selectedRange.getValues();
		 *
		 *   // Convert the values into a comma-delimited string.
		 *   let dataValidationListString = "";
		 *   rangeValues.forEach((rangeValueRow) => {
		 *     rangeValueRow.forEach((value) => {
		 *       dataValidationListString += value + ",";
		 *     });
		 *   });
		 *
		 *   // Clear the old range.
		 *   selectedRange.clear(ExcelScript.ClearApplyTo.contents);
		 *
		 *   // Apply the data validation to the first cell in the selected range.
		 *   let targetCell = selectedRange.getCell(0,0);
		 *   let dataValidation = targetCell.getDataValidation();
		 *
		 *   // Set the content of the drop-down list.
		 *   dataValidation.setRule({
		 *       list: {
		 *         inCellDropDown: true,
		 *         source: dataValidationListString
		 *       }
		 *     });
		 * }
		 * ```
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
		 *
		 * @example
		 * ```
		 * // This script makes the font bold on all the contiguous cells between
 		 * // A1 and the bottom of the used range of the first column.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the current worksheet.
		 *   let selectedSheet = workbook.getActiveWorksheet();
		 *
		 *   // Get every cell that's used between A1 and the end of the column.
		 *   // This recreates the Ctrl+Shift+Down arrow key behavior.
		 *   let firstCell = selectedSheet.getRange("A1");
		 *   let firstColumn = firstCell.getExtendedRange(ExcelScript.KeyboardDirection.down);
		 *
		 *   // Set the font to bold in that range.
		 *   firstColumn.getFormat().getFont().setBold(true);
		 * }
		 * ```
		 */
		getExtendedRange(
			direction: KeyboardDirection,
			activeCell?: Range | string,
		): Range;
		/**
		 * Format オブジェクト (範囲のフォント、塗りつぶし、罫線、配置などのプロパティをカプセル化するオブジェクト) を返します。
		 *
		 * @example
		 * ```
		 * // This script gives the total row of a table a green color fill.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the first table in the workbook.
		 *   let table = workbook.getTables()[0];
		 *
		 *   // Get the range for the total row of the table.
		 *   let totalRange = table.getTotalRowRange();
		 *
		 *   // Set the fill color to green.
		 *   totalRange.getFormat().getFill().setColor("green");
		 * }
		 * ```
		 */
		getFormat(): RangeFormat;
		/**
		 * A1 形式の表記でセル数式を表します。
		 * 範囲に複数のセルが含まれている場合は、最初のセルのデータ (0 の行インデックスと 0 の列インデックスで表されます) が返されます。
		 *
		 * @example
		 * ```
		 * // This script sets a cell's formula,
		 * // then displays how Excel stores the cell's formula and value separately.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   let selectedSheet = workbook.getActiveWorksheet();
		 *
		 *   // Set A1 to 2.
		 *   let a1 = selectedSheet.getRange("A1");
		 *   a1.setValue(2);
		 *
		 *   // Set B1 to the formula =(2*A1), which should equal 4.
		 *   let b1 = selectedSheet.getRange("B1")
		 *   b1.setFormula("=(2*A1)");
		 *
		 *   // Log the current results for `getFormula` and `getValue` at B1.
		 *   console.log(`B1 - Formula: ${b1.getFormula()} | Value: ${b1.getValue()}`);
		 * }
		 * ```
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
		 *
		 * @example
		 * ```
		 * // This sample clears all of the hyperlinks from the current worksheet and removes the usual hyperlink formatting.
		 * function main(workbook: ExcelScript.Workbook, sheetName: string = 'Sheet1') {
		 *   // Get the active worksheet.
		 *   let sheet = workbook.getWorksheet(sheetName);
		 *
		 *   // Get the used range to operate on.
		 *   // For large ranges (over 10000 entries), consider splitting the operation into batches for performance.
		 *   const targetRange = sheet.getUsedRange(true);
		 *   console.log(`Target Range to clear hyperlinks from: ${targetRange.getAddress()}`);
		 *
		 *   const rowCount = targetRange.getRowCount();
		 *   const colCount = targetRange.getColumnCount();
		 *   console.log(`Searching for hyperlinks in ${targetRange.getAddress()} which contains ${(rowCount * colCount)} cells`);
		 *
		 *   // Go through each individual cell looking for a hyperlink.
		 *   // This allows us to limit the formatting changes to only the cells with hyperlink formatting.
		 *   let clearedCount = 0;
		 *   for (let i = 0; i < rowCount; i++) {
		 *     for (let j = 0; j < colCount; j++) {
		 *       const cell = targetRange.getCell(i, j);
		 *       const hyperlink = cell.getHyperlink();
		 *       if (hyperlink) {
		 *         cell.clear(ExcelScript.ClearApplyTo.hyperlinks);
		 *         cell.getFormat().getFont().setUnderline(ExcelScript.RangeUnderlineStyle.none);
		 *         cell.getFormat().getFont().setColor('Black');
		 *         clearedCount++;
		 *       }
		 *     }
		 *   }
		 *
		 *   console.log(`Done. Cleared hyperlinks from ${clearedCount} cells`);
		 * }
		 * ```
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
		 *
		 * @example
		 * ```
		 * // This script finds cells in a table column that are not formatted as currency and sets the fill color to red.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the "Cost" column from the "Expenses" table.
		 *   const table = workbook.getTable("Expenses");
		 *   const costColumn = table.getColumnByName("Cost");
		 *   const costColumnRange = costColumn.getRangeBetweenHeaderAndTotal();
		 *
		 *   // Get the number format categories for the column's range.
		 *   const numberFormatCategories = costColumnRange.getNumberFormatCategories();
		 *
		 *   // If any cell in the column doesn't have a currency format, make the cell red.
		 *   numberFormatCategories.forEach((category, index) =>{
		 *     if (category[0] != ExcelScript.NumberFormatCategory.currency) {
		 *       costColumnRange.getCell(index, 0).getFormat().getFill().setColor("red");
		 *     }
		 *   });
		 * }
		 * ```
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
		 *
		 * @example
		 * ```
		 * // This script gets adjacent cells using relative references.
		 * // Note that if the active cell is on the top row, part of the script fails,
		 * // because it references the cell above the currently selected one.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the currently active cell in the workbook.
		 *   let activeCell = workbook.getActiveCell();
		 *   console.log(`The active cell's address is: ${activeCell.getAddress()}`);
		 *
		 *   // Get the cell to the right of the active cell and set its value and color.
		 *   let rightCell = activeCell.getOffsetRange(0,1);
		 *   rightCell.setValue("Right cell");
		 *   console.log(`The right cell's address is: ${rightCell.getAddress()}`);
		 *   rightCell.getFormat().getFont().setColor("Magenta");
		 *   rightCell.getFormat().getFill().setColor("Cyan");
		 *
		 *   // Get the cell to the above of the active cell and set its value and color.
		 *   // Note that this operation will fail if the active cell is in the top row.
		 *   let aboveCell = activeCell.getOffsetRange(-1, 0);
		 *   aboveCell.setValue("Above cell");
		 *   console.log(`The above cell's address is: ${aboveCell.getAddress()}`);
		 *   aboveCell.getFormat().getFont().setColor("White");
		 *   aboveCell.getFormat().getFill().setColor("Black");
		 * }
		 * ```
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
		 *
		 * @example
		 * ```
		 * // This script adds the value "Total" after the end of the first column.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the current worksheet.
		 *   let selectedSheet = workbook.getActiveWorksheet();
		 *
		 *   // Get the last used cell at the end of the column.
		 *   // This recreates the Ctrl+Down arrow key behavior.
		 *   let firstCell = selectedSheet.getRange("A1");
		 *   let firstColumn = selectedSheet.getRange("A1").getRangeEdge(ExcelScript.KeyboardDirection.down);
		 *   let cellAfter = firstColumn.getOffsetRange(1, 0);
		 *
		 *   // Set the value of the cell after the current end of the used column to "Total".
		 *   cellAfter.setValue("Total");
		 * }
		 * ```
		 */
		getRangeEdge(
			direction: KeyboardDirection,
			activeCell?: Range | string,
		): Range;
		/**
		 * 現在`Range`の`Range`オブジェクトに似たオブジェクトを取得しますが、右下隅が行数と列数だけ拡大 (または縮小) されます。
		 * @param deltaRows 現在の範囲を基準にして、右下隅を拡張する行の数です。範囲を拡張するには正の数値、または範囲を縮小するには負の数値を使用します。
		 * @param deltaColumns 現在の範囲を基準にして右下隅を展開する列の数。 範囲を拡張するには正の数値、または範囲を縮小するには負の数値を使用します。
		 *
		 * @example
		 * ```
		 * // This script copies the formatting in the active cell to the neighboring cells.
		 * // Note that this script only works when the active cell isn't on an edge of the worksheet.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the active cell.
		 *   let activeCell = workbook.getActiveCell();
		 *
		 *   // Get the cell that's one row above and one column to the left of the active cell.
		 *   let cornerCell = activeCell.getOffsetRange(-1,-1);
		 *
		 *   // Get a range that includes all the cells surrounding the active cell.
		 *   let surroundingRange = cornerCell.getResizedRange(2, 2)
		 *
		 *   // Copy the formatting from the active cell to the new range.
		 *   surroundingRange.copyFrom(
		 *     activeCell, // The source range.
		 *     ExcelScript.RangeCopyType.formats // What to copy.
		 *   );
		 * }
		 * ```
		 */
		getResizedRange(deltaRows: number, deltaColumns: number): Range;
		/**
		 * 範囲に含まれている行を 1 つ取得します。
		 * @param row 取得する範囲の行番号。 0 を起点とする番号になります。
		 */
		getRow(row: number): Range;
		/**
		 * 範囲に含まれる行の合計数を返します。
		 *
		 * @example
		 * ```
		 * // This sample provides the count of negative numbers that are present in the used range of the current worksheet.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the working range.
		 *   let usedRange = workbook.getActiveWorksheet().getUsedRange();
		 *   let rowCount = usedRange.getRowCount();
		 *   let columnCount = usedRange.getColumnCount();
		 *
		 *   // Save the values locally to avoid repeatedly asking the workbook.
		 *   let usedRangeValues = usedRange.getValues();
		 *
		 *   // Start the negative number counter.
		 *   let negativeCount = 0;
		 *
		 *   // Iterate over the entire range looking for negative numbers.
		 *   for (let i = 0; i < rowCount; i++) {
		 *     for (let j = 0; j < columnCount; j++) {
		 *       if (usedRangeValues[i][j] < 0) {
		 *         negativeCount++;
		 *       }
		 *     }
		 *   }
		 *
		 *   // Log the negative number count to the console.
		 *   console.log(negativeCount);
		 * }
		 * ```
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
		 *
		 * @example
		 * ```
		 * // This sample gets all the blank cells in the current worksheet's used range. It then highlights all those cells with a yellow background.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the current used range.
		 *   let range = workbook.getActiveWorksheet().getUsedRange();
		 *
		 *   // Get all the blank cells.
		 *   let blankCells = range.getSpecialCells(ExcelScript.SpecialCellType.blanks);
		 *   // Highlight the blank cells with a yellow background.
		 *   blankCells.getFormat().getFill().setColor("yellow");
		 * }
		 * ```
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
		 *
		 * @example
		 * ```
		 * // This sample reads the value of A1 and prints it to the console.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the current worksheet.
		 *   let selectedSheet = workbook.getActiveWorksheet();
		 *
		 *   // Get the value of cell A1.
		 *   let range = selectedSheet.getRange("A1");
		 *
		 *   // Print the value of A1.
		 *   console.log(range.getValue());
		 * }
		 * ```
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
		 *
		 * @example
		 * ```
		 * // This script formats rows in a worksheet based on the first value in that row.
		 * // If it's the boolean value TRUE, the row is bolded.
		 * // If it's FALSE, nothing is changed.
		 * // If the value type isn't a boolean, the row is italicized.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the used range in the active worksheet.
		 *   const sheet = workbook.getActiveWorksheet();
		 *   const usedRange = sheet.getUsedRange();
		 *
		 *   // Get the values in the first column.
		 *   const firstColumnValues = usedRange.getColumn(0).getValues();
		 *
		 *   // Look at the first cell in each row.
		 *   const rowCount = usedRange.getRowCount();
		 *   for (let i = 0; i < rowCount; i++) {
		 *     // Get the type of the first cell to make sure it's a boolean.
		 *     let firstValueType = usedRange.getCell(i, 0).getValueType();
		 *
		 *     // Set the bold or italic of the row as described earlier.
		 *     if (firstValueType === ExcelScript.RangeValueType.boolean) {
		 *       if (firstColumnValues[i][0] as boolean === true) {
		 *         usedRange.getRow(i).getFormat().getFont().setBold(true);
		 *       } else {
		 *         usedRange.getRow(i).getFormat().getFont().setBold(false);
		 *       }
		 *     } else {
		 *       usedRange.getRow(i).getFormat().getFont().setItalic(true);
		 *     }
		 *   }
		 * }
		 * ```
		 */
		getValueType(): RangeValueType;
		/**
		 * 各セルのデータの種類を指定します。
		 */
		getValueTypes(): RangeValueType[][];
		/**
		 * 現在の範囲の表示されている行を表します。
		 *
		 * @example
		 * ```
		 * // This script copies values and formatting from the visible range of a table in Sheet1 into Sheet2.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the filtered data from Sheet1.
		 *   const currentSheet = workbook.getWorksheet("Sheet1");
		 *   const table = currentSheet.getTables()[0];
		 *   const source = table.getRange().getVisibleView().getRange();
		 *
		 *   // Copy the data into the other sheet.
		 *   const otherSheet = workbook.getWorksheet("Sheet2");
		 *   const otherRangeCorner = otherSheet.getRange("A1");
		 *   otherRangeCorner.copyFrom(source, ExcelScript.RangeCopyType.all);
		 * }
		 * ```
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
		 *
		 * @example
		 * ```
		 * // This script inserts headers at the top of the worksheet.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   let currentSheet = workbook.getActiveWorksheet();
		 *
		 *   // Create headers for 3 columns.
		 *   let myHeaders = [["NAME", "ID", "ROLE"]];
		 *
		 *   // Add a blank first row and push existing data down a row.
		 *   let firstRow = currentSheet.getRange("1:1");
		 *   firstRow.insert(ExcelScript.InsertShiftDirection.down);
		 *
		 *   // Add the headers.
		 *   currentSheet.getRange("A1:C1").setValues(myHeaders);
		 * }
		 * ```
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
		 *
		 * @example
		 * ```
		 * // This script searches through a table column and replaces
		 * // cells marked "monthly special" with "parsnip".
		 * // This script uses Range.replaceAll instead of Worksheet.replaceAll
		 * // to limit the search to a specific range.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the range of a table named "Orders".
		 *   let table = workbook.getTable("Orders");
		 *   let range = table.getColumnByName("Vegetable").getRange();
		 *
		 *   // Change the value of any cells with the value "monthly special".
		 *   range.replaceAll("monthly special", "parsnip", {completeMatch: true});
		 * }
		 * ```
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
		 *
		 * @example
		 * ```
		 * // This script sets a cell's formula, then displays how Excel stores the cell's formula and value separately.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   let selectedSheet = workbook.getActiveWorksheet();
		 *
		 *   // Set A1 to 2.
		 *   let a1 = selectedSheet.getRange("A1");
		 *   a1.setValue(2);
		 *
		 *   // Set B1 to the formula =(2*A1), which should equal 4.
		 *   let b1 = selectedSheet.getRange("B1")
		 *   b1.setFormula("=(2*A1)");
		 *
		 *   // Log the current results for `getFormula` and `getValue` at B1.
		 *   console.log(`B1 - Formula: ${b1.getFormula()} | Value: ${b1.getValue()}`);
		 * }
		 * ```
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
		 *
		 * @example
		 * ```
		 * // This script sets the values of a range, then adds SUM formulas to calculate the totals for each row of that range.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   let currentSheet = workbook.getActiveWorksheet();
		 *
		 *   // Set the values of a range.
		 *   let values = [[1, 2, 4], [8, 16, 32], [64, 128, 256]];
		 *   let valueRange = currentSheet.getRange("A1:C3");
		 *   valueRange.setValues(values);
		 *
		 *   // Set the formulas of a range.
		 *   let formulas = [["=SUM(A1:C1)"], ["=SUM(A2:C2)"], ["=SUM(A3:C3)"]];
		 *   let formulaRange = currentSheet.getRange("D1:D3");
		 *   formulaRange.setFormulas(formulas);
		 * }
		 * ```
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
		 *
		 * @example
		 * ```
		 * // This script inserts a hyperlink to the first cell of the last worksheet in the workbook.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the active cell.
		 *   let cell = workbook.getActiveCell();
		 *
		 *   // Get the last worksheet in the workbook.
		 *   // Note that this might be the current sheet if there's only one worksheet.
		 *   let lastSheet = workbook.getLastWorksheet();
		 *
		 *   // Get sheet name.
		 *   let linkedSheetName = lastSheet.getName();
		 *   console.log(`Setting hyperlink of ${cell.getAddress()} to the ${linkedSheetName} sheet's A1 cell`);
		 *
		 *   // Set the text for the hyperlink.
		 *   let value = `Click to go to: ${linkedSheetName}`;
		 *
		 *   // Create the hyperlink using that cell's value.
		 *   cell.setHyperlink({
		 *     textToDisplay: value.toString(),
		 *     screenTip: `Navigate to ${linkedSheetName}`,
		 *     documentReference: `${linkedSheetName}!A1`
		 *   });
		 * }
		 * ```
		 */
		setHyperlink(hyperlink: RangeHyperlink): void;
		/**
		 * 指定した範囲のセル Excel 番号書式コードを設定します。
		 * 範囲に複数のセルが含まれている場合、指定された範囲内の各セルは入力データで更新されます。
		 * @param numberFormat
		 *
		 * @example
		 * ```
		 * // This script sets the number format in column C to show the data as a percentage.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   const  selectedSheet = workbook.getActiveWorksheet();
		 *
		 *   // Set number format for column C to a percentage that rounds to the nearest percentage point.
		 *   selectedSheet.getRange("C:C").setNumberFormat("0%");
		 * }
		 * ```
		 */
		setNumberFormat(numberFormat: string): void;
		/**
		 * ユーザーの言語設定に基づいて、指定した範囲のセル Excel 番号書式コードを設定します。
		 * プロパティを取得または設定するときに、Excel では言語や書式の強制は `numberFormatLocal` 実行されません。
		 * 返されるテキストは、システム設定で指定された言語に基づいて、ローカルで書式設定された文字列を使用します。
		 * 範囲に複数のセルが含まれている場合、指定された範囲内の各セルは入力データで更新されます。
		 * @param numberFormatLocal
		 *
		 * @example
		 * ```
		 * // This script sets the number format in column D to show the data as a percentage with a decimal.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   const  selectedSheet = workbook.getActiveWorksheet();
		 *
		 *   // Set number format for column D to a percentage that rounds to the nearest tenth of a percentage.
		 *   selectedSheet.getRange("D:D").setNumberFormatLocal("0.0%");
		 * }
		 * ```
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
		// deno-lint-ignore no-explicit-any
		setValue(value: any): void;
		/**
		 * 指定した範囲の未加工の値を設定します。
		 * 指定されたデータには、文字列、数値、ブール値を指定できます。
		 * 指定された値がプラス ("+")、マイナス ("-")、または等号 ("=") で始まる場合、Excel はこの値を数式として解釈します。
		 * @param values
		 *
		 * @example
		 * ```
		 * // This sample inserts some pre-loaded data into a range.
		 * // It also shows how to get a range that fits the data.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the active cell.
		 *   let currentCell = workbook.getActiveCell();
		 *
		 *   // Calculate the range needed to fit the given data.
		 *   let targetRange = currentCell.getResizedRange(DATA.length - 1, DATA[0].length - 1);
		 *
		 *   // Set range values to the data.
		 *   targetRange.setValues(DATA);
		 *
		 *   // Autofit the columns so the worksheet is readable.
		 *   targetRange.getFormat().autofitColumns();
		 * }
		 *
		 * //
		 * // This sample's data is in a static 2-dimensional array.
		 * // You could also get the input from other ranges or sources.
		 * // Note that each row must have the same number of columns to be valid.
		 * //
		 * const DATA = [
		 *	 ['Date', 'Salesperson', 'Product', 'Amount']
		 *	 , ['3/2/2020', 'Anne', 'Pizza', '$1400']
		 *	 , ['3/2/2020', 'Mariya', 'Pizza', '$1700']
		 *	 , ['3/7/2020', 'Mark', 'Sandwiches', '$1010']
		 *	 , ['3/24/2020', 'Anne', 'Pizza', '$750']
		 *	 , ['3/28/2020', 'Mark', 'Salads', '$510']
		 *	 , ['4/17/2020', 'Laura', 'Salads', '$900']
		 *	 , ['4/17/2020', 'Mariya', 'Salads', '$1600']
		 *	 , ['4/28/2020', 'Laura', 'Sandwiches', '$680']
		 * ];
		 * ```
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
