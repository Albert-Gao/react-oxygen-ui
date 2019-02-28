import React from 'react';
import { Text } from '../../components';
import { DEFAULT_SPACE } from '../../styles';
import { Knobs } from '../utils';

export const TextStory = () => {
  return (
    <Text
      m={DEFAULT_SPACE.medium}
      fontWeight={Knobs.fontWeightKnob()}
      size={Knobs.fontSizeKnob('size')}
    >
      To date our platform has
    </Text>
  );
};
