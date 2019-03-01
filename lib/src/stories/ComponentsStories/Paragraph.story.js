"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const components_1 = require("../../components");
const styles_1 = require("../../styles");
const utils_1 = require("../utils");
exports.ParagraphStory = () => {
    return (<components_1.Paragraph m={styles_1.DEFAULT_SPACE.medium} fontWeight={utils_1.Knobs.fontWeightKnob()} size={utils_1.Knobs.fontSizeKnob('size')}>
      To date our platform has delivered over 41 million health
      reminders for medical centres and practice teams across New
      Zealand. Vensa.com is designed to seamlessly take medical
      centres on a digital transformation journey. This journey looks
      to transforms the current way of working to provide new
      efficiencies and to facilitate more access, provide more
      convenience and create more affordable health services. We are
      currently on a journey with 70% of General Practice in New
      Zealand to take them through this exciting new phase of
      medicine. We will also to be taking this journey to Australia in
      2018.
    </components_1.Paragraph>);
};
