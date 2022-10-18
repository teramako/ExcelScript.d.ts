/// <reference path="./CustomProperty.d.ts"/>
declare namespace ExcelScript {
	/**
	 * ブックのプロパティを表します。
	 * @see [ExcelScript.DocumentProperties interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.documentproperties?view=office-scripts)
	 *
	 * @example
	 * ```
	 * // This script creates a new worksheet that displays some of the document properties.
	 * function main(workbook: ExcelScript.Workbook) {
	 *     // Get the document properties.
	 *     const properties: ExcelScript.DocumentProperties = workbook.getProperties();
	 *
	 *     // Create a new worksheet called "Metadata".
	 *     const newWorksheet = workbook.addWorksheet("Metadata");
	 *
	 *     // Create an array to store the string values of properties to save.
	 *     let values: string[][] = [];
	 *     values.push(["Creation Date", properties.getCreationDate().toString()]);
	 *     values.push(["Author", properties.getAuthor()]);
	 *     values.push(["Last Edited By", properties.getLastAuthor()]);
	 *
	 *     // Set the property values to a range on the new worksheet.
	 *     newWorksheet.getRange("A1:B3").setValues(values);
	 * }
	 * ```
	 */
	export interface DocumentProperties {
		/**
		 * 新しいカスタム プロパティを作成、または既存のカスタム プロパティを設定します。
		 * @param key 必須です。 カスタム プロパティのキー。大文字と小文字は区別されません。
		 * キーは、Excel on the webの外側で 255 文字に制限されています (大きいキーは、他のプラットフォームでは 255 文字に自動的にトリミングされます)。
		 * @param value 必須です。 カスタム プロパティの値。
		 * 値は、Excel on the webの外側で 255 文字に制限されます (大きい値は、他のプラットフォームでは 255 文字に自動的にトリミングされます)。
		 */
		// deno-lint-ignore no-explicit-any
		addCustomProperty(key: string, value: any): CustomProperty;
		/**
		 * このコレクション内のすべてのカスタム プロパティを削除します。
		 */
		deleteAllCustomProperties(): void;
		/**
		 * ブックの作成者。
		 */
		getAuthor(): string;
		/**
		 * ブックのカテゴリ。
		 */
		getCategory(): string;
		/**
		 * ブックのコメント。
		 */
		getComments(): string;
		/**
		 * ブックの会社。
		 */
		getCompany(): string;
		/**
		 * ブックの作成日を取得します。
		 */
		getCreationDate(): Date;
		/**
		 * ブックのカスタム プロパティのコレクションを取得します。
		 */
		getCustom(): CustomProperty[];
		/**
		 * キーを使用してカスタム プロパティ オブジェクトを取得します。
		 * 大文字と小文字は区別されません。
		 * カスタム プロパティが存在しない場合、このメソッドは `undefined` を返します。
		 * @param key 必須です。 カスタム プロパティ オブジェクトを識別するキー。
		 */
		getCustomProperty(key: string): CustomProperty | undefined;
		/**
		 * ブックのキーワード。
		 */
		getKeywords(): string;
		/**
		 * ブックの最後の作成者を取得します。
		 */
		getLastAuthor(): string;
		/**
		 * ブックのマネージャー。
		 */
		getManager(): string;
		/**
		 * ブックのリビジョン番号を取得します。
		 */
		getRevisionNumber(): number;
		/**
		 * ブックの件名。
		 */
		getSubject(): string;
		/**
		 * ブックのタイトル。
		 */
		getTitle(): string;
		/**
		 * ブックの作成者。
		 * @param author
		 */
		setAuthor(author: string): void;
		/**
		 * ブックのカテゴリ。
		 * @param category
		 */
		setCategory(category: string): void;
		/**
		 * ブックのコメント。
		 * @param comments
		 */
		setComments(comments: string): void;
		/**
		 * ブックの会社。
		 * @param company
		 */
		setCompany(company: string): void;
		/**
		 * ブックのキーワード。
		 * @param keywords
		 */
		setKeywords(keywords: string): void;
		/**
		 * ブックのマネージャー。
		 * @param manager
		 */
		setManager(manager: string): void;
		/**
		 * ブックのリビジョン番号を取得します。
		 * @param revisionNumber
		 */
		setRevisionNumber(revisionNumber: number): void;
		/**
		 * ブックの件名。
		 * @param subject
		 */
		setSubject(subject: string): void;
		/**
		 * ブックのタイトル。
		 * @param title
		 */
		setTitle(title: string): void;
	}
}
