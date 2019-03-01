import { FlattenInterpolation } from 'styled-components';
import { createMediaQuery } from 'styled-system';
import { CSSType } from '../components/Box/BaseBox.type';
import { is } from '../utils/utils';
import { ITheme } from './IThemeType';

export const getMediaQuery = (
  screenSize: number | string,
  css: string | FlattenInterpolation<ITheme>,
) =>
  `${createMediaQuery(screenSize)} {
    ${css};
  }`;

export const getTransitionValue = (propertyNames: string = 'transform') =>
  `${propertyNames} 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63);`;

export function getSafeValue<T>(target: unknown, defaultValue: T) {
  return is.notExist(target) ? defaultValue : target;
}

export function getSafeCss(target?: CSSType) {
  return getSafeValue(target, '') as CSSType;
}
