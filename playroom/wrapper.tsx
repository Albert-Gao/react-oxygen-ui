import React from "react";
import { StyleSheetManager } from "styled-components";
import { ThemeProvider } from "styled-components";
import { defaultTheme, ITheme } from "./sourceCopy/styles/IThemeType";

export default ({
  theme,
  children,
  frameWindow
}: {
  theme: ITheme;
  children: React.ReactElement<unknown>;
  frameWindow: typeof window;
}) => (
  <StyleSheetManager target={frameWindow.document.head}>
    <ThemeProvider theme={theme || defaultTheme}>{children}</ThemeProvider>
  </StyleSheetManager>
);
