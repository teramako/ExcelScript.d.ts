declare namespace ExcelScript {
	/**
	 * Excel PivotHierarchy を表します。
	 * @see [ExcelScript.PivotHierarchy interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.pivothierarchy?view=office-scripts)
	 */
	export interface PivotHierarchy {
		/**
		 * PivotHierarchy に関連付けられているピボット フィールドを返します。
		 */
		getFields(): PivotField[];
		/**
		 * PivotHierarchy の ID。
		 */
		getId(): string;
		/**
		 * PivotHierarchy の名前。
		 */
		getName(): string;
		/**
		 * PivotField を名前で取得します。
		 * PivotField が存在しない場合、このメソッドは、その `isNullObject` プロパティが次に設定されたオブジェクトを返します。 `true`.
		 * @param name 取得するピボットフィールドの名前。
		 */
		getPivotField(name: string): PivotField | undefined;
		/**
		 * PivotHierarchy の名前。
		 * @param name 
		 */
		setName(name: string): void;
	}
}