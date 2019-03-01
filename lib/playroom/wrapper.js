"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = require("styled-components");
const index_1 = require("./sourceCopy/index");
exports.default = ({ theme, children, frameWindow, }) => (<styled_components_1.StyleSheetManager target={frameWindow.document.head}>
    <index_1.ThemeProvider theme={theme}>{children}</index_1.ThemeProvider>
  </styled_components_1.StyleSheetManager>);
