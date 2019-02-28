import { baseFontSize, baseSpacing, fontScale } from './base';

export interface IFontSpecType {
  size: string;
  lineHeight: number;
  maxWidth: string;
}

const fontSizing = (factor: number): IFontSpecType => {
  const sizeNum = baseFontSize + factor * fontScale;
  const isHeader = sizeNum > 32;

  return {
    size: `${sizeNum}px`,
    lineHeight: isHeader ? 1.3 : 1.61803398875,
    // maxWidth chosen to be ~50 characters wide
    // see: https://ux.stackexchange.com/a/34125
    maxWidth: `${baseSpacing *
      4.8 *
      (baseFontSize + factor * fontScale)}px`,
  };
};

export const DEFAULT_FONT_SIZE = {
  small: 0, // 12px
  body: 1, // 14px
  bodyHeading: 2, // 16px
  sectionHeading: 3, // 24 px
  pageHeading: 4, // 30 px
  mainHeading: 5, // 36 px
  heroHeading: 6, // 48 px
};

export const fontSpecs: IFontSpecType[] = [
  fontSizing(-2), // xsmall 12
  fontSizing(-1), // small 14
  fontSizing(0), // regular 16
  fontSizing(4), // sectionHeader 24
  fontSizing(8), // subPageHeader 32
  fontSizing(16), // mainHeading 48
  fontSizing(24), // jumbo 64
];

export const fontSizes = fontSpecs.map(spec => spec.size);

// 0: {size: "12px", lineHeight: 1.5, maxWidth: "460.79999999999995px"}
// 1: {size: "14px", lineHeight: 1.5, maxWidth: "537.6px"}
// 2: {size: "16px", lineHeight: 1.5, maxWidth: "614.4px"}
// 3: {size: "24px", lineHeight: 1.5, maxWidth: "921.5999999999999px"}
// 4: {size: "32px", lineHeight: 1.25, maxWidth: "1228.8px"}
// 5: {size: "48px", lineHeight: 1.25, maxWidth: "1843.1999999999998px"}
// 6: {size: "64px", lineHeight: 1.25, maxWidth: "2457.6px"}
