declare namespace ExcelScript {
	/**
	 * RangeView は、親の範囲の表示されているセルのセットを表します。
	 * @see [ExcelScript.RangeView interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.rangeview?view=office-scripts)
	 */
	export interface RangeView {
		/**
		 * のセル アドレスを表します。 `RangeView`.
		 */
		getCellAddresses(): string[][];
		/**
		 * 表示される列の数。
		 */
		getColumnCount(): number;
		/**
		 * A1 スタイル表記の数式を表します。
		 * セルに数式がない場合は、代わりにその値が返されます。
		 */
		getFormulas(): string[][];
		/**
		 * ユーザーの言語と数値書式ロケールで、A1 スタイル表記の数式を表します。
		 * たとえば、英語の数式 "=SUM(A1, 1.5)" は、ドイツ語では "=SUMME(A1; 1,5)" になります。
		 * セルに数式がない場合は、代わりにその値が返されます。
		 */
		getFormulasLocal(): string[][];
		/**
		 * R1C1 スタイル表記の数式を表します。
		 * セルに数式がない場合は、代わりにその値が返されます。
		 */
		getFormulasR1C1(): string[][];
		/**
		 * のインデックスを表す値を返します。 `RangeView`.
		 */
		getIndex(): number;
		/**
		 * 指定したセルの Excel の数値書式コードを表します。
		 */
		getNumberFormat(): string[][];
		/**
		 * 現在の範囲に関連付けられている親範囲を取得します。 `RangeView`.
		 */
		getRange(): Range;
		/**
		 * 表示される行の数。
		 */
		getRowCount(): number;
		/**
		 * 範囲に関連付けられている範囲ビューのコレクションを表します。
		 */
		getRows(): RangeView[];
		/**
		 * 指定した範囲のテキスト値。
		 * テキスト値は、セルの幅には依存しません。
		 * EXCEL UI で行われる符号の置換は#、API によって返されるテキスト値には影響しません。
		 */
		getText(): string[][];
		/**
		 * 指定した範囲ビューの Raw 値を表します。
		 * 返されるデータの型は、文字列、数値、ブール値のいずれかになります。
		 * エラーが含まれているセルは、エラー文字列を返します。
		 */
		getValues(): (string | number | boolean)[][];
		/**
		 * 各セルのデータの種類を表します。
		 */
		getValueTypes(): RangeValueType[][];
		/**
		 * A1 スタイル表記の数式を表します。
		 * セルに数式がない場合は、代わりにその値が返されます。
		 * @param formulas
		 */
		setFormulas(formulas: string[][]): void;
		/**
		 * ユーザーの言語と数値書式ロケールで、A1 スタイル表記の数式を表します。
		 * たとえば、英語の数式 "=SUM(A1, 1.5)" は、ドイツ語では "=SUMME(A1; 1,5)" になります。
		 * セルに数式がない場合は、代わりにその値が返されます。
		 * @param formulasLocal
		 */
		setFormulasLocal(formulasLocal: string[][]): void;
		/**
		 * R1C1 スタイル表記の数式を表します。
		 * セルに数式がない場合は、代わりにその値が返されます。
		 * @param formulasR1C1
		 */
		setFormulasR1C1(formulasR1C1: string[][]): void;
		/**
		 * 指定したセルの Excel の数値書式コードを表します。
		 * @param numberFormat
		 */
		setNumberFormat(numberFormat: string[][]): void;
		/**
		 * 指定した範囲ビューの Raw 値を表します。
		 * 返されるデータの型は、文字列、数値、ブール値のいずれかになります。
		 * エラーが含まれているセルは、エラー文字列を返します。
		 * @param values
		 */
		setValues(values: (string | number | boolean)[][]): void;
	}
}
