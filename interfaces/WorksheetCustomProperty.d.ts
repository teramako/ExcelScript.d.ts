declare namespace ExcelScript {
	/**
	 * ワークシート レベルのカスタム プロパティを表します。
	 * @see [ExcelScript.WorksheetCustomProperty interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.worksheetcustomproperty?view=office-scripts)
	 */
	export interface WorksheetCustomProperty {
		/**
		 * カスタム プロパティを削除します。
		 */
		delete(): void;
		/**
		 * カスタム プロパティのキーを取得します。
		 * カスタム プロパティ キーは大文字と小文字を区別しません。
		 * キーは 255 文字に制限されています (値を大きくすると、`InvalidArgument` エラーがスローされます)。
		 */
		getKey(): string;
		/**
		 * カスタム プロパティの値を取得または設定します。
		 */
		getValue(): string;
		/**
		 * カスタム プロパティの値を取得または設定します。
		 * @param value
		 */
		setValue(value: string): void;
	}
}
