import 'jest-styled-components';
import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { FlatButton } from '../src/components/Buttons/FlatButton';
import { TestThemeProvider as ThemeProvider } from './utils';
import { css as cssFunc } from 'styled-components';

afterEach(cleanup);

describe('Test <FlatButton />: ', () => {
  test('css prop should be added', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <FlatButton css={'background-color: black;'} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();

    // the new css is there
    expect(firstChild).toHaveStyleRule('background-color', 'black');

    // the old css has been merged and not lost
    expect(firstChild).toHaveStyleRule('white-space', 'nowrap');
  });

  test('[FlatButton] undefined css prop should be ignored', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <FlatButton css={undefined} />
      </ThemeProvider>,
    ).container;

    // invalid css prop will cause `undefined: ;` in result
    // which is invalid
    // so it won't pass this assertion
    expect(firstChild).toMatchSnapshot();
  });
});

describe('Test <FlatButton css={}/>: ', () => {
  test('css prop should be added', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <FlatButton css={'background-color: black;'} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('background-color', 'black');
  });

  test('css prop (object) should be handled', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <FlatButton css={{ backgroundColor: 'black', paddingLeft: '1023px' }} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('background-color', 'black');
    expect(firstChild).toHaveStyleRule('padding-left', '1023px');
  });

  test('css prop (css string) should be handled', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <FlatButton
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
