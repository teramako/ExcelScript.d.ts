/// <reference path="../enums/ConditionalDataBarAxisFormat.d.ts" />
/// <reference path="../enums/ConditionalDataBarDirection.d.ts" />
/// <reference path="./ConditionalDataBarRule.d.ts" />
/// <reference path="./ConditionalDataBarNegativeFormat.d.ts" />
/// <reference path="./ConditionalDataBarPositiveFormat.d.ts" />
declare namespace ExcelScript {
	/**
	 * 条件付きデータ Excelの種類を表します。
	 * @see [ExcelScript.DataBarConditionalFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.databarconditionalformat?view=office-scripts)
	 */
	export interface DataBarConditionalFormat {
		/**
		 * 軸線の色 # 、RRGGBB 形式 ("FFA500" など) を表す HTML カラー コード、または名前付き HTML 色 ("オレンジ色" など) を表します。
		 * 軸が存在しない場合、または設定されている場合、値は "" (空の文字列) です。
		 */
		getAxisColor(): string;
		/**
		 * データ バーに対して軸がどのように決定Excel表現します。
		 */
		getAxisFormat(): ConditionalDataBarAxisFormat;
		/**
		 * データ バー グラフィックの基になる方向を指定します。
		 */
		getBarDirection(): ConditionalDataBarDirection;
		/**
		 * データ バーの下限値 (および該当する場合はその計算方法) を構成するルール。
		 * オブジェクト `ConditionalDataBarRule` は JSON オブジェクトとして設定する必要があります
		 * (代 `x.lowerBoundRule = {...}` わりに `x.lowerBoundRule.formula = ...`).
		 */
		getLowerBoundRule(): ConditionalDataBarRule;
		/**
		 * データ バー内の軸の左側のすべての値Excel表現します。
		 */
		getNegativeFormat(): ConditionalDataBarNegativeFormat;
		/**
		 * データ バー内の軸の右側のすべての値Excel表示します。
		 */
		getPositiveFormat(): ConditionalDataBarPositiveFormat;
		/**
		 * もし `true`をクリックすると、データ バーが適用されているセルの値が非表示になります。
		 */
		getShowDataBarOnly(): boolean;
		/**
		 * データ バーの上限値 (および該当する場合はその計算方法) を構成するルール。
		 * オブジェクト `ConditionalDataBarRule` は JSON オブジェクトとして設定する必要があります
		 * (代 `x.upperBoundRule = {...}` わりに `x.upperBoundRule.formula = ...`).
		 */
		getUpperBoundRule(): ConditionalDataBarRule;
		/**
		 * 軸線の色 # 、RRGGBB 形式 ("FFA500" など) を表す HTML カラー コード、または名前付き HTML 色 ("オレンジ色" など) を表します。
		 * 軸が存在しない場合、または設定されている場合、値は "" (空の文字列) です。
		 * @param axisColor
		 */
		setAxisColor(axisColor: string): void;
		/**
		 * データ バーに対して軸がどのように決定Excel表現します。
		 * @param axisFormat
		 */
		setAxisFormat(axisFormat: ConditionalDataBarAxisFormat): void;
		/**
		 * データ バー グラフィックの基になる方向を指定します。
		 * @param barDirection
		 */
		setBarDirection(barDirection: ConditionalDataBarDirection): void;
		/**
		 * データ バーの下限値 (および該当する場合はその計算方法) を構成するルール。
		 * オブジェクト `ConditionalDataBarRule` は JSON オブジェクトとして設定する必要があります
		 * (代 `x.lowerBoundRule = {...}` わりに `x.lowerBoundRule.formula = ...`).
		 * @param lowerBoundRule
		 */
		setLowerBoundRule(lowerBoundRule: ConditionalDataBarRule): void;
		/**
		 * もし `true`をクリックすると、データ バーが適用されているセルの値が非表示になります。
		 * @param showDataBarOnly
		 */
		setShowDataBarOnly(showDataBarOnly: boolean): void;
		/**
		 * データ バーの上限値 (および該当する場合はその計算方法) を構成するルール。
		 * オブジェクト `ConditionalDataBarRule` は JSON オブジェクトとして設定する必要があります
		 * (代 `x.upperBoundRule = {...}` わりに `x.upperBoundRule.formula = ...`).
		 * @param upperBoundRule
		 */
		setUpperBoundRule(upperBoundRule: ConditionalDataBarRule): void;
	}
}
