import 'jest-styled-components';
import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Input } from '../Inputs/Input';
import { ThemeProvider } from '../../styles';

afterEach(cleanup);

describe('Test <Input />: ', () => {
  test('css prop should be added', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Input css={'background-color: black;'} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();

    // the new css is there
    expect(firstChild).toHaveStyleRule('background-color', 'black');

    // the old css has been merged and not lost
    expect(firstChild).toHaveStyleRule('outline', '0');

    expect(firstChild.tagName).toEqual('INPUT');
  });
});
