declare namespace ExcelScript {
	/**
	 * 範囲のフォント、塗りつぶし、境界線、配置などのプロパティをカプセル化する、書式設定オブジェクトです。
	 */
	export interface RangeFormat {
		/**
		 * 範囲の書式設定のインデントを調整します。 インデント値の範囲は 0 ~ 250 で、文字単位で測定されます。
		 * @param amount 現在のインデントを調整する文字スペースの数。
		 * この値は-250 から 250 の間である必要があります。
		 *
		 * 注: この量でインデント レベルが 250 を超える場合、インデント レベルは 250 のままになります。
		 * 同様に、インデント レベルが 0 より下の場合、インデント レベルは 0 のままになります。
		 */
		adjustIndent(amount: number): void;
		/**
		 * 現在の列のデータに基づいて、現在の範囲の列の幅を最適な幅に変更します。
		 */
		autofitColumns(): void;
		/**
		 * 現在の行のデータに基づいて、現在の範囲の行の高さを最適な高さに変更します。
		 */
		autofitRows(): void;
		/**
		 * テキストの配置が等しい分布に設定されている場合に、テキストが自動的にインデントされるかどうかを指定します。
		 */
		getAutoIndent(): boolean;
		/**
		 * 選択した範囲全体に適用する境界線オブジェクトのコレクション。
		 */
		getBorders(): RangeBorder[];
		/**
		 * 範囲内のすべての列の幅を指定します。
		 * 列の幅が一様でない場合は、 `null` 返されます。
		 */
		getColumnWidth(): number;
		/**
		 * 範囲全体に定義された塗りつぶしオブジェクトを返します。
		 */
		getFill(): RangeFill;
		/**
		 * 範囲全体に定義されたフォント オブジェクトを返します。
		 */
		getFont(): RangeFont;
		/**
		 * 指定したオブジェクトの水平方向の配置を表します。
		 * 詳細は「`ExcelScript.HorizontalAlignment`」をご覧ください。
		 */
		getHorizontalAlignment(): HorizontalAlignment;
		/**
		 * インデント レベルを示す 0 から 250 までの整数。
		 */
		getIndentLevel(): number;
		/**
		 * 範囲に対する書式保護オブジェクトを返します。
		 */
		getProtection(): FormatProtection;
		/**
		 * オブジェクトの名前を使用して、境界線オブジェクトを取得します。
		 * @param index 取得する罫線オブジェクトのインデックス値。
		 * 詳細は「`ExcelScript.BorderIndex`」をご覧ください。
		 */
		getRangeBorder(index: BorderIndex): RangeBorder;
		/**
		 * 範囲の罫線の色を明るくまたは暗くする double を指定します。
		 * 値は -1 (最も濃い) から 1 (最も明るい) の間で、元の色は 0 です。
		 * 値は null 、罫線コレクション全体に均一 `tintAndShade` な設定がないことを示します。
		 */
		getRangeBorderTintAndShade(): number;
		/**
		 * 範囲に適用される読み上げ順序。
		 */
		getReadingOrder(): ReadingOrder;
		/**
		 * 範囲内のすべての行の高さ。 行の高さが一様でない場合は、 `null` 返されます。
		 */
		getRowHeight(): number;
		/**
		 * 使用可能な列の幅に収まるようにテキストが自動的に縮小されるかどうかを指定します。
		 */
		getShrinkToFit(): boolean;
		/**
		 * 範囲内のすべてのセルのテキストの向き。
		 * テキストの向きは、-90 ~ 90 の整数、または垂直方向のテキストの場合は 180 です。
		 * 範囲内の向きが一様でない場合は、 `null` 返されます。
		 */
		getTextOrientation(): number;
		/**
		 * オブジェクトの行の高さがシートの `Range` 標準の高さと等しいかどうかを判断します。
		 * オブジェクトの `true` 行の高さがシートの `Range` 標準の高さと等しい場合に返されます。
		 * `null`範囲に複数の行が含まれていて、行がすべて同じ高さではない場合に返されます。 それ以外の場合は返します `false` 。
		 *
		 * 注: このプロパティは、次のように設定することのみを目的としています。 `true`. これを設定しても `false` 効果はありません。
		 */
		getUseStandardHeight(): boolean;
		/**
		 * オブジェクトの列幅がシートの `Range` 標準幅と等しいかどうかを指定します。
		 * オブジェクトの `true` 列の幅がシートの `Range` 標準幅と等しい場合に返されます。
		 * 範囲に複数の `null` 列が含まれていて、列がすべて同じ高さではない場合に返されます。
		 * それ以外の場合は返します `false` 。
		 *
		 * 注: このプロパティは、次のように設定することのみを目的としています。 `true`. これを設定しても `false` 効果はありません。
		 */
		getUseStandardWidth(): boolean;
		/**
		 * 指定したオブジェクトの垂直方向の配置を表します。
		 * 詳細は「`ExcelScript.VerticalAlignment`」をご覧ください。
		 */
		getVerticalAlignment(): VerticalAlignment;
		/**
		 * Excel がオブジェクト内のテキストをラップするかどうかを指定します。
		 * 値は `null` 、範囲全体に均一なラップ設定がないことを示します
		 */
		getWrapText(): boolean;
		/**
		 * テキストの配置が等しい分布に設定されている場合に、テキストが自動的にインデントされるかどうかを指定します。
		 * @param autoIndent
		 */
		setAutoIndent(autoIndent: boolean): void;
		/**
		 * 範囲内のすべての列の幅を指定します。
		 * 列の幅が一様でない場合は、 `null` 返されます。
		 * @param columnWidth
		 */
		setColumnWidth(columnWidth: number): void;
		/**
		 * 指定したオブジェクトの水平方向の配置を表します。
		 * 詳細は「`ExcelScript.HorizontalAlignment`」をご覧ください。
		 * @param horizontalAlignment
		 */
		setHorizontalAlignment(horizontalAlignment: HorizontalAlignment): void;
		/**
		 * インデント レベルを示す 0 から 250 までの整数。
		 * @param indentLevel
		 */
		setIndentLevel(indentLevel: number): void;
		/**
		 * 範囲の罫線の色を明るくまたは暗くする double を指定します。
		 * 値は -1 (最も濃い) から 1 (最も明るい) の間で、元の色は 0 です。
		 * 値は `null` 、罫線コレクション全体に均一 `tintAndShade` な設定がないことを示します。
		 * @param rangeBorderTintAndShade
		 */
		setRangeBorderTintAndShade(rangeBorderTintAndShade: number): void;
		/**
		 * 範囲に適用される読み上げ順序。
		 * @param readingOrder
		 */
		setReadingOrder(readingOrder: ReadingOrder): void;
		/**
		 * 範囲内のすべての行の高さ。 行の高さが一様でない場合は、 `null` 返されます。
		 * @param rowHeight
		 */
		setRowHeight(rowHeight: number): void;
		/**
		 * 使用可能な列の幅に収まるようにテキストが自動的に縮小されるかどうかを指定します。
		 * @param shrinkToFit
		 */
		setShrinkToFit(shrinkToFit: boolean): void;
		/**
		 * 範囲内のすべてのセルのテキストの向き。
		 * テキストの向きは、-90 ~ 90 の整数、または垂直方向のテキストの場合は 180 です。
		 * 範囲内の向きが一様でない場合は、 `null` 返されます。
		 * @param textOrientation
		 */
		setTextOrientation(textOrientation: number): void;
		/**
		 * オブジェクトの行の高さがシートの `Range` 標準の高さと等しいかどうかを判断します。
		 * オブジェクトの `true` 行の高さがシートの `Range` 標準の高さと等しい場合に返されます。
		 * `null`範囲に複数の行が含まれていて、行がすべて同じ高さではない場合に返されます。
		 * それ以外の場合は返します `false` 。
		 *
		 * 注: このプロパティは、次のように設定することのみを目的としています。 `true`. これを設定しても `false` 効果はありません。
		 * @param useStandardHeight
		 */
		setUseStandardHeight(useStandardHeight: boolean): void;
		/**
		 * オブジェクトの列幅がシートの `Range` 標準幅と等しいかどうかを指定します。
		 * オブジェクトの `true` 列の幅がシートの `Range` 標準幅と等しい場合に返されます。
		 * 範囲に複数の `null` 列が含まれていて、列がすべて同じ高さではない場合に返されます。
		 * それ以外の場合は返します `false` 。
		 *
		 * 注: このプロパティは、次のように設定することのみを目的としています。 `true`. これを設定しても `false` 効果はありません。
		 * @param useStandardWidth
		 */
		setUseStandardWidth(useStandardWidth: boolean): void;
		/**
		 * 指定したオブジェクトの垂直方向の配置を表します。
		 * 詳細は「`ExcelScript.VerticalAlignment`」をご覧ください。
		 * @param verticalAlignment
		 */
		setVerticalAlignment(verticalAlignment: VerticalAlignment): void;
		/**
		 * Excel がオブジェクト内のテキストをラップするかどうかを指定します。
		 * 値は `null` 、範囲全体に均一なラップ設定がないことを示します
		 * @param wrapText
		 */
		setWrapText(wrapText: boolean): void;
	}
}
