import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

const WelcomeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

storiesOf('Welcome', module)
  .addParameters({ options: { showAddonPanel: false } })
  .add('Vensa Design System', () => (
    <WelcomeBox>
      <h2>Vensa Components Library</h2>
      <p>This is where we defined Vensa Design language.</p>
      <p>It includes 2 parts:</p>
      <ol>
        <li>
          Design spec: Things like color, spaces, font size, etc.
        </li>
        <li>Components: Button, Box, Text, etc.</li>
      </ol>
    </WelcomeBox>
  ));
