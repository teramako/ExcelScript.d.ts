declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.ProtectionSelectionMode enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.protectionselectionmode?view=office-scripts)
	 */
	export enum ProtectionSelectionMode {
		/**
		 * セルの選択は許可されません。
		 */
		none,
		/**
		 * すべてのセルに対して選択が許可されます。
		 */
		normal,
		/**
		 * 選択は、ロックされていないセルに対してのみ許可されます。
		 */
		unlocked,
	}
}
