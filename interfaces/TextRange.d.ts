/// <reference path="./ShapeFont.d.ts"/>
declare namespace ExcelScript {
	/**
	 * 図形に結合するテキストや、テキストを操作するためのプロパティおよびメソッドが含まれます。
	 * @see [ExcelScript.TextRange interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.textrange?view=office-scripts)
	 */
	export interface TextRange {
		/**
		 * テキスト範囲の `ShapeFont` フォント属性を表すオブジェクトを返します。
		 */
		getFont(): ShapeFont;
		/**
		 * 指定された範囲の部分文字列に対する TextRange オブジェクトを返します。
		 * @param start テキスト範囲から取得する最初の文字の 0 から始るインデックス。
		 * @param length 省略可能です。 新しいテキスト範囲で返される文字数。
		 * length を省略すると、テキスト範囲の最後の段落の最初から最後までのすべての文字が返されます。
		 */
		getSubstring(start: number, length?: number): TextRange;
		/**
		 * テキスト範囲のプレーン テキスト コンテンツを表します。
		 */
		getText(): string;
		/**
		 * テキスト範囲のプレーン テキスト コンテンツを表します。
		 * @param text
		 */
		setText(text: string): void;
	}
}
