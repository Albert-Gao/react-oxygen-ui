import { baseSpacing } from './base';

export const DEFAULT_SPACE = {
  none: 0,
  xxxxSmall: 1, // 4
  xxxSmall: 2, // 8
  xxSmall: 3, // 16
  xSmall: 4, // 24
  small: 5, // 32
  medium: 6, // 48
  large: 7, // 64
  xLarge: 8, // 96
  xxLarge: 9, // 128
  xxxLarge: 10, // 256
  xxxxLarge: 11, // 512
};

export const spaces = [
  0,
  baseSpacing / 2, // xxxxsmall 4px
  baseSpacing, // xxxsmall 8px
  baseSpacing * 2, // xxsmall 16px
  baseSpacing * 3, // xsmall 24px
  baseSpacing * 4, // small 32px
  baseSpacing * 6, // medium 48px
  baseSpacing * 8, // large 64px
  baseSpacing * 12, // xlarge 96px
  baseSpacing * 16, // xxlarge 128px
  baseSpacing * 32, // xxxlarge 256px
  baseSpacing * 48, // xxxxlarge 384px
];
