import React from 'react';
import { IBaseBoxWithTakeRef, Responsive } from '../Box/BaseBox.type';
export interface IText extends IBaseBoxWithTakeRef {
    noDefaultLineHeight?: boolean;
    size?: Responsive;
}
interface IFontSpecStyle {
    fontSize?: Responsive;
    lineHeight?: Responsive;
    maxWidth?: Responsive;
}
export declare const getFontSpecStyle: (noDefaultLineHeight: boolean, isMaxWidthIncluded?: boolean, size?: string | number | (string | number | null)[] | null | undefined) => IFontSpecStyle;
export declare const Text: React.FC<IText>;
export {};
