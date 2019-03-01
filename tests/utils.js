import React from "react";
import { ThemeProvider as SThemeProvider } from "styled-components";
import { defaultTheme } from "../src/styles/IThemeType";

export const TestThemeProvider = ({ children }) => (
  <SThemeProvider theme={defaultTheme}>{children}</SThemeProvider>
);
