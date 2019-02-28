import * as CSS from 'csstype';
import React from 'react';
import { CSSObject, ThemedCssFunction } from 'styled-components';
import {
  BoxShadowType,
  ColorType,
  FontWeightType,
  ThemeType,
} from '../../styles';

type NumberOrString = number | string | null;
export type Responsive = NumberOrString | NumberOrString[];
export type SingleOrArray<T> = T | T[];
export type PlainObject = { [name: string]: unknown };

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

type SimpleJustifyContentCSS =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around';

type SimpleAlignItemsCSS =
  | 'start'
  | 'end'
  | 'center'
  | 'baseline'
  | 'stretch';

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

// display has a string type which prevents intellisense
// but it's valid according the rules.
// but i feel like we don't need that, so I removed it.
// source: https://github.com/frenic/csstype/issues/64
type DisplayPropertyWithoutString =
  | CSS.Globals
  | CSS.DisplayOutside
  | CSS.DisplayInside
  | CSS.DisplayInternal
  | CSS.DisplayLegacy
  | 'contents'
  | 'list-item'
  | 'none';

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

export type CSSType =
  | CSSObject
  | ReturnType<ThemedCssFunction<ThemeType>>
  | string;

interface IStyledComponentsProp {
  css?: CSSType;
  as?: keyof JSX.IntrinsicElements;
  // tslint:disable-next-line: no-any
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

export interface IBaseBox
  extends ISpace,
    IWidthAndHeight,
    IFlex,
    IBorder,
    IColor,
    IPosition,
    IOverflow,
    IStyledComponentsProp,
    ITextCSS,
    IAnimation,
    IEvents,
    IOthers {}

type IBaseBoxNoRef = Pick<IBaseBox, Exclude<keyof IBaseBox, 'ref'>>;

interface ITakeRef {
  takeRef?: IBaseBox['ref'];
}

// This type is for making forwarding ref easier.
// Why not React.forwardRef? Performance issue:
// https://github.com/facebook/react/issues/13456
export type IBaseBoxWithTakeRef = IBaseBoxNoRef & ITakeRef;
