declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.CalculationType enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.calculationtype?view=office-scripts)
	 */
	export enum CalculationType {
		/**
		 * これにより、すべてのセルがダーティとしてマークされ、再計算されます。
		 */
		full,
		/**
		 * これにより、完全な依存関係チェーンが再構築され、すべてのセルがダーティとしてマークされ、再計算されます。
		 */
		fullRebuild,
		/**
		 * Excel によってダーティのマークが付けられたすべてのセル (揮発性データと変更されたデータの参照先、およびプログラムによりダーティのマークが付けられたセル) を再計算します。
		 */
		recalculate,
	}
}
