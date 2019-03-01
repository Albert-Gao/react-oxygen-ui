"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const components_1 = require("../../components");
const styles_1 = require("../../styles");
const utils_1 = require("../utils");
exports.FlatButtonStory = () => {
    return (<components_1.Box m={styles_1.DEFAULT_SPACE.medium}>
      So, we are about to{' '}
      <components_1.FlatButton onClick={utils_1.wrapAction('FlatButton clicked')}>
        Launching
      </components_1.FlatButton>
      , yeah!
    </components_1.Box>);
};
