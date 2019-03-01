"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("../../styles");
const utils_1 = require("../../utils/utils");
const BaseBox_1 = require("../Box/BaseBox");
exports.Input = ({ css, takeRef, ...rest }) => (<BaseBox_1.BaseBox as="input" p={styles_1.DEFAULT_SPACE.xxSmall} border={1} borderRadius={0} overflow="visible" flex="1 0 auto" css={styles_1.css `
      outline: 0;
      ${styles_1.getSafeCss(css)};
    `} {...utils_1.getRefProp(takeRef)} {...rest}/>);
