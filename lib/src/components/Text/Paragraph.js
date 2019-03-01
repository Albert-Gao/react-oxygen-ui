"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const __1 = require("../");
// It uses <Text /> under the hook, the main differences are it will
// add max-width to enforce a best practice in terms of readability.
// how many words a line.
exports.Paragraph = ({ size, noDefaultLineHeight = false, ...rest }) => (<__1.Text as="p" {...__1.getFontSpecStyle(noDefaultLineHeight, true, size)} {...rest}/>);
