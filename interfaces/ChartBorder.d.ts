/// <reference path="../enums/ChartLineStyle.d.ts"/>
declare namespace ExcelScript {
	/**
	 * グラフ要素の罫線の書式設定を表します。
	 * @see [ExcelScript.ChartBorder interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartborder?view=office-scripts)
	 */
	export interface ChartBorder {
		/**
		 * グラフ要素の罫線の書式設定をクリアします。
		 */
		clear(): void;
		/**
		 * グラフの罫線の色を表す HTML カラー コード。
		 */
		getColor(): string;
		/**
		 * 罫線のスタイルを表します。
		 * 詳細は「`ExcelScript.ChartLineStyle`」をご覧ください。
		 */
		getLineStyle(): ChartLineStyle;
		/**
		 * 罫線の太さ (ポイント数) を表します。
		 */
		getWeight(): number;
		/**
		 * グラフの罫線の色を表す HTML カラー コード。
		 * @param color
		 */
		setColor(color: string): void;
		/**
		 * 罫線のスタイルを表します。
		 * 詳細は「`ExcelScript.ChartLineStyle`」をご覧ください。
		 * @param lineStyle
		 */
		setLineStyle(lineStyle: ChartLineStyle): void;
		/**
		 * 罫線の太さ (ポイント数) を表します。
		 * @param weight
		 */
		setWeight(weight: number): void;
	}
}
