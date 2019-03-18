import 'jest-styled-components';
import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Text } from '../src/components/Text/Text';
import { TestThemeProvider as ThemeProvider } from './utils';
import { css as cssFunc } from 'styled-components';

afterEach(cleanup);

describe('Test <Text css={}/>: ', () => {
  test('css prop should be added', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Text css={'background-color: black;'} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('background-color', 'black');
  });

  test('css prop (object) should be handled', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Text css={{ backgroundColor: 'black', paddingLeft: '1023px' }} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('background-color', 'black');
    expect(firstChild).toHaveStyleRule('padding-left', '1023px');
  });

  test('css prop (css string) should be handled', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Text
          css={cssFunc`
          background-color: black;
          padding-left: 1023px;
          `}
        />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('background-color', 'black');
    expect(firstChild).toHaveStyleRule('padding-left', '1023px');
  });
});
