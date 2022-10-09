declare namespace ExcelScript {
	/**
	 * 範囲オブジェクトの書式保護を表します。
	 * @see [ExcelScript.FormatProtection interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.formatprotection?view=office-scripts)
	 */
	export interface FormatProtection {
		/**
		 * セル範囲Excel数式を非表示にした値を指定します。
		 * 値 `null` は、範囲全体に均一な数式が非表示の設定を持たなかったかどうかを示します。
		 */
		getFormulaHidden(): boolean;
		/**
		 * オブジェクト内Excelをロックする必要がある場合に指定します。
		 * 値 `null` は、範囲全体に一様なロック設定が設定されているのを示します。
		 */
		getLocked(): boolean;
		/**
		 * セル範囲Excel数式を非表示にした値を指定します。
		 * 値 `null` は、範囲全体に均一な数式が非表示の設定を持たなかったかどうかを示します。
		 * @param formulaHidden 
		 */
		setFormulaHidden(formulaHidden: boolean): void;
		/**
		 * オブジェクト内Excelをロックする必要がある場合に指定します。
		 * 値 `null` は、範囲全体に一様なロック設定が設定されているのを示します。
		 * @param locked 
		 */
		setLocked(locked: boolean): void;
	}
}