/// <reference path="../enums/IconSet.d.ts" />
/// <reference path="./ConditionalIconCriterion.d.ts" />
declare namespace ExcelScript {
	/**
	 * 条件付き書式のアイコン セット条件を表します。
	 * @see [ExcelScript.IconSetConditionalFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.iconsetconditionalformat?view=office-scripts)
	 */
	export interface IconSetConditionalFormat {
		/**
		 * ルールの条件とアイコン セットの配列と、条件付きアイコンの潜在的なカスタム アイコン。
		 * 最初の条件では、カスタム アイコンのみを変更できます。
		 * 一方、型、数式、演算子は設定時に無視されます。
		 */
		getCriteria(): ConditionalIconCriterion[];
		/**
		 * もし `true`をクリックすると、アイコン セットのアイコンの順序が反転します。
		 * カスタム アイコンを使用する場合は、これを設定できないことに注意してください。
		 */
		getReverseIconOrder(): boolean;
		/**
		 * もし `true`、値を非表示にし、アイコンのみを表示します。
		 */
		getShowIconOnly(): boolean;
		/**
		 * 設定されている場合は、条件付き書式のアイコン セット オプションを表示します。
		 */
		getStyle(): IconSet;
		/**
		 * ルールの条件とアイコン セットの配列と、条件付きアイコンの潜在的なカスタム アイコン。
		 * 最初の条件では、カスタム アイコンのみを変更できます。
		 * 一方、型、数式、演算子は設定時に無視されます。
		 * @param criteria
		 */
		setCriteria(criteria: ConditionalIconCriterion[]): void;
		/**
		 * もし trueをクリックすると、アイコン セットのアイコンの順序が反転します。
		 * カスタム アイコンを使用する場合は、これを設定できないことに注意してください。
		 * @param reverseIconOrder
		 */
		setReverseIconOrder(reverseIconOrder: boolean): void;
		/**
		 * もし `true`、値を非表示にし、アイコンのみを表示します。
		 * @param showIconOnly
		 */
		setShowIconOnly(showIconOnly: boolean): void;
		/**
		 * 設定されている場合は、条件付き書式のアイコン セット オプションを表示します。
		 * @param style
		 */
		setStyle(style: IconSet): void;
	}
}
