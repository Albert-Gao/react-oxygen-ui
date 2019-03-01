"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const components_1 = require("../../components");
const styles_1 = require("../../styles");
const utils_1 = require("../utils");
exports.ImageStory = () => (<components_1.Image m={styles_1.DEFAULT_SPACE.xLarge} src="https://cdn-images-1.medium.com/max/1200/1*eXIBeNlLhz4Pe6vDrYkXLQ.png" height={utils_1.Knobs.sizeKnob('height', 'xLarge')} width={utils_1.Knobs.sizeKnob('width', 'xLarge')} alt="css3"/>);
