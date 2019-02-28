import { boolean, text } from '@storybook/addon-knobs';
import React from 'react';
import { Button } from '../../components';
import { DEFAULT_SPACE } from '../../styles';
import { wrapAction } from '../utils';

export const ButtonStory = () => {
  return (
    <Button
      disabled={boolean('disabled', false)}
      m={DEFAULT_SPACE.medium}
      onClick={wrapAction('button clicked')}
    >
      {text('text', 'Launching')}
    </Button>
  );
};
