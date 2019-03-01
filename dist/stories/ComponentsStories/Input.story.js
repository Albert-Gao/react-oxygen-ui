"use strict";

exports.__esModule = true;
exports.InputStory = void 0;

var _addonKnobs = require("@storybook/addon-knobs");

var _react = _interopRequireDefault(require("react"));

var _components = require("../../components");

var _utils = require("../utils");

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputStory = function InputStory() {
  return _react.default.createElement(_components.Input, {
    name: (0, _addonKnobs.text)('name', 'nameInput'),
    m: _styles.DEFAULT_SPACE.medium,
    height: _utils.Knobs.sizeKnob('height', 'small'),
    width: _utils.Knobs.sizeKnob('width', 'xxLarge'),
    ml: _styles.DEFAULT_SPACE.small,
    disabled: (0, _addonKnobs.boolean)('disabled', false),
    value: (0, _addonKnobs.text)('value', 'input value'),
    placeholder: (0, _addonKnobs.text)('placeholder', 'placeholder')
  });
};

exports.InputStory = InputStory;