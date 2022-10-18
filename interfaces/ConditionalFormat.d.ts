/// <reference path="./CellValueConditionalFormat.d.ts" />
/// <reference path="./ColorScaleConditionalFormat.d.ts" />
/// <reference path="./CustomConditionalFormat.d.ts" />
/// <reference path="./DataBarConditionalFormat.d.ts" />
/// <reference path="./IconSetConditionalFormat.d.ts" />
/// <reference path="./PresetCriteriaConditionalFormat.d.ts" />
/// <reference path="./Range.d.ts" />
/// <reference path="./RangeAreas.d.ts" />
/// <reference path="./TextConditionalFormat.d.ts" />
/// <reference path="./TopBottomConditionalFormat.d.ts" />
declare namespace ExcelScript {
	/**
	 * 条件付き書式の範囲、書式、規則、およびその他のプロパティをカプセル化するオブジェクト。
	 * @see [ExcelScript.ConditionalFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionalformat?view=office-scripts)
	 */
	export interface ConditionalFormat {
		/**
		 * この条件付き書式を削除します。
		 */
		delete(): void;
		/**
		 * 現在の条件付き書式が型の場合は、セル値の条件付き書式プロパティを `CellValue` 返します。
		 *
		 * @example
		 * ```
		 * // This script applies conditional formatting to a range.
		 * // That formatting is conditional upon the cell's numerical value.
		 * // Any value between 50 and 75 will have the cell fill color changed and the font made italic.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the range to format.
		 *   const sheet = workbook.getActiveWorksheet();
		 *   const ratingColumn = sheet.getRange("D2:D20");
		 *
		 *   // Add cell value conditional formatting.
		 *   const cellValueConditionalFormatting =
		 *     ratingColumn.addConditionalFormat(ExcelScript.ConditionalFormatType.cellValue).getCellValue();
		 *
		 *   // Create the condition, in this case when the cell value is between 50 and 75.
		 *   let rule: ExcelScript.ConditionalCellValueRule = {
		 *     formula1: "50",
		 *     formula2: "75",
		 *     operator: ExcelScript.ConditionalCellValueOperator.between
		 *   };
		 *   cellValueConditionalFormatting.setRule(rule);
		 *
		 *   // Set the format to apply when the condition is met.
		 *   let format = cellValueConditionalFormatting.getFormat();
		 *   format.getFill().setColor("yellow");
		 *   format.getFont().setItalic(true);
		 * }
		 * ```
		 */
		getCellValue(): CellValueConditionalFormat | undefined;
		/**
		 * 現在の条件付き書式が型の場合は、色スケールの条件付き書式プロパティを `ColorScale` 返します。
		 *
		 * @example
		 * ```
		 * // This script applies a red, white, and blue color scale to the selected range.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the selected range.
		 *   let selectedRange = workbook.getSelectedRange();
		 *
		 *   // Create a new conditional formatting object by adding one to the range.
		 *   let conditionalFormatting = selectedRange.addConditionalFormat(ExcelScript.ConditionalFormatType.colorScale);
		 *
		 *   // Set the colors for the three parts of the scale: minimum, midpoint, and maximum.
		 *   conditionalFormatting.getColorScale().setCriteria({
		 *     minimum: {
		 *       color:"#F8696B", // A pale red.
		 *       type:ExcelScript.ConditionalFormatColorCriterionType.lowestValue
		 *     },
		 *     midpoint: {
		 *       color: "#FCFCFF", // Slightly off-white.
		 *       formula:'=50',type:ExcelScript.ConditionalFormatColorCriterionType.percentile
		 *     },
		 *     maximum: {
		 *       color: "#5A8AC6", // A pale blue.
		 *       type:ExcelScript.ConditionalFormatColorCriterionType.highestValue
		 *     }
		 *   });
		 * }
		 * ```
		 */
		getColorScale(): ColorScaleConditionalFormat | undefined;
		/**
		 * 現在の条件付き書式がカスタム型の場合は、カスタム条件付き書式プロパティを返します。
		 *
		 * @example
		 * ```
		 * // This script applies a custom conditional formatting to the selected range.
		 * // A light-green fill is applied to a cell if the value is larger than the value in the row's previous column.
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the selected cells.
		 *   let selectedRange = workbook.getSelectedRange();
		 *
		 *   // Apply a rule for positive change from the previous column.
		 *   let positiveChange = selectedRange.addConditionalFormat(ExcelScript.ConditionalFormatType.custom);
		 *   positiveChange.getCustom().getFormat().getFill().setColor("lightgreen");
		 *   positiveChange.getCustom().getRule().setFormula(`=${selectedRange.getCell(0, 0).getAddress()}>${selectedRange.getOffsetRange(0, -1).getCell(0, 0).getAddress()}`);
		 * }
		 * ```
		 */
		getCustom(): CustomConditionalFormat | undefined;
		/**
		 * 現在の条件付き書式がデータ バーの場合は、データ バーのプロパティを返します。
		 */
		getDataBar(): DataBarConditionalFormat | undefined;
		/**
		 * 現在の条件付き書式が型の場合は、アイコン セットの条件付き書式プロパティを `IconSet` 返します。
		 */
		getIconSet(): IconSetConditionalFormat | undefined;
		/**
		 * 現在の条件付き書式の優先度 `ConditionalFormatCollection`.
		 */
		getId(): string;
		/**
		 * 事前設定された条件の条件付き形式を返します。
		 * 詳細については、`ExcelScript.PresetCriteriaConditionalFormat`を参照してください。
		 */
		getPreset(): PresetCriteriaConditionalFormat | undefined;
		/**
		 * この条件付き書式が現在存在する条件付き書式コレクション内の優先度 (またはインデックス)。
		 * これを変更すると、他の条件付き形式の優先順位も変更され、gg連続した優先度の順序が可能になります。 負の優先順位を使用して、後ろから開始します。
		 * 境界より大きい優先順位は、最大値 (負の場合は最小値) の優先順位を取得して設定します。
		 * また、優先度を変更する場合は、さらに変更を加える場合は、その新しい優先度の場所でオブジェクトの新しいコピーを再フェッチする必要があることにも注意してください。
		 */
		getPriority(): number;
		/**
		 * 条件付き書式を適用する範囲を返します。
		 * 条件付き書式が複数の範囲に適用されている場合、このメソッドは `undefined` を返します.
		 */
		getRange(): Range;
		/**
		 * `RangeAreas" を返します。
		 * `RangeAreas` は、条件付き書式が適用される 1 つまたは複数の四角形の範囲で構成されます。
		 */
		getRanges(): RangeAreas;
		/**
		 * この条件付き書式の条件が満たされた場合、優先順位の低い書式はそのセルに影響を及ぼしません。
		 * 値は `null` 、データ バー、アイコン セット、およびカラー スケール上にあります。
		 * これらの概念 `StopIfTrue` がないためです。
		 */
		getStopIfTrue(): boolean;
		/**
		 * 現在の条件付き書式がテキスト型の場合は、特定のテキスト条件付き書式プロパティを返します。
		 * たとえば、"Text" という単語に一致するセルを書式設定します。
		 *
		 * @example
		 * ```
		 * // This script adds conditional formatting to the first column in the worksheet.
		 * // This formatting gives the cells a green fill if they have text starting with "Excel".
		 * function main(workbook: ExcelScript.Workbook) {
		 *   // Get the first column in the current worksheet.
		 *   const currentSheet = workbook.getActiveWorksheet();
		 *   const firstColumn = currentSheet.getRange("A:A");
		 *
		 *   // Add conditional formatting based on the text in the cells.
		 *   const textConditionFormat =
		 *     firstColumn.addConditionalFormat(ExcelScript.ConditionalFormatType.containsText).getTextComparison();
		 *
		 *   // Set the conditional format to provide a green fill.
		 *   textConditionFormat.getFormat().getFill().setColor("green");
		 *
		 *   // Apply the condition rule that the text begins with "Excel".
		 *   const textRule: ExcelScript.ConditionalTextComparisonRule = {
		 *     operator: ExcelScript.ConditionalTextOperator.beginsWith,
		 *     text: "Excel"
		 *   };
		 *   textConditionFormat.setRule(textRule);
		 * }
		 * ```
		 */
		getTextComparison(): TextConditionalFormat | undefined;
		/**
		 * 現在の条件付き書式が型の場合は、上/下の条件付き書式プロパティを `TopBottom` 返します。
		 * たとえば、上位 10% または下位 10 項目の書式を設定します。
		 */
		getTopBottom(): TopBottomConditionalFormat | undefined;
		/**
		 * 条件付き書式の種類。
		 * 一度に設定できるのは 1 つだけです。
		 */
		getType(): ConditionalFormatType;
		/**
		 * この条件付き書式が現在存在する条件付き書式コレクション内の優先度 (またはインデックス)。
		 * これを変更すると、他の条件付き形式の優先順位も変更され、連続した優先度の順序が可能になります。
		 * 負の優先順位を使用して、後ろから開始します。 境界より大きい優先順位は、最大値 (負の場合は最小値) の優先順位を取得して設定します。
		 * また、優先度を変更する場合は、さらに変更を加える場合は、その新しい優先度の場所でオブジェクトの新しいコピーを再フェッチする必要があることにも注意してください。
		 * @param priority
		 */
		setPriority(priority: number): void;
		/**
		 * この条件付き書式の条件が満たされた場合、優先順位の低い書式はそのセルに影響を及ぼしません。
		 * 値は `null` 、データ バー、アイコン セット、およびカラー スケール上にあります。
		 * これらの概念 `StopIfTrue` がないためです。
		 * @param stopIfTrue
		 */
		setStopIfTrue(stopIfTrue: boolean): void;
	}
}
