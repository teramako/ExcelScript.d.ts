/// <reference path="../enums/FilterOn.d.ts"/>
declare namespace ExcelScript {
	/**
	 * 列に適用するフィルター条件を表します。
	 * @see [ExcelScript.FilterCriteria interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.filtercriteria?view=office-scripts)
	 */
	export interface FilterCriteria {
		/**
		 * セルをフィルター処理するために使用する HTML カラー文字列。
		 * フィルター処理と`fontColor`共に`cellColor`使用されます。
		 */
		color?: string;
		/**
		 * データをフィルター処理するために使用する最初の条件。
		 * フィルター処理の場合 `custom` に演算子として使用されます。
		 * たとえば">50 より大きい数値の場合は 50"、"s" で終わる値の場合は "=*s" です。
		 *
		 * 上/下のアイテム/パーセントの場合は数値として使用されます (たとえば、上位 5 項目の場合は "5" に設定されている場合 `filterOn` ) `topItems`).
		 */
		criterion1?: string;
		/**
		 * データをフィルター処理するために使用する 2 番目の条件。
		 * フィルター処理の場合 `custom` にのみ演算子として使用されます。
		 */
		criterion2?: string;
		/**
		 * この列に適用する `ExcelScript.DynamicFilterCriteria` セットの動的条件。
		 * フィルター処理で `dynamic` 使用されます。
		 */
		dynamicCriteria?: DynamicFilterCriteria;
		/**
		 * 値を表示したままにする必要があるかどうかを判断するためにフィルターで使用されるプロパティ。
		 */
		filterOn: FilterOn;
		/**
		 * セルをフィルター処理するために使用するアイコン。
		 * フィルター処理で `icon` 使用されます。
		 */
		icon?: Icon;
		/**
		 * フィルター処理を使用するときに条件 1 と 2 を結合するために使用される `custom` 演算子。
		 */
		operator?: FilterOperator;
		/**
		 * 豊富な値に対してリッチ フィルターを実行するためにフィルターによって使用されるプロパティ。
		 */
		subField?: string;
		/**
		 * フィルター処理の一部として使用する値の `values` セット。
		 */
		values?: Array<string | FilterDatetime>;
	}
}
