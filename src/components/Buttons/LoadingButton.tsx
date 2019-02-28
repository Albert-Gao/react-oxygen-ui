import React from 'react';
import { DEFAULT_SPACE, getSafeCss } from '../../styles';
import { getRefProp } from '../../utils/utils';
import { BaseBox } from '../Box/BaseBox';
import { IBaseBoxWithTakeRef } from '../Box/BaseBox.type';
import { Image } from '../Image';
import { IButton } from './Button';
import {
  baseNonFlatButtonCSS,
  getBaseButtonCSS,
  INoDefaultHoverCSS,
} from './shared';
import threeDots from './threeDots.svg';

export interface ILoadingButton
  extends IBaseBoxWithTakeRef,
    INoDefaultHoverCSS,
    IButton {
  isLoading?: boolean;
}

export const LoadingButton: React.FC<ILoadingButton> = ({
  isLoading,
  noDefaultHoverCSS,
  children,
  css,
  takeRef,
  ...rest
}) => {
  const cssToAdd = `
    ${isLoading ? 'pointer-events: none' : ''};
    ${getBaseButtonCSS(noDefaultHoverCSS)};
    ${baseNonFlatButtonCSS};
    ${getSafeCss(css)};
  `;

  const a11y = {
    'aria-hidden': 'true',
  };

  return (
    <BaseBox
      as="button"
      position="relative"
      border={0}
      borderColor="transparent"
      borderRadius={0}
      fontSize="bodyHeading"
      px={DEFAULT_SPACE.small}
      minHeight="44px"
      maxHeight="44px"
      bg="primary"
      color="white"
      css={cssToAdd}
      {...getRefProp(takeRef)}
      {...rest}
    >
      <Image
        position="absolute"
        left="50%"
        top="50%"
        src={threeDots}
        alt="loading spinner"
        height="8px"
        opacity={isLoading ? 1 : 0}
        {...a11y}
        transform={
          isLoading
            ? 'translateX(-50%) translateY(-50%) scale(1)'
            : 'translateX(-50%) translateY(-50%) scale(3)'
        }
      />
      <BaseBox
        opacity={isLoading ? 0 : 1}
        transform={isLoading ? 'scale(0.3)' : 'scale(1)'}
      >
        {children}
      </BaseBox>
    </BaseBox>
  );
};
