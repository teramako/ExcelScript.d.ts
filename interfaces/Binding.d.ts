declare namespace ExcelScript {
	/**
	 * ブックで定義されている Office.js のバインディングを表します。
	 * @see [ExcelScript.Binding interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.binding?view=office-scripts)
	 */
	export interface Binding {
		/**
		 * バインドを削除します。
		 */
		delete(): void;
		/**
		 * バインド識別子を表します。
		 */
		getId(): string;
		/**
		 * バインディングによって表される範囲を返します。
		 * バインドが正しい型ではない場合、エラーがスローされます。
		 */
		getRange(): Range;
		/**
		 * バインドによって表されるテーブルを返します。
		 * バインドが正しい型ではない場合、エラーがスローされます。
		 */
		getTable(): Table;
		/**
		 * バインドによって表されるテキストを返します。
		 * バインドが正しい型ではない場合、エラーがスローされます。
		 */
		getText(): string;
		/**
		 * バインドの種類を返します。
		 * 詳細は「`ExcelScript.BindingType`」をご覧ください。
		 */
		getType(): BindingType;
	}
}
