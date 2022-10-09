declare namespace ExcelScript {
	/**
	 * Excel FilterPivotHierarchy を表します。
	 * @see [ExcelScript.FilterPivotHierarchy interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.filterpivothierarchy?view=office-scripts)
	 */
	export interface FilterPivotHierarchy {
		/**
		 * 複数のフィルター項目を許可するかどうかを指定します。
		 */
		getEnableMultipleFilterItems(): boolean;
		/**
		 * FilterPivotHierarchy に関連付けられているピボット フィールドを返します。
		 */
		getFields(): PivotField[];
		/**
		 * FilterPivotHierarchy の ID。
		 */
		getId(): string;
		/**
		 * FilterPivotHierarchy の名前。
		 */
		getName(): string;
		/**
		 * PivotField を名前で取得します。
		 * PivotField が存在しない場合、このメソッドは、その `isNullObject` プロパティが次に設定されたオブジェクトを返します。 `true`.
		 * @param name 取得するピボットフィールドの名前。
		 */
		getPivotField(name: string): PivotField | undefined;
		/**
		 * FilterPivotHierarchy の位置。
		 */
		getPosition(): number;
		/**
		 * 複数のフィルター項目を許可するかどうかを指定します。
		 * @param enableMultipleFilterItems 
		 */
		setEnableMultipleFilterItems(enableMultipleFilterItems: boolean): void;
		/**
		 * FilterPivotHierarchy の名前。
		 * @param name 
		 */
		setName(name: string): void;
		/**
		 * FilterPivotHierarchy の位置。
		 * @param position 
		 */
		setPosition(position: number): void;
		/**
		 * FilterPivotHierarchy を既定値にリセットします。
		 */
		setToDefault(): void;
	}
}