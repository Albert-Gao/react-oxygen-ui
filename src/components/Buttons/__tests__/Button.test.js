import 'jest-styled-components';
import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Button } from '../Button';
import {
  ThemeProvider,
  DEFAULT_FONT_SIZE,
  defaultTheme,
} from '../../../styles';

afterEach(cleanup);

describe('Test <Button />: ', () => {
  test('fontSize should be added', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Button fontSize={DEFAULT_FONT_SIZE.mainHeading} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();

    // the new css is there
    expect(firstChild).toHaveStyleRule(
      'font-size',
      defaultTheme.fontSizes[DEFAULT_FONT_SIZE.mainHeading],
    );
  });
});
