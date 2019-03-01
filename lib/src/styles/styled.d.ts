import React from 'react';
import * as styledComponents from 'styled-components';
import { ITheme } from './theme/theme';
declare const ThemeProvider: React.FC<{
    theme: ITheme;
    children: React.ReactElement<any>;
}>;
declare const styled: styledComponents.ThemedBaseStyledInterface<ITheme>, css: styledComponents.BaseThemedCssFunction<ITheme>, createGlobalStyle: <P extends object = {}>(first: TemplateStringsArray | styledComponents.CSSObject | styledComponents.InterpolationFunction<styledComponents.ThemedStyledProps<P, ITheme>>, ...interpolations: styledComponents.Interpolation<styledComponents.ThemedStyledProps<P, ITheme>>[]) => styledComponents.GlobalStyleComponent<P, ITheme>, keyframes: (strings: TemplateStringsArray | styledComponents.CSSKeyframes, ...interpolations: styledComponents.SimpleInterpolation[]) => styledComponents.Keyframes;
export { styled, css, createGlobalStyle, keyframes, ThemeProvider };
