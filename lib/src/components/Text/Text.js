"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_system_1 = require("styled-system");
const fontSpecs_1 = require("../../styles/theme/constants/fontSpecs");
const utils_1 = require("../../utils/utils");
const BaseBox_1 = require("../Box/BaseBox");
function addStyleToResult(tempStyle, result, key) {
    if (utils_1.is.notExist(result[key])) {
        result[key] = [];
    }
    // @ts-ignore
    // tslint:disable-next-line: no-unsafe-any
    result[key].push(tempStyle[key]);
}
exports.getFontSpecStyle = (noDefaultLineHeight, isMaxWidthIncluded = false, size) => {
    if (utils_1.is.notExist(size)) {
        return {};
    }
    let result = {};
    if (Array.isArray(size)) {
        if (size.length === 1) {
            result = exports.getFontSpecStyle(noDefaultLineHeight, isMaxWidthIncluded, size[0]);
        }
        else {
            const temp = [];
            size.forEach(s => {
                const style = exports.getFontSpecStyle(noDefaultLineHeight, isMaxWidthIncluded, s);
                temp.push(style);
            });
            temp.forEach(tempStyle => {
                addStyleToResult(tempStyle, result, 'fontSize');
                if (!noDefaultLineHeight) {
                    addStyleToResult(tempStyle, result, 'lineHeight');
                }
                if (isMaxWidthIncluded) {
                    addStyleToResult(tempStyle, result, 'maxWidth');
                }
            });
        }
    }
    else {
        const fontSpecInTheme = fontSpecs_1.fontSpecs[size];
        const isInTheme = typeof fontSpecInTheme === 'object';
        if (isInTheme) {
            result = {
                fontSize: styled_system_1.px(fontSpecInTheme.size),
                lineHeight: fontSpecInTheme.lineHeight,
            };
            if (isMaxWidthIncluded) {
                result.maxWidth = styled_system_1.px(fontSpecInTheme.maxWidth);
            }
        }
        else {
            result = {
                fontSize: styled_system_1.px(size),
            };
        }
    }
    if (result === {}) {
        result = { fontSize: size };
    }
    return result;
};
exports.Text = ({ size, noDefaultLineHeight = false, takeRef, ...rest }) => (<BaseBox_1.BaseBox as="div" {...exports.getFontSpecStyle(noDefaultLineHeight, false, size)} {...utils_1.getRefProp(takeRef)} {...rest}/>);
