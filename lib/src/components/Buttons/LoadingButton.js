"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("../../styles");
const utils_1 = require("../../utils/utils");
const BaseBox_1 = require("../Box/BaseBox");
const Image_1 = require("../Image");
const shared_1 = require("./shared");
const threeDots_svg_1 = __importDefault(require("./threeDots.svg"));
exports.LoadingButton = ({ isLoading, noDefaultHoverCSS, children, css, takeRef, ...rest }) => {
    const cssToAdd = `
    ${isLoading ? 'pointer-events: none' : ''};
    ${shared_1.getBaseButtonCSS(noDefaultHoverCSS)};
    ${shared_1.baseNonFlatButtonCSS};
    ${styles_1.getSafeCss(css)};
  `;
    const a11y = {
        'aria-hidden': 'true',
    };
    return (<BaseBox_1.BaseBox as="button" position="relative" border={0} borderColor="transparent" borderRadius={0} fontSize="bodyHeading" px={styles_1.DEFAULT_SPACE.small} minHeight="44px" maxHeight="44px" bg="primary" color="white" css={cssToAdd} {...utils_1.getRefProp(takeRef)} {...rest}>
      <Image_1.Image position="absolute" left="50%" top="50%" src={threeDots_svg_1.default} alt="loading spinner" height="8px" opacity={isLoading ? 1 : 0} {...a11y} transform={isLoading
        ? 'translateX(-50%) translateY(-50%) scale(1)'
        : 'translateX(-50%) translateY(-50%) scale(3)'}/>
      <BaseBox_1.BaseBox opacity={isLoading ? 0 : 1} transform={isLoading ? 'scale(0.3)' : 'scale(1)'}>
        {children}
      </BaseBox_1.BaseBox>
    </BaseBox_1.BaseBox>);
};
