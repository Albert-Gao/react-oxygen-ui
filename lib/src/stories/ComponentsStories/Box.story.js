"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addon_knobs_1 = require("@storybook/addon-knobs");
const react_1 = __importDefault(require("react"));
const components_1 = require("../../components");
const utils_1 = require("../utils");
const ChildrenBox = ({ children }) => (<components_1.Box bg="iron" justifyContent="center" border={0} color="white" borderColor="pacific">
    {children}
  </components_1.Box>);
exports.BoxStory = () => {
    return (<components_1.Box onClick={utils_1.wrapAction('1Box clicked')} m={utils_1.Knobs.spacesKnob('m')} p={utils_1.Knobs.spacesKnob('p')} border={addon_knobs_1.text('border', '5px solid')} height={utils_1.Knobs.sizeKnob('height', 'xxLarge')} width={utils_1.Knobs.sizeKnob('width', 'xxLarge')} borderColor={utils_1.Knobs.colorKnob('borderColor')} bg={utils_1.Knobs.colorKnob('bg', 'grey1')} boxShadow={addon_knobs_1.select('boxShadow', {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
    }, 0)} fill={addon_knobs_1.select('fill', {
        // @ts-ignore
        true: true,
        false: false,
        horizontal: 'horizontal',
        vertical: 'vertical',
    }, false)} direction={addon_knobs_1.select('direction', { row: 'row', column: 'column' }, 'column')} 
    // @ts-ignore
    justifyContent={addon_knobs_1.select('justifyContent', {
        start: 'flex-start',
        end: 'flex-end',
        center: 'center',
        between: 'space-between',
        around: 'space-around',
    }, 'flex-start')} 
    // @ts-ignore
    alignItems={addon_knobs_1.select('alignItems', {
        start: 'flex-start',
        end: 'flex-end',
        center: 'center',
        baseline: 'baseline',
        stretch: 'stretch',
    }, 'stretch')} fontSize={utils_1.Knobs.fontSizeKnob()} fontWeight={utils_1.Knobs.fontWeightKnob()} gap={utils_1.Knobs.spacesKnob('gap', 1)}>
      <ChildrenBox>A</ChildrenBox>
      <ChildrenBox>B</ChildrenBox>
      <ChildrenBox>C</ChildrenBox>
      <ChildrenBox>D</ChildrenBox>
    </components_1.Box>);
};
