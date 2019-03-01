import * as CSS from 'csstype';
import { px } from 'styled-system';
import styled from 'styled-components';
import { getMediaQuery } from '../../styles/utils';
import { is } from '../../utils/utils';
import { Responsive, SingleOrArray } from './BaseBox.type';
import { ITheme } from '../../styles/IThemeType';

const defaultBreakpoints: string[] = [40, 52, 64].map(n => n + 'em');

const getGapStyle = (
  direction: SingleOrArray<CSS.FlexDirectionProperty>,
  gap: Responsive,
  theme: ITheme,
) => {
  const styles = [];
  const space = px(gap);

  if (direction === 'column') {
    styles.push(`height: ${space};`);
  } else if (direction === 'row') {
    styles.push(`width: ${space};`);
  } else if (Array.isArray(direction) && direction.length > 0) {
    direction.forEach((dir, index) => {
      let breakPoint;

      if (!is.notExist(theme.breakpoints[index])) {
        breakPoint = theme.breakpoints[index];
      } else if (!is.notExist(defaultBreakpoints[index])) {
        breakPoint = defaultBreakpoints[index];
      }

      if (!is.notExist(breakPoint)) {
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
