import { defaultTheme, ITheme } from './theme';

export const createTheme = ({
  breakpoints,
  fontSpecs,
  fontSizes,
  space,
  colors,
  fontWeights,
  borders,
  radii,
  shadows,
  gradients,
}: Partial<ITheme>): ITheme => ({
  breakpoints: breakpoints || defaultTheme.breakpoints,
  fontSpecs: fontSpecs || defaultTheme.fontSpecs,
  fontSizes: fontSizes || defaultTheme.fontSizes,
  space: space || defaultTheme.space,
  colors: colors || defaultTheme.colors,
  fontWeights: fontWeights || defaultTheme.fontWeights,
  borders: borders || defaultTheme.borders,
  radii: radii || defaultTheme.radii,
  shadows: shadows || defaultTheme.shadows,
  gradients: gradients || defaultTheme.gradients,
});
