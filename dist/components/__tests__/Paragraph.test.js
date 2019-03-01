"use strict";

require("jest-styled-components");

require("jest-dom/extend-expect");

var _react = _interopRequireDefault(require("react"));

var _reactTestingLibrary = require("react-testing-library");

var _Paragraph = require("../Text/Paragraph");

var _styles = require("../../styles");

var _Text = require("./Text.test");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

afterEach(_reactTestingLibrary.cleanup);
describe('Test <Paragraph />: ', function () {
  test('size props === heroHeading works', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Paragraph.Paragraph, {
      size: _styles.DEFAULT_FONT_SIZE.heroHeading
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('P');
    expect(firstChild).toHaveStyleRule('font-size', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.heroHeading].size);
    expect(firstChild).toHaveStyleRule('line-height', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.heroHeading].lineHeight.toString());
    expect(firstChild).toHaveStyleRule('max-width', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.heroHeading].maxWidth);
  });
  test('size props === [body, sectionHeading] works', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Paragraph.Paragraph, {
      size: [_styles.DEFAULT_FONT_SIZE.body, _styles.DEFAULT_FONT_SIZE.sectionHeading]
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('P');
    expect(firstChild).toHaveStyleRule('font-size', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.body].size);
    expect(firstChild).toHaveStyleRule('line-height', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.body].lineHeight.toString());
    expect(firstChild).toHaveStyleRule('max-width', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.body].maxWidth);
    expect(firstChild).toHaveStyleRule('font-size', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.sectionHeading].size, {
      media: (0, _Text.getMediaQueryStr)(_styles.defaultTheme.breakpoints[0])
    });
    expect(firstChild).toHaveStyleRule('line-height', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.sectionHeading].lineHeight.toString(), {
      media: (0, _Text.getMediaQueryStr)(_styles.defaultTheme.breakpoints[0])
    });
    expect(firstChild).toHaveStyleRule('max-width', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.sectionHeading].maxWidth, {
      media: (0, _Text.getMediaQueryStr)(_styles.defaultTheme.breakpoints[0])
    });
  });
  test('size props === [7px, sectionHeading] works', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Paragraph.Paragraph, {
      size: ['7px', _styles.DEFAULT_FONT_SIZE.sectionHeading]
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('P');
    expect(firstChild).toHaveStyleRule('font-size', '7px');
    expect(firstChild).not.toHaveStyleRule('line-height');
    expect(firstChild).not.toHaveStyleRule('max-width');
    expect(firstChild).toHaveStyleRule('font-size', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.sectionHeading].size, {
      media: (0, _Text.getMediaQueryStr)(_styles.defaultTheme.breakpoints[0])
    });
    expect(firstChild).toHaveStyleRule('line-height', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.sectionHeading].lineHeight.toString(), {
      media: (0, _Text.getMediaQueryStr)(_styles.defaultTheme.breakpoints[0])
    });
    expect(firstChild).toHaveStyleRule('max-width', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.sectionHeading].maxWidth, {
      media: (0, _Text.getMediaQueryStr)(_styles.defaultTheme.breakpoints[0])
    });
  });
});