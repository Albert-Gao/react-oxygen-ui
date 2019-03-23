import * as React from 'react';
import { NumberOrString } from '../Box/BaseBox.type';
import { ICommonInput, Input } from './Input';

export interface ITextarea extends ICommonInput {
  cols?: number;
  rows?: number;
}

export const Textarea: React.FC<ITextarea> = props => (
  <Input as="textarea" {...props} />
);
