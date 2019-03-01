"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("../styles");
const utils_1 = require("../utils/utils");
const BaseBox_1 = require("./Box/BaseBox");
exports.Image = ({ height, css, takeRef, ...rest }) => (<BaseBox_1.BaseBox as="img" maxWidth="100%" height={utils_1.is.notExist(height) ? 'auto' : height} css={`
      object-fit: contain;
      ${styles_1.getSafeCss(css)};
    `} {...utils_1.getRefProp(takeRef)} {...rest}/>);
