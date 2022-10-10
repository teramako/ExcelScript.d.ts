/// <reference path="../enums/RangeUnderlineStyle.d.ts"/>
declare namespace ExcelScript {
	/**
	 * このオブジェクトは、オブジェクトのフォントの属性 (フォント名、フォント サイズ、色など) を表します。
	 * @see [ExcelScript.RangeFont interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.rangefont?view=office-scripts)
	 */
	export interface RangeFont {
		/**
		 * フォントの太字の状態を表します。
		 */
		getBold(): boolean;
		/**
		 * テキストの色の HTML カラー コード表現 ( #FF0000 は赤を表すなど)。
		 */
		getColor(): string;
		/**
		 * フォントの italic 状態を指定します。
		 */
		getItalic(): boolean;
		/**
		 * フォント名 ("Calibri"など)。 名前の長さは 31 文字を超えることはできません。
		 */
		getName(): string;
		/**
		 * フォント サイズ。
		 */
		getSize(): number;
		/**
		 * フォントの取り消し線の状態を指定します。
		 * 値 `null` は、範囲全体に一様な取り消し線の設定が含めなかった場合を示します。
		 */
		getStrikethrough(): boolean;
		/**
		 * フォントの下付き文字の状態を指定します。
		 * 範囲のすべての `true` フォントが下付き文字の場合に返します。
		 * 範囲のすべての `false` フォントが上付きまたは標準 (上付きでも下付きでも) の場合に返します。
		 * それ以外の場合 `null` は返します。
		 */
		getSubscript(): boolean;
		/**
		 * フォントの上付き文字の状態を指定します。
		 * 範囲のすべての `true` フォントが上付き文字の場合に返します。
		 * 範囲のすべての `false` フォントが下付きまたは標準 (上付きでも下付きでも) の場合に返します。
		 * それ以外の場合 `null` は返します。
		 */
		getSuperscript(): boolean;
		/**
		 * 範囲フォントの色を明るくまたは暗くする倍数を指定します。
		 * 値は -1 (最も暗い) から 1 (最も明るい) の間で、元の色の場合は 0 です。
		 * 値 `null` は、範囲全体に統一されたフォント設定が含めなかった場合を示 `tintAndShade` します。
		 */
		getTintAndShade(): number;
		/**
		 * フォントに適用する下線の種類。
		 * 詳細は「`ExcelScript.RangeUnderlineStyle`」をご覧ください。
		 */
		getUnderline(): RangeUnderlineStyle;
		/**
		 * フォントの太字の状態を表します。
		 * @param bold
		 */
		setBold(bold: boolean): void;
		/**
		 * テキストの色の HTML カラー コード表現 ( #FF0000 は赤を表すなど)。
		 * @param color
		 */
		setColor(color: string): void;
		/**
		 * フォントの italic 状態を指定します。
		 * @param italic
		 */
		setItalic(italic: boolean): void;
		/**
		 * フォント名 ("Calibri"など)。 名前の長さは 31 文字を超えることはできません。
		 * @param name
		 */
		setName(name: string): void;
		/**
		 * フォント サイズ。
		 * @param size
		 */
		setSize(size: number): void;
		/**
		 * フォントの取り消し線の状態を指定します。
		 * 値 `null` は、範囲全体に一様な取り消し線の設定が含めなかった場合を示します。
		 * @param strikethrough
		 */
		setStrikethrough(strikethrough: boolean): void;
		/**
		 * フォントの下付き文字の状態を指定します。
		 * 範囲のすべての `true` フォントが下付き文字の場合に返します。
		 * 範囲のすべての `false` フォントが上付きまたは標準 (上付きでも下付きでも) の場合に返します。
		 * それ以外の場合 `null` は返します。
		 * @param subscript
		 */
		setSubscript(subscript: boolean): void;
		/**
		 * フォントの上付き文字の状態を指定します。
		 * 範囲のすべての `true` フォントが上付き文字の場合に返します。
		 * 範囲のすべての `false` フォントが下付きまたは標準 (上付きでも下付きでも) の場合に返します。
		 * それ以外の場合 `null` は返します。
		 * @param superscript
		 */
		setSuperscript(superscript: boolean): void;
		/**
		 * 範囲フォントの色を明るくまたは暗くする倍数を指定します。
		 * 値は -1 (最も暗い) から 1 (最も明るい) の間で、元の色の場合は 0 です。
		 * 値 `null` は、範囲全体に統一されたフォント設定が含めなかった場合を示 `tintAndShade` します。
		 * @param tintAndShade
		 */
		setTintAndShade(tintAndShade: number): void;
		/**
		 * フォントに適用する下線の種類。
		 * 詳細は「`ExcelScript.RangeUnderlineStyle`」をご覧ください。
		 * @param underline
		 */
		setUnderline(underline: RangeUnderlineStyle): void;
	}
}
