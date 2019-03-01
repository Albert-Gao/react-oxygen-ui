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
exports.Button = ({ noDefaultHoverCSS, children, css, disabled, takeRef, ...rest }) => {
    const cssToAdd = `
    ${shared_1.getBaseButtonCSS(noDefaultHoverCSS || disabled)};
    ${shared_1.baseNonFlatButtonCSS};
    ${styles_1.getSafeCss(css)};
  `;
    return (<BaseBox_1.BaseBox as="button" border={0} borderColor="transparent" borderRadius={0} fontSize={styles_1.DEFAULT_FONT_SIZE.bodyHeading} px={styles_1.DEFAULT_SPACE.small} minHeight="44px" maxHeight="44px" bg="primary" color="white" css={cssToAdd} {...utils_1.getRefProp(takeRef)} {...rest}>
      {children}
    </BaseBox_1.BaseBox>);
};
