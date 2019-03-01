export interface INoDefaultHoverCSS {
    noDefaultHoverCSS?: boolean;
}
export declare const baseNonFlatButtonCSS = "\n  text-transform: uppercase;\n  overflow: hidden;\n";
export declare const getBaseButtonCSS: (hasNoDefaultHover: boolean | undefined) => string;
