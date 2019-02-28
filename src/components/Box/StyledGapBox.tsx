import * as CSS from 'csstype';
import { px } from 'styled-system';
import { ThemeType } from '../../styles';
import { styled } from '../../styles/styled';
import { getMediaQuery } from '../../styles/utils';
import { is } from '../../utils/utils';
import { Responsive, SingleOrArray } from './BaseBox.type';

type ThemeSpaceIndex = keyof ThemeType['space'];

const getGapStyle = (
  direction: SingleOrArray<CSS.FlexDirectionProperty>,
  gap: Responsive,
  theme: ThemeType,
) => {
  const styles = [];

  const themeValue = theme.space[gap as ThemeSpaceIndex];
  const isInTheme = typeof themeValue === 'number';
  const space = isInTheme ? `${themeValue}px` : px(gap);

  if (direction === 'column') {
    styles.push(`height: ${space};`);
  } else if (direction === 'row') {
    styles.push(`width: ${space};`);
  } else if (Array.isArray(direction) && direction.length > 0) {
    direction.forEach((dir, index) => {
      if (!is.notExist(theme.breakpoints[index])) {
        const breakPoint = theme.breakpoints[index];
        const toAdd = getGapStyle(dir, gap, theme);
        const responsiveCSS = getMediaQuery(breakPoint, toAdd);

        styles.push(`
          ${index === 0 ? toAdd : ''};
          ${responsiveCSS};
        `);
      }
    });
  }

  return styles;
};

export const StyledGapBox = styled.div<{
  direction: SingleOrArray<CSS.FlexDirectionProperty>;
  gap: Responsive;
}>`
  flex: 0 0 auto;
  ${({ gap, direction, theme }) => {
    if (gap) {
      return getGapStyle(direction, gap, theme);
    }
  }};
`;
