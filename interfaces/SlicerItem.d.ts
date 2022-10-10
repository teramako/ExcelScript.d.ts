declare namespace ExcelScript {
	/**
	 * スライサー内のスライサー アイテムを表します。
	 * @see [ExcelScript.SlicerItem interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.sliceritem?view=office-scripts)
	 */
	export interface SlicerItem {
		/**
		 * スライサー アイテムにデータがある場合、値は `tru` です。
		 */
		getHasData(): boolean;
		/**
		 * スライサー アイテムが選択されている場合、値は `true` です。
		 * この値を設定すると、他のスライサー アイテムの選択した状態はクリアされません。
		 * 既定では、スライサー アイテムが選択されている唯一のアイテムである場合、選択を解除すると、すべてのアイテムが選択されます。
		 */
		getIsSelected(): boolean;
		/**
		 * スライサー アイテムを表す一意の値を表します。
		 */
		getKey(): string;
		/**
		 * ユーザー Excel UI に表示されるタイトルです。
		 */
		getName(): string;
		/**
		 * スライサー アイテムが選択されている場合、値は `true` です。
		 * この値を設定すると、他のスライサー アイテムの選択した状態はクリアされません。
		 * 既定では、スライサー アイテムが選択されている唯一のアイテムである場合、選択を解除すると、すべてのアイテムが選択されます。
		 * @param isSelected
		 */
		setIsSelected(isSelected: boolean): void;
	}
}
