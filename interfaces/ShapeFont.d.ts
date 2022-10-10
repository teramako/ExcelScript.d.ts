declare namespace ExcelScript {
	/**
	 * 図形のオブジェクトのフォント名、フォント サイズ、色などのフォント属性を表 `TextRange` します。
	 * @see [ExcelScript.ShapeFont interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.shapefont?view=office-scripts)
	 */
	export interface ShapeFont {
		/**
		 * フォントの太字の状態を表します。
		 * 太字と `null` 太字以外 `TextRange` のテキスト フラグメントの両方が含まれる場合に返します。
		 */
		getBold(): boolean;
		/**
		 * テキストの色の HTML カラー コード表現 (例: # "FF0000" は赤を表します)。
		 * 色が `null` 異なるテキスト `TextRange` フラグメントが含まれる場合に返します。
		 */
		getColor(): string;
		/**
		 * フォントの斜体の状態を表します。
		 * italic テキスト フラグメントと非 italic テキスト フラグメントの両方が含 `null` `TextRange` まれる場合に返します。
		 */
		getItalic(): boolean;
		/**
		 * フォント名 ("Calibri" など) を表します。
		 * テキストが複合スクリプトまたは東アジア言語の場合、これは対応するフォント名です。
		 * それ以外の場合は、ラテン文字のフォント名です。
		 */
		getName(): string;
		/**
		 * フォント サイズをポイント (11 など) で表します。
		 * フォント サイズ `null` が異なる `TextRange` テキスト フラグメントが含まれる場合に返します。
		 */
		getSize(): number;
		/**
		 * フォントに適用する下線の種類。
		 * 異なる `null` 下線スタイルの `TextRange` テキスト フラグメントが含まれる場合に返します。
		 * 詳細は「`ExcelScript.ShapeFontUnderlineStyle`」をご覧ください。
		 */
		getUnderline(): ShapeFontUnderlineStyle;
		/**
		 * フォントの太字の状態を表します。
		 * 太字と `null` 太字以外 `TextRange` のテキスト フラグメントの両方が含まれる場合に返します。
		 * @param bold
		 */
		setBold(bold: boolean): void;
		/**
		 * テキストの色の HTML カラー コード表現 (例: # "FF0000" は赤を表します)。
		 * 色が `null` 異なるテキスト `TextRange` フラグメントが含まれる場合に返します。
		 * @param color
		 */
		setColor(color: string): void;
		/**
		 * フォントの斜体の状態を表します。
		 * italic テキスト フラグメントと非 italic テキスト フラグメントの両方が含 `null` `TextRange` まれる場合に返します。
		 * @param italic
		 */
		setItalic(italic: boolean): void;
		/**
		 * フォント名 ("Calibri" など) を表します。
		 * テキストが複合スクリプトまたは東アジア言語の場合、これは対応するフォント名です。
		 * それ以外の場合は、ラテン文字のフォント名です。
		 * @param name
		 */
		setName(name: string): void;
		/**
		 * フォント サイズをポイント (11 など) で表します。
		 * フォント サイズ `null` が異なる `TextRange` テキスト フラグメントが含まれる場合に返します。
		 * @param size
		 */
		setSize(size: number): void;
		/**
		 * フォントに適用する下線の種類。
		 * 異なる `null` 下線スタイルの TextRange テキスト フラグメントが含まれる場合に返します。
		 * 詳細は「`ExcelScript.ShapeFontUnderlineStyle`」をご覧ください。
		 * @param underline
		 */
		setUnderline(underline: ShapeFontUnderlineStyle): void;
	}
}
