declare namespace ExcelScript {
	/**
	 * ワークシート内の汎用図形オブジェクトを表します。
	 * 図形には、幾何学的な図形、線、図形のグループなどがあります。
	 * @see [ExcelScript.Shape interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.shape?view=office-scripts)
	 */
	export interface Shape {
		/**
		 * オブジェクトをコピーして貼り付けます `Shape` 。
		 * 貼り付けられた図形は、この図形と同じピクセル位置にコピーされます。
		 * @param destinationSheet 図形オブジェクトを貼り付けるシート。 既定値は、コピーされた図形のワークシートです。
		 */
		copyTo(destinationSheet?: Worksheet | string): Shape;
		/**
		 * ワークシートから図形を削除します。
		 */
		delete(): void;
		/**
		 * オブジェクトの代替説明テキストを `Shape` 指定します。
		 */
		getAltTextDescription(): string;
		/**
		 * オブジェクトの代替タイトル テキストを `Shape` 指定します。
		 */
		getAltTextTitle(): string;
		/**
		 * 図形を画像に変換し、base 64 でエンコードされた文字列として画像を返します。
		 * DPI は 96 です。 サポートされている形式は次のとおりです。
		 * - `ExcelScript.PictureFormat.BMP`
		 * - `ExcelScript.PictureFormat.PNG`
		 * - `ExcelScript.PictureFormat.JPEG`
		 * - `ExcelScript.PictureFormat.GIF`
		 * @param format イメージの形式を指定します。
		 * @deprecated この API は非推奨になりました。Use `getImageAsBase64` instead.
		 */
		getAsImage(format: PictureFormat): string;
		/**
		 * この図形の結合点の数を返します。
		 */
		getConnectionSiteCount(): number;
		/**
		 * この図形の塗りつぶしの書式設定を返します。
		 */
		getFill(): ShapeFill;
		/**
		 * 図形に関連付けられた幾何学的図形を返します。
		 * 図形の種類が "GeometricShape" ではない場合は、エラーがスローされます。
		 */
		getGeometricShape(): GeometricShape;
		/**
		 * このジオメトリ図形のジオメトリ図形の種類を指定します。
		 * 詳細は「`ExcelScript.GeometricShapeType`」をご覧ください。
		 * 図形の `null` 種類が "GeometrShape" でない場合に返されます。
		 */
		getGeometricShapeType(): GeometricShapeType;
		/**
		 * 図形に関連付けられた図形グループを返します。
		 * 図形の種類が "GroupShape" ではない場合は、エラーがスローされます。
		 */
		getGroup(): ShapeGroup;
		/**
		 * 図形の高さをポイント単位で指定します。
		 * 負の `InvalidArgument` 値または 0 を入力として設定すると、例外がスローされます。
		 */
		getHeight(): number;
		/**
		 * 図形識別子を指定します。
		 */
		getId(): string;
		/**
		 * 図形に関連付けられた画像を返します。
		 * 図形の種類が "Image" ではない場合は、エラーがスローされます。
		 */
		getImage(): Image;
		/**
		 * 図形を画像に変換し、base 64 でエンコードされた文字列として画像を返します。
		 * DPI は 96 です。 サポートされている形式は次のとおりです。
		 * - `ExcelScript.PictureFormat.BMP`
		 * - `ExcelScript.PictureFormat.PNG`
		 * - `ExcelScript.PictureFormat.JPEG`
		 * - `ExcelScript.PictureFormat.GIF`
		 * @param format イメージの形式を指定します。
		 */
		getImageAsBase64(format: PictureFormat): string;
		/**
		 * 図形の左側からワークシートの左側までの距離 (ポイント数) です。
		 * 負の値を `InvalidArgument` 入力として設定すると、例外がスローされます。
		 */
		getLeft(): number;
		/**
		 * 指定した図形のレベルを指定します。
		 * たとえば、レベル 0 は図形がどのグループの一部でもないことを意味し、
		 * レベル 1 は図形が最上位グループの一部であることを意味し、
		 * レベル 2 は図形が最上位レベルのサブグループの一部であることを意味します。
		 */
		getLevel(): number;
		/**
		 * 図形に関連付けられた線を返します。
		 * 図形の種類が "Line" ではない場合は、エラーがスローされます。
		 */
		getLine(): Line;
		/**
		 * この図形の線の書式設定を返します。
		 */
		getLineFormat(): ShapeLineFormat;
		/**
		 * この図形の縦横比をロックするかどうかを指定します。
		 */
		getLockAspectRatio(): boolean;
		/**
		 * 図形の名前を指定します。
		 */
		getName(): string;
		/**
		 * この図形の親グループを指定します。
		 */
		getParentGroup(): Shape;
		/**
		 * オブジェクトがその下のセルに接続されている方法を表します。
		 */
		getPlacement(): Placement;
		/**
		 * 図形の回転角度を度単位で指定します。
		 */
		getRotation(): number;
		/**
		 * この図形のテキスト フレーム オブジェクトを返します。
		 */
		getTextFrame(): TextFrame;
		/**
		 * 図形の上端からワークシートの上までのポイント単位の距離です。
		 * 負の値を `InvalidArgument` 入力として設定すると、例外がスローされます。
		 */
		getTop(): number;
		/**
		 * この図形の種類を返します。
		 * 詳細は「`ExcelScript.ShapeType`」をご覧ください。
		 */
		getType(): ShapeType;
		/**
		 * 図形が表示されるかどうかを指定します。
		 */
		getVisible(): boolean;
		/**
		 * 図形の幅をポイント単位で指定します。
		 * 負の `InvalidArgument` 値または 0 を入力として設定すると、例外がスローされます。
		 */
		getWidth(): number;
		/**
		 * 指定された図形の z オーダーでの位置を返します。
		 * 0 はオーダー スタックの一番下を表します。
		 */
		getZOrderPosition(): number;
		/**
		 * 指定したポイント数だけ水平方向に図形を移動します。
		 * @param increment インクリメント (ポイント単位) は、図形が水平方向に移動されます。
		 * 正の値は図形を右に移動し、負の値は左に移動します。
		 * シートが右から左方向の場合は逆になります。
		 * 正の値は図形を左に移動し、負の値は右に移動します。
		 */
		incrementLeft(increment: number): void;
		/**
		 * z 軸を中心に、指定された度数だけ、図形を時計回りに回転します。
		 * プロパティを `rotation` 使用して、図形の絶対回転を設定します。
		 * @param increment 図形が回転する角度の数。 正の値は図形を時計回りに回転し、負の値は反時計回りに回転します。
		 */
		incrementRotation(increment: number): void;
		/**
		 * 指定したポイント数だけ垂直方向に図形を移動します。
		 * @param increment インクリメント (ポイント単位) は、図形が垂直方向に移動されます。
		 * 正の値は図形を下に移動し、負の値は上に移動します。
		 */
		incrementTop(increment: number): void;
		/**
		 * 指定した係数分だけ図形の高さを変更します。
		 * 画像の場合は、図形を元のサイズに対して拡大または縮小するのか、現在のサイズに対して拡大または縮小するのかを指定できます。
		 * 画像以外の図形の場合は、常に現在の高さに対して拡大または縮小されます。
		 * @param scaleFactor 現在の高さと変更後の高さの比率、または元の高さと変更後の高さの比率を指定します。
		 * @param scaleType 図形を元のサイズまたは現在のサイズに対してスケーリングするかどうかを指定します。
		 * 元のサイズのスケーリング オプションは、イメージに対してのみ機能します。
		 * @param scaleFrom 省略可能。 図形を拡大縮小する場合、図形の位置を保持する部分を指定します。
		 * 省略した場合は、図形の左上隅を表し、その位置を保持します。
		 */
		scaleHeight(scaleFactor: number, scaleType: ShapeScaleType, scaleFrom?: ShapeScaleFrom): void;
		/**
		 * 指定した係数分だけ図形の幅を変更します。
		 * 画像の場合は、図形を元のサイズに対して拡大または縮小するのか、現在のサイズに対して拡大または縮小するのかを指定できます。
		 * 画像以外の図形の場合は、常に現在の幅に対して拡大または縮小されます。
		 * @param scaleFactor 現在の幅と変更後の幅の比率、または元の幅と変更後の幅の比率を指定します。
		 * @param scaleType 図形を元のサイズまたは現在のサイズに対してスケーリングするかどうかを指定します。
		 * 元のサイズのスケーリング オプションは、イメージに対してのみ機能します。
		 * @param scaleFrom 省略可能。 図形を拡大縮小する場合、図形の位置を保持する部分を指定します。
		 * 省略した場合は、図形の左上隅を表し、その位置を保持します。
		 */
		scaleWidth(scaleFactor: number, scaleType: ShapeScaleType, scaleFrom?: ShapeScaleFrom): void;
		/**
		 * オブジェクトの代替説明テキストを `Shape` 指定します。
		 * @param altTextDescription 
		 */
		setAltTextDescription(altTextDescription: string): void;
		/**
		 * オブジェクトの代替タイトル テキストを `Shape` 指定します。
		 * @param altTextTitle 
		 */
		setAltTextTitle(altTextTitle: string): void;
		/**
		 * このジオメトリ図形のジオメトリ図形の種類を指定します。
		 * 詳細は「`ExcelScript.GeometricShapeType`」をご覧ください。
		 * 図形の `null` 種類が "GeometrShape" でない場合に返されます。
		 * @param geometricShapeType 
		 */
		setGeometricShapeType(geometricShapeType: GeometricShapeType): void;
		/**
		 * 図形の高さをポイント単位で指定します。
		 * 負の `InvalidArgument` 値または 0 を入力として設定すると、例外がスローされます。
		 * @param height 
		 */
		setHeight(height: number): void;
		/**
		 * 図形の左側からワークシートの左側までの距離 (ポイント数) です。
		 * 負の値を `InvalidArgument` 入力として設定すると、例外がスローされます。
		 * @param left 
		 */
		setLeft(left: number): void;
		/**
		 * この図形の縦横比をロックするかどうかを指定します。
		 * @param lockAspectRatio 
		 */
		setLockAspectRatio(lockAspectRatio: boolean): void;
		/**
		 * 図形の名前を指定します。
		 * @param name 
		 */
		setName(name: string): void;
		/**
		 * オブジェクトがその下のセルに接続されている方法を表します。
		 * @param placement 
		 */
		setPlacement(placement: Placement): void;
		/**
		 * 図形の回転角度を度単位で指定します。
		 * @param rotation 
		 */
		setRotation(rotation: number): void;
		/**
		 * 図形の上端からワークシートの上までのポイント単位の距離です。
		 * 負の値を `InvalidArgument` 入力として設定すると、例外がスローされます。
		 * @param top 
		 */
		setTop(top: number): void;
		/**
		 * 図形が表示されるかどうかを指定します。
		 * @param visible 
		 */
		setVisible(visible: boolean): void;
		/**
		 * 図形の幅をポイント単位で指定します。
		 * 負の `InvalidArgument` 値または 0 を入力として設定すると、例外がスローされます。
		 * @param width 
		 */
		setWidth(width: number): void;
		/**
		 * 指定された図形をコレクションの z オーダーで上または下に移動します。
		 * 他の図形の手前または奥に移動します。
		 * @param position Z オーダー スタック内の図形を他の図形に対して相対的に移動する場所。
		 * 詳細は「`ExcelScript.ShapeZOrder`」をご覧ください。
		 */
		setZOrder(position: ShapeZOrder): void;
	}
}