declare namespace ExcelScript {
	/**
	 * オブジェクトの輪郭を表します。
	 * @see [ExcelScript.ConditionalRangeBorder interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionalrangeborder?view=office-scripts)
	 */
	export interface ConditionalRangeBorder {
		/**
		 * RRGGBB 形式 ("FFA500" など) の境界線の色を表す HTML カラー コード、または名前付き HTML 色 ("オレンジ色" など) を表 # します。
		 */
		getColor(): string;
		/**
		 * 罫線の特定の辺を表す定数値。
		 * 詳細は「`ExcelScript.ConditionalRangeBorderIndex`」をご覧ください。
		 */
		getSideIndex(): ConditionalRangeBorderIndex;
		/**
		 * 罫線の線スタイルを指定する、線スタイル定数のいずれか 1 つ。
		 * 詳細は「`ExcelScript.BorderLineStyle`」をご覧ください。
		 */
		getStyle(): ConditionalRangeBorderLineStyle;
		/**
		 * RRGGBB 形式 ("FFA500" など) の境界線の色を表す HTML カラー コード、または名前付き HTML 色 ("オレンジ色" など) を表 # します。
		 * @param color
		 */
		setColor(color: string): void;
		/**
		 * 罫線の線スタイルを指定する、線スタイル定数のいずれか 1 つ。
		 * 詳細は「`ExcelScript.BorderLineStyle`」をご覧ください。
		 * @param style
		 */
		setStyle(style: ConditionalRangeBorderLineStyle): void;
	}
}
