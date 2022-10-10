declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.HeaderFooter interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.headerfooter?view=office-scripts)
	 */
	export interface HeaderFooter {
		/**
		 * ワークシートの中央フッター。
		 * フォントの書式設定を適用したり、変数値を挿入したりするには、次に示す書式コードを使用します
		 * https://msdn.microsoft.com/library/bb225426.aspx 。
		 */
		getCenterFooter(): string;
		/**
		 * ワークシートの中央ヘッダー。
		 * フォントの書式設定を適用したり、変数値を挿入したりするには、次に示す書式コードを使用します
		 * https://msdn.microsoft.com/library/bb225426.aspx 。
		 */
		getCenterHeader(): string;
		/**
		 * ワークシートの左側のフッター。
		 * フォントの書式設定を適用したり、変数値を挿入したりするには、次に示す書式コードを使用します
		 * https://msdn.microsoft.com/library/bb225426.aspx 。
		 */
		getLeftFooter(): string;
		/**
		 * ワークシートの左側のヘッダー。
		 * フォントの書式設定を適用したり、変数値を挿入したりするには、次に示す書式コードを使用します
		 * https://msdn.microsoft.com/library/bb225426.aspx 。
		 */
		getLeftHeader(): string;
		/**
		 * ワークシートの右側のフッター。
		 * フォントの書式設定を適用したり、変数値を挿入したりするには、次に示す書式コードを使用します
		 * https://msdn.microsoft.com/library/bb225426.aspx 。
		 */
		getRightFooter(): string;
		/**
		 * ワークシートの右側のヘッダー。
		 * フォントの書式設定を適用したり、変数値を挿入したりするには、次に示す書式コードを使用します
		 * https://msdn.microsoft.com/library/bb225426.aspx 。
		 */
		getRightHeader(): string;
		/**
		 * ワークシートの中央フッター。
		 * フォントの書式設定を適用したり、変数値を挿入したりするには、次に示す書式コードを使用します
		 * https://msdn.microsoft.com/library/bb225426.aspx 。
		 * @param centerFooter
		 */
		setCenterFooter(centerFooter: string): void;
		/**
		 * ワークシートの中央ヘッダー。
		 * フォントの書式設定を適用したり、変数値を挿入したりするには、次に示す書式コードを使用します
		 * https://msdn.microsoft.com/library/bb225426.aspx 。
		 * @param centerHeader
		 */
		setCenterHeader(centerHeader: string): void;
		/**
		 * ワークシートの左側のフッター。
		 * フォントの書式設定を適用したり、変数値を挿入したりするには、次に示す書式コードを使用します
		 * https://msdn.microsoft.com/library/bb225426.aspx 。
		 * @param leftFooter
		 */
		setLeftFooter(leftFooter: string): void;
		/**
		 * ワークシートの左側のヘッダー。
		 * フォントの書式設定を適用したり、変数値を挿入したりするには、次に示す書式コードを使用します
		 * https://msdn.microsoft.com/library/bb225426.aspx 。
		 * @param leftHeader
		 */
		setLeftHeader(leftHeader: string): void;
		/**
		 * ワークシートの右側のフッター。
		 * フォントの書式設定を適用したり、変数値を挿入したりするには、次に示す書式コードを使用します
		 * https://msdn.microsoft.com/library/bb225426.aspx 。
		 * @param rightFooter
		 */
		setRightFooter(rightFooter: string): void;
		/**
		 * ワークシートの右側のヘッダー。
		 * フォントの書式設定を適用したり、変数値を挿入したりするには、次に示す書式コードを使用します
		 * https://msdn.microsoft.com/library/bb225426.aspx 。
		 * @param rightHeader
		 */
		setRightHeader(rightHeader: string): void;
	}
}
