declare namespace ExcelScript {
	/**
	 * グラフ要素の塗りつぶしの書式設定を表します。
	 * @see [ExcelScript.ChartFill interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartfill?view=office-scripts)
	 */
	export interface ChartFill {
		/**
		 * グラフ要素の塗りつぶしの色をクリアします。
		 */
		clear(): void;
		/**
		 * グラフ要素の塗りつぶしの書式設定を均一な色に設定します。
		 * @param color 背景の色を表す HTML カラー コード # (RRGGBB 形式 ("FFA500"など) または名前付き HTML 色 (例: "orange") です。
		 */
		setSolidColor(color: string): void;
	}
}
