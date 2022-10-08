declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.ChartAxisDisplayUnit enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartaxisdisplayunit?view=office-scripts)
	 */
	export enum ChartAxisDisplayUnit {
		/**
		 * これにより、軸は数十億単位で設定されます。
		 */
		billions,
		/**
		 * これにより、軸がユーザー設定値の単位で設定されます。
		 */
		custom,
		/**
		 * これにより、軸は数億単位で設定されます。
		 */
		hundredMillions,
		/**
		 * これにより、軸は数百単位で設定されます。
		 */
		hundreds,
		/**
		 * これにより、軸は数十万単位で設定されます。
		 */
		hundredThousands,
		/**
		 * これにより、軸は数百万単位で設定されます。
		 */
		millions,
		/**
		 * 既定のオプション。 これにより、表示単位が軸にリセットされ、単位ラベルが非表示に設定されます。
		 */
		none,
		/**
		 * これにより、軸は数千万単位で設定されます。
		 */
		tenMillions,
		/**
		 * これにより、軸は数万単位で設定されます。
		 */
		tenThousands,
		/**
		 * これにより、軸が数千単位で設定されます。
		 */
		thousands,
		/**
		 * これにより、軸は 1 兆単位で設定されます。
		 */
		trillions
	}
}