declare namespace ExcelScript {
	/**
	 * スタイルの形式と他のプロパティをカプセル化するオブジェクト。
	 * @see [ExcelScript.PredefinedCellStyle interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.predefinedcellstyle?view=office-scripts)
	 */
	export interface PredefinedCellStyle {
		/**
		 * このスタイルを削除します。
		 */
		delete(): void;
		/**
		 * セル内のテキスト配置が等しい分布に設定されている場合に、テキストが自動的にインデントされる場合に指定します。
		 */
		getAutoIndent(): boolean;
		/**
		 * 4 つの罫線のスタイルを表す 4 つの罫線オブジェクトのコレクション。
		 */
		getBorders(): RangeBorder[];
		/**
		 * スタイルが組み込みのスタイルである場合に指定します。
		 */
		getBuiltIn(): boolean;
		/**
		 * スタイルの塗りつぶし。
		 */
		getFill(): RangeFill;
		/**
		 * スタイル Font のフォントを表すオブジェクト。
		 */
		getFont(): RangeFont;
		/**
		 * ワークシートを保護するときに数式を非表示に設定する場合に指定します。
		 */
		getFormulaHidden(): boolean;
		/**
		 * スタイルでの水平方向の配置を表します。
		 * 詳細は「`ExcelScript.HorizontalAlignment`」をご覧ください。
		 */
		getHorizontalAlignment(): HorizontalAlignment;
		/**
		 * スタイルに自動インデント、水平方向の配置、垂直方向の配置、折り返しテキスト、インデント レベル、およびテキストの向きのプロパティが含まれる場合を指定します。
		 */
		getIncludeAlignment(): boolean;
		/**
		 * スタイルに色、色インデックス、線のスタイル、太さ罫線のプロパティが含まれる場合に指定します。
		 */
		getIncludeBorder(): boolean;
		/**
		 * スタイルに背景、太字、色、色インデックス、フォント スタイル、斜体、名前、サイズ、取り消し線、下付き文字、下線のフォント プロパティが含まれる場合に指定します。
		 */
		getIncludeFont(): boolean;
		/**
		 * スタイルに number format プロパティが含まれる場合に指定します。
		 */
		getIncludeNumber(): boolean;
		/**
		 * スタイルに色、色インデックス、負の場合は反転、パターン、パターンの色、パターンの色インデックスの内部プロパティを含む場合を指定します。
		 */
		getIncludePatterns(): boolean;
		/**
		 * スタイルに非表示およびロックされた保護プロパティの数式が含まれる場合に指定します。
		 */
		getIncludeProtection(): boolean;
		/**
		 * スタイルのインデント レベルを示す 0 から 250 の範囲内の整数。
		 */
		getIndentLevel(): number;
		/**
		 * ワークシートが保護されているときにオブジェクトがロックされる場合に指定します。
		 */
		getLocked(): boolean;
		/**
		 * スタイルの名前。
		 */
		getName(): string;
		/**
		 * スタイルで適用される数値形式の表示形式コード。
		 */
		getNumberFormat(): string;
		/**
		 * スタイルで適用される数値形式のローカライズされた表示形式コード。
		 */
		getNumberFormatLocal(): string;
		/**
		 * オブジェクトの名前を使用して、境界線オブジェクトを取得します。
		 * @param index 取得する罫線オブジェクトのインデックス値。 詳細は「`ExcelScript.BorderIndex`」をご覧ください。
		 */
		getRangeBorder(index: BorderIndex): RangeBorder;
		/**
		 * 範囲の境界線の色を明るくまたは暗くする倍数を指定します。
		 * 値は -1 (最も暗い) から 1 (最も明るい) の間で、元の色の場合は 0 です。
		 * 値 `null` は、罫線コレクション全体に均一な設定が設定できない場合を示します。
		 */
		getRangeBorderTintAndShade(): number;
		/**
		 * スタイルで適用される読み上げ順序。
		 */
		getReadingOrder(): ReadingOrder;
		/**
		 * 使用可能な列の幅に収まるテキストを自動的に縮小する場合に指定します。
		 */
		getShrinkToFit(): boolean;
		/**
		 * スタイルで適用されるテキストの向き。
		 */
		getTextOrientation(): number;
		/**
		 * スタイルの垂直方向の配置を指定します。
		 * 詳細は「`ExcelScript.VerticalAlignment`」をご覧ください。
		 */
		getVerticalAlignment(): VerticalAlignment;
		/**
		 * オブジェクト内のExcelを折り返す値を指定します。
		 */
		getWrapText(): boolean;
		/**
		 * セル内のテキスト配置が等しい分布に設定されている場合に、テキストが自動的にインデントされる場合に指定します。
		 * @param autoIndent
		 */
		setAutoIndent(autoIndent: boolean): void;
		/**
		 * ワークシートを保護するときに数式を非表示に設定する場合に指定します。
		 * @param formulaHidden
		 */
		setFormulaHidden(formulaHidden: boolean): void;
		/**
		 * スタイルでの水平方向の配置を表します。
		 * 詳細は「`ExcelScript.HorizontalAlignment`」をご覧ください。
		 * @param horizontalAlignment
		 */
		setHorizontalAlignment(horizontalAlignment: HorizontalAlignment): void;
		/**
		 * スタイルに自動インデント、水平方向の配置、垂直方向の配置、折り返しテキスト、インデント レベル、およびテキストの向きのプロパティが含まれる場合を指定します。
		 * @param includeAlignment
		 */
		setIncludeAlignment(includeAlignment: boolean): void;
		/**
		 * スタイルに色、色インデックス、線のスタイル、太さ罫線のプロパティが含まれる場合に指定します。
		 * @param includeBorder
		 */
		setIncludeBorder(includeBorder: boolean): void;
		/**
		 * スタイルに背景、太字、色、色インデックス、フォント スタイル、斜体、名前、サイズ、取り消し線、下付き文字、下線のフォント プロパティが含まれる場合に指定します。
		 * @param includeFont
		 */
		setIncludeFont(includeFont: boolean): void;
		/**
		 * スタイルに number format プロパティが含まれる場合に指定します。
		 * @param includeNumber
		 */
		setIncludeNumber(includeNumber: boolean): void;
		/**
		 * スタイルに色、色インデックス、負の場合は反転、パターン、パターンの色、パターンの色インデックスの内部プロパティを含む場合を指定します。
		 * @param includePatterns
		 */
		setIncludePatterns(includePatterns: boolean): void;
		/**
		 * スタイルに非表示およびロックされた保護プロパティの数式が含まれる場合に指定します。
		 * @param includeProtection
		 */
		setIncludeProtection(includeProtection: boolean): void;
		/**
		 * スタイルのインデント レベルを示す 0 から 250 の範囲内の整数。
		 * @param indentLevel
		 */
		setIndentLevel(indentLevel: number): void;
		/**
		 * ワークシートが保護されているときにオブジェクトがロックされる場合に指定します。
		 * @param locked
		 */
		setLocked(locked: boolean): void;
		/**
		 * スタイルで適用される数値形式の表示形式コード。
		 * @param numberFormat
		 */
		setNumberFormat(numberFormat: string): void;
		/**
		 * スタイルで適用される数値形式のローカライズされた表示形式コード。
		 * @param numberFormatLocal
		 */
		setNumberFormatLocal(numberFormatLocal: string): void;
		/**
		 * 範囲の境界線の色を明るくまたは暗くする倍数を指定します。
		 * 値は -1 (最も暗い) から 1 (最も明るい) の間で、元の色の場合は 0 です。
		 * 値 `null` は、罫線コレクション全体に均一な設定が設定できない場合を示します。
		 * @param rangeBorderTintAndShade
		 */
		setRangeBorderTintAndShade(rangeBorderTintAndShade: number): void;
		/**
		 * スタイルで適用される読み上げ順序。
		 * @param readingOrder
		 */
		setReadingOrder(readingOrder: ReadingOrder): void;
		/**
		 * 使用可能な列の幅に収まるテキストを自動的に縮小する場合に指定します。
		 * @param shrinkToFit
		 */
		setShrinkToFit(shrinkToFit: boolean): void;
		/**
		 * スタイルで適用されるテキストの向き。
		 * @param textOrientation
		 */
		setTextOrientation(textOrientation: number): void;
		/**
		 * スタイルの垂直方向の配置を指定します。
		 * 詳細は「`ExcelScript.VerticalAlignment`」をご覧ください。
		 * @param verticalAlignment
		 */
		setVerticalAlignment(verticalAlignment: VerticalAlignment): void;
		/**
		 * オブジェクト内のExcelを折り返す値を指定します。
		 * @param wrapText
		 */
		setWrapText(wrapText: boolean): void;
	}
}
