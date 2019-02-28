import { boolean, text } from '@storybook/addon-knobs';
import React from 'react';
import { Textarea } from '../../components';
import { DEFAULT_SPACE } from '../../styles';
import { Knobs } from '../utils';

export const TextareaStory = () => {
  return (
    <Textarea
      name={text('name', 'nameInput')}
      m={DEFAULT_SPACE.medium}
      ml={DEFAULT_SPACE.small}
      height={Knobs.sizeKnob('height')}
      width={Knobs.sizeKnob('width', 'xxLarge')}
      disabled={boolean('disabled', false)}
      placeholder={text('placeholder', 'placeholder')}
    />
  );
};
