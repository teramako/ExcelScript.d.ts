/// <reference path="../enums/ConditionalRangeFontUnderlineStyle.d.ts"/>
declare namespace ExcelScript {
	/**
	 * このオブジェクトは、オブジェクトのフォント属性 (フォント のスタイル、色など) を表します。
	 * @see [ExcelScript.ConditionalRangeFont interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionalrangefont?view=office-scripts)
	 */
	export interface ConditionalRangeFont {
		/**
		 * フォントの書式設定をリセットします。
		 */
		clear(): void;
		/**
		 * フォントが太字の場合に指定します。
		 */
		getBold(): boolean;
		/**
		 * テキストの色の HTML カラー コード表現 # (FF0000 は赤を表すなど)。
		 */
		getColor(): string;
		/**
		 * フォントが italic の場合に指定します。
		 */
		getItalic(): boolean;
		/**
		 * フォントの取り消し線の状態を指定します。
		 */
		getStrikethrough(): boolean;
		/**
		 * フォントに適用される下線の種類。
		 * 詳細は「`ExcelScript.ConditionalRangeFontUnderlineStyle`」をご覧ください。
		 */
		getUnderline(): ConditionalRangeFontUnderlineStyle;
		/**
		 * フォントが太字の場合に指定します。
		 * @param bold
		 */
		setBold(bold: boolean): void;
		/**
		 * テキストの色の HTML カラー コード表現 # (FF0000 は赤を表すなど)。
		 * @param color
		 */
		setColor(color: string): void;
		/**
		 * フォントが italic の場合に指定します。
		 * @param italic
		 */
		setItalic(italic: boolean): void;
		/**
		 * フォントの取り消し線の状態を指定します。
		 * @param strikethrough
		 */
		setStrikethrough(strikethrough: boolean): void;
		/**
		 * フォントに適用される下線の種類。
		 * 詳細は「`ExcelScript.ConditionalRangeFontUnderlineStyle`」をご覧ください。
		 * @param underline
		 */
		setUnderline(underline: ConditionalRangeFontUnderlineStyle): void;
	}
}
