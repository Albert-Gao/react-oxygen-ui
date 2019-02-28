// [Key]	        [Type]	          [Description]
// breakpoints	  Array	            Array of viewport widths to use for min-width media queries
// fontSizes	    Array	            Array of numbers to use as a typographic scale
// colors	        Object	          Color names that can be used in color, bg, and borderColor props
// space	        Array	            Array of numbers for use as margin and pixel values
// fonts	        Array or Object	  Values for the fontFamily prop
// fontWeights	  Array or Object	  Values for fontWeight prop
// lineHeights	  Array or Object	  Values for lineHeight prop
// letterSpacings	Array or Object	  Values for letterSpacing prop
// shadows	      Array or Object	  Values for boxShadow prop
// borders	      Array or Object	  Values for border props
// radii	        Array or Object	  Values for borderRadius props
// opacity	      Array or Object	  Values for opacity props

import { colors } from './constants/colors';
import {
  fontSizes,
  fontSpecs,
  IFontSpecType,
} from './constants/fontSpecs';
import { spaces as space } from './constants/spaces';

export interface ITheme {
  breakpoints: number[];

  fontSpecs: IFontSpecType[];
  fontSizes: IFontSpecType['size'][];

  space: number[];
  colors: {
    [colorName: string]: string;
    primary: string;
  };

  fontWeights: {
    [fontWeightName: string]: number;
  };

  borders: (number | string)[];

  radii: string[];

  shadows: string[];

  gradients: object;
}

export const defaultTheme: ITheme = {
  breakpoints: [768, 1024],

  fontSpecs,
  fontSizes,

  space,
  colors,

  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },

  borders: [0, '1px solid'],

  radii: ['4px'],

  shadows: [
    '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
    '0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3)',
    '0 8px 17px 2px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2)',
    '0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -7px rgba(0,0,0,0.2)',
    '0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2)',

    '0px 1px 2px rgba(0,0,0,0.20)',
    '0px 2px 4px rgba(0,0,0,0.20)',
    '0px 4px 8px rgba(0,0,0,0.20)',
    '0px 8px 16px rgba(0,0,0,0.20)',
    '0px 12px 24px rgba(0,0,0,0.20)',
  ],

  gradients: {
    backgroundGradient:
      'linear-gradient(to bottom right, #33CCCC, #07A3C8)',
    buttonGradient: 'linear-gradient(to right, #FFB58D, #F58F8F)',
    adGradient: 'linear-gradient(to bottom, #FFC138, #FF9729)',
  },
};
