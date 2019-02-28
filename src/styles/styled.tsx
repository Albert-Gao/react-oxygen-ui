import React from 'react';
import * as styledComponents from 'styled-components';
// tslint:disable-next-line:no-duplicate-imports
import { ThemedStyledComponentsModule } from 'styled-components';
import { ThemeType } from './index';
import { defaultTheme, ITheme } from './theme/theme';

const ThemeProvider: React.FC<{
  theme: ITheme;
  // tslint:disable-next-line:no-any
  children: React.ReactElement<any>;
}> = ({ theme, children }) => (
  <styledComponents.ThemeProvider theme={theme || defaultTheme}>
    {children}
  </styledComponents.ThemeProvider>
);

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
} = styledComponents as ThemedStyledComponentsModule<ThemeType>;

export { styled, css, createGlobalStyle, keyframes, ThemeProvider };
