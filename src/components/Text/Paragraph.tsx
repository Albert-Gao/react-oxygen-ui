import * as React from 'react';
import { IBaseBoxWithTakeRef } from '../Box/BaseBox.type';
import { IText, Text } from './Text';

export interface IParagraph extends IText {}

export const Paragraph: React.FC<IParagraph> = props => (
  <Text as="p" {...props} />
);
