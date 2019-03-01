"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("../../styles");
const Text_1 = require("./Text");
exports.Heading = ({ children, size, ...rest }) => {
    let tagName = 'h1';
    if (size === styles_1.DEFAULT_FONT_SIZE.heroHeading) {
        tagName = 'h1';
    }
    else if (size === styles_1.DEFAULT_FONT_SIZE.mainHeading) {
        tagName = 'h2';
    }
    else if (size === styles_1.DEFAULT_FONT_SIZE.pageHeading) {
        tagName = 'h3';
    }
    else if (size === styles_1.DEFAULT_FONT_SIZE.sectionHeading) {
        tagName = 'h4';
    }
    else if (size === styles_1.DEFAULT_FONT_SIZE.bodyHeading) {
        tagName = 'h5';
    }
    else {
        tagName = 'h6';
    }
    return (<Text_1.Text size={size} as={tagName} fontWeight="bold" {...rest}>
      {children}
    </Text_1.Text>);
};
