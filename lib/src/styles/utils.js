"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_system_1 = require("styled-system");
const utils_1 = require("../utils/utils");
exports.getMediaQuery = (screenSize, css) => `${styled_system_1.createMediaQuery(screenSize)} {
    ${css};
  }`;
exports.getTransitionValue = (propertyNames = 'transform') => `${propertyNames} 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63);`;
function getSafeValue(target, defaultValue) {
    return utils_1.is.notExist(target) ? defaultValue : target;
}
exports.getSafeValue = getSafeValue;
function getSafeCss(target) {
    return getSafeValue(target, '');
}
exports.getSafeCss = getSafeCss;
