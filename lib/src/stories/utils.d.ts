import { Responsive } from '../components';
export declare function arrayToObject<T>(data: T[], keyToMap?: string[]): {
    [id: string]: T;
};
export declare function wrapAction(actionName: string): import("@storybook/addon-actions").HandlerFunction;
export declare const Knobs: {
    spacesKnob: (propName: string, defaultValue?: number) => number;
    colorKnob: (propName: string, defaultValue?: string | string[]) => string;
    fontWeightKnob: (defaultValue?: string | number) => string | number | (string | number)[];
    fontSizeKnob: (propName?: string, defaultValue?: Responsive) => any;
    sizeKnob: (propName: string, defaultValue?: "small" | "medium" | "large" | "xxSmall" | "xSmall" | "xLarge" | "xxLarge" | "xxxLarge" | "xxxxLarge") => string;
};
