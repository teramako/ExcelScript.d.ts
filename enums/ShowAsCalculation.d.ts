declare namespace ExcelScript {
	/**
	 * DataPivotField の ShowAs 計算列挙体。
	 * @see [ExcelScript.ShowAsCalculation enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.showascalculation?view=office-scripts)
	 */
	export enum ShowAsCalculation {
		/**
		 * 指定した基準フィールドと基準項目との違い。
		 */
		differenceFrom,
		/**
		 * 次のように値を計算します: ((セルの値) x (総計) / (Grand Row Total) x (Grand Column Total))
		 */
		index,
		/**
		 * 計算は適用されません。
		 */
		none,
		/**
		 * 指定した基準フィールドと基準項目との違い。
		 */
		percentDifferenceFrom,
		/**
		 * 指定した基準フィールドと基準項目の割合。
		 */
		percentOf,
		/**
		 * 列の合計の割合。
		 */
		percentOfColumnTotal,
		/**
		 * 総計のパーセント。
		 */
		percentOfGrandTotal,
		/**
		 * 指定した基準フィールドの列合計の割合。
		 */
		percentOfParentColumnTotal,
		/**
		 * 指定した基準フィールドの行合計の割合。
		 */
		percentOfParentRowTotal,
		/**
		 * 指定した基準フィールドの総計の割合。
		 */
		percentOfParentTotal,
		/**
		 * 行の合計の割合。
		 */
		percentOfRowTotal,
		/**
		 * 指定した基準フィールドの実行率の合計。
		 */
		percentRunningTotal,
		/**
		 * 指定した基準フィールドの昇順ランク。
		 */
		rankAscending,
		/**
		 * 指定した基準フィールドの降順ランク。
		 */
		rankDecending,
		/**
		 * 指定した基準フィールドの合計を実行しています。
		 */
		runningTotal,
		/**
		 * 計算が不明であるか、サポートされていません。
		 */
		unknown,
	}
}
