declare namespace ExcelScript {
	/**
	 * セル値の条件付き書式ルールを表します。
	 * @see [ExcelScript.ConditionalCellValueRule interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionalcellvaluerule?view=office-scripts)
	 */
	export interface ConditionalCellValueRule {
		/**
		 * 必要に応じて、条件付き書式規則を評価する数式。
		 */
		formula1: string;
		/**
		 * 必要に応じて、条件付き書式規則を評価する数式。
		 */
		formula2: string;
		/**
		 * セル値の条件付き書式の演算子。
		 */
		operator: ConditionalCellValueOperator;
	}
}