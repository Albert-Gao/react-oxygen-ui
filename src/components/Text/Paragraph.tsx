import * as React from 'react';
import { Text } from './Text';
import { IBaseBoxWithTakeRef } from '../Box/BaseBox.type';

export const Paragraph: React.FC<IBaseBoxWithTakeRef> = props => (
  <Text as="p" {...props} />
);
