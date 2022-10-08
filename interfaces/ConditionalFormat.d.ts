/// <reference path="./CellValueConditionalFormat.d.ts" />
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
		 */
		getCellValue(): CellValueConditionalFormat | undefined;
		/**
		 * 現在の条件付き書式が型の場合は、色スケールの条件付き書式プロパティを `ColorScale` 返します。
		 */
		getColorScale(): ColorScaleConditionalFormat | undefined;
	}
}