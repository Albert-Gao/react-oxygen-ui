import React from 'react';
import { Box, FlatButton } from '../../components';
import { DEFAULT_SPACE } from '../../styles';
import { wrapAction } from '../utils';

export const FlatButtonStory = () => {
  return (
    <Box m={DEFAULT_SPACE.medium}>
      So, we are about to{' '}
      <FlatButton onClick={wrapAction('FlatButton clicked')}>
        Launching
      </FlatButton>
      , yeah!
    </Box>
  );
};
