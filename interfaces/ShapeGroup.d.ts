declare namespace ExcelScript {
	/**
	 * ワークシート内の図形グループを表します。
	 * 対応するオブジェクトを取得 `Shape` するには、 `ShapeGroup.shape`.
	 * @see [ExcelScript.ShapeGroup interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.shapegroup?view=office-scripts)
	 */
	export interface ShapeGroup {
		/**
		 * グループに関連 `Shape` 付けられているオブジェクトを返します。
		 */
		getGroupShape(): Shape;
		/**
		 * 図形識別子を指定します。
		 */
		getId(): string;
		/**
		 * 名前または ID を使用して図形を取得します。
		 * @param key 取得する図形の名前または ID。
		 */
		getShape(key: string): Shape;
		/**
		 * オブジェクトのコレクションを返 `Shape` します。
		 */
		getShapes(): Shape[];
		/**
		 * 指定した図形グループに含まれるグループ化された図形のグループを解除します。
		 */
		ungroup(): void;
	}
}
