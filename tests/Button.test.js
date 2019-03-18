import 'jest-styled-components';
import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Button } from '../src/components/Buttons/Button';
import { defaultTheme } from '../src/styles/IThemeType';
import { TestThemeProvider as ThemeProvider } from './utils';
import { css as cssFunc } from 'styled-components';

afterEach(cleanup);

describe('Test <Button />: ', () => {
  test('fontSize should be added', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Button fontSize="23px" />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();

    // the new css is there
    expect(firstChild).toHaveStyleRule('font-size', '23px');
  });
});

describe('Test <Button css={}/>: ', () => {
  test('css prop should be added', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Button css={'background-color: black;'} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('background-color', 'black');
  });

  test('css prop (object) should be handled', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Button css={{ backgroundColor: 'black', paddingLeft: '1023px' }} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('background-color', 'black');
    expect(firstChild).toHaveStyleRule('padding-left', '1023px');
  });

  test('css prop (css string) should be handled', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Button
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
