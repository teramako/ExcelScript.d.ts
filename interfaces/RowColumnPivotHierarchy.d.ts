declare namespace ExcelScript {
	/**
	 * RowColumnPivotHierarchy Excelを表します。
	 * @see [ExcelScript.RowColumnPivotHierarchy interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.rowcolumnpivothierarchy?view=office-scripts)
	 */
	export interface RowColumnPivotHierarchy {
		/**
		 * RowColumnPivotHierarchy に関連付けられているピボット フィールドを返します。
		 */
		getFields(): PivotField[];
		/**
		 * RowColumnPivotHierarchy の ID。
		 */
		getId(): string;
		/**
		 * RowColumnPivotHierarchy の名前。
		 */
		getName(): string;
		/**
		 * PivotField を名前で取得します。
		 * PivotField が存在しない場合、このメソッドは、その `isNullObject` プロパティが次に設定されたオブジェクトを返します。 `true`.
		 * @param name 取得するピボットフィールドの名前。
		 */
		getPivotField(name: string): PivotField | undefined;
		/**
		 * RowColumnPivotHierarchy の位置。
		 */
		getPosition(): number;
		/**
		 * RowColumnPivotHierarchy の名前。
		 * @param name 
		 */
		setName(name: string): void;
		/**
		 * RowColumnPivotHierarchy の位置。
		 * @param position 
		 */
		setPosition(position: number): void;
		/**
		 * RowColumnPivotHierarchy を既定値にリセットします。
		 */
		setToDefault(): void;
	}
}