declare namespace ExcelScript {
	/**
	 * Excel PivotField を表します。
	 * @see [ExcelScript.PivotField interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.pivotfield?view=office-scripts)
	 */
	export interface PivotField {
		/**
		 * フィールドの現在のピボットフィルターの 1 つ以上を設定し、フィールドに適用します。
		 * 指定されたフィルターが無効であるか、適用できない場合は、例外がスローされます。
		 * @param filter 構成された特定の PivotFilter、または複数の構成済みフィルターを含む PivotFilters インターフェイス。
		 */
		applyFilter(filter: PivotFilters): void;
		/**
		 * すべてのフィールドのフィルターからすべての条件をクリアします。
		 * これにより、フィールドに対するアクティブなフィルター処理が削除されます。
		 */
		clearAllFilters(): void;
		/**
		 * 指定された型のフィールドのフィルターから既存のすべての条件をクリアします (現在適用されている場合)。
		 * @param filterType すべての条件をクリアするフィールドのフィルターの種類。
		 */
		clearFilter(filterType: PivotFilterType): void;
		/**
		 * フィールドに現在適用されているすべてのフィルターを取得します。
		 */
		getFilters(): PivotFilters;
		/**
		 * PivotField の ID。
		 */
		getId(): string;
		/**
		 * PivotField に関連付けられている PivotItems を返します。
		 */
		getItems(): PivotItem[];
		/**
		 * PivotField の名前。
		 */
		getName(): string;
		/**
		 * PivotItem を名前で取得します。 PivotItem が存在しない場合、このメソッドは返します。 `undefined`.
		 * @param name 取得する PivotItem の名前。
		 */
		getPivotItem(name: string): PivotItem | undefined;
		/**
		 * PivotField のすべての項目を表示するかどうかを指定します。
		 */
		getShowAllItems(): boolean;
		/**
		 * PivotField の小計。
		 */
		getSubtotals(): Subtotals;
		/**
		 * フィールドに適用されたフィルターがあるかどうかを確認します。
		 * @param filterType チェックするフィルターの種類。
		 * 型が指定されていない場合、このメソッドはフィルターが適用されているかどうかを確認します。
		 */
		isFiltered(filterType?: PivotFilterType): boolean;
		/**
		 * PivotField の名前。
		 * @param name
		 */
		setName(name: string): void;
		/**
		 * PivotField のすべての項目を表示するかどうかを指定します。
		 * @param showAllItems
		 */
		setShowAllItems(showAllItems: boolean): void;
		/**
		 * PivotField の小計。
		 * @param subtotals
		 */
		setSubtotals(subtotals: Subtotals): void;
		/**
		 * PivotField を並べ替えます。
		 * DataPivotHierarchy を指定すると、そのピボット階層に基づいて並べ替えが適用されます。
		 * 指定しない場合、ピボット フィールド自体が並べ替えの基準になります。
		 * @param sortBy 並べ替えが昇順または降順で行われるかどうかを指定します。
		 */
		sortByLabels(sortBy: SortBy): void;
		/**
		 * 与えられた範囲で、指定された値に基づいて PivotField を並べ替えます。
		 * スコープは、同じ DataPivotHierarchy から複数の値がある場合に、並べ替えに使用される特定の値を定義します。
		 * @param sortBy 並べ替えが昇順または降順で行われるかどうかを指定します。
		 * @param valuesHierarchy 並べ替えに使用するデータ軸上の値階層を指定します。
		 * @param pivotItemScope 並べ替えのスコープに使用する必要がある項目。
		 * これらは、並べ替える行または列を構成する項目です。
		 * PivotItem の代わりに文字列を使用する場合、その文字列は PivotItem の ID を表します。
		 * 並べ替える軸にデータ階層以外の項目がない場合は、空にすることができます。
		 */
		sortByValues(
			sortBy: SortBy,
			valuesHierarchy: DataPivotHierarchy,
			pivotItemScope?: Array<PivotItem | string>,
		): void;
	}
}
