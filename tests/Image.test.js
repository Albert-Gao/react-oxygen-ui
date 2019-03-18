import 'jest-styled-components';
import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Image } from '../src/components/Image';
import { TestThemeProvider as ThemeProvider } from './utils';
import { css as cssFunc } from 'styled-components';

afterEach(cleanup);

describe('Test <Image />: ', () => {
  test('css prop should be added', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Image css={'background-color: black;'} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();

    // the new css is there
    expect(firstChild).toHaveStyleRule('background-color', 'black');

    expect(firstChild.tagName).toEqual('IMG');
  });
});

describe('Test <Image css={}/>: ', () => {
  test('css prop should be added', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Image css={'background-color: black;'} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('background-color', 'black');
  });

  test('css prop (object) should be handled', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Image css={{ backgroundColor: 'black', paddingLeft: '1023px' }} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('background-color', 'black');
    expect(firstChild).toHaveStyleRule('padding-left', '1023px');
  });

  test('css prop (css string) should be handled', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Image
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
