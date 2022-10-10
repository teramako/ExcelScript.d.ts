declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.LinkedDataTypeState enum](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.linkeddatatypestate?view=office-scripts)
	 */
	export enum LinkedDataTypeState {
		brokenLinkedData,
		disambiguationNeeded,
		fetchingData,
		none,
		validLinkedData,
	}
}
