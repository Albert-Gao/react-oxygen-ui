"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
exports.DEFAULT_SPACE = {
    none: 0,
    xxxxSmall: 1,
    xxxSmall: 2,
    xxSmall: 3,
    xSmall: 4,
    small: 5,
    medium: 6,
    large: 7,
    xLarge: 8,
    xxLarge: 9,
    xxxLarge: 10,
    xxxxLarge: 11,
};
exports.spaces = [
    0,
    base_1.baseSpacing / 2,
    base_1.baseSpacing,
    base_1.baseSpacing * 2,
    base_1.baseSpacing * 3,
    base_1.baseSpacing * 4,
    base_1.baseSpacing * 6,
    base_1.baseSpacing * 8,
    base_1.baseSpacing * 12,
    base_1.baseSpacing * 16,
    base_1.baseSpacing * 32,
    base_1.baseSpacing * 48,
];
