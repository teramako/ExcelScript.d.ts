declare namespace ExcelScript {
	/**
	 * コメントまたはコメントの返信に含まれるコンテンツを表します。
	 * リッチ コンテンツは、テキスト文字列と、コメント本文に含まれるその他のオブジェクト (メンションなど) を切り分けします。
	 * @see [ExcelScript.CommentRichContent interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.commentrichcontent?view=office-scripts)
	 */
	export interface CommentRichContent {
		/**
		 * コメント内で言及されているすべてのエンティティ (人など) を含む配列。
		 */
		mentions?: CommentMention[];
		/**
		 * コメントのリッチ コンテンツを指定します
		 * (例: メンション付きコメント コンテンツ、最初に言及したエンティティの ID 属性は 0、2 番目に指定したエンティティの ID 属性は 1)。
		 */
		richContent: string;
	}
}
