import * as CSS from 'csstype';
import React from 'react';
import { CSSObject, ThemedCssFunction } from 'styled-components';
import { BoxShadowType, ColorType, FontWeightType, ThemeType } from '../../styles';
declare type NumberOrString = number | string | null;
export declare type Responsive = NumberOrString | NumberOrString[];
export declare type SingleOrArray<T> = T | T[];
export declare type PlainObject = {
    [name: string]: unknown;
};
interface ISpace {
    m?: Responsive;
    mt?: Responsive;
    mr?: Responsive;
    mb?: Responsive;
    ml?: Responsive;
    mx?: Responsive;
    my?: Responsive;
    p?: Responsive;
    pt?: Responsive;
    pr?: Responsive;
    pb?: Responsive;
    pl?: Responsive;
    px?: Responsive;
    py?: Responsive;
}
interface IWidthAndHeight {
    width?: Responsive;
    height?: Responsive;
    maxHeight?: Responsive;
    minHeight?: Responsive;
    maxWidth?: Responsive;
    minWidth?: Responsive;
    zIndex?: CSS.ZIndexProperty;
}
declare type SimpleJustifyContentCSS = 'start' | 'end' | 'center' | 'between' | 'around';
declare type SimpleAlignItemsCSS = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
interface IFlex {
    direction?: SingleOrArray<CSS.FlexDirectionProperty>;
    justifyContent?: SingleOrArray<SimpleJustifyContentCSS>;
    alignItems?: SingleOrArray<SimpleAlignItemsCSS>;
    alignSelf?: SingleOrArray<SimpleAlignItemsCSS>;
    flexWrap?: SingleOrArray<CSS.FlexWrapProperty>;
    flexGrow?: number | number[];
    flex?: SingleOrArray<CSS.FlexProperty<number>>;
}
interface IBorder {
    border?: Responsive;
    borderBottom?: Responsive;
    borderLeft?: Responsive;
    borderRight?: Responsive;
    borderTop?: Responsive;
    borderColor?: ColorType;
    borderRadius?: number | string;
}
interface IColor {
    color?: ColorType;
    bg?: ColorType;
    boxShadow?: BoxShadowType;
    opacity?: number | number[];
}
declare type DisplayPropertyWithoutString = CSS.Globals | CSS.DisplayOutside | CSS.DisplayInside | CSS.DisplayInternal | CSS.DisplayLegacy | 'contents' | 'list-item' | 'none';
interface IPosition {
    display?: SingleOrArray<DisplayPropertyWithoutString>;
    position?: SingleOrArray<CSS.PositionProperty>;
    top?: SingleOrArray<CSS.TopProperty<string | number>>;
    bottom?: SingleOrArray<CSS.BottomProperty<string | number>>;
    left?: SingleOrArray<CSS.LeftProperty<string | number>>;
    right?: SingleOrArray<CSS.RightProperty<string | number>>;
}
interface IOverflow {
    overflow?: SingleOrArray<CSS.OverflowProperty>;
    overflowX?: SingleOrArray<CSS.OverflowXProperty>;
    overflowY?: SingleOrArray<CSS.OverflowYProperty>;
}
export declare type CSSType = CSSObject | ReturnType<ThemedCssFunction<ThemeType>> | string;
interface IStyledComponentsProp {
    css?: CSSType;
    as?: keyof JSX.IntrinsicElements;
    ref?: React.RefObject<any>;
}
interface IOthers {
    id?: string;
    htmlFor?: string;
}
interface ITextCSS {
    lineHeight?: SingleOrArray<CSS.LineHeightProperty<unknown>>;
    textAlign?: SingleOrArray<CSS.TextAlignProperty>;
    fontWeight?: SingleOrArray<FontWeightType>;
    fontSize?: Responsive;
}
interface IAnimation {
    cursor?: CSS.CursorProperty;
    transform?: CSS.TransformProperty;
    transition?: CSS.TransitionProperty;
}
interface IEvents {
    onClick?: React.ReactEventHandler;
    onMouseEnter?: React.ReactEventHandler;
    onMouseLeave?: React.ReactEventHandler;
}
export interface IBaseBox extends ISpace, IWidthAndHeight, IFlex, IBorder, IColor, IPosition, IOverflow, IStyledComponentsProp, ITextCSS, IAnimation, IEvents, IOthers {
}
declare type IBaseBoxNoRef = Pick<IBaseBox, Exclude<keyof IBaseBox, 'ref'>>;
interface ITakeRef {
    takeRef?: IBaseBox['ref'];
}
export declare type IBaseBoxWithTakeRef = IBaseBoxNoRef & ITakeRef;
export {};
