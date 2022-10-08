/// <reference path="../enums/CalculationMode.d.ts" />
/// <reference path="../enums/CalculationType.d.ts" />
/// <reference path="../enums/CalculationState.d.ts" />
/// <reference path="./CultureInfo.d.ts" />
/// <reference path="./IterativeCalculation.d.ts" />
declare namespace ExcelScript {
	/**
	 * ブックを管理する Excel アプリケーションを表します。
	 * @see [ExcelScript.Application interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.application?view=office-scripts)
	 */
	export interface Application {
		/**
		 * Excel で現在開いているすべてのブックを再計算します。
		 * @param calculationType 使用する計算の種類を指定します。 詳細は「`ExcelScript.CalculationType`」をご覧ください。
		 */
		calculate(calculationType: CalculationType): void;
		/**
		 * 最後の完全な再計算に使用した Excel 計算エンジンのバージョンを返します。
		 */
		getCalculationEngineVersion(): number;
		/**
		 * ブック内の定数で定義されている計算モードを返します。
		 * `ExcelScript.CalculationMode` 指定できる値は次のとおりです。
		 * `Automatic`、ここで、Excel再計算を制御します。
		 * `AutomaticExceptTables`で、Excel再計算を制御しますが、テーブルの変更は無視されます。
		 * `Manual`で、ユーザーが要求した場合に計算が行われます。
		 */
		getCalculationMode(): CalculationMode;
		/**
		 * アプリケーションの計算の状態を返します。
		 * 詳細は「`ExcelScript.CalculationState`」をご覧ください。
		 */
		getCalculationState(): CalculationState;
		/**
		 * 現在のシステム カルチャ設定に基づく情報を提供します。
		 * これには、カルチャ名、数値の書式設定、その他の文化的に依存する設定が含まれます。
		 */
		getCultureInfo(): CultureInfo;
		/**
		 * 数値の小数点として使用される文字列を取得します。
		 * これは、ローカル の設定に基Excelです。
		 */
		getDecimalSeparator(): string;
		/**
		 * 反復計算の設定を返します。
		 * [Excel Mac Windowsでは、設定はアプリケーションアプリケーションにExcelされます。
		 * このExcel on the webプラットフォームでは、設定はアクティブなブックに適用されます。
		 */
		getIterativeCalculation(): IterativeCalculation;
		/**
		 * 数値の 10 進数の左側に数字のグループを区切る文字列を取得します。
		 * これは、ローカル の設定に基Excelです。
		 */
		getThousandsSeparator(): string;
		/**
		 * ユーザーのシステム区切り記号が有効Excel指定します。
		 * システムの区切り記号には、小数点と桁区切り記号が含まれます。
		 */
		getUseSystemSeparators(): boolean;
		/**
		 * ブック内の定数で定義されている計算モードを返します。
		 * `ExcelScript.CalculationMode`. 指定できる値は次のとおりです。
		 * - `Automatic`、ここで、Excel再計算を制御します
		 * - `AutomaticExceptTables`で、Excel再計算を制御しますが、テーブルの変更は無視されます。
		 * - `Manual`で、ユーザーが要求した場合に計算が行われます。
		 * @param calculationMode 
		 */
		setCalculationMode(calculationMode: CalculationMode): void;
	}
}