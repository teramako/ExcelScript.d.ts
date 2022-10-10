declare namespace ExcelScript {
	/**
	 * ブック内のコメントを表します。
	 * @see [ExcelScript.Comment interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.comment?view=office-scripts)
	 */
	export interface Comment {
		/**
		 * コメントのコメント返信を作成します。
		 * @param content コメントのコンテンツ。
		 * これは、文字列またはオブジェクトのいずれかです (たとえば、メンション付き `CommentRichContent` コメントの場合)。
		 * @param contentType 省略可能です。 コメントに含まれるコンテンツの種類。
		 * 既定値は enum です `ContentType.Plain`.
		 */
		addCommentReply(
			content: CommentRichContent | string,
			contentType?: ContentType,
		): CommentReply;
		/**
		 * コメントとすべての接続済み返信を削除します。
		 */
		delete(): void;
		/**
		 * コメント作成者のメール アドレスを取得します。
		 */
		getAuthorEmail(): string;
		/**
		 * コメント作成者の名前を取得します。
		 */
		getAuthorName(): string;
		/**
		 * その ID で識別されるコメント返信を返します。
		 * @param commentReplyId コメント返信の識別子。
		 */
		getCommentReply(commentReplyId: string): CommentReply;
		/**
		 * コメントのコンテンツ。 文字列はプレーン テキストです。
		 */
		getContent(): string;
		/**
		 * コメントのコンテンツ タイプを取得します。
		 */
		getContentType(): ContentType;
		/**
		 * コメントの作成日時を取得します。
		 * コメントに作成日が設定されていないので、コメントがメモから変換された `null` 場合に返します。
		 */
		getCreationDate(): Date;
		/**
		 * コメント識別子を指定します。
		 */
		getId(): string;
		/**
		 * このコメントがあるセルを取得します。
		 */
		getLocation(): Range;
		/**
		 * コメントに記載されているエンティティ (人など) を取得します。
		 */
		getMentions(): CommentMention[];
		/**
		 * コメントに関連付けられている返信オブジェクトのコレクションを表します。
		 */
		getReplies(): CommentReply[];
		/**
		 * コメント スレッドの状態。
		 * 値は `true` 、コメント スレッドが解決されるという意味です。
		 */
		getResolved(): boolean;
		/**
		 * リッチ コメント コンテンツ (コメントのメンションなど) を取得します。
		 * この文字列は、エンド ユーザーに表示されるという意味ではありません。
		 * アドインは、リッチ コメント コンテンツを解析する場合にのみ、これを使用する必要があります。
		 */
		getRichContent(): string;
		/**
		 * コメントのコンテンツ。 文字列はプレーン テキストです。
		 * @param content
		 */
		setContent(content: string): void;
		/**
		 * コメント スレッドの状態。
		 * 値は `true` 、コメント スレッドが解決されるという意味です。
		 * @param resolved
		 */
		setResolved(resolved: boolean): void;
		/**
		 * 特別に書式設定された文字列とメンションの一覧を使用してコメント コンテンツを更新します。
		 * @param contentWithMentions コメントのコンテンツ。
		 * これには、特別に書式設定された文字列と、ユーザーが表示するときに文字列に解析されるメンションの一覧がExcel。
		 */
		updateMentions(contentWithMentions: CommentRichContent): void;
	}
}
