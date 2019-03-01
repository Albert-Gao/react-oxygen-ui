"use strict";

require("jest-styled-components");

require("jest-dom/extend-expect");

var _react = _interopRequireDefault(require("react"));

var _reactTestingLibrary = require("react-testing-library");

var _Heading = require("../Text/Heading");

var _styles = require("../../styles");

var _Text = require("./Text.test");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

afterEach(_reactTestingLibrary.cleanup);
describe('Test <Headings />: ', function () {
  test('size props === heroHeading works', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Heading.Heading, {
      size: _styles.DEFAULT_FONT_SIZE.heroHeading
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('H1');
    expect(firstChild).toHaveStyleRule('font-size', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.heroHeading].size);
  });
  test('size props === bodyHeading works', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Heading.Heading, {
      size: _styles.DEFAULT_FONT_SIZE.bodyHeading
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('H5');
    expect(firstChild).toHaveStyleRule('font-size', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.bodyHeading].size);
  });
  test('size props === [body, sectionHeading] works', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Heading.Heading, {
      size: [_styles.DEFAULT_FONT_SIZE.body, _styles.DEFAULT_FONT_SIZE.sectionHeading]
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('H6');
    expect(firstChild).toHaveStyleRule('font-size', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.body].size);
    expect(firstChild).toHaveStyleRule('line-height', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.body].lineHeight.toString());
    expect(firstChild).not.toHaveStyleRule();
    expect(firstChild).toHaveStyleRule('font-size', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.sectionHeading].size, {
      media: (0, _Text.getMediaQueryStr)(_styles.defaultTheme.breakpoints[0])
    });
    expect(firstChild).toHaveStyleRule('line-height', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.sectionHeading].lineHeight.toString(), {
      media: (0, _Text.getMediaQueryStr)(_styles.defaultTheme.breakpoints[0])
    });
    expect(firstChild).not.toHaveStyleRule('max-width');
  });
  test('size props === [7px, sectionHeading] works', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Heading.Heading, {
      size: ['7px', _styles.DEFAULT_FONT_SIZE.sectionHeading]
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('H6');
    expect(firstChild).toHaveStyleRule('font-size', '7px');
    expect(firstChild).not.toHaveStyleRule('line-height');
    expect(firstChild).not.toHaveStyleRule('max-width');
    expect(firstChild).toHaveStyleRule('font-size', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.sectionHeading].size, {
      media: (0, _Text.getMediaQueryStr)(_styles.defaultTheme.breakpoints[0])
    });
    expect(firstChild).toHaveStyleRule('line-height', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.sectionHeading].lineHeight.toString(), {
      media: (0, _Text.getMediaQueryStr)(_styles.defaultTheme.breakpoints[0])
    });
    expect(firstChild).not.toHaveStyleRule('max-width');
  });
});