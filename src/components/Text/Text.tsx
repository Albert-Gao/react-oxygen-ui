import React from 'react';
import { px } from 'styled-system';
import { ThemeType } from '../../styles';
import {
  fontSpecs,
  IFontSpecType,
} from '../../styles/theme/constants/fontSpecs';
import { getRefProp, is } from '../../utils/utils';
import { BaseBox } from '../Box/BaseBox';
import { IBaseBoxWithTakeRef, Responsive } from '../Box/BaseBox.type';

export interface IText extends IBaseBoxWithTakeRef {
  noDefaultLineHeight?: boolean;

  // so, it works like a handy shortcut.
  // if you set a size which can be indexed in theme.fontSizes
  // then fontSize, lineHeight and maxWidth(for Paragraph only) will all be set
  // if it's some random value, like '7px', it will be passed to final result directly
  // but won't include lineHeight and maxWidth, b/c we can't locate theme in theme.fontSpecs
  // it can be set as an array for responsive style which is the same behavior from styled-system
  size?: Responsive;
}

interface IFontSpecStyle {
  fontSize?: Responsive;
  lineHeight?: Responsive;
  maxWidth?: Responsive;
}

function addStyleToResult(
  tempStyle: IFontSpecStyle,
  result: IFontSpecStyle,
  key: keyof IFontSpecStyle,
) {
  if (is.notExist(result[key])) {
    result[key] = [];
  }

  // @ts-ignore
  // tslint:disable-next-line: no-unsafe-any
  result[key].push(tempStyle[key]);
}

export const getFontSpecStyle = (
  noDefaultLineHeight: boolean,
  isMaxWidthIncluded: boolean = false,
  size?: Responsive,
): IFontSpecStyle => {
  if (is.notExist(size)) {
    return {};
  }

  let result: IFontSpecStyle = {};

  if (Array.isArray(size)) {
    if (size.length === 1) {
      result = getFontSpecStyle(
        noDefaultLineHeight,
        isMaxWidthIncluded,
        size[0],
      );
    } else {
      const temp: IFontSpecStyle[] = [];

      size.forEach(s => {
        const style = getFontSpecStyle(
          noDefaultLineHeight,
          isMaxWidthIncluded,
          s,
        );
        temp.push(style);
      });

      temp.forEach(tempStyle => {
        addStyleToResult(tempStyle, result, 'fontSize');

        if (!noDefaultLineHeight) {
          addStyleToResult(tempStyle, result, 'lineHeight');
        }

        if (isMaxWidthIncluded) {
          addStyleToResult(tempStyle, result, 'maxWidth');
        }
      });
    }
  } else {
    const fontSpecInTheme = fontSpecs[
      size as keyof ThemeType['fontSpecs']
    ] as IFontSpecType;
    const isInTheme = typeof fontSpecInTheme === 'object';

    if (isInTheme) {
      result = {
        fontSize: px(fontSpecInTheme.size),
        lineHeight: fontSpecInTheme.lineHeight,
      };

      if (isMaxWidthIncluded) {
        result.maxWidth = px(fontSpecInTheme.maxWidth);
      }
    } else {
      result = {
        fontSize: px(size),
      };
    }
  }

  if (result === {}) {
    result = { fontSize: size };
  }

  return result;
};

export const Text: React.FC<IText> = ({
  size,
  noDefaultLineHeight = false,
  takeRef,
  ...rest
}) => (
  <BaseBox
    as="div"
    {...getFontSpecStyle(noDefaultLineHeight, false, size)}
    {...getRefProp(takeRef)}
    {...rest}
  />
);
