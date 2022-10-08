declare namespace ExcelScript {
	/**
	 * 日付データの検証条件を表します。
	 * @see [ExcelScript.DateTimeDataValidation interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.datetimedatavalidation?view=office-scripts)
	 */
	export interface DateTimeDataValidation {
		/**
		 * 演算子プロパティが GreaterThan などのバイナリ演算子に設定されている場合に、右側のオペランドを指定します
		 * (左側のオペランドは、ユーザーがセルに入力しようとする値です)。
		 * 3 項演算子 Between と NotBetween を使用して、下限オペランドを指定します。
		 * 値を設定する場合は、Date、Range オブジェクト、または文字列式
		 *  (文字列が ISO8601 形式の文字列化された日付/時刻、"=A1"のようなセル参照、または "=MIN(A1, B1)" のような数式) として渡されます。
		 * 値を取得すると、"=10"、"=A1"、"=SUM(A1:B5)"など、常に文字列式として返されます。
		 */
		formula1: string | Date | Range;
		/**
		 * 3 項演算子 Between と NotBetween を使用して、上限オペランドを指定します。
		 * GreaterThan などのバイナリ演算子では使用されません。
		 * 値を設定する場合は、Date、Range オブジェクト、または文字列
		 *  (文字列が ISO8601 形式の文字列化された日付/時刻、"=A1"のようなセル参照、または "=MIN(A1, B1)" のような数式) として渡されます。
		 * 値を取得すると、"=10"、"=A1"、"=SUM(A1:B5)"など、常に文字列式として返されます。
		 */
		formula2?: string | Date | Range;
		/**
		 * データの検証に使用する演算子。
		 */
		operator: DataValidationOperator;
	}
}