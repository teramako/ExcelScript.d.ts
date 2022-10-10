declare namespace ExcelScript {
	/**
	 * このオブジェクトは、グラフ オブジェクトのフォント属性 (フォント名、フォント サイズ、色など) を表します。
	 * @see [ExcelScript.ChartFont interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartfont?view=office-scripts)
	 */
	export interface ChartFont {
		/**
		 * フォントの太字の状態を表します。
		 */
		getBold(): boolean;
		/**
		 * テキストの色の HTML カラー コード表現 # (FF0000 は赤を表すなど)。
		 */
		getColor(): string;
		/**
		 * フォントの斜体の状態を表します。
		 */
		getItalic(): boolean;
		/**
		 * フォント名 ("Calibri"など)
		 */
		getName(): string;
		/**
		 * フォントのサイズ (例: 11)
		 */
		getSize(): number;
		/**
		 * フォントに適用する下線の種類。
		 * 詳細は「`ExcelScript.ChartUnderlineStyle`」をご覧ください。
		 */
		getUnderline(): ChartUnderlineStyle;
		/**
		 * フォントの太字の状態を表します。
		 * @param bold
		 */
		setBold(bold: boolean): void;
		/**
		 * テキストの色の HTML カラー コード表現 # (FF0000 は赤を表すなど)。
		 * @param color
		 */
		setColor(color: string): void;
		/**
		 * フォントの斜体の状態を表します。
		 * @param italic
		 */
		setItalic(italic: boolean): void;
		/**
		 * フォント名 ("Calibri"など)
		 * @param name
		 */
		setName(name: string): void;
		/**
		 * フォントのサイズ (例: 11)
		 * @param size
		 */
		setSize(size: number): void;
		/**
		 * フォントに適用する下線の種類。
		 * 詳細は「`ExcelScript.ChartUnderlineStyle`」をご覧ください。
		 * @param underline
		 */
		setUnderline(underline: ChartUnderlineStyle): void;
	}
}
