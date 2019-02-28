import { boolean, text } from '@storybook/addon-knobs';
import React from 'react';
import { LoadingButton } from '../../components';
import { DEFAULT_SPACE } from '../../styles';
import { wrapAction } from '../utils';

export const LoadingButtonStory = () => {
  return (
    <LoadingButton
      m={DEFAULT_SPACE.medium}
      isLoading={boolean('isLoading', false)}
      onClick={wrapAction('button clicked')}
    >
      {text('text', 'Launching')}
    </LoadingButton>
  );
};
