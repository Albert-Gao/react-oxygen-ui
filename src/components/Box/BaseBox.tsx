import * as React from 'react';
import {
  // @ts-ignore
  backgroundColor,
  border,
  borderBottom,
  borderColor,
  borderLeft,
  borderRadius,
  borderRight,
  borderTop,
  bottom,
  boxShadow,
  color,
  display,
  flexWrap,
  fontSize,
  fontWeight,
  height,
  left,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  opacity,
  overflow,
  position,
  right,
  space,
  style,
  textAlign,
  top,
  width,
  zIndex,
} from 'styled-system';
import { getTransitionValue } from '../../styles/utils';
import { is } from '../../utils/utils';
import { CSSType, IBaseBox } from './BaseBox.type';
import styled, { css as cssFunc } from 'styled-components';

const lineHeight = style({ prop: 'lineHeight' });
const cursor = style({ prop: 'cursor' });
const transition = style({ prop: 'transition' });
const transform = style({ prop: 'transform' });
const flexGrow = style({ prop: 'flexGrow' });
const flex = style({ prop: 'flex' });
const overflowX = style({ prop: 'overflowX' });
const overflowY = style({ prop: 'overflowY' });

const flexDirection = style({
  prop: 'direction',
  cssProperty: 'flexDirection',
});

const justifyContent = style({
  prop: 'justifyContent',
  transformValue: (value: string | number) => {
    switch (value) {
      case 'start':
      case 'end':
        return `flex-${value}`;

      case 'between':
      case 'around':
        return `space-${value}`;

      default:
        return value;
    }
  },
});

const transformAlignCSS = (value: string | number) => {
  switch (value) {
    case 'start':
    case 'end':
      return `flex-${value}`;

    default:
      return value;
  }
};

const alignItems = style({
  prop: 'alignItems',
  transformValue: transformAlignCSS,
});

const alignSelf = style({
  prop: 'alignSelf',
  transformValue: transformAlignCSS,
});

function applyCSS() {
  return ({ css }: { css?: CSSType }) =>
    is.notExist(css) ? '' : cssFunc`${css}`;
}

export const BaseBox = styled.div`
  box-sizing: border-box;

  ${space}
  ${width}
  ${height}
  ${maxHeight}
  ${minHeight}
  ${maxWidth}
  ${minWidth}
  ${zIndex}

  ${display}
  ${flex};
  ${justifyContent}
  ${alignItems}
  ${alignSelf}
  ${flexDirection}
  ${flexWrap}
  ${flexGrow}

  ${textAlign}
  ${fontSize}
  ${lineHeight}
  ${fontWeight}

  ${border}
  ${borderBottom}
  ${borderLeft}
  ${borderRight}
  ${borderTop}
  ${borderRadius}
  ${borderColor}

  ${color}
  ${backgroundColor}
  ${boxShadow}
  ${opacity}

  ${position}
  ${top}
  ${bottom}
  ${left}
  ${right}

  ${overflow}
  ${overflowX}
  ${overflowY}

  ${cursor}
  ${transform}
  transition: ${`${getTransitionValue('all')}`};
  ${transition};

  ${applyCSS};
` as React.FC<IBaseBox>;

// Setting the type to the following will mess up type of 'color' prop
// StyledComponent<'div', ThemeType, IBaseBox>;
