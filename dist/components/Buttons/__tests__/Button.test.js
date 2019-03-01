"use strict";

require("jest-styled-components");

require("jest-dom/extend-expect");

var _react = _interopRequireDefault(require("react"));

var _reactTestingLibrary = require("react-testing-library");

var _Button = require("../Button");

var _styles = require("../../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

afterEach(_reactTestingLibrary.cleanup);
describe('Test <Button />: ', function () {
  test('fontSize should be added', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Button.Button, {
      fontSize: _styles.DEFAULT_FONT_SIZE.mainHeading
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot(); // the new css is there

    expect(firstChild).toHaveStyleRule('font-size', _styles.defaultTheme.fontSizes[_styles.DEFAULT_FONT_SIZE.mainHeading]);
  });
});