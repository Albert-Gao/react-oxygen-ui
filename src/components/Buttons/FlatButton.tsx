import * as React from 'react';
import { getSafeCss } from '../../styles/utils';
import { getRefProp } from '../../utils/utils';
import { BaseBox } from '../Box/BaseBox';
import { IBaseBoxWithTakeRef } from '../Box/BaseBox.type';
import { IButton } from './Button';
import { baseButtonCSS } from './shared';

export interface IFlatButton extends IBaseBoxWithTakeRef, IButton {}

export const FlatButton: React.FC<IFlatButton> = ({
  children,
  css,
  takeRef,
  ...rest
}) => (
  <BaseBox
    as="a"
    fontSize="inherit"
    css={`
      ${baseButtonCSS};
      ${getSafeCss(css)};
    `}
    {...getRefProp(takeRef)}
    {...rest}
  >
    {children}
  </BaseBox>
);
