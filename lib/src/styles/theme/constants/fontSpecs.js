"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const fontSizing = (factor) => {
    const sizeNum = base_1.baseFontSize + factor * base_1.fontScale;
    const isHeader = sizeNum > 32;
    return {
        size: `${sizeNum}px`,
        lineHeight: isHeader ? 1.3 : 1.61803398875,
        // maxWidth chosen to be ~50 characters wide
        // see: https://ux.stackexchange.com/a/34125
        maxWidth: `${base_1.baseSpacing *
            4.8 *
            (base_1.baseFontSize + factor * base_1.fontScale)}px`,
    };
};
exports.DEFAULT_FONT_SIZE = {
    small: 0,
    body: 1,
    bodyHeading: 2,
    sectionHeading: 3,
    pageHeading: 4,
    mainHeading: 5,
    heroHeading: 6,
};
exports.fontSpecs = [
    fontSizing(-2),
    fontSizing(-1),
    fontSizing(0),
    fontSizing(4),
    fontSizing(8),
    fontSizing(16),
    fontSizing(24),
];
exports.fontSizes = exports.fontSpecs.map(spec => spec.size);
// 0: {size: "12px", lineHeight: 1.5, maxWidth: "460.79999999999995px"}
// 1: {size: "14px", lineHeight: 1.5, maxWidth: "537.6px"}
// 2: {size: "16px", lineHeight: 1.5, maxWidth: "614.4px"}
// 3: {size: "24px", lineHeight: 1.5, maxWidth: "921.5999999999999px"}
// 4: {size: "32px", lineHeight: 1.25, maxWidth: "1228.8px"}
// 5: {size: "48px", lineHeight: 1.25, maxWidth: "1843.1999999999998px"}
// 6: {size: "64px", lineHeight: 1.25, maxWidth: "2457.6px"}
