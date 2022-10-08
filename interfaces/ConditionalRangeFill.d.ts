declare namespace ExcelScript {
	/**
	 * 条件付き範囲オブジェクトの背景を表します。
	 * @see [ExcelScript.ConditionalRangeFill interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionalrangefill?view=office-scripts)
	 */
	export interface ConditionalRangeFill {
		/**
		 * 塗りつぶしをリセットします。
		 */
		clear(): void;
		/**
		 * 塗りつぶしの色を表す HTML カラー コード # (RRGGBB 形式 ("FFA500" など)、または名前付き HTML 色 ("オレンジ色" など) として指定します。
		 */
		getColor(): string;
		/**
		 * 塗りつぶしの色を表す HTML カラー コード # (RRGGBB 形式 ("FFA500" など)、または名前付き HTML 色 ("オレンジ色" など) として指定します。
		 * @param color 
		 */
		setColor(color: string): void;
	}
}