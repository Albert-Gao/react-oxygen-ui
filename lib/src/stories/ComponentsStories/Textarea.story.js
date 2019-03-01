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
exports.TextareaStory = () => {
    return (<components_1.Textarea name={addon_knobs_1.text('name', 'nameInput')} m={styles_1.DEFAULT_SPACE.medium} ml={styles_1.DEFAULT_SPACE.small} height={utils_1.Knobs.sizeKnob('height')} width={utils_1.Knobs.sizeKnob('width', 'xxLarge')} disabled={addon_knobs_1.boolean('disabled', false)} placeholder={addon_knobs_1.text('placeholder', 'placeholder')}/>);
};
