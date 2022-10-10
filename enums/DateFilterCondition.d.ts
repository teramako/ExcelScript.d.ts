declare namespace ExcelScript {
	/**
	 * 日付フィルターを適用できる、受け入れられたすべての条件を表す列挙型。
	 * フィールドに適用される PivotFilter の種類を構成するために使用します。
	 * @see [ExcelScript.DateFilterCondition enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.datefiltercondition?view=office-scripts)
	 */
	export enum DateFilterCondition {
		/**
		 * 日付は比較日の後です。
		 * 必須条件: {`comparator`}. オプションの条件: {`wholeDays`}.
		 */
		after,
		/**
		 * 日付は比較日の後または等しくなります。
		 * 必須条件: {`comparator`}. オプションの条件: {`wholeDays`}.
		 */
		afterOrEqualTo,
		/**
		 * 日付は 4 月です。
		 */
		allDatesInPeriodApril,
		/**
		 * 日付は 8 月です。
		 */
		allDatesInPeriodAugust,
		/**
		 * 日付は 12 月です。
		 */
		allDatesInPeriodDecember,
		/**
		 * 日付は 2 月です。
		 */
		allDatesInPeriodFebruary,
		/**
		 * 日付は 1 月です。
		 */
		allDatesInPeriodJanuary,
		/**
		 * 日付は 7 月です。
		 */
		allDatesInPeriodJuly,
		/**
		 * 日付は 6 月です。
		 */
		allDatesInPeriodJune,
		/**
		 * 日付は 3 月です。
		 */
		allDatesInPeriodMarch,
		/**
		 * 日付は 5 月です。
		 */
		allDatesInPeriodMay,
		/**
		 * 日付は 11 月です。
		 */
		allDatesInPeriodNovember,
		/**
		 * 日付は 10 月です。
		 */
		allDatesInPeriodOctober,
		/**
		 * 日付は四半期 1 です。
		 */
		allDatesInPeriodQuarter1,
		/**
		 * 日付は四半期 2 です。
		 */
		allDatesInPeriodQuarter2,
		/**
		 * 日付は四半期 3 日です。
		 */
		allDatesInPeriodQuarter3,
		/**
		 * 日付は四半期 4 日です。
		 */
		allDatesInPeriodQuarter4,
		/**
		 * 日付は 9 月です。
		 */
		allDatesInPeriodSeptember,
		/**
		 * 日付は比較日の前です。
		 * 必須条件: {`comparator`}. オプションの条件: {`wholeDays`}.
		 */
		before,
		/**
		 * 日付は比較日の前か等しいかです。
		 * 必須条件: {`comparator`}. オプションの条件: {`wholeDays`}.
		 */
		beforeOrEqualTo,
		/**
		 * 間 lowerBound と upperBound 日付。
		 * 必須条件: {`lowerBound`, `upperBound`}. オプションの条件: {`wholeDays`, `exclusive`}.
		 */
		between,
		/**
		 * 比較条件に等しい。
		 * 必須条件: {`comparator`}. オプションの条件: {`wholeDays`, `exclusive`}.
		 */
		equals,
		/**
		 * 日付は先月です。
		 */
		lastMonth,
		/**
		 * 日付は最終四半期です。
		 */
		lastQuarter,
		/**
		 * 日付は先週です。
		 */
		lastWeek,
		/**
		 * 日付は昨年です。
		 */
		lastYear,
		/**
		 * 日付は来月です。
		 */
		nextMonth,
		/**
		 * 日付は次の四半期です。
		 */
		nextQuarter,
		/**
		 * 日付は来週です。
		 */
		nextWeek,
		/**
		 * 日付は来年です。
		 */
		nextYear,
		/**
		 * 日付は今月です。
		 */
		thisMonth,
		/**
		 * 日付はこの四半期です。
		 */
		thisQuarter,
		/**
		 * 日付は今週です。
		 */
		thisWeek,
		/**
		 * 日付は今年です。
		 */
		thisYear,
		/**
		 * 日付は今日です。
		 */
		today,
		/**
		 * 日付は明日です。
		 */
		tomorrow,
		/**
		 * `DateFilterCondition` が不明であるか、サポートされていません。
		 */
		unknown,
		/**
		 * 日付は同じ年の日付です。
		 */
		yearToDate,
		/**
		 * 日付は昨日です。
		 */
		yesterday,
	}
}
