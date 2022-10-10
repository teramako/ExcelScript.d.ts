declare namespace ExcelScript {
	/**
	 * コメントに記載されているエンティティを表します。
	 * @see [ExcelScript.CommentMention interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.commentmention?view=office-scripts)
	 */
	export interface CommentMention {
		/**
		 * コメントに記載されているエンティティの電子メール アドレス。
		 */
		email: string;
		/**
		 * エンティティの ID。
		 * ID は、次の ID の 1 つと一致します。 `CommentRichContent.richContent`.
		 */
		id: number;
		/**
		 * コメントに記載されているエンティティの名前。
		 */
		name: string;
	}
}
