import React from 'react';
import { getSafeCss } from '../styles';
import { getRefProp, is } from '../utils/utils';
import { BaseBox } from './Box/BaseBox';
import { IBaseBoxWithTakeRef } from './Box/BaseBox.type';

export interface IImage extends IBaseBoxWithTakeRef {
  src: string;
  alt?: string;
}

export const Image: React.FC<IImage> = ({
  height,
  css,
  takeRef,
  ...rest
}) => (
  <BaseBox
    as="img"
    maxWidth="100%"
    height={is.notExist(height) ? 'auto' : height}
    css={`
      object-fit: contain;
      ${getSafeCss(css)};
    `}
    {...getRefProp(takeRef)}
    {...rest}
  />
);
