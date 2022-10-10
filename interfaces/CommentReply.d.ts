declare namespace ExcelScript {
	/**
	 * ブック内のコメント返信を表します。
	 * @see [ExcelScript.CommentReply interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.commentreply?view=office-scripts)
	 */
	export interface CommentReply {
		/**
		 * コメント返信を削除します。
		 */
		delete(): void;
		/**
		 * コメント返信作成者のメール アドレスを取得します。
		 */
		getAuthorEmail(): string;
		/**
		 * コメント返信作成者の名前を取得します。
		 */
		getAuthorName(): string;
		/**
		 * コメント返信のコンテンツ。 文字列はプレーン テキストです。
		 */
		getContent(): string;
		/**
		 * 返信のコンテンツ タイプ。
		 */
		getContentType(): ContentType;
		/**
		 * コメント返信の作成日時を取得します。
		 */
		getCreationDate(): Date;
		/**
		 * コメント返信識別子を指定します。
		 */
		getId(): string;
		/**
		 * このコメント返信があるセルを取得します。
		 */
		getLocation(): Range;
		/**
		 * コメントに記載されているエンティティ (人など)。
		 */
		getMentions(): CommentMention[];
		/**
		 * この返信の親コメントを取得します。
		 */
		getParentComment(): Comment;
		/**
		 * コメントの返信の状態。
		 * 値は `true` 、応答が解決された状態にあるという意味です。
		 */
		getResolved(): boolean;
		/**
		 * 豊富なコメント コンテンツ (コメント内のメンションなど)。
		 * この文字列は、エンド ユーザーに表示されるという意味ではありません。
		 * アドインは、リッチ コメント コンテンツを解析する場合にのみ、これを使用する必要があります。
		 */
		getRichContent(): string;
		/**
		 * コメント返信のコンテンツ。 文字列はプレーン テキストです。
		 * @param content
		 */
		setContent(content: string): void;
		/**
		 * 特別に書式設定された文字列とメンションの一覧を使用してコメント コンテンツを更新します。
		 * @param contentWithMentions コメントのコンテンツ。
		 * これには、特別に書式設定された文字列と、ユーザーが表示するときに文字列に解析されるメンションの一覧がExcel。
		 */
		updateMentions(contentWithMentions: CommentRichContent): void;
	}
}
