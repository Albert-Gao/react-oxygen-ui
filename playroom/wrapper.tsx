import React from 'react';
import { StyleSheetManager } from 'styled-components';
import { ThemeProvider } from './sourceCopy/index';
import { ITheme } from './sourceCopy/styles/theme/theme';

export default ({
  theme,
  children,
  frameWindow,
}: {
  theme: ITheme;
  children: React.ReactElement<unknown>;
  frameWindow: typeof window;
}) => (
  <StyleSheetManager target={frameWindow.document.head}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </StyleSheetManager>
);
