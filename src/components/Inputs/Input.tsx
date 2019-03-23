import * as React from 'react';
import { getSafeCss } from '../../styles/utils';
import { getRefProp } from '../../utils/utils';
import { BaseBox } from '../Box/BaseBox';
import {
  IBaseBoxWithTakeRef,
  Responsive,
  NumberOrString,
} from '../Box/BaseBox.type';
import { css as cssFunc } from 'styled-components';

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

export interface ICommonInput {
  autoFocus?: boolean;
  readOnly?: boolean;
  required?: boolean;
  disabled?: boolean;

  name?: string;
  defaultValue?: NumberOrString;
  value?: NumberOrString;
  placeholder?: NumberOrString;

  maxLength?: number;

  onChange?: React.ReactEventHandler;
  onBlur?: React.ReactEventHandler;
}
export interface IInput extends IBaseBoxWithTakeRef, ICommonInput {
  type?: InputTypes;
  checked?: boolean;
  width?: Responsive;
  height?: Responsive;
}

export const Input: React.FC<IInput> = ({ css, takeRef, ...rest }) => (
  <BaseBox
    as="input"
    css={cssFunc`
      ${getSafeCss(css)};
    `}
    {...getRefProp(takeRef)}
    {...rest}
  />
);
