declare namespace ExcelScript {
	/**
	 * 行要素の書式設定オプションをカプセル化します。
	 * @see [ExcelScript.ChartLineFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartlineformat?view=office-scripts)
	 */
	export interface ChartLineFormat {
		/**
		 * グラフ要素の線の形式をクリアします。
		 */
		clear(): void;
		/**
		 * グラフの線の色を表す HTML カラー コード。
		 */
		getColor(): string;
		/**
		 * 線のスタイルを表します。
		 * 詳細は「`ExcelScript.ChartLineStyle`」をご覧ください。
		 */
		getLineStyle(): ChartLineStyle;
		/**
		 * 線の太さ (ポイント数) を表します。
		 */
		getWeight(): number;
		/**
		 *
		 * @param color グラフの線の色を表す HTML カラー コード。
		 */
		setColor(color: string): void;
		/**
		 * 線のスタイルを表します。
		 * 詳細は「`ExcelScript.ChartLineStyle`」をご覧ください。
		 * @param lineStyle
		 */
		setLineStyle(lineStyle: ChartLineStyle): void;
		/**
		 * 線の太さ (ポイント数) を表します。
		 * @param weight
		 */
		setWeight(weight: number): void;
	}
}
