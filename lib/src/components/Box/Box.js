"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const utils_1 = require("../../utils/utils");
const BaseBox_1 = require("./BaseBox");
const StyledGapBox_1 = require("./StyledGapBox");
exports.Box = ({ fill, gap, direction, a11yTitle, children, takeRef, ...rest }) => {
    let fillProps = {};
    if (fill === true) {
        fillProps = {
            height: '100%',
            width: '100%',
        };
    }
    else if (fill === 'horizontal') {
        fillProps.width = '100%';
    }
    else if (fill === 'vertical') {
        fillProps.height = '100%';
    }
    let ariaTitle = {};
    if (a11yTitle) {
        ariaTitle = {
            'aria-label': a11yTitle,
        };
    }
    let cursor = {};
    if (utils_1.is.function(rest.onClick)) {
        cursor = {
            cursor: 'pointer',
            role: 'button',
        };
    }
    const contents = [];
    if (gap) {
        let firstIndex;
        react_1.Children.forEach(children, (child, index) => {
            if (child) {
                if (firstIndex === undefined) {
                    firstIndex = index;
                }
                else {
                    contents.push(<StyledGapBox_1.StyledGapBox key={index} gap={gap} direction={direction || 'row'}/>);
                }
            }
            contents.push(child);
        });
    }
    return (<BaseBox_1.BaseBox display="flex" {...ariaTitle} {...utils_1.getRefProp(takeRef)} {...rest} {...fillProps} {...cursor} direction={direction}>
      {contents.length > 0 ? contents : children}
    </BaseBox_1.BaseBox>);
};
