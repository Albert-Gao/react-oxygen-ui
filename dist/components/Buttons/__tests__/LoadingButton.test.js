"use strict";

require("jest-styled-components");

require("jest-dom/extend-expect");

var _react = _interopRequireDefault(require("react"));

var _reactTestingLibrary = require("react-testing-library");

var _LoadingButton = require("../LoadingButton");

var _styles = require("../../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

afterEach(_reactTestingLibrary.cleanup);
describe('Test <LoadingButton />: ', function () {
  test('css prop should be added', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_LoadingButton.LoadingButton, {
      css: 'background-color: black;'
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot(); // the new css is there

    expect(firstChild).toHaveStyleRule('background-color', 'black'); // the old css has been merged and not lost

    expect(firstChild).toHaveStyleRule('overflow', 'hidden');
  });
  test('undefined css prop should be ignored', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_LoadingButton.LoadingButton, {
      css: undefined
    }))).container.firstChild; // invalid css prop will cause `undefined: ;` in result
    // which is invalid
    // so it won't pass this assertion

    expect(firstChild).toMatchSnapshot();
  });
  test('isLoading props works', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_LoadingButton.LoadingButton, {
      isLoading: true
    }))).container.firstChild; // invalid css prop will cause `undefined: ;` in result
    // which is invalid
    // so it won't pass this assertion

    expect(firstChild).toMatchSnapshot(); // the img element

    expect(firstChild.firstChild).toHaveStyleRule('transform', 'translateX(-50%) translateY(-50%) scale(1)');
  });
});