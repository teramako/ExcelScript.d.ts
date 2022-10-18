/// <reference path="../enums/LabelFilterCondition.d.ts"/>
declare namespace ExcelScript {
	/**
	 * PivotField に適用するラベル フィルター用の構成可能なテンプレート。
	 * フィルター `condition` を動作させるには、どのような条件を設定する必要があるかを定義します。
	 * @see [ExcelScript.PivotLabelFilter interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.pivotlabelfilter?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script filters items that start with "L" from the "Type" field of the "Farm Sales" PivotTable.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the PivotTable.
	 *   const pivotTable = workbook.getActiveWorksheet().getPivotTable("Farm Sales");
	 *
	 *   // Get the "Type" field.
	 *   const field = pivotTable.getHierarchy("Type").getPivotField("Type");
	 *
	 *   // Filter out any types that start with "L" (such as "Lemons" and "Limes").
	 *   const filter: ExcelScript.PivotLabelFilter = {
	 *     condition: ExcelScript.LabelFilterCondition.beginsWith,
	 *     substring: "L",
	 *     exclusive: true
	 *   };
	 *
	 *   // Apply the label filter to the field.
	 *   field.applyFilter({ labelFilter: filter });
	 * }
	 * ```
	 */
	export interface PivotLabelFilter {
		/**
		 * 必要なフィルター条件を定義するフィルターの条件を指定します。
		 */
		condition: LabelFilterCondition;
		/**
		 * もし `true`、フィルター は、条件を 満たすアイテムを除外します。
		 * 既定値は `false` (条件を満たすアイテムを含めるフィルター) です。
		 */
		exclusive?: boolean;
		/**
		 * フィルター条件の範囲 `between` の下限。
		 *
		 * 注: 数値文字列は、他の数値文字列と比較されるときに数値として扱われます。
		 */
		lowerBound?: string;
		/**
		 * に使用される部分文字列 `beginsWith`, `endsWith`を選択し、 `contains` 条件をフィルター処理します。
		 */
		substring?: string;
		/**
		 * フィルター条件の範囲 `between` の上限。
		 *
		 * 注: 数値文字列は、他の数値文字列と比較されるときに数値として扱われます。
		 */
		upperBound?: string;
	}
}
