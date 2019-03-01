import * as React from 'react';
import { Text } from './Text';
import { IBaseBoxWithTakeRef } from '../Box/BaseBox.type';

export const Heading: React.FC<IBaseBoxWithTakeRef> = ({
  children,
  as,
  ...rest
}) => (
  <Text as={as || 'h2'} fontWeight="bold" {...rest}>
    {children}
  </Text>
);
