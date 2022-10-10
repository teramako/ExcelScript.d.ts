declare namespace ExcelScript {
	/**
	 * カスタム プロパティを表します。
	 * @see [ExcelScript.CustomProperty interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.customproperty?view=office-scripts)
	 */
	export interface CustomProperty {
		/**
		 * カスタム プロパティを削除します。
		 */
		delete(): void;
		/**
		 * カスタム プロパティのキー。
		 * キーは 255 文字に制限されています (Excel on the webキーは他のプラットフォームでは自動的に 255 文字にトリミングされます)。
		 */
		getKey(): string;
		/**
		 * カスタム プロパティに使用される値の種類。
		 */
		getType(): DocumentPropertyType;
		/**
		 * カスタム プロパティの値を指定します。
		 * この値は、Excel on the web 以外の 255 文字に制限されます (大きい値は、他のプラットフォームでは自動的に 255 文字にトリミングされます)。
		 */
		getValue(): any;
		/**
		 * カスタム プロパティの値を指定します。
		 * この値は、Excel on the web 以外の 255 文字に制限されます (大きい値は、他のプラットフォームでは自動的に 255 文字にトリミングされます)。
		 * @param value
		 */
		setValue(value: any): void;
	}
}
