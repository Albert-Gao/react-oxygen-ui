"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addon_actions_1 = require("@storybook/addon-actions");
const addon_knobs_1 = require("@storybook/addon-knobs");
const styles_1 = require("../styles");
function arrayToObject(data, keyToMap) {
    if (!data || data.length === 0) {
        return {};
    }
    const result = {};
    data.forEach((item, index) => {
        const i = keyToMap ? keyToMap[index] : index;
        result[i] = item;
    });
    return result;
}
exports.arrayToObject = arrayToObject;
// We wrap the action to prevent been display in addon-jsx
function wrapAction(actionName) {
    const wrapped = addon_actions_1.action(actionName);
    wrapped.toString = () => `action('${actionName}')`;
    return wrapped;
}
exports.wrapAction = wrapAction;
const keyOfColors = Object.keys(styles_1.defaultTheme.colors);
exports.Knobs = {
    spacesKnob: (propName, defaultValue = 2) => addon_knobs_1.select(propName, styles_1.DEFAULT_SPACE, defaultValue),
    colorKnob: (propName, defaultValue = 'primary') => addon_knobs_1.select(propName, arrayToObject(keyOfColors, keyOfColors), defaultValue),
    fontWeightKnob: (defaultValue = 'regular') => addon_knobs_1.select('fontWeight', {
        thin: 'thin',
        light: 'light',
        regular: 'regular',
        medium: 'medium',
        bold: 'bold',
        black: 'black',
    }, defaultValue),
    fontSizeKnob: (propName = 'fontSize', defaultValue = 1) => addon_knobs_1.select(propName, styles_1.DEFAULT_FONT_SIZE, defaultValue),
    sizeKnob: (propName, defaultValue = 'medium') => addon_knobs_1.select(propName, styles_1.DEFAULT_SIZE, styles_1.DEFAULT_SIZE[defaultValue]),
};
