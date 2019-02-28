import React from 'react';
import {
  css as cssFunc,
  DEFAULT_FONT_SIZE,
  DEFAULT_SPACE,
  getSafeCss,
} from '../../styles';
import { getRefProp } from '../../utils/utils';
import { BaseBox } from '../Box/BaseBox';
import { IBaseBoxWithTakeRef } from '../Box/BaseBox.type';
import {
  baseNonFlatButtonCSS,
  getBaseButtonCSS,
  INoDefaultHoverCSS,
} from './shared';

export interface IButton
  extends IBaseBoxWithTakeRef,
    INoDefaultHoverCSS {
  disabled?: boolean;
}

export const Button: React.FC<IButton> = ({
  noDefaultHoverCSS,
  children,
  css,
  disabled,
  takeRef,
  ...rest
}) => {
  const cssToAdd = `
    ${getBaseButtonCSS(noDefaultHoverCSS || disabled)};
    ${baseNonFlatButtonCSS};
    ${getSafeCss(css)};
  `;

  return (
    <BaseBox
      as="button"
      border={0}
      borderColor="transparent"
      borderRadius={0}
      fontSize={DEFAULT_FONT_SIZE.bodyHeading}
      px={DEFAULT_SPACE.small}
      minHeight="44px"
      maxHeight="44px"
      bg="primary"
      color="white"
      css={cssToAdd}
      {...getRefProp(takeRef)}
      {...rest}
    >
      {children}
    </BaseBox>
  );
};
