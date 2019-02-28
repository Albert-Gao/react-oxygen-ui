import 'jest-styled-components';
import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { FlatButton } from '../FlatButton';
import { ThemeProvider } from '../../../styles';

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
