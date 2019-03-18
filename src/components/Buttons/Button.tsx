import * as React from 'react';
import { getSafeCss } from '../../styles/utils';
import { getRefProp } from '../../utils/utils';
import { BaseBox } from '../Box/BaseBox';
import { IBaseBoxWithTakeRef } from '../Box/BaseBox.type';
import { baseButtonCSS } from './shared';
import { css as cssFunc } from 'styled-components';

export interface IButton extends IBaseBoxWithTakeRef {
  disabled?: boolean;
}

export const Button: React.FC<IButton> = ({
  children,
  css,
  disabled,
  takeRef,
  ...rest
}) => {
  const cssToAdd = cssFunc`
    ${baseButtonCSS};
    text-transform: uppercase;
    overflow: hidden;
    ${getSafeCss(css)};
  `;

  return (
    <BaseBox as="button" css={cssToAdd} {...getRefProp(takeRef)} {...rest}>
      {children}
    </BaseBox>
  );
};
