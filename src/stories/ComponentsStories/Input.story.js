import { boolean, text } from '@storybook/addon-knobs';
import React from 'react';
import { Input } from '../../components';
import { Knobs } from '../utils';
import { DEFAULT_SPACE } from '../../styles';

export const InputStory = () => {
  return (
    <Input
      name={text('name', 'nameInput')}
      m={DEFAULT_SPACE.medium}
      height={Knobs.sizeKnob('height', 'small')}
      width={Knobs.sizeKnob('width', 'xxLarge')}
      ml={DEFAULT_SPACE.small}
      disabled={boolean('disabled', false)}
      value={text('value', 'input value')}
      placeholder={text('placeholder', 'placeholder')}
    />
  );
};
