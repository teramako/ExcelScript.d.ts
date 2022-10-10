declare namespace ExcelScript {
	/**
	 * 図形オブジェクトの線の書式設定を表します。
	 * 画像と幾何学的図形の場合、線の書式設定は図形の境界線を表します。
	 * @see [ExcelScript.ShapeLineFormat interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.shapelineformat?view=office-scripts)
	 */
	export interface ShapeLineFormat {
		/**
		 * 行の色を HTML カラー形式 # 、RRGGBB 形式 ("FFA500" など) または名前付き HTML 色 ("オレンジ色" など) として表します。
		 */
		getColor(): string;
		/**
		 * 図形の線スタイルを表します。
		 * 線が `null` 表示されない場合、または一貫性のない破線スタイルがある場合に返します。
		 * 詳細は「`ExcelScript.ShapeLineDashStyle`」をご覧ください。
		 */
		getDashStyle(): ShapeLineDashStyle;
		/**
		 * 図形の線スタイルを表します。
		 * 線が `null` 表示されないか、スタイルが一貫性のない場合に返します。
		 * 詳細は「`ExcelScript.ShapeLineStyle`」をご覧ください。
		 */
		getStyle(): ShapeLineStyle;
		/**
		 * 指定された線の透明度を示す 0.0 (不透明) から 1.0 (透明) までの値を表します。
		 * 図形の `null` 透明度が一貫性のない場合に返します。
		 */
		getTransparency(): number;
		/**
		 * 図形要素の線の書式設定が表示される場合に指定します。
		 * 図形の `null` 表示が一貫性のない場合に返します。
		 */
		getVisible(): boolean;
		/**
		 * 線の太さ (ポイント数) を表します。
		 * 線が `null` 表示されない場合、または線の太さがない場合に返します。
		 */
		getWeight(): number;
		/**
		 * 行の色を HTML カラー形式 # 、RRGGBB 形式 ("FFA500" など) または名前付き HTML 色 ("オレンジ色" など) として表します。
		 * @param color
		 */
		setColor(color: string): void;
		/**
		 * 図形の線スタイルを表します。
		 * 線が `null` 表示されない場合、または一貫性のない破線スタイルがある場合に返します。
		 * 詳細は「`ExcelScript.ShapeLineDashStyle`」をご覧ください。
		 * @param dashStyle
		 */
		setDashStyle(dashStyle: ShapeLineDashStyle): void;
		/**
		 * 図形の線スタイルを表します。
		 * 線が `null` 表示されないか、スタイルが一貫性のない場合に返します。
		 * 詳細は「`ExcelScript.ShapeLineStyle`」をご覧ください。
		 * @param style
		 */
		setStyle(style: ShapeLineStyle): void;
		/**
		 * 指定された線の透明度を示す 0.0 (不透明) から 1.0 (透明) までの値を表します。
		 * 図形の `null` 透明度が一貫性のない場合に返します。
		 * @param transparency
		 */
		setTransparency(transparency: number): void;
		/**
		 * 図形要素の線の書式設定が表示される場合に指定します。
		 * 図形の `null` 表示が一貫性のない場合に返します。
		 * @param visible
		 */
		setVisible(visible: boolean): void;
		/**
		 * 線の太さ (ポイント数) を表します。
		 * 線が `null` 表示されない場合、または線の太さがない場合に返します。
		 * @param weight
		 */
		setWeight(weight: number): void;
	}
}
