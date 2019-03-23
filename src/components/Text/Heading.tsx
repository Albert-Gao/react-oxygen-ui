import * as React from 'react';
import { IBaseBoxWithTakeRef } from '../Box/BaseBox.type';
import { IText, Text } from './Text';

export interface IHeading extends IText {}

export const Heading: React.FC<IHeading> = ({ children, as, ...rest }) => (
  <Text as={as || 'h2'} fontWeight="bold" {...rest}>
    {children}
  </Text>
);
