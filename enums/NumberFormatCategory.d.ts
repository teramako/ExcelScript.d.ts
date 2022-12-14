declare namespace ExcelScript {
	/**
	 * 数値形式のカテゴリを表します。
	 * @see [ExcelScript.NumberFormatCategory enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.numberformatcategory?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script finds cells in a table column that are not formatted as currency
	 * // and sets the fill color to red.
	 * function main(workbook: ExcelScript.Workbook) {
	 *   // Get the "Cost" column from the "Expenses" table.
	 *   const table = workbook.getTable("Expenses");
	 *   const costColumn = table.getColumnByName("Cost");
	 *   const costColumnRange = costColumn.getRangeBetweenHeaderAndTotal();
	 *
	 *   // Get the number format categories for the column's range.
	 *   const numberFormatCategories = costColumnRange.getNumberFormatCategories();
	 *
	 *   // If any cell in the column doesn't have a currency format, make the cell red.
	 *   numberFormatCategories.forEach((category, index) =>{
	 *     if (category[0] != ExcelScript.NumberFormatCategory.currency) {
	 *       costColumnRange.getCell(index, 0).getFormat().getFill().setColor("red");
	 *     }
	 *   });
	 * }
	 * ```
	 */
	export enum NumberFormatCategory {
		/**
		 * 会計書式は、列内の通貨記号と小数点を並びます。
		 */
		accounting,
		/**
		 * 通貨形式は、一般的な通貨値に使用されます。
		 * アカウンティング形式を使用して、列内の小数点を揃えます。
		 */
		currency,
		/**
		 * 任意のカテゴリの一部ではないカスタム形式。
		 */
		custom,
		/**
		 * 日付形式では、日付と時刻のシリアル番号が日付値として表示されます。
		 * アスタリスク (*) で始まる日付形式は、オペレーティング システムに指定されている地域の日付と時刻の設定の変更に応答します。
		 * アスタリスクのない形式は、オペレーティング システムの設定の影響を受けません。
		 */
		date,
		/**
		 * 分数形式では、セル値が整数として表示され、残りの部分は最も近い分数の値に丸められます。
		 */
		fraction,
		/**
		 * 一般的な書式セルには、特定の数値書式はありません。
		 */
		general,
		/**
		 * 数値は、数値の一般的な表示に使用されます。
		 * 通貨と会計は、金額に特化した書式設定を提供します。
		 */
		number,
		/**
		 * パーセンテージ形式では、セル値に 100 を乗算し、パーセント記号で結果を表示します。
		 */
		percentage,
		/**
		 * 科学形式では、セル値を 1 ~ 10 の数値に 10 の累乗で乗算して表示します。
		 */
		scientific,
		/**
		 * 特別な形式は、リストとデータベースの値の追跡に役立ちます。
		 */
		special,
		/**
		 * テキスト形式のセルは、数値がセル内にある場合でもテキストとして扱われます。
		 * セルは、入力したとおりに表示されます。
		 */
		text,
		/**
		 * 時刻形式では、日付と時刻のシリアル番号が日付値として表示されます。
		 * アスタリスク (*) で始まる時刻形式は、オペレーティング システムに指定された地域の日付と時刻の設定の変更に応答します。
		 * アスタリスクのない形式は、オペレーティング システムの設定の影響を受けません。
		 */
		time,
	}
}
