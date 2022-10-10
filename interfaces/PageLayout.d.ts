/// <reference path="../enums/PageOrientation.d.ts"/>
/// <reference path="../enums/PaperType.d.ts"/>
/// <reference path="../enums/PrintComments.d.ts"/>
/// <reference path="../enums/PrintErrorType.d.ts"/>
/// <reference path="../enums/PrintMarginUnit.d.ts"/>
/// <reference path="../enums/PrintOrder.d.ts"/>
/// <reference path="./HeaderFooterGroup.d.ts"/>
/// <reference path="./PageLayoutMarginOptions.d.ts"/>
/// <reference path="./PageLayoutZoomOptions.d.ts"/>
declare namespace ExcelScript {
	/**
	 * プリンター固有の実装に依存しないレイアウトと印刷の設定を表します。
	 * これらの設定には、余白、印刷の向き、ページ番号、タイトル行、および印刷範囲が含まれます。
	 * @see [ExcelScript.PageLayout interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.pagelayout?view=office-scripts)
	 */
	export interface PageLayout {
		/**
		 * ワークシートの白黒印刷オプション。
		 */
		getBlackAndWhite(): boolean;
		/**
		 * ポイント単位での印刷に使用するワークシートの下部ページ余白。
		 */
		getBottomMargin(): number;
		/**
		 * ワークシートの中央の水平フラグ。
		 * このフラグによって、印刷時、ワークシートのページ中央を水平に設定するかどうかが決定されます。
		 */
		getCenterHorizontally(): boolean;
		/**
		 * ワークシートの中央の垂直方向のフラグ。
		 * このフラグによって、印刷時、ワークシートのページ中央を垂直に設定するかどうかが決定されます。
		 */
		getCenterVertically(): boolean;
		/**
		 * ワークシートの下書きモード オプション。
		 * もし `true`では、シートはグラフィックスなしで印刷されます。
		 */
		getDraftMode(): boolean;
		/**
		 * 印刷するワークシートの最初のページ番号。
		 * 値は `null` "自動" ページ番号を表します。
		 */
		getFirstPageNumber(): number | "";
		/**
		 * 印刷時に使用するワークシートのフッター余白 (ポイント単位)。
		 */
		getFooterMargin(): number;
		/**
		 * 印刷時に使用するワークシートのヘッダー余白 (ポイント単位)。
		 */
		getHeaderMargin(): number;
		/**
		 * ワークシートのヘッダーとフッターの構成。
		 */
		getHeadersFooters(): HeaderFooterGroup;
		/**
		 * 印刷時に使用するワークシートの左余白 (ポイント単位)。
		 */
		getLeftMargin(): number;
		/**
		 * ワークシートのページの向き。
		 */
		getOrientation(): PageOrientation;
		/**
		 * ワークシートのページの用紙サイズ。
		 */
		getPaperSize(): PaperType;
		/**
		 * ワークシートの `RangeAreas` 印刷領域を表す 1 つまたは複数の四角形の範囲で構成されるオブジェクトを取得します。
		 * 印刷領域がない場合、このメソッドは `undefined`.
		 */
		getPrintArea(): RangeAreas;
		/**
		 * 印刷時にワークシートのコメントを表示するかどうかを指定します。
		 */
		getPrintComments(): PrintComments;
		/**
		 * ワークシートの印刷エラー オプション。
		 */
		getPrintErrors(): PrintErrorType;
		/**
		 * ワークシートの枠線を印刷するかどうかを指定します。
		 */
		getPrintGridlines(): boolean;
		/**
		 * ワークシートの見出しを印刷するかどうかを指定します。
		 */
		getPrintHeadings(): boolean;
		/**
		 * ワークシートのページ印刷順序オプション。
		 * これによって、印刷されるページ番号の処理に使用する順序が指定されます。
		 */
		getPrintOrder(): PrintOrder;
		/**
		 * タイトル列を表す範囲オブジェクトを取得します。
		 * 設定されていない場合、このメソッドは`undefined`を返します。
		 */
		getPrintTitleColumns(): Range;
		/**
		 * タイトル行を表す範囲オブジェクトを取得します。
		 * 設定されていない場合、このメソッドは`undefined`を返します。
		 */
		getPrintTitleRows(): Range;
		/**
		 * 印刷時に使用するワークシートの右余白 (ポイント単位)。
		 */
		getRightMargin(): number;
		/**
		 * 印刷時に使用するワークシートの上余白 (ポイント単位)。
		 */
		getTopMargin(): number;
		/**
		 * ワークシートの印刷ズーム オプション。
		 * オブジェクトは `PageLayoutZoomOptions` JSON オブジェクトとして設定する必要があります
		 * (代わりに使用 `x.zoom = {...}` してください) `x.zoom.scale = ...`).
		 */
		getZoom(): PageLayoutZoomOptions;
		/**
		 * ワークシートの白黒印刷オプション。
		 * @param blackAndWhite
		 */
		setBlackAndWhite(blackAndWhite: boolean): void;
		/**
		 * ポイント単位での印刷に使用するワークシートの下部ページ余白。
		 * @param bottomMargin
		 */
		setBottomMargin(bottomMargin: number): void;
		/**
		 * ワークシートの中央の水平フラグ。
		 * このフラグによって、印刷時、ワークシートのページ中央を水平に設定するかどうかが決定されます。
		 * @param centerHorizontally
		 */
		setCenterHorizontally(centerHorizontally: boolean): void;
		/**
		 * ワークシートの中央の垂直方向のフラグ。
		 * このフラグによって、印刷時、ワークシートのページ中央を垂直に設定するかどうかが決定されます。
		 * @param centerVertically
		 */
		setCenterVertically(centerVertically: boolean): void;
		/**
		 * ワークシートの下書きモード オプション。
		 * もし `true`では、シートはグラフィックスなしで印刷されます。
		 * @param draftMode
		 */
		setDraftMode(draftMode: boolean): void;
		/**
		 * 印刷するワークシートの最初のページ番号。
		 * 値は `null` "自動" ページ番号を表します。
		 * @param firstPageNumber
		 */
		setFirstPageNumber(firstPageNumber: number | ""): void;
		/**
		 * 印刷時に使用するワークシートのフッター余白 (ポイント単位)。
		 * @param footerMargin
		 */
		setFooterMargin(footerMargin: number): void;
		/**
		 * 印刷時に使用するワークシートのヘッダー余白 (ポイント単位)。
		 * @param headerMargin
		 */
		setHeaderMargin(headerMargin: number): void;
		/**
		 * 印刷時に使用するワークシートの左余白 (ポイント単位)。
		 * @param leftMargin
		 */
		setLeftMargin(leftMargin: number): void;
		/**
		 * ワークシートのページの向き。
		 * @param orientation
		 */
		setOrientation(orientation: PageOrientation): void;
		/**
		 * ワークシートのページの用紙サイズ。
		 * @param paperSize
		 */
		setPaperSize(paperSize: PaperType): void;
		/**
		 * ワークシートの印刷範囲を設定します。
		 * @param printArea 印刷するコンテンツの範囲または範囲。
		 */
		setPrintArea(printArea: Range | RangeAreas | string): void;
		/**
		 * 印刷時にワークシートのコメントを表示するかどうかを指定します。
		 * @param printComments
		 */
		setPrintComments(printComments: PrintComments): void;
		/**
		 * ワークシートの印刷エラー オプション。
		 * @param printErrors
		 */
		setPrintErrors(printErrors: PrintErrorType): void;
		/**
		 * ワークシートの枠線を印刷するかどうかを指定します。
		 * @param printGridlines
		 */
		setPrintGridlines(printGridlines: boolean): void;
		/**
		 * ワークシートの見出しを印刷するかどうかを指定します。
		 * @param printHeadings
		 */
		setPrintHeadings(printHeadings: boolean): void;
		/**
		 * ワークシートのページ余白を単位で設定します。
		 * @param unit 指定された余白の測定単位。
		 * @param marginOptions 設定する余白の値。 指定されていない余白は変更されません。
		 */
		setPrintMargins(
			unit: PrintMarginUnit,
			marginOptions: PageLayoutMarginOptions,
		): void;
		/**
		 * ワークシートのページ印刷順序オプション。
		 * これによって、印刷されるページ番号の処理に使用する順序が指定されます。
		 * @param printOrder
		 */
		setPrintOrder(printOrder: PrintOrder): void;
		/**
		 * セルを含む列を、印刷時、ワークシートの各ページの左で繰り返すように設定します。
		 * @param printTitleColumns 各ページの左側に繰り返される列。 範囲は、列全体にまたがって有効にする必要があります。
		 */
		setPrintTitleColumns(printTitleColumns: Range | string): void;
		/**
		 * セルを含む行を、印刷時、ワークシートの各ページの上で繰り返すように設定します。
		 * @param printTitleRows 各ページの上部で繰り返される行。 範囲は、有効にするには行全体にまたがる必要があります。
		 */
		setPrintTitleRows(printTitleRows: Range | string): void;
		/**
		 * 印刷時に使用するワークシートの右余白 (ポイント単位)。
		 * @param rightMargin
		 */
		setRightMargin(rightMargin: number): void;
		/**
		 * 印刷時に使用するワークシートの上余白 (ポイント単位)。
		 * @param topMargin
		 */
		setTopMargin(topMargin: number): void;
		/**
		 * ワークシートの印刷ズーム オプション。
		 * オブジェクトは `PageLayoutZoomOptions` JSON オブジェクトとして設定する必要があります
		 * (代わりに使用 `x.zoom = {...}` してください) `x.zoom.scale = ...`).
		 * @param zoom
		 */
		setZoom(zoom: PageLayoutZoomOptions): void;
	}
}
