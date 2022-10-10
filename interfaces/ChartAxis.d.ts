declare namespace ExcelScript {
	/**
	 * グラフの 1 つの軸を表します。
	 * @see [ExcelScript.ChartAxis interface](https://learn.microsoft.com/ja-jp/javascript/api/office-scripts/excelscript/excelscript.chartaxis?view=office-scripts)
	 */
	export interface ChartAxis {
		/**
		 * 指定した軸目盛ラベルの配置を指定します。
		 * 詳細 については、「`ExcelScript.ChartTextHorizontalAlignment`」を参照してください。
		 */
		getAlignment(): ChartTickLabelAlignment;
		/**
		 * 指定した軸のグループを指定します。
		 * 詳細は「`ExcelScript.ChartAxisGroup`」をご覧ください。
		 */
		getAxisGroup(): ChartAxisGroup;
		/**
		 * 指定したカテゴリ軸の基本単位を指定します。
		 */
		getBaseTimeUnit(): ChartAxisTimeUnit;
		/**
		 * カテゴリ軸の種類を指定します。
		 */
		getCategoryType(): ChartAxisCategoryType;
		/**
		 * ユーザー設定の軸表示単位の値を指定します。
		 * このプロパティを設定するには、メソッドを使用 `SetCustomDisplayUnit(double)` してください。
		 */
		getCustomDisplayUnit(): number;
		/**
		 * 軸の表示単位を表します。
		 * 詳細は「`ExcelScript.ChartAxisDisplayUnit`」をご覧ください。
		 */
		getDisplayUnit(): ChartAxisDisplayUnit;
		/**
		 * 線とフォントの書式設定を含むグラフ オブジェクトの書式設定を表します。
		 */
		getFormat(): ChartAxisFormat;
		/**
		 * グラフ軸の高さをポイントで指定します。
		 * 軸が `null` 表示されていない場合に返します。
		 */
		getHeight(): number;
		/**
		 * 値軸がカテゴリの間でカテゴリ軸と交差する場合に指定します。
		 */
		getIsBetweenCategories(): boolean;
		/**
		 * 軸の左端からグラフ領域の左側までの距離をポイントで指定します。
		 * 軸が `null` 表示されていない場合に返します。
		 */
		getLeft(): number;
		/**
		 * 数値の形式がセルにリンクされている場合に指定します。
		 * もし `true`をクリックすると、セル内でラベルが変更された際に数値の形式が変更されます。
		 */
		getLinkNumberFormat(): boolean;
		/**
		 * 対数スケールを使用する場合の対数の基数を指定します。
		 */
		getLogBase(): number;
		/**
		 * 指定した軸の主グリッド線を表すオブジェクトを返します。
		 */
		getMajorGridlines(): ChartGridlines;
		/**
		 * 指定した軸の目盛の種類を指定します。
		 * 詳細は「`ExcelScript.ChartAxisTickMark`」をご覧ください。
		 */
		getMajorTickMark(): ChartAxisTickMark;
		/**
		 * プロパティがに設定されている場合に、カテゴリ軸のメジャー単位 `categoryType` スケール値を指定します。 `dateAxis`.
		 */
		getMajorTimeUnitScale(): ChartAxisTimeUnit;
		/**
		 * 2 つの目盛りの間隔を指定します。
		 */
		getMajorUnit(): number;
		/**
		 * 値軸の最大値を指定します。
		 */
		getMaximum(): number;
		/**
		 * 値軸の最小値を指定します。
		 */
		getMinimum(): number;
		/**
		 * 指定した軸の小さい枠線を表すオブジェクトを返します。
		 */
		getMinorGridlines(): ChartGridlines;
		/**
		 * 指定した軸の目盛りの種類を指定します。
		 * 詳細は「`ExcelScript.ChartAxisTickMark`」をご覧ください。
		 */
		getMinorTickMark(): ChartAxisTickMark;
		/**
		 * プロパティがに設定されている場合、カテゴリ軸のマイナー単位 `categoryType` スケール値を指定します。 `dateAxis`.
		 */
		getMinorTimeUnitScale(): ChartAxisTimeUnit;
		/**
		 * 2 つの小さな目盛りの間隔を指定します。
		 */
		getMinorUnit(): number;
		/**
		 * 軸がマルチレベルの場合に指定します。
		 */
		getMultiLevel(): boolean;
		/**
		 * 軸目盛ラベルの書式コードを指定します。
		 */
		getNumberFormat(): string;
		/**
		 * ラベルのレベル間の距離と、最初のレベルと軸線の間の距離を指定します。
		 * 値は 0 から 1000 の範囲内でなければなりません。
		 */
		getOffset(): number;
		/**
		 * 他の軸が交差する指定した軸位置を指定します。
		 * 詳細は「`ExcelScript.ChartAxisPosition`」をご覧ください。
		 */
		getPosition(): ChartAxisPosition;
		/**
		 * 他の軸が交差する軸位置を指定します。
		 * このプロパティを設定 `SetPositionAt(double)` するには、メソッドを使用する必要があります。
		 */
		getPositionAt(): number;
		/**
		 * 最後から最初Excelデータ ポイントをプロットする方法を指定します。
		 */
		getReversePlotOrder(): boolean;
		/**
		 * 値軸のスケールの種類を指定します。
		 * 詳細は「`ExcelScript.ChartAxisScaleType`」をご覧ください。
		 */
		getScaleType(): ChartAxisScaleType;
		/**
		 * 軸表示単位ラベルが表示される場合に指定します。
		 */
		getShowDisplayUnitLabel(): boolean;
		/**
		 * グラフ軸目盛ラベルのテキストの向きを指定します。
		 * 値は、-90 ~ 90 の整数または垂直方向のテキストの整数 180 のいずれかである必要があります。
		 */
		getTextOrientation(): number;
		/**
		 * 指定された軸の目盛ラベルの位置を指定します。
		 * 詳細は「`ExcelScript.ChartAxisTickLabelPosition`」をご覧ください。
		 */
		getTickLabelPosition(): ChartAxisTickLabelPosition;
		/**
		 * 目盛ラベル間のカテゴリまたは系列の数を指定します。
		 * 1 から 31999 の値を指定できます。
		 */
		getTickLabelSpacing(): number;
		/**
		 * 目盛の間のカテゴリまたは系列の数を指定します。
		 */
		getTickMarkSpacing(): number;
		/**
		 * 軸タイトルを表します。
		 */
		getTitle(): ChartAxisTitle;
		/**
		 * 軸の上端からグラフ領域の上端までの距離をポイントで指定します。
		 * 軸が `null` 表示されていない場合に返します。
		 */
		getTop(): number;
		/**
		 * 軸の種類を指定します。
		 * 詳細は「`ExcelScript.ChartAxisType`」をご覧ください。
		 */
		getType(): ChartAxisType;
		/**
		 * 軸が表示される場合に指定します。
		 */
		getVisible(): boolean;
		/**
		 * グラフ軸の幅をポイント単位で指定します。
		 * 軸が `null` 表示されていない場合に返します。
		 */
		getWidth(): number;
		/**
		 * 指定した軸目盛ラベルの配置を指定します。
		 * 詳細については、「`ExcelScript.ChartTextHorizontalAlignment` 」を参照してください。
		 * @param alignment
		 */
		setAlignment(alignment: ChartTickLabelAlignment): void;
		/**
		 * 指定したカテゴリ軸の基本単位を指定します。
		 * @param baseTimeUnit
		 */
		setBaseTimeUnit(baseTimeUnit: ChartAxisTimeUnit): void;
		/**
		 * 指定した軸のすべてのカテゴリ名を設定します。
		 * @param sourceData ソース `Range` データに対応するオブジェクト。
		 */
		setCategoryNames(sourceData: Range): void;
		/**
		 * カテゴリ軸の種類を指定します。
		 * @param categoryType
		 */
		setCategoryType(categoryType: ChartAxisCategoryType): void;
		/**
		 * 軸の表示単位をカスタム値に設定します。
		 * @param value 表示単位のカスタム値。
		 */
		setCustomDisplayUnit(value: number): void;
		/**
		 * 軸の表示単位を表します。
		 * 詳細は「`ExcelScript.ChartAxisDisplayUnit`」をご覧ください。
		 * @param displayUnit
		 */
		setDisplayUnit(displayUnit: ChartAxisDisplayUnit): void;
		/**
		 * 値軸がカテゴリの間でカテゴリ軸と交差する場合に指定します。
		 * @param isBetweenCategories
		 */
		setIsBetweenCategories(isBetweenCategories: boolean): void;
		/**
		 * 数値の形式がセルにリンクされている場合に指定します。
		 * もし `true`をクリックすると、セル内でラベルが変更された際に数値の形式が変更されます。
		 * @param linkNumberFormat
		 */
		setLinkNumberFormat(linkNumberFormat: boolean): void;
		/**
		 * 対数スケールを使用する場合の対数の基数を指定します。
		 * @param logBase
		 */
		setLogBase(logBase: number): void;
		/**
		 * 指定した軸の目盛の種類を指定します。
		 * 詳細は「`ExcelScript.ChartAxisTickMark`」をご覧ください。
		 * @param majorTickMark
		 */
		setMajorTickMark(majorTickMark: ChartAxisTickMark): void;
		/**
		 * プロパティがに設定されている場合に、カテゴリ軸のメジャー単位 `categoryType` スケール値を指定します。 `dateAxis`.
		 * @param majorTimeUnitScale
		 */
		setMajorTimeUnitScale(majorTimeUnitScale: ChartAxisTimeUnit): void;
		/**
		 * 2 つの目盛りの間隔を指定します。
		 * @param majorUnit
		 */
		setMajorUnit(majorUnit: number): void;
		/**
		 * 値軸の最大値を指定します。
		 * @param maximum
		 */
		setMaximum(maximum: number): void;
		/**
		 * 値軸の最小値を指定します。
		 * @param minimum
		 */
		setMinimum(minimum: number): void;
		/**
		 * 指定した軸の目盛りの種類を指定します。
		 * 詳細は「`ExcelScript.ChartAxisTickMark`」をご覧ください。
		 * @param minorTickMark
		 */
		setMinorTickMark(minorTickMark: ChartAxisTickMark): void;
		/**
		 * プロパティがに設定されている場合、カテゴリ軸のマイナー単位 `categoryType` スケール値を指定します。 `dateAxis`.
		 * @param minorTimeUnitScale
		 */
		setMinorTimeUnitScale(minorTimeUnitScale: ChartAxisTimeUnit): void;
		/**
		 * 2 つの小さな目盛りの間隔を指定します。
		 * @param minorUnit
		 */
		setMinorUnit(minorUnit: number): void;
		/**
		 * 軸がマルチレベルの場合に指定します。
		 * @param multiLevel
		 */
		setMultiLevel(multiLevel: boolean): void;
		/**
		 * 軸目盛ラベルの書式コードを指定します。
		 * @param numberFormat
		 */
		setNumberFormat(numberFormat: string): void;
		/**
		 * ラベルのレベル間の距離と、最初のレベルと軸線の間の距離を指定します。
		 * 値は 0 から 1000 の範囲内でなければなりません。
		 * @param offset
		 */
		setOffset(offset: number): void;
		/**
		 * 他の軸が交差する指定した軸位置を指定します。
		 * 詳細は「`ExcelScript.ChartAxisPosition`」をご覧ください。
		 * @param position
		 */
		setPosition(position: ChartAxisPosition): void;
		/**
		 * 他の軸が交差する指定した軸位置を設定します。
		 * @param value 交差ポイントのカスタム値。
		 */
		setPositionAt(value: number): void;
		/**
		 * 最後から最初Excelデータ ポイントをプロットする方法を指定します。
		 * @param reversePlotOrder
		 */
		setReversePlotOrder(reversePlotOrder: boolean): void;
		/**
		 * 値軸のスケールの種類を指定します。
		 * 詳細は「`ExcelScript.ChartAxisScaleType`」をご覧ください。
		 * @param scaleType
		 */
		setScaleType(scaleType: ChartAxisScaleType): void;
		/**
		 * 軸表示単位ラベルが表示される場合に指定します。
		 * @param showDisplayUnitLabel
		 */
		setShowDisplayUnitLabel(showDisplayUnitLabel: boolean): void;
		/**
		 * グラフ軸目盛ラベルのテキストの向きを指定します。
		 * 値は、-90 ~ 90 の整数または垂直方向のテキストの整数 180 のいずれかである必要があります。
		 * @param textOrientation
		 */
		setTextOrientation(textOrientation: number): void;
		/**
		 * 指定された軸の目盛ラベルの位置を指定します。
		 * 詳細は「`ExcelScript.ChartAxisTickLabelPosition`」をご覧ください。
		 * @param tickLabelPosition
		 */
		setTickLabelPosition(tickLabelPosition: ChartAxisTickLabelPosition): void;
		/**
		 * 目盛ラベル間のカテゴリまたは系列の数を指定します。
		 * 1 から 31999 の値を指定できます。
		 * @param tickLabelSpacing
		 */
		setTickLabelSpacing(tickLabelSpacing: number): void;
		/**
		 * 目盛の間のカテゴリまたは系列の数を指定します。
		 * @param tickMarkSpacing
		 */
		setTickMarkSpacing(tickMarkSpacing: number): void;
		/**
		 * 軸が表示される場合に指定します。
		 * @param visible
		 */
		setVisible(visible: boolean): void;
	}
}
