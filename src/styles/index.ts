import { Responsive } from '../components';
import { defaultTheme } from './theme/theme';


export type ThemeType = typeof defaultTheme;
export type SpaceType = Responsive;
export type FontSizeType = Responsive;
export type GradientType = keyof ThemeType['gradients'];
export type ColorType = string | string[];
export type FontWeightType = keyof ThemeType['fontWeights'];
export type BoxShadowType = number | number[];

export { DEFAULT_FONT_SIZE, fontSpecs } from './theme/constants/fontSpecs';
export { DEFAULT_SPACE } from './theme/constants/spaces';
export { DEFAULT_SIZE } from './theme/constants/sizes';
export { DEFAULT_COLORS } from './theme/constants/colors';
export { defaultTheme } from './theme/theme';
export * from './theme/theme.utils';

export {
  styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} from './styled';

export {
  getTransitionValue,
  getSafeValue,
  getSafeCss,
} from './utils';
