declare namespace ExcelScript {
	/**
	 * ブック内のカスタム XML パーツ オブジェクトを表します。
	 * @see [ExcelScript.CustomXmlPart interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.customxmlpart?view=office-scripts)
	 */
	export interface CustomXmlPart {
		/**
		 * カスタム XML パーツを削除します。
		 */
		delete(): void;
		/**
		 * カスタム XML パーツの ID。
		 */
		getId(): string;
		/**
		 * カスタム XML パーツの名前空間 URI。
		 */
		getNamespaceUri(): string;
		/**
		 * カスタム XML パーツのすべての XML コンテンツを取得します。
		 */
		getXml(): string;
		/**
		 * カスタム XML パーツのすべての XML コンテンツを設定します。
		 * @param xml パーツの XML コンテンツ。
		 */
		setXml(xml: string): void;
	}
}
