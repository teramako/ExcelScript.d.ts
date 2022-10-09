declare namespace ExcelScript {
	/**
	 * 図形オブジェクトのテキスト フレームを表します。
	 * @see [ExcelScript.TextFrame interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.textframe?view=office-scripts)
	 */
	export interface TextFrame {
		/**
		 * テキスト フレーム内のテキストをすべて削除します。
		 */
		deleteText(): void;
		/**
		 * テキスト フレームの自動サイズ設定。
		 * テキストをテキスト フレームに自動的に合わせる、
		 * テキスト フレームをテキストに自動的に合わせる、
		 * 自動サイズ変更を行わない、
		 * のいずれかにテキスト フレームを設定できます。
		 */
		getAutoSizeSetting(): ShapeAutoSize;
		/**
		 * テキスト フレームの下余白を表します (ポイント数)。
		 */
		getBottomMargin(): number;
		/**
		 * テキスト フレームにテキストが含まれている場合に指定します。
		 */
		getHasText(): boolean;
		/**
		 * テキスト フレームの水平方向の配置を表します。
		 * 詳細は「`ExcelScript.ShapeTextHorizontalAlignment`」をご覧ください。
		 */
		getHorizontalAlignment(): ShapeTextHorizontalAlignment;
		/**
		 * テキスト フレームの水平方向のオーバーフローの動作を表します。
		 * 詳細は「`ExcelScript.ShapeTextHorizontalOverflow`」をご覧ください。
		 */
		getHorizontalOverflow(): ShapeTextHorizontalOverflow;
		/**
		 * テキスト フレームの左余白を表します (ポイント数)。
		 */
		getLeftMargin(): number;
		/**
		 * テキスト フレームの方向を指定する角度を表します。
		 * 詳細は「`ExcelScript.ShapeTextOrientation`」をご覧ください。
		 */
		getOrientation(): ShapeTextOrientation;
		/**
		 * テキスト フレームの読む方向を表します (左から右または右から左)。
		 * 詳細は「`ExcelScript.ShapeTextReadingOrder`」をご覧ください。
		 */
		getReadingOrder(): ShapeTextReadingOrder;
		/**
		 * テキスト フレームの右余白を表します (ポイント数)。
		 */
		getRightMargin(): number;
		/**
		 * テキスト フレーム内の図形にアタッチされているテキスト、およびテキストを操作するためのプロパティとメソッドを表します。
		 * 詳細は「`ExcelScript.TextRange`」をご覧ください。
		 */
		getTextRange(): TextRange;
		/**
		 * テキスト フレームの上余白を表します (ポイント数)。
		 */
		getTopMargin(): number;
		/**
		 * テキスト フレームの垂直方向の配置を表します。
		 * 詳細は「`ExcelScript.ShapeTextVerticalAlignment`」をご覧ください。
		 */
		getVerticalAlignment(): ShapeTextVerticalAlignment;
		/**
		 * テキスト フレームの垂直方向のオーバーフローの動作を表します。
		 * 詳細は「`ExcelScript.ShapeTextVerticalOverflow`」をご覧ください。
		 */
		getVerticalOverflow(): ShapeTextVerticalOverflow;
		/**
		 * テキスト フレームの自動サイズ設定。
		 * テキストをテキスト フレームに自動的に合わせる、
		 * テキスト フレームをテキストに自動的に合わせる、
		 * 自動サイズ変更を行わない、
		 * のいずれかにテキスト フレームを設定できます。
		 * @param autoSizeSetting 
		 */
		setAutoSizeSetting(autoSizeSetting: ShapeAutoSize): void;
		/**
		 * テキスト フレームの下余白を表します (ポイント数)。
		 * @param bottomMargin 
		 */
		setBottomMargin(bottomMargin: number): void;
		/**
		 * テキスト フレームの水平方向の配置を表します。
		 * 詳細は「`ExcelScript.ShapeTextHorizontalAlignment`」をご覧ください。
		 * @param horizontalAlignment 
		 */
		setHorizontalAlignment(horizontalAlignment: ShapeTextHorizontalAlignment): void;
		/**
		 * テキスト フレームの水平方向のオーバーフローの動作を表します。
		 * 詳細は「`ExcelScript.ShapeTextHorizontalOverflow`」をご覧ください。
		 * @param horizontalOverflow 
		 */
		setHorizontalOverflow(horizontalOverflow: ShapeTextHorizontalOverflow): void;
		/**
		 * テキスト フレームの左余白を表します (ポイント数)。
		 * @param leftMargin 
		 */
		setLeftMargin(leftMargin: number): void;
		/**
		 * テキスト フレームの方向を指定する角度を表します。
		 * 詳細は「`ExcelScript.ShapeTextOrientation`」をご覧ください。
		 * @param orientation 
		 */
		setOrientation(orientation: ShapeTextOrientation): void;
		/**
		 * テキスト フレームの読む方向を表します (左から右または右から左)。
		 * 詳細は「`ExcelScript.ShapeTextReadingOrder`」をご覧ください。
		 * @param readingOrder 
		 */
		setReadingOrder(readingOrder: ShapeTextReadingOrder): void;
		/**
		 * テキスト フレームの右余白を表します (ポイント数)。
		 * @param rightMargin 
		 */
		setRightMargin(rightMargin: number): void;
		/**
		 * テキスト フレームの上余白を表します (ポイント数)。
		 * @param topMargin 
		 */
		setTopMargin(topMargin: number): void;
		/**
		 * テキスト フレームの垂直方向の配置を表します。
		 * 詳細は「`ExcelScript.ShapeTextVerticalAlignment`」をご覧ください。
		 * @param verticalAlignment 
		 */
		setVerticalAlignment(verticalAlignment: ShapeTextVerticalAlignment): void;
		/**
		 * テキスト フレームの垂直方向のオーバーフローの動作を表します。
		 * 詳細は「`ExcelScript.ShapeTextVerticalOverflow`」をご覧ください。
		 * @param verticalOverflow 
		 */
		setVerticalOverflow(verticalOverflow: ShapeTextVerticalOverflow): void;
	}
}