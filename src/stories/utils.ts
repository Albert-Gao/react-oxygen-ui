import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import { Responsive } from '../components';
import {
  ColorType,
  DEFAULT_FONT_SIZE,
  DEFAULT_SIZE,
  DEFAULT_SPACE,
  defaultTheme,
  FontWeightType,
} from '../styles';

export function arrayToObject<T>(
  data: T[],
  keyToMap?: string[],
): { [id: string]: T } {
  if (!data || data.length === 0) {
    return {};
  }

  const result: { [id: string]: T } = {};
  data.forEach((item, index) => {
    const i = keyToMap ? keyToMap[index] : index;
    result[i] = item;
  });

  return result;
}

// We wrap the action to prevent been display in addon-jsx
export function wrapAction(actionName: string) {
  const wrapped = action(actionName);
  wrapped.toString = () => `action('${actionName}')`;

  return wrapped;
}

const keyOfColors = Object.keys(defaultTheme.colors) as ColorType[];

export const Knobs = {
  spacesKnob: (propName: string, defaultValue: number = 2) =>
    select<number>(propName, DEFAULT_SPACE, defaultValue),

  colorKnob: (
    propName: string,
    defaultValue: ColorType = 'primary',
  ) =>
    select<string>(
      propName,
      arrayToObject<string>(
        keyOfColors as string[],
        keyOfColors as string[],
      ),
      defaultValue,
    ),

  fontWeightKnob: (defaultValue: FontWeightType = 'regular') =>
    select(
      'fontWeight',
      {
        thin: 'thin',
        light: 'light',
        regular: 'regular',
        medium: 'medium',
        bold: 'bold',
        black: 'black',
      },
      defaultValue,
    ),

  fontSizeKnob: (
    propName: string = 'fontSize',
    defaultValue: Responsive = 1,
    // @ts-ignore
  ) => select(propName, DEFAULT_FONT_SIZE, defaultValue),

  sizeKnob: (
    propName: string,
    defaultValue: keyof typeof DEFAULT_SIZE = 'medium',
  ) => select(propName, DEFAULT_SIZE, DEFAULT_SIZE[defaultValue]),
};
