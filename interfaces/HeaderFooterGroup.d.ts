declare namespace ExcelScript {
	/**
	 * @see [ExcelScript.HeaderFooterGroup interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.headerfootergroup?view=office-scripts)
	 */
	export interface HeaderFooterGroup {
		/**
		 * 偶数/奇数または最初のページが指定されていない場合にすべてのページに使用される汎用ヘッダー/フッター。
		 */
		getDefaultForAllPages(): HeaderFooter;
		/**
		 * 偶数ページに使用するヘッダー/フッター。
		 * 奇数ページには奇数のヘッダー/フッターを指定する必要があります。
		 */
		getEvenPages(): HeaderFooter;
		/**
		 * 最初のページに使用するヘッダー/フッター。
		 * その他すべてのページには汎用または偶数/奇数のヘッダー/フッターが使用されます。
		 */
		getFirstPage(): HeaderFooter;
		/**
		 * 奇数ページに使用するヘッダー/フッター。
		 * 偶数ページには偶数のヘッダー/フッターを指定する必要があります。
		 */
		getOddPages(): HeaderFooter;
		/**
		 * ヘッダー/フッターが設定されている状態。
		 * 詳細は「`ExcelScript.HeaderFooterState`」をご覧ください。
		 */
		getState(): HeaderFooterState;
		/**
		 * ワークシートのページ レイアウト オプションに設定されているページ余白に合わせて
		 * ヘッダー/フッターの位置が調整されているかどうかを示すフラグを取得または設定します。
		 */
		getUseSheetMargins(): boolean;
		/**
		 * ワークシートのページ レイアウト オプションに設定されているページ パーセンテージ スケールによって
		 * ヘッダー/フッターが調整されているかどうかを示すフラグを取得または設定します。
		 */
		getUseSheetScale(): boolean;
		/**
		 * ヘッダー/フッターが設定されている状態。
		 * 詳細は「`ExcelScript.HeaderFooterState`」をご覧ください。
		 * @param state
		 */
		setState(state: HeaderFooterState): void;
		/**
		 * ワークシートのページ レイアウト オプションに設定されているページ余白に合わせて
		 * ヘッダー/フッターの位置が調整されているかどうかを示すフラグを取得または設定します。
		 * @param useSheetMargins
		 */
		setUseSheetMargins(useSheetMargins: boolean): void;
		/**
		 * ワークシートのページ レイアウト オプションに設定されているページ パーセンテージ スケールによって
		 * ヘッダー/フッターが調整されているかどうかを示すフラグを取得または設定します。
		 * @param useSheetScale
		 */
		setUseSheetScale(useSheetScale: boolean): void;
	}
}
