import React from 'react';
import { getFontSpecStyle, IText, Text } from '../';

// It uses <Text /> under the hook, the main differences are it will
// add max-width to enforce a best practice in terms of readability.
// how many words a line.
export const Paragraph: React.FC<IText> = ({
  size,
  noDefaultLineHeight = false,
  ...rest
}) => (
  <Text
    as="p"
    {...getFontSpecStyle(noDefaultLineHeight, true, size)}
    {...rest}
  />
);
