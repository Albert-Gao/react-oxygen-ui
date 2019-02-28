import React from 'react';
import {
  css as styledCSS,
  DEFAULT_SPACE,
  getSafeCss,
} from '../../styles';
import { getRefProp } from '../../utils/utils';
import { BaseBox } from '../Box/BaseBox';
import { IBaseBoxWithTakeRef, Responsive } from '../Box/BaseBox.type';

type InputTypes =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export interface IInput extends IBaseBoxWithTakeRef {
  type?: InputTypes;
  disabled?: boolean;
  width?: Responsive;
  height?: Responsive;
  value?: string | number;
  placeholder?: string | number;
  name?: string;

  onChange?: React.ReactEventHandler;
  onBlur?: React.ReactEventHandler;
}

export const Input: React.FC<IInput> = ({
  css,
  takeRef,
  ...rest
}) => (
  <BaseBox
    as="input"
    p={DEFAULT_SPACE.xxSmall}
    border={1}
    borderRadius={0}
    overflow="visible"
    flex="1 0 auto"
    css={styledCSS`
      outline: 0;
      ${getSafeCss(css)};
    `}
    {...getRefProp(takeRef)}
    {...rest}
  />
);
