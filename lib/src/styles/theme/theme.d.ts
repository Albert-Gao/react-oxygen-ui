import { IFontSpecType } from './constants/fontSpecs';
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
export declare const defaultTheme: ITheme;
