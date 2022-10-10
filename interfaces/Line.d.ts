/// <reference path="../enums/ArrowheadLength.d.ts"/>
/// <reference path="../enums/ArrowheadStyle.d.ts"/>
/// <reference path="../enums/ArrowheadWidth.d.ts"/>
declare namespace ExcelScript {
	/**
	 * ワークシート内の行を表します。
	 * 対応するオブジェクトを取得 `Shape` するには、 `Line.shape`.
	 * @see [ExcelScript.Line interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.line?view=office-scripts)
	 */
	export interface Line {
		/**
		 * 指定されたコネクタの始点を指定された図形に接続します。
		 * @param shape 接続する図形。
		 * @param connectionSite コネクタの先頭が接続されている図形上の接続サイト。
		 * 0 (包括) から指定した図形の接続サイト数 (排他的) の整数を指定する必要があります。
		 */
		connectBeginShape(shape: Shape, connectionSite: number): void;
		/**
		 * 指定されたコネクタの終点を指定された図形に接続します。
		 * @param shape 接続する図形。
		 * @param connectionSite コネクタの端が接続されている図形上の接続サイト。
		 * 0 (包括) から指定した図形の接続サイト数 (排他的) の整数を指定する必要があります。
		 */
		connectEndShape(shape: Shape, connectionSite: number): void;
		/**
		 * 指定されたコネクタの始点を図形から切り離します。
		 */
		disconnectBeginShape(): void;
		/**
		 * 指定されたコネクタの終点を図形から切り離します。
		 */
		disconnectEndShape(): void;
		/**
		 * 指定された線の始点の矢印の長さを表します。
		 */
		getBeginArrowheadLength(): ArrowheadLength;
		/**
		 * 指定された線の始点の矢印のスタイルを表します。
		 */
		getBeginArrowheadStyle(): ArrowheadStyle;
		/**
		 * 指定された線の始点の矢印の幅を表します。
		 */
		getBeginArrowheadWidth(): ArrowheadWidth;
		/**
		 * 指定された線の始点が接続されている図形を表します。
		 */
		getBeginConnectedShape(): Shape;
		/**
		 * コネクタの始点が接続されている結合点を表します。
		 * 線の `null` 先頭が図形にアタッチされていない場合に返します。
		 */
		getBeginConnectedSite(): number;
		/**
		 * 線のコネクタの種類を表します。
		 */
		getConnectorType(): ConnectorType;
		/**
		 * 指定された線の終点の矢印の長さを表します。
		 */
		getEndArrowheadLength(): ArrowheadLength;
		/**
		 * 指定された線の終点の矢印のスタイルを表します。
		 */
		getEndArrowheadStyle(): ArrowheadStyle;
		/**
		 * 指定された線の終点の矢印の幅を表します。
		 */
		getEndArrowheadWidth(): ArrowheadWidth;
		/**
		 * 指定された線の終点が接続されている図形を表します。
		 */
		getEndConnectedShape(): Shape;
		/**
		 * コネクタの終点が接続されている結合点を表します。
		 * 線の `null` 端が図形に接続されていない場合に返します。
		 */
		getEndConnectedSite(): number;
		/**
		 * 図形識別子を指定します。
		 */
		getId(): string;
		/**
		 * 指定した線の先頭が図形に接続される場合に指定します。
		 */
		getIsBeginConnected(): boolean;
		/**
		 * 指定した線の端が図形に接続される場合に指定します。
		 */
		getIsEndConnected(): boolean;
		/**
		 * 行に関連 `Shape` 付けられたオブジェクトを返します。
		 */
		getShape(): Shape;
		/**
		 * 指定された線の始点の矢印の長さを表します。
		 * @param beginArrowheadLength
		 */
		setBeginArrowheadLength(beginArrowheadLength: ArrowheadLength): void;
		/**
		 * 指定された線の始点の矢印のスタイルを表します。
		 * @param beginArrowheadStyle
		 */
		setBeginArrowheadStyle(beginArrowheadStyle: ArrowheadStyle): void;
		/**
		 * 指定された線の始点の矢印の幅を表します。
		 * @param beginArrowheadWidth
		 */
		setBeginArrowheadWidth(beginArrowheadWidth: ArrowheadWidth): void;
		/**
		 * 線のコネクタの種類を表します。
		 * @param connectorType
		 */
		setConnectorType(connectorType: ConnectorType): void;
		/**
		 * 指定された線の終点の矢印の長さを表します。
		 * @param endArrowheadLength
		 */
		setEndArrowheadLength(endArrowheadLength: ArrowheadLength): void;
		/**
		 * 指定された線の終点の矢印のスタイルを表します。
		 * @param endArrowheadStyle
		 */
		setEndArrowheadStyle(endArrowheadStyle: ArrowheadStyle): void;
		/**
		 * 指定された線の終点の矢印の幅を表します。
		 * @param endArrowheadWidth
		 */
		setEndArrowheadWidth(endArrowheadWidth: ArrowheadWidth): void;
	}
}
