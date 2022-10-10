declare namespace ExcelScript {
	/**
	 * 反復計算の設定を表します。
	 * @see [ExcelScript.IterativeCalculation interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.iterativecalculation?view=office-scripts)
	 */
	export interface IterativeCalculation {
		/**
		 * Excel で反復計算を使用して循環参照を解決する場合、true となります。
		 */
		getEnabled(): boolean;
		/**
		 * 循環参照を解決するために、各反復間のExcelを指定します。
		 */
		getMaxChange(): number;
		/**
		 * 循環参照の解決に使用Excel繰り返しの最大数を指定します。
		 */
		getMaxIteration(): number;
		/**
		 * Excel で反復計算を使用して循環参照を解決する場合、true となります。
		 * @param enabled
		 */
		setEnabled(enabled: boolean): void;
		/**
		 * 循環参照を解決するために、各反復間のExcelを指定します。
		 * @param maxChange
		 */
		setMaxChange(maxChange: number): void;
		/**
		 * 循環参照の解決に使用Excel繰り返しの最大数を指定します。
		 * @param maxIteration
		 */
		setMaxIteration(maxIteration: number): void;
	}
}
