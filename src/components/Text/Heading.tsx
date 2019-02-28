import React from 'react';
import { DEFAULT_FONT_SIZE } from '../../styles';
import { IText, Text } from './Text';

export const Heading: React.FC<IText> = ({
  children,
  size,
  ...rest
}) => {
  let tagName: keyof JSX.IntrinsicElements = 'h1';

  if (size === DEFAULT_FONT_SIZE.heroHeading) {
    tagName = 'h1';
  } else if (size === DEFAULT_FONT_SIZE.mainHeading) {
    tagName = 'h2';
  } else if (size === DEFAULT_FONT_SIZE.pageHeading) {
    tagName = 'h3';
  } else if (size === DEFAULT_FONT_SIZE.sectionHeading) {
    tagName = 'h4';
  } else if (size === DEFAULT_FONT_SIZE.bodyHeading) {
    tagName = 'h5';
  } else {
    tagName = 'h6';
  }

  return (
    <Text size={size} as={tagName} fontWeight="bold" {...rest}>
      {children}
    </Text>
  );
};
