"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_system_1 = require("styled-system");
const styled_1 = require("../../styles/styled");
const utils_1 = require("../../styles/utils");
const utils_2 = require("../../utils/utils");
const getGapStyle = (direction, gap, theme) => {
    const styles = [];
    const themeValue = theme.space[gap];
    const isInTheme = typeof themeValue === 'number';
    const space = isInTheme ? `${themeValue}px` : styled_system_1.px(gap);
    if (direction === 'column') {
        styles.push(`height: ${space};`);
    }
    else if (direction === 'row') {
        styles.push(`width: ${space};`);
    }
    else if (Array.isArray(direction) && direction.length > 0) {
        direction.forEach((dir, index) => {
            if (!utils_2.is.notExist(theme.breakpoints[index])) {
                const breakPoint = theme.breakpoints[index];
                const toAdd = getGapStyle(dir, gap, theme);
                const responsiveCSS = utils_1.getMediaQuery(breakPoint, toAdd);
                styles.push(`
          ${index === 0 ? toAdd : ''};
          ${responsiveCSS};
        `);
            }
        });
    }
    return styles;
};
exports.StyledGapBox = styled_1.styled.div `
  flex: 0 0 auto;
  ${({ gap, direction, theme }) => {
    if (gap) {
        return getGapStyle(direction, gap, theme);
    }
}};
`;
