declare namespace ExcelScript {
	/**
	 * ワークシートの名前付きシート ビューを表します。
	 * シート ビューには、特定のワークシートの並べ替えルールとフィルター ルールが格納されます。
	 * すべてのシート ビュー (一時的なシート ビューでも) には、ビューへのアクセスに使用される一意のワークシートスコープの名前があります。
	 * @see [ExcelScript.NamedSheetView interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.namedsheetview?view=office-scripts)
	 */
	export interface NamedSheetView {
		/**
		 * このシート ビューをアクティブ化します。
		 * これは、ユーザーインターフェイスで "Switch To" を使用Excelです。
		 */
		activate(): void;
		/**
		 * ワークシートからシート ビューを削除します。
		 */
		delete(): void;
		/**
		 * このシート ビューのコピーを作成します。
		 * @param name 重複したシート ビューの名前。 名前が指定されなき場合は、1 つが生成されます。
		 */
		duplicate(name?: string): NamedSheetView;
		/**
		 * シート ビューの名前を取得または設定します。
		 * 一時シート ビュー名は空の文字列 ("") です。
		 * name プロパティを使用してビューに名前を付けると、シート ビューが保存されます。
		 */
		getName(): string;
		/**
		 * シート ビューの名前を取得または設定します。
		 * 一時シート ビュー名は空の文字列 ("") です。
		 * name プロパティを使用してビューに名前を付けると、シート ビューが保存されます。
		 * @param name
		 */
		setName(name: string): void;
	}
}
