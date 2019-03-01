"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const components_1 = require("../../components");
const styles_1 = require("../../styles");
const utils_1 = require("../utils");
exports.TextStory = () => {
    return (<components_1.Text m={styles_1.DEFAULT_SPACE.medium} fontWeight={utils_1.Knobs.fontWeightKnob()} size={utils_1.Knobs.fontSizeKnob('size')}>
      To date our platform has
    </components_1.Text>);
};
