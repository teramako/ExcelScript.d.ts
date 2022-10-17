declare namespace ExcelScript {
	/**
	 * データ バーの正側の条件付き書式を表します。
	 * @see [ExcelScript.ConditionalDataBarPositiveFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionaldatabarpositiveformat?view=office-scripts)
	 */
	export interface ConditionalDataBarPositiveFormat {
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
		 * データ バーにグラデーションが設定されている場合に指定します。
		 */
		getGradientFill(): boolean;
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
		 * データ バーにグラデーションが設定されている場合に指定します。
		 * @param gradientFill
		 */
		setGradientFill(gradientFill: boolean): void;
	}
}
