declare namespace ExcelScript {
	/**
	 * ブック内の Slicer オブジェクトを表します。
	 * @see [ExcelScript.Slicer interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.slicer?view=office-scripts)
	 */
	export interface Slicer {
		/**
		 * 現在スライサーに適用されているすべてのフィルターを消去します。
		 */
		clearFilters(): void;
		/**
		 * スライサーを削除します。
		 */
		delete(): void;
		/**
		 * スライサーのキャプションを表します。
		 */
		getCaption(): string;
		/**
		 * スライサーの高さ (ポイント数) を表します。
		 * 負の値または 0 を入力として設定すると、例外`InvalidArgument`がスローされます。
		 */
		getHeight(): number;
		/**
		 * スライサーの一意の ID を表します。
		 */
		getId(): string;
		/**
		 * 値は、 `true` スライサーに現在適用されているすべてのフィルターがクリアされている場合です。
		 */
		getIsFilterCleared(): boolean;
		/**
		 * スライサーの左側からワークシートの左までの距離を表します (ポイント数)。
		 * 負の値を入力として設定すると、`InvalidArgument` エラーがスローされます。
		 */
		getLeft(): number;
		/**
		 * スライサーの名前を表します。
		 */
		getName(): string;
		/**
		 * 選択されたアイテムのキーの配列を返します。
		 */
		getSelectedItems(): string[];
		/**
		 * そのキーまたは名前を使用してスライサー アイテムを取得します。
		 * スライサー項目が存在しない場合は、`undefined`が返されます。
		 * @param key 取得するスライサーのキーまたは名前。
		 */
		getSlicerItem(key: string): SlicerItem | undefined;
		/**
		 * スライサーの一部であるスライサー項目のコレクションを表します。
		 */
		getSlicerItems(): SlicerItem[];
		/**
		 * スライサーに含まれるアイテムの並べ替え順序を表します。
		 * 指定できる値は、"DataSourceOrder"、"昇順"、"降順" です。
		 */
		getSortBy(): SlicerSortType;
		/**
		 * スライサー スタイルを表す定数値。 可能な値は以下です。
		 * - "SlicerStyleLight1" から "SlicerStyleLight6"、
		 * - "TableStyleOther1" から "TableStyleOther2"、
		 * - "SlicerStyleDark1" から "SlicerStyleDark6"
		 *
		 * ブックに存在するカスタムのユーザー定義スタイルも指定できます。
		 */
		getStyle(): string;
		/**
		 * スライサーの上端からワークシートの上端までの距離を表します (ポイント数)。
		 * 負の値を入力として設定すると、`InvalidArgument` エラーがスローされます。
		 */
		getTop(): number;
		/**
		 * スライサーの幅 (ポイント数) を表します。
		 * 負の値または 0 を 入力として設定すると、`InvalidArgument` エラーがスローされます。
		 */
		getWidth(): number;
		/**
		 * スライサーを含んでいるワークシートを表します。
		 */
		getWorksheet(): Worksheet;
		/**
		 * キーに基づいてスライサー項目を選択します。
		 * 前の選択がクリアされます。
		 * 配列が空の場合、既定ですべての項目が選択されます。
		 * @param items 省略可能。 選択する指定したスライサーアイテム名。
		 */
		selectItems(items?: string[]): void;
		/**
		 * スライサーのキャプションを表します。
		 * @param caption
		 */
		setCaption(caption: string): void;
		/**
		 * スライサーの高さ (ポイント数) を表します。
		 * 負の値または 0 を入力として設定すると、例外`InvalidArgument` がスローされます。
		 * @param height
		 */
		setHeight(height: number): void;
		/**
		 * スライサーの左側からワークシートの左までの距離を表します (ポイント数)。
		 * 負の値を入力として設定すると、`InvalidArgument` エラーがスローされます。
		 * @param left
		 */
		setLeft(left: number): void;
		/**
		 * スライサーの名前を表します。
		 * @param name
		 */
		setName(name: string): void;
		/**
		 * スライサーに含まれるアイテムの並べ替え順序を表します。
		 * 指定できる値は、"DataSourceOrder"、"昇順"、"降順" です。
		 * @param sortBy
		 */
		setSortBy(sortBy: SlicerSortType): void;
		/**
		 * スライサー スタイルを表す定数値。 可能な値は以下です。
		 * - "SlicerStyleLight1" から "SlicerStyleLight6"、
		 * - "TableStyleOther1" から "TableStyleOther2"、
		 * - "SlicerStyleDark1" から "SlicerStyleDark6"
		 *
		 * ブックに存在するカスタムのユーザー定義スタイルも指定できます。
		 * @param style
		 */
		setStyle(style: string): void;
		/**
		 * スライサーの上端からワークシートの上端までの距離を表します (ポイント数)。
		 * 負の値を入力として設定すると、`InvalidArgument` エラーがスローされます。
		 * @param top
		 */
		setTop(top: number): void;
		/**
		 * スライサーの幅 (ポイント数) を表します。
		 * 負の値または 0 を入力として設定すると、例外`InvalidArgument`がスローされます。
		 * @param width
		 */
		setWidth(width: number): void;
	}
}
