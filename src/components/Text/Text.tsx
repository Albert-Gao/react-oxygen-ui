import * as React from 'react';
import { getRefProp } from '../../utils/utils';
import { BaseBox } from '../Box/BaseBox';
import { IBaseBoxWithTakeRef } from '../Box/BaseBox.type';

export interface IText extends IBaseBoxWithTakeRef {}

export const Text: React.FC<IText> = ({ takeRef, ...rest }) => (
  <BaseBox as="div" {...getRefProp(takeRef)} {...rest} />
);
