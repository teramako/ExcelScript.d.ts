declare namespace ExcelScript {
	/**
	 * 事前設定された条件の条件付き書式の種類の条件を表します。
	 * @see [ExcelScript.ConditionalFormatPresetCriterion enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.conditionalformatpresetcriterion?view=office-scripts)
	 */
	export enum ConditionalFormatPresetCriterion {
		aboveAverage,
		belowAverage,
		blanks,
		duplicateValues,
		equalOrAboveAverage,
		equalOrBelowAverage,
		errors,
		invalid,
		lastMonth,
		lastSevenDays,
		lastWeek,
		nextMonth,
		nextWeek,
		nonBlanks,
		nonErrors,
		oneStdDevAboveAverage,
		oneStdDevBelowAverage,
		thisMonth,
		thisWeek,
		threeStdDevAboveAverage,
		threeStdDevBelowAverage,
		today,
		tomorrow,
		twoStdDevAboveAverage,
		twoStdDevBelowAverage,
		uniqueValues,
		yesterday
	}
}