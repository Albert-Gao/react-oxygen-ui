"use strict";

exports.__esModule = true;
exports.getMediaQueryStr = void 0;

require("jest-styled-components");

require("jest-dom/extend-expect");

var _react = _interopRequireDefault(require("react"));

var _reactTestingLibrary = require("react-testing-library");

var _Text = require("../Text/Text");

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getMediaQueryStr = function getMediaQueryStr(num) {
  return "screen and (min-width:" + num + "px)";
};

exports.getMediaQueryStr = getMediaQueryStr;
afterEach(_reactTestingLibrary.cleanup);
describe('Test <Text />: ', function () {
  test('size props === 7px works', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Text.Text, {
      size: "7px"
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('DIV');
    expect(firstChild).toHaveStyleRule('font-size', '7px'); // won't add line-height and max-width
    // because it's not included in fontSpecs
    // so we don't have predefined value for them

    expect(firstChild).not.toHaveStyleRule('line-height');
    expect(firstChild).not.toHaveStyleRule('max-width');
  });
  test('size props === heroHeading works', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Text.Text, {
      size: _styles.DEFAULT_FONT_SIZE.body
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('DIV');
    expect(firstChild).toHaveStyleRule('font-size', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.body].size);
    expect(firstChild).toHaveStyleRule('line-height', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.body].lineHeight.toString());
    expect(firstChild).not.toHaveStyleRule('max-width', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.body].maxWidth);
  });
  test('size props === [heroHeading] works', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Text.Text, {
      size: [_styles.DEFAULT_FONT_SIZE.body]
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('DIV');
    expect(firstChild).toHaveStyleRule('font-size', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.body].size);
    expect(firstChild).toHaveStyleRule('line-height', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.body].lineHeight.toString());
    expect(firstChild).not.toHaveStyleRule('max-width', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.body].maxWidth);
  });
  test('size props === [body, sectionHeading] works', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Text.Text, {
      size: [_styles.DEFAULT_FONT_SIZE.body, _styles.DEFAULT_FONT_SIZE.sectionHeading]
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('DIV'); // For DEFAULT_FONT_SIZE.body style

    expect(firstChild).toHaveStyleRule('font-size', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.body].size);
    expect(firstChild).toHaveStyleRule('line-height', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.body].lineHeight.toString());
    expect(firstChild).not.toHaveStyleRule('max-width'); // For DEFAULT_FONT_SIZE.sectionHeading style

    expect(firstChild).toHaveStyleRule('font-size', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.sectionHeading].size, {
      media: getMediaQueryStr(_styles.defaultTheme.breakpoints[0])
    });
    expect(firstChild).toHaveStyleRule('line-height', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.sectionHeading].lineHeight.toString(), {
      media: getMediaQueryStr(_styles.defaultTheme.breakpoints[0])
    });
    expect(firstChild).not.toHaveStyleRule('max-width');
  });
  test('size props === [body, sectionHeading] with noDefaultLineHeight works', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Text.Text, {
      noDefaultLineHeight: true,
      size: [_styles.DEFAULT_FONT_SIZE.body, _styles.DEFAULT_FONT_SIZE.sectionHeading]
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('DIV'); // For DEFAULT_FONT_SIZE.body style

    expect(firstChild).toHaveStyleRule('font-size', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.body].size);
    expect(firstChild).not.toHaveStyleRule('line-height');
    expect(firstChild).not.toHaveStyleRule('max-width'); // For DEFAULT_FONT_SIZE.sectionHeading style

    expect(firstChild).toHaveStyleRule('font-size', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.sectionHeading].size, {
      media: getMediaQueryStr(_styles.defaultTheme.breakpoints[0])
    });
    expect(firstChild).not.toHaveStyleRule('line-height', undefined, {
      media: getMediaQueryStr(_styles.defaultTheme.breakpoints[0])
    });
    expect(firstChild).not.toHaveStyleRule('max-width');
  });
  test('size props === [7px, sectionHeading] works', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Text.Text, {
      size: ['7px', _styles.DEFAULT_FONT_SIZE.sectionHeading]
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('DIV');
    expect(firstChild).toHaveStyleRule('font-size', '7px');
    expect(firstChild).not.toHaveStyleRule('line-height');
    expect(firstChild).not.toHaveStyleRule('max-width');
    expect(firstChild).toHaveStyleRule('font-size', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.sectionHeading].size, {
      media: getMediaQueryStr(_styles.defaultTheme.breakpoints[0])
    });
    expect(firstChild).toHaveStyleRule('line-height', _styles.fontSpecs[_styles.DEFAULT_FONT_SIZE.sectionHeading].lineHeight.toString(), {
      media: getMediaQueryStr(_styles.defaultTheme.breakpoints[0])
    });
  });
});