declare namespace ExcelScript {
	/**
	 * Excel DataPivotHierarchy を表します。
	 * @see [ExcelScript.DataPivotHierarchy interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.datapivothierarchy?view=office-scripts)
	 */
	export interface DataPivotHierarchy {
		/**
		 * DataPivotHierarchy に関連付けられているピボット フィールドを返します。
		 */
		getField(): PivotField;
		/**
		 * DataPivotHierarchy の ID。
		 */
		getId(): string;
		/**
		 * DataPivotHierarchy の名前。
		 */
		getName(): string;
		/**
		 * DataPivotHierarchy の数値形式。
		 */
		getNumberFormat(): string;
		/**
		 * DataPivotHierarchy の位置。
		 */
		getPosition(): number;
		/**
		 * データを特定の集計計算として表示するかどうかを指定します。
		 */
		getShowAs(): ShowAsRule;
		/**
		 * DataPivotHierarchy のすべての項目を表示するかどうかを指定します。
		 */
		getSummarizeBy(): AggregationFunction;
		/**
		 * DataPivotHierarchy の名前。
		 * @param name
		 */
		setName(name: string): void;
		/**
		 * DataPivotHierarchy の数値形式。
		 * @param numberFormat
		 */
		setNumberFormat(numberFormat: string): void;
		/**
		 * DataPivotHierarchy の位置。
		 * @param position
		 */
		setPosition(position: number): void;
		/**
		 * データを特定の集計計算として表示するかどうかを指定します。
		 * @param showAs
		 */
		setShowAs(showAs: ShowAsRule): void;
		/**
		 * DataPivotHierarchy のすべての項目を表示するかどうかを指定します。
		 * @param summarizeBy
		 */
		setSummarizeBy(summarizeBy: AggregationFunction): void;
		/**
		 * DataPivotHierarchy を既定値にリセットします。
		 */
		setToDefault(): void;
	}
}
