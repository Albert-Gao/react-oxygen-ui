import * as React from 'react';
import { getSafeCss } from '../../styles/utils';
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

export const Input: React.FC<IInput> = ({ css, takeRef, ...rest }) => (
  <BaseBox
    as="input"
    css={`
      ${getSafeCss(css)};
    `}
    {...getRefProp(takeRef)}
    {...rest}
  />
);
