"use strict";

require("jest-styled-components");

require("jest-dom/extend-expect");

var _react = _interopRequireDefault(require("react"));

var _reactTestingLibrary = require("react-testing-library");

var _Image = require("../Image");

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

afterEach(_reactTestingLibrary.cleanup);
describe('Test <Image />: ', function () {
  test('css prop should be added', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Image.Image, {
      css: 'background-color: black;'
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot(); // the new css is there

    expect(firstChild).toHaveStyleRule('background-color', 'black'); // the old css has been merged and not lost

    expect(firstChild).toHaveStyleRule('object-fit', 'contain');
    expect(firstChild.tagName).toEqual('IMG');
  });
});