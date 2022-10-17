declare namespace ExcelScript {
	/**
	 * データ バーの負の側の条件付き書式を表します。
	 * @see [ExcelScript.ConditionalDataBarNegativeFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionaldatabarnegativeformat?view=office-scripts)
	 */
	export interface ConditionalDataBarNegativeFormat {
		/**
		 * RRGGBB 形式 ("FFA500" など) の境界線の色を表す HTML カラー コード、または名前付き HTML 色 ("オレンジ色" など) を表 # します。
		 * 罫線が存在しない場合、または設定されている場合、値は "" (空の文字列) です。
		 */
		getBorderColor(): string;
		/**
		 * 塗りつぶしの色を表す HTML カラー コード # (RRGGBB 形式 ("FFA500" など)、または名前付き HTML 色 ("オレンジ色" など) として指定します。
		 */
		getFillColor(): string;
		/**
		 * 負のデータ バーが正のデータ バーと同じ罫線の色を持っている場合に指定します。
		 */
		getMatchPositiveBorderColor(): boolean;
		/**
		 * 負のデータ バーが正のデータ バーと同じ塗りつぶし色を持つ場合に指定します。
		 */
		getMatchPositiveFillColor(): boolean;
		/**
		 * RRGGBB 形式 ("FFA500" など) の境界線の色を表す HTML カラー コード、または名前付き HTML 色 ("オレンジ色" など) を表 # します。
		 * 罫線が存在しない場合、または設定されている場合、値は "" (空の文字列) です。
		 * @param borderColor
		 */
		setBorderColor(borderColor: string): void;
		/**
		 * 塗りつぶしの色を表す HTML カラー コード # (RRGGBB 形式 ("FFA500" など)、または名前付き HTML 色 ("オレンジ色" など) として指定します。
		 * @param fillColor
		 */
		setFillColor(fillColor: string): void;
		/**
		 * 負のデータ バーが正のデータ バーと同じ罫線の色を持っている場合に指定します。
		 * @param matchPositiveBorderColor
		 */
		setMatchPositiveBorderColor(matchPositiveBorderColor: boolean): void;
		/**
		 * 負のデータ バーが正のデータ バーと同じ塗りつぶし色を持つ場合に指定します。
		 * @param matchPositiveFillColor
		 */
		setMatchPositiveFillColor(matchPositiveFillColor: boolean): void;
	}
}
