import * as React from 'react';
import { IBaseBoxWithTakeRef } from '../Box/BaseBox.type';
import { Text } from './Text';

export const Paragraph: React.FC<IBaseBoxWithTakeRef> = props => (
  <Text as="p" {...props} />
);
