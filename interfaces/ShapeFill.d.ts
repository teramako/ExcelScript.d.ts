declare namespace ExcelScript {
	/**
	 * 図形オブジェクトの塗りつぶしの書式設定を表します。
	 * @see [ExcelScript.ShapeFill interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.shapefill?view=office-scripts)
	 */
	export interface ShapeFill {
		/**
		 * この図形の塗りつぶしの書式設定をクリアします。
		 */
		clear(): void;
		/**
		 * 図形塗りつぶし前景色を HTML カラー形式 # 、RRGGBB 形式 ("FFA500" など) または名前付き HTML 色 ("オレンジ" など) で表します。
		 */
		getForegroundColor(): string;
		/**
		 * 塗りつぶしの透明度の割合を 0.0 (不透明) から 1.0 (クリア) の値として指定します。
		 * 図形の種類が透明度をサポートしていない場合、またはグラデーション塗りつぶしの種類など、図形の塗りつぶしの透明度が矛盾している `null` 場合に返します。
		 */
		getTransparency(): number;
		/**
		 * 図形の塗りつぶしの種類を返します。
		 * 詳細は「`ExcelScript.ShapeFillType`」をご覧ください。
		 */
		getType(): ShapeFillType;
		/**
		 * 図形塗りつぶし前景色を HTML カラー形式 # 、RRGGBB 形式 ("FFA500" など) または名前付き HTML 色 ("オレンジ" など) で表します。
		 * @param foregroundColor
		 */
		setForegroundColor(foregroundColor: string): void;
		/**
		 * 図形の塗りつぶしの書式設定を均一な色に設定します。
		 * これにより、塗りつぶしの種類が "Solid" に変更されます。
		 * @param color #RRGGBB 形式 ("FFA500" など) または名前付き HTML 色 ("オレンジ色" など) で塗りつぶしの色を表す文字列。
		 */
		setSolidColor(color: string): void;
		/**
		 * 塗りつぶしの透明度の割合を 0.0 (不透明) から 1.0 (クリア) の値として指定します。
		 * 図形の種類が透明度をサポートしていない場合、またはグラデーション塗りつぶしの種類など、図形の塗りつぶしの透明度が矛盾している `null` 場合に返します。
		 * @param transparency
		 */
		setTransparency(transparency: number): void;
	}
}
