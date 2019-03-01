import { FlattenInterpolation } from 'styled-components';
import { CSSType } from '../components/Box/BaseBox.type';
export declare const getMediaQuery: (screenSize: number, css: string | FlattenInterpolation<import("./theme/theme").ITheme>) => string;
export declare const getTransitionValue: (propertyNames?: string) => string;
export declare function getSafeValue<T>(target: unknown, defaultValue: T): unknown;
export declare function getSafeCss(target?: CSSType): CSSType;
