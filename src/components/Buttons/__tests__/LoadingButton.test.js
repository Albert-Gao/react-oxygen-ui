import 'jest-styled-components';
import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { LoadingButton } from '../LoadingButton';
import { ThemeProvider } from '../../../styles';

afterEach(cleanup);

describe('Test <LoadingButton />: ', () => {
  test('css prop should be added', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <LoadingButton css={'background-color: black;'} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();

    // the new css is there
    expect(firstChild).toHaveStyleRule('background-color', 'black');

    // the old css has been merged and not lost
    expect(firstChild).toHaveStyleRule('overflow', 'hidden');
  });

  test('undefined css prop should be ignored', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <LoadingButton css={undefined} />
      </ThemeProvider>,
    ).container;

    // invalid css prop will cause `undefined: ;` in result
    // which is invalid
    // so it won't pass this assertion
    expect(firstChild).toMatchSnapshot();
  });

  test('isLoading props works', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <LoadingButton isLoading />
      </ThemeProvider>,
    ).container;

    // invalid css prop will cause `undefined: ;` in result
    // which is invalid
    // so it won't pass this assertion
    expect(firstChild).toMatchSnapshot();

    // the img element
    expect(firstChild.firstChild).toHaveStyleRule(
      'transform',
      'translateX(-50%) translateY(-50%) scale(1)',
    );
  });
});
