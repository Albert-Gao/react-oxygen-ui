"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("../../styles");
const utils_1 = require("../../utils/utils");
const BaseBox_1 = require("../Box/BaseBox");
const shared_1 = require("./shared");
exports.FlatButton = ({ noDefaultHoverCSS, children, css, takeRef, ...rest }) => (<BaseBox_1.BaseBox as="a" fontSize="inherit" px={styles_1.DEFAULT_SPACE.xxSmall} color="primary" css={`
      ${shared_1.getBaseButtonCSS(noDefaultHoverCSS)};
      ${styles_1.getSafeCss(css)};
    `} {...utils_1.getRefProp(takeRef)} {...rest}>
    {children}
  </BaseBox_1.BaseBox>);
