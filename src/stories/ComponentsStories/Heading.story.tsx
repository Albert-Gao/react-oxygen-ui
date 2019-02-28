import React from 'react';
import { Heading } from '../../components';
import { DEFAULT_SPACE } from '../../styles';
import { Knobs } from '../utils';

export const HeadingStory = () => {
  return (
    <Heading
      m={DEFAULT_SPACE.medium}
      size={Knobs.fontSizeKnob('size', 'heroHeading')}
    >
      Vensa.com
    </Heading>
  );
};
