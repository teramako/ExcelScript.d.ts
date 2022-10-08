declare namespace ExcelScript {
	/**
	 * 基本的な型のデータ検証条件を表します。
	 * @see [ExcelScript.BasicDataValidation interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.basicdatavalidation?view=office-scripts)
	 */
	export interface BasicDataValidation {
		/**
		 * 演算子プロパティが GreaterThan などのバイナリ演算子に設定されている場合に、右側のオペランドを指定します (左側のオペランドは、ユーザーがセルに入力しようとする値です)。
		 * 3 項演算子 Between と NotBetween を使用して、下限オペランドを指定します。
		 * たとえば、数式 1 を 10 に設定し、演算子を GreaterThan に設定すると、範囲の有効なデータは 10 より大きい必要があります。
		 * 値を設定すると、数値、範囲オブジェクト、または文字列式 (文字列が文字列番号、"=A1" のようなセル参照、または "=MIN(A1, B1)" のような数式) として渡されます。
		 * 値を取得すると、"=10"、"=A1"、"=SUM(A1:B5)"など、常に文字列式として返されます。
		 */
		formula1: string | number | Range;
		/**
		 * 3 項演算子 Between と NotBetween を使用して、上限オペランドを指定します。
		 * GreaterThan などのバイナリ演算子では使用されません。
		 * 値を設定すると、数値、範囲オブジェクト、または文字列式 (文字列が文字列番号、"=A1" のようなセル参照、または "=MIN(A1, B1)" のような数式) として渡されます。
		 * 値を取得すると、"=10"、"=A1"、"=SUM(A1:B5)"など、常に文字列式として返されます。
		 */
		formula2?: string | number | Range;
	}
}