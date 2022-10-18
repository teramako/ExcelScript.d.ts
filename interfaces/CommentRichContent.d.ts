/// <reference path="./CommentMention.d.ts"/>
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
		 *
		 * @example
		 * ```
		 * // This sample finds overdue work items in a table and lets their owners know with a comment that uses an `@mention`.
		 * // This assumes the worksheet has a table with the columns: "Work Item", "Project", "Owner", "Due Date"
		 * function main(workbook: ExcelScript.Workbook) {
		 *   let currentSheet = workbook.getActiveWorksheet();
		 *
		 *   // Get the "Owner" column range and values.
		 *   let table = currentSheet.getTables()[0];
		 *   let ownerColumnRange = table.getColumn("Owner").getRangeBetweenHeaderAndTotal();
		 *   let ownerColumnValues = ownerColumnRange.getValues();
		 *
		 *   // Get the "Due Date" column range and values.
		 *   let dueDateColumnRange = table.getColumn("Due Date").getRangeBetweenHeaderAndTotal();
		 *   let dueDateColumnValues = dueDateColumnRange.getValues();
		 *
		 *   // Look for overdue work items.
		 *   for (let row = 0; row < dueDateColumnValues.length; row++) {
		 *
		 *     // Convert the Excel date into a JavaScript date.
		 *     // This is necessary because Excel and JavaScript store
		 *     // their dates as different numerical values.
		 *     let dueDate = new Date(Math.round((dueDateColumnValues[row][0] as number - 25569) * 86400 * 1000));
		 *
		 *     // Check if the current date is greater than the due date.
		 *     if (Date.now() > dueDate.valueOf()) {
		 *
		 *       // Create a CommentMention object for the comment,
		 *       // based on the work item's owner.
		 *       //
		 *       // A CommentMention's properties are:
		 *       // `name`: The name of the person being mentioned.
		 *       // `id`: The index of this mention in the comment.
		 *       // `email`: The email address of the person being mentioned.
		 *       //          In this sample, "Owner: is also the user name for the email.
		 *       let mention = {
		 *         name: ownerColumnValues[row][0],
		 *         id: 0,
		 *         email: ownerColumnValues[row][0] + "@contoso.com"
		 *       };
		 *
		 *       // Create the comment.
		 *       // The `<at id="0">` syntax embeds the mention in the comment text.
		 *       // The name is displayed in the comment,
		 *       // while an email is sent to the given address.
		 *       //
		 *       // The addComment parameters are:
		 *       // `cellAddress`: The location of the comment.
		 *       // `content`: The text of the comment and any embedded mentions.
		 *       // `contentType`: The type of comment ("Mention" or "Plain").
		 *       currentSheet.addComment(
		 *         dueDateColumnRange.getCell(row, 0),
		 *         {
		 *           richContent: '<at id="0">' + mention.name + "</at> - Your work item is overdue.",
		 *           mentions: [mention]
		 *         },
		 *         ExcelScript.ContentType.mention
		 *       );
		 *     }
		 *   }
		 * }
		 * ```
		 */
		richContent: string;
	}
}
