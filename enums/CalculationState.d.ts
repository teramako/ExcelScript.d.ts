declare namespace ExcelScript {
	/**
	 * Excelアプリケーション全体にわたる計算の状態を表します。
	 * @see [ExcelScript.CalculationState enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.calculationstate?view=office-scripts)
	 */
	export enum CalculationState {
		/**
		 * 進行中の計算。
		 */
		calculating,
		/**
		 * 計算完了
		 */
		done,
		/**
		 * 計算を引き起こす変更が行われましたが、再計算はまだ実行されていません
		 */
		pending
	}
}