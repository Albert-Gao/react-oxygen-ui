import * as React from 'react';
import { IBaseBoxWithTakeRef } from '../Box/BaseBox.type';
import { Text } from './Text';

export const Heading: React.FC<IBaseBoxWithTakeRef> = ({
  children,
  as,
  ...rest
}) => (
  <Text as={as || 'h2'} fontWeight="bold" {...rest}>
    {children}
  </Text>
);
