"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addon_knobs_1 = require("@storybook/addon-knobs");
const react_1 = __importDefault(require("react"));
const components_1 = require("../../components");
const styles_1 = require("../../styles");
const utils_1 = require("../utils");
exports.ButtonStory = () => {
    return (<components_1.Button disabled={addon_knobs_1.boolean('disabled', false)} m={styles_1.DEFAULT_SPACE.medium} onClick={utils_1.wrapAction('button clicked')}>
      {addon_knobs_1.text('text', 'Launching')}
    </components_1.Button>);
};
