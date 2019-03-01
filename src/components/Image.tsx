import * as React from 'react';
import { getSafeCss } from '../styles/utils';
import { getRefProp, is } from '../utils/utils';
import { BaseBox } from './Box/BaseBox';
import { IBaseBoxWithTakeRef } from './Box/BaseBox.type';

export interface IImage extends IBaseBoxWithTakeRef {
  src: string;
  alt?: string;
}

export const Image: React.FC<IImage> = ({ height, css, takeRef, ...rest }) => (
  <BaseBox
    as="img"
    height={is.notExist(height) ? 'auto' : height}
    css={`
      max-width: '100%';
      ${getSafeCss(css)};
    `}
    {...getRefProp(takeRef)}
    {...rest}
  />
);
