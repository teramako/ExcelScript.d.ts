declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.ShowAsRule interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.showasrule?view=office-scripts)
	 */
	export interface ShowAsRule {
		/**
		 * 種類に応じて該当する場合は、計算の基にピボット `ShowAs` `ShowAsCalculation` フィールドを設定します。
		 * それ以外の場合 `null`.
		 */
		baseField?: PivotField;
		/**
		 * 計算の基に設定 `ShowAs` するアイテム (型に応じて該当する場合 `ShowAsCalculation` ) `null`.
		 */
		baseItem?: PivotItem;
		/**
		 * `ShowAsPivotField` に使用する計算。
		 * 詳細は「`ExcelScript.ShowAsCalculation`」をご覧ください。
		 */
		calculation: ShowAsCalculation;
	}
}