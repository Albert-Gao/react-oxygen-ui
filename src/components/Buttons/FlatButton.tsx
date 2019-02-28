import React from 'react';
import { DEFAULT_SPACE, getSafeCss } from '../../styles';
import { getRefProp } from '../../utils/utils';
import { BaseBox } from '../Box/BaseBox';
import { IBaseBoxWithTakeRef } from '../Box/BaseBox.type';
import { IButton } from './Button';
import { getBaseButtonCSS, INoDefaultHoverCSS } from './shared';

export interface IFlatButton
  extends IBaseBoxWithTakeRef,
    INoDefaultHoverCSS,
    IButton {}

export const FlatButton: React.FC<IFlatButton> = ({
  noDefaultHoverCSS,
  children,
  css,
  takeRef,
  ...rest
}) => (
  <BaseBox
    as="a"
    fontSize="inherit"
    px={DEFAULT_SPACE.xxSmall}
    color="primary"
    css={`
      ${getBaseButtonCSS(noDefaultHoverCSS)};
      ${getSafeCss(css)};
    `}
    {...getRefProp(takeRef)}
    {...rest}
  >
    {children}
  </BaseBox>
);
