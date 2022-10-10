/// <reference path="../enums/NamedItemScope.d.ts"/>
/// <reference path="../enums/NamedItemType.d.ts"/>
/// <reference path="./NamedItemArrayValues.d.ts"/>
declare namespace ExcelScript {
	/**
	 * セルまたは値の範囲の定義済みの名前を表します。
	 * 名前には、プリミティブな名前付きオブジェクト (以下の型に示すように)、範囲オブジェクト、または範囲への参照を指定できます。
	 * このオブジェクトを使用して、名前に関連付けられた範囲オブジェクトを取得することができます。
	 * @see [ExcelScript.NamedItem interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.nameditem?view=office-scripts)
	 */
	export interface NamedItem {
		/**
		 * 指定された名前を削除します。
		 */
		delete(): void;
		/**
		 * 名前付きアイテムの値と型を含むオブジェクトを返します。
		 */
		getArrayValues(): NamedItemArrayValues;
		/**
		 * この名前に関連付けられているコメントを指定します。
		 */
		getComment(): string;
		/**
		 * 名前付きアイテムの数式。
		 * 数式は常に等号 ("=") で始まる。
		 */
		getFormula(): string;
		/**
		 * オブジェクトの名前。
		 */
		getName(): string;
		/**
		 * 名前に関連付けられている範囲オブジェクトを返します。
		 * 名前付き項目の型が範囲でない場合、このメソッドは`undefined`を返します。
		 */
		getRange(): Range;
		/**
		 * 名前がブックまたは特定のワークシートにスコープを設定するかどうかを指定します。
		 * 使用可能な値は、ワークシート、ブックです。
		 */
		getScope(): NamedItemScope;
		/**
		 * 名前の数式によって返される値の型を指定します。
		 * 詳細は「`ExcelScript.NamedItemType`」をご覧ください。
		 */
		getType(): NamedItemType;
		/**
		 * 名前の数式で計算された値を表します。
		 * 名前付き範囲の場合は範囲のアドレスを返します。
		 */
		getValue(): string | number;
		/**
		 * オブジェクトが表示されるかどうかを指定します。
		 */
		getVisible(): boolean;
		/**
		 * 名前付きアイテムのスコープを設定するワークシートを返します。
		 * アイテムのスコープがブックに代わって設定されている場合、このメソッドは `undefined`.
		 */
		getWorksheet(): Worksheet | undefined;
		/**
		 * この名前に関連付けられているコメントを指定します。
		 * @param comment
		 */
		setComment(comment: string): void;
		/**
		 * 名前付きアイテムの数式。
		 * 数式は常に等号 ("=") で始まる。
		 * @param formula
		 */
		setFormula(formula: string): void;
		/**
		 * オブジェクトが表示されるかどうかを指定します。
		 * @param visible
		 */
		setVisible(visible: boolean): void;
	}
}
