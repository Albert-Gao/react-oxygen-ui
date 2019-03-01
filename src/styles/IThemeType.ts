//
// The following are the expected properties for your styled-components' theme object
// styled-system depends on them to provide you all the conveniences
//
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

type NumberOrString = number | string;

type ObjectOrArray<T> =
  | {
      [propName: string]: T;
    }
  | T[];

export interface ITheme {
  breakpoints: NumberOrString[];
  fontSizes: NumberOrString[];
  colors: { [colorName: string]: string };
  space: NumberOrString[];
  fontWeights: ObjectOrArray<number>;
  lineHeights?: ObjectOrArray<NumberOrString>;
  borders: ObjectOrArray<NumberOrString>;
  radii: ObjectOrArray<string>;
  shadows: ObjectOrArray<string>;
  opacity: ObjectOrArray<string>;
  gradients?: object;
}

export const defaultTheme: ITheme = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: ['12px', '14px', '16px', '24px', '30px', '36px', '48px'],
  colors: {
    white: 'white',
  },
  fontWeights: [100, 300, 400, 500, 700, 900],
  borders: [0, '1px solid'],
  radii: ['4px'],
  shadows: [
    '0px 1px 2px rgba(0,0,0,0.20)',
    '0px 2px 4px rgba(0,0,0,0.20)',
    '0px 4px 8px rgba(0,0,0,0.20)',
    '0px 8px 16px rgba(0,0,0,0.20)',
    '0px 12px 24px rgba(0,0,0,0.20)',
  ],
  opacity: [],
  space: [0, 4, 8, 16, 24, 32, 48, 64, 96, 128, 256, 512],
};
