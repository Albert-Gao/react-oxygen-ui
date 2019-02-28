import 'jest-styled-components';
import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Heading } from '../Text/Heading';
import {
  ThemeProvider,
  fontSpecs,
  DEFAULT_FONT_SIZE,
  defaultTheme,
} from '../../styles';
import { getMediaQueryStr } from './Text.test';

afterEach(cleanup);

describe('Test <Headings />: ', () => {
  test('size props === heroHeading works', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Heading size={DEFAULT_FONT_SIZE.heroHeading} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('H1');
    expect(firstChild).toHaveStyleRule(
      'font-size',
      fontSpecs[DEFAULT_FONT_SIZE.heroHeading].size,
    );
  });

  test('size props === bodyHeading works', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Heading size={DEFAULT_FONT_SIZE.bodyHeading} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('H5');
    expect(firstChild).toHaveStyleRule(
      'font-size',
      fontSpecs[DEFAULT_FONT_SIZE.bodyHeading].size,
    );
  });

  test('size props === [body, sectionHeading] works', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Heading size={[DEFAULT_FONT_SIZE.body, DEFAULT_FONT_SIZE.sectionHeading]} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('H6');

    expect(firstChild).toHaveStyleRule(
      'font-size',
      fontSpecs[DEFAULT_FONT_SIZE.body].size,
    );
    expect(firstChild).toHaveStyleRule(
      'line-height',
      fontSpecs[DEFAULT_FONT_SIZE.body].lineHeight.toString(),
    );
    expect(firstChild).not.toHaveStyleRule();

    expect(firstChild).toHaveStyleRule(
      'font-size',
      fontSpecs[DEFAULT_FONT_SIZE.sectionHeading].size,
      {
        media: getMediaQueryStr(defaultTheme.breakpoints[0]),
      },
    );

    expect(firstChild).toHaveStyleRule(
      'line-height',
      fontSpecs[DEFAULT_FONT_SIZE.sectionHeading].lineHeight.toString(),
      {
        media: getMediaQueryStr(defaultTheme.breakpoints[0]),
      },
    );

    expect(firstChild).not.toHaveStyleRule('max-width');
  });

  test('size props === [7px, sectionHeading] works', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Heading size={['7px', DEFAULT_FONT_SIZE.sectionHeading]} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('H6');

    expect(firstChild).toHaveStyleRule('font-size', '7px');
    expect(firstChild).not.toHaveStyleRule('line-height');
    expect(firstChild).not.toHaveStyleRule('max-width');

    expect(firstChild).toHaveStyleRule(
      'font-size',
      fontSpecs[DEFAULT_FONT_SIZE.sectionHeading].size,
      {
        media: getMediaQueryStr(defaultTheme.breakpoints[0]),
      },
    );

    expect(firstChild).toHaveStyleRule(
      'line-height',
      fontSpecs[DEFAULT_FONT_SIZE.sectionHeading].lineHeight.toString(),
      {
        media: getMediaQueryStr(defaultTheme.breakpoints[0]),
      },
    );

    expect(firstChild).not.toHaveStyleRule('max-width');
  });
});
