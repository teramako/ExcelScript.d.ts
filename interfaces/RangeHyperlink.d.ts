declare namespace ExcelScript {
	/**
	 * ハイパーリンク (XHL) オブジェクトを取得/設定するために必要な文字列を表します。
	 * @see [ExcelScript.RangeHyperlink interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.rangehyperlink?view=office-scripts)
	 */
	export interface RangeHyperlink {
		/**
		 * ハイパーリンクの URL ターゲットを表します。
		 */
		address?: string;
		/**
		 * ハイパーリンクのドキュメント参照ターゲットを表します。
		 */
		documentReference?: string;
		/**
		 * ハイパーリンクの上にカーソルを合わせると表示される文字列を表します。
		 */
		screenTip?: string;
		/**
		 * 該当する範囲内の左上端のセルに表示される文字列を表します。
		 */
		textToDisplay?: string;
	}
}