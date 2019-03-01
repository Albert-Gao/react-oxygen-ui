"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styledComponents = __importStar(require("styled-components"));
const theme_1 = require("./theme/theme");
const ThemeProvider = ({ theme, children }) => (<styledComponents.ThemeProvider theme={theme || theme_1.defaultTheme}>
    {children}
  </styledComponents.ThemeProvider>);
exports.ThemeProvider = ThemeProvider;
const { default: styled, css, createGlobalStyle, keyframes, } = styledComponents;
exports.styled = styled;
exports.css = css;
exports.createGlobalStyle = createGlobalStyle;
exports.keyframes = keyframes;
