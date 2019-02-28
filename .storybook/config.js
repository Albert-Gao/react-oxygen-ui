import React from 'react';
import { setAddon, configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import 'normalize.css';
import './baseStyle.css';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../src/styles';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);
addDecorator(fn => (
  <ThemeProvider theme={defaultTheme}>{fn()}</ThemeProvider>
));
addDecorator(withOptions({ showAddonPanel: true }));

function loadStories() {
  require('./Welcome.stories');
  require('../src/stories/DesignSpecs.stories');
  require('../src/stories/Components.stories');
}

configure(loadStories, module);
