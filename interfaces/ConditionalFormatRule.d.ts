declare namespace ExcelScript {
	/**
	 * すべての従来のルール/形式の組み合わせのルールを表します。
	 * @see [ExcelScript.ConditionalFormatRule interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionalformatrule?view=office-scripts)
	 */
	export interface ConditionalFormatRule {
		/**
		 * 必要に応じて、条件付き書式ルールを評価する数式。
		 */
		getFormula(): string;
		/**
		 * 必要に応じて、ユーザーの言語で条件付き書式ルールを評価する数式。
		 */
		getFormulaLocal(): string;
		/**
		 * 必要に応じて、条件付き書式ルールを評価する数式。
		 * @param formula
		 */
		setFormula(formula: string): void;
		/**
		 * 必要に応じて、ユーザーの言語で条件付き書式ルールを評価する数式。
		 * @param formulaLocal
		 */
		setFormulaLocal(formulaLocal: string): void;
	}
}
