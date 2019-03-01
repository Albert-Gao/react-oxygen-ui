"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_system_1 = require("styled-system");
const styled_1 = require("../../styles/styled");
const utils_1 = require("../../styles/utils");
const utils_2 = require("../../utils/utils");
const lineHeight = styled_system_1.style({ prop: 'lineHeight' });
const cursor = styled_system_1.style({ prop: 'cursor' });
const transition = styled_system_1.style({ prop: 'transition' });
const transform = styled_system_1.style({ prop: 'transform' });
const flexGrow = styled_system_1.style({ prop: 'flexGrow' });
const flex = styled_system_1.style({ prop: 'flex' });
const overflowX = styled_system_1.style({ prop: 'overflowX' });
const overflowY = styled_system_1.style({ prop: 'overflowY' });
const flexDirection = styled_system_1.style({
    prop: 'direction',
    cssProperty: 'flexDirection',
});
const justifyContent = styled_system_1.style({
    prop: 'justifyContent',
    transformValue: (value) => {
        switch (value) {
            case 'start':
            case 'end':
                return `flex-${value}`;
            case 'between':
            case 'around':
                return `space-${value}`;
            default:
                return value;
        }
    },
});
const transformAlignCSS = (value) => {
    switch (value) {
        case 'start':
        case 'end':
            return `flex-${value}`;
        default:
            return value;
    }
};
const alignItems = styled_system_1.style({
    prop: 'alignItems',
    transformValue: transformAlignCSS,
});
const alignSelf = styled_system_1.style({
    prop: 'alignSelf',
    transformValue: transformAlignCSS,
});
function applyCSS() {
    return ({ css }) => utils_2.is.notExist(css) ? '' : styled_1.css `${css}`;
}
exports.BaseBox = styled_1.styled.div `
  box-sizing: border-box;

  ${styled_system_1.space}
  ${styled_system_1.width}
  ${styled_system_1.height}
  ${styled_system_1.maxHeight}
  ${styled_system_1.minHeight}
  ${styled_system_1.maxWidth}
  ${styled_system_1.minWidth}
  ${styled_system_1.zIndex}

  ${styled_system_1.display}
  ${flex};
  ${justifyContent}
  ${alignItems}
  ${alignSelf}
  ${flexDirection}
  ${styled_system_1.flexWrap}
  ${flexGrow}

  ${styled_system_1.textAlign}
  ${styled_system_1.fontSize}
  ${lineHeight}
  ${styled_system_1.fontWeight}

  ${styled_system_1.border}
  ${styled_system_1.borderBottom}
  ${styled_system_1.borderLeft}
  ${styled_system_1.borderRight}
  ${styled_system_1.borderTop}
  ${styled_system_1.borderRadius}
  ${styled_system_1.borderColor}

  ${styled_system_1.color}
  ${styled_system_1.backgroundColor}
  ${styled_system_1.boxShadow}
  ${styled_system_1.opacity}

  ${styled_system_1.position}
  ${styled_system_1.top}
  ${styled_system_1.bottom}
  ${styled_system_1.left}
  ${styled_system_1.right}

  ${styled_system_1.overflow}
  ${overflowX}
  ${overflowY}

  ${cursor}
  ${transform}
  transition: ${`${utils_1.getTransitionValue('all')}`};
  ${transition};

  ${applyCSS};
`;
// Setting the type to the following will mess up type of 'color' prop
//StyledComponent<'div', ThemeType, IBaseBox>;
