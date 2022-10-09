declare namespace ExcelScript {
	/**
	 * Range オブジェクトの背景を表します。
	 * @see [ExcelScript.RangeFill interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.rangefill?view=office-scripts)
	 */
	export interface RangeFill {
		/**
		 * 範囲の背景をリセットします。
		 */
		clear(): void;
		/**
		 * 背景の #色を表す HTML カラー コード(RRGGBB 形式 ("FFA500"など)、または名前付き HTML 色 ("orange"など)
		 */
		getColor(): string;
		/**
		 * 範囲のパターン。
		 * 詳細は「`ExcelScript.FillPattern`」をご覧ください。
		 * LinearGradient と RectangularGradient はサポートされていません。
		 * 値 `null` は、範囲全体に均一なパターン設定が設定できない場合を示します。
		 */
		getPattern(): FillPattern;
		/**
		 * 範囲パターンの #色を表す HTML カラー コードは、RRGGBB 形式 ("FFA500"など)、または名前付き HTML 色 ("オレンジ色" など) として表されます。
		 */
		getPatternColor(): string;
		/**
		 * 範囲塗りつぶしのパターンの色を明るくまたは暗くする倍数を指定します。
		 * 値は -1 (最も暗い) から 1 (最も明るい) の間で、元の色の場合は 0 です。
		 * 値 `null` は、範囲に一様な設定が含めなかった場合を示 `patternTintAndShade` します。
		 */
		getPatternTintAndShade(): number;
		/**
		 * 範囲塗りつぶしの色を明るくまたは暗くする倍数を指定します。
		 * 値は -1 (最も暗い) から 1 (最も明るい) の間で、元の色の場合は 0 です。
		 * 値 `null` は、範囲に一様な設定が含めなかった場合を示 `tintAndShade` します。
		 */
		getTintAndShade(): number;
		/**
		 * 背景の #色を表す HTML カラー コード(RRGGBB 形式 ("FFA500"など)、または名前付き HTML 色 ("orange"など)
		 * @param color 
		 */
		setColor(color: string): void;
		/**
		 * 範囲のパターン。
		 * 詳細は「`ExcelScript.FillPattern`」をご覧ください。
		 * LinearGradient と RectangularGradient はサポートされていません。
		 * 値 `null` は、範囲全体に均一なパターン設定が設定できない場合を示します。
		 * @param pattern 
		 */
		setPattern(pattern: FillPattern): void;
		/**
		 * 範囲パターンの #色を表す HTML カラー コードは、RRGGBB 形式 ("FFA500"など)、または名前付き HTML 色 ("オレンジ色" など) として表されます。
		 * @param patternColor
		 */
		setPatternColor(patternColor: string): void;
		/**
		 * 範囲塗りつぶしのパターンの色を明るくまたは暗くする倍数を指定します。
		 * 値は -1 (最も暗い) から 1 (最も明るい) の間で、元の色の場合は 0 です。
		 * 値 `null` は、範囲に一様な設定が含めなかった場合を示 `patternTintAndShade` します。
		 * @param patternTintAndShade 
		 */
		setPatternTintAndShade(patternTintAndShade: number): void;
		/**
		 * 範囲塗りつぶしの色を明るくまたは暗くする倍数を指定します。
		 * 値は -1 (最も暗い) から 1 (最も明るい) の間で、元の色の場合は 0 です。
		 * 値 `null` は、範囲に一様な設定が含めなかった場合を示 `tintAndShade` します。
		 * @param tintAndShade 
		 */
		setTintAndShade(tintAndShade: number): void;
	}
}