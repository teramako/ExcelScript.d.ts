/// <reference path="../enums/TopBottomSelectionType.d.ts"/>
/// <reference path="../enums/ValueFilterCondition.d.ts"/>
declare namespace ExcelScript {
	/**
	 * PivotField に適用する値フィルターの構成可能なテンプレート。
	 * フィルター `condition` を操作するために設定する必要がある条件を定義します。
	 * @see [ExcelScript.PivotValueFilter interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.pivotvaluefilter?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script applies a PivotValueFilter to the first row hierarchy in the PivotTable.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the PivotTable on the current worksheet.
	 *   let sheet = workbook.getActiveWorksheet();
	 *   let pivotTable = sheet.getPivotTables()[0];
	 *
	 *   // Get the first row hierarchy to use as the field which gets filtered.
	 *   let rowHierarchy = pivotTable.getRowHierarchies()[0];
	 *
	 *   // Get the first data hierarchy to use as the values for filtering the rows.
	 *   let dataHierarchy = pivotTable.getDataHierarchies()[0];
	 *
	 *   // Create a filter that excludes values greater than 500.
	 *   let filter: ExcelScript.PivotValueFilter = {
	 *     condition: ExcelScript.ValueFilterCondition.greaterThan,
	 *     comparator: 500,
	 *     value: dataHierarchy.getName()
	 *   };
	 *
	 *   // Apply the filter.
	 *   rowHierarchy.getPivotField(rowHierarchy.getName()).applyFilter({
	 *     valueFilter: filter
	 *   });
	 * }
	 * ```
	 */
	export interface PivotValueFilter {
		/**
		 * コンパレータは、他の値を比較する静的な値です。
		 * 比較の種類は、条件によって定義されます。
		 * たとえば、コンパレータが "50" で、条件が "greaterThan" の場合、50 を超えないアイテム値はすべてフィルターによって削除されます。
		 */
		comparator?: number;
		/**
		 * 必要なフィルター条件を定義するフィルターの条件を指定します。
		 */
		condition: ValueFilterCondition;
		/**
		 * もし `true`を選択すると 、条件を満 たすアイテムが除外されます。
		 * 既定値は (条件 `false` を満たすアイテムを含めるフィルター)。
		 */
		exclusive?: boolean;
		/**
		 * フィルター条件の範囲の下限 `between` 。
		 */
		lowerBound?: number;
		/**
		 * フィルターが上位/下位の N 項目、上/下の N パーセント、または上/下の N 合計のフィルターの値を指定します。
		 */
		selectionType?: TopBottomSelectionType;
		/**
		 * 上/下のフィルター条件に対してフィルター処理するアイテム、パーセント、または合計の "N" しきい値数。
		 */
		threshold?: number;
		/**
		 * フィルター条件の範囲の上限 `between` 。
		 */
		upperBound?: number;
		/**
		 * フィルター処理するフィールドで選択した "value" の名前。
		 */
		value: string;
	}
}
