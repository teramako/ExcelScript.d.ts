declare namespace ExcelScript {
	/**
	 * オブジェクトの輪郭を表します。
	 * @see [ExcelScript.RangeBorder interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.rangeborder?view=office-scripts)
	 */
	export interface RangeBorder {
		/**
		 * 罫線 #の色を表す HTML カラー コード(RRGGBB (例: "FFA500")、または名前付き HTML の色 (例: "オレンジ") です。
		 */
		getColor(): string;
		/**
		 * 罫線の特定の辺を表す定数値。
		 * 詳細は「`ExcelScript.BorderIndex`」をご覧ください。
		 */
		getSideIndex(): BorderIndex;
		/**
		 * 罫線の線スタイルを指定する、線スタイル定数のいずれか 1 つ。
		 * 詳細は「`ExcelScript.BorderLineStyle`」をご覧ください。
		 */
		getStyle(): BorderLineStyle;
		/**
		 * 範囲の罫線の色を明るくまたは暗くする double を指定し、値は -1 (最も暗い) から 1 (最も明るい) の間で、元の色の場合は 0 を指定します。
		 * 値は `null` 、罫線に均一 `tintAndShade` な設定がないことを示します。
		 */
		getTintAndShade(): number;
		/**
		 * 範囲周辺の罫線の太さを指定します。
		 * 詳細は「`ExcelScript.BorderWeight`」をご覧ください。
		 */
		getWeight(): BorderWeight;
		/**
		 * 罫線 #の色を表す HTML カラー コード(RRGGBB (例: "FFA500")、または名前付き HTML の色 (例: "オレンジ") です。
		 * @param color 
		 */
		setColor(color: string): void;
		/**
		 * 罫線の線スタイルを指定する、線スタイル定数のいずれか 1 つ。
		 * 詳細は「`ExcelScript.BorderLineStyle`」をご覧ください。
		 * @param style 
		 */
		setStyle(style: BorderLineStyle): void;
		/**
		 * 範囲の罫線の色を明るくまたは暗くする double を指定し、値は -1 (最も暗い) から 1 (最も明るい) の間で、元の色の場合は 0 を指定します。
		 * 値は `null` 、罫線に均一 `tintAndShade` な設定がないことを示します。
		 * @param tintAndShade 
		 */
		setTintAndShade(tintAndShade: number): void;
		/**
		 * 範囲周辺の罫線の太さを指定します。
		 * 詳細は「`ExcelScript.BorderWeight`」をご覧ください。
		 * @param weight 
		 */
		setWeight(weight: BorderWeight): void;
	}
}