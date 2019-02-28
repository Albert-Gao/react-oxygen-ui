import { select, text } from '@storybook/addon-knobs';
import React from 'react';
import { Box } from '../../components';
import { Knobs, wrapAction } from '../utils';

const ChildrenBox: React.FC = ({ children }) => (
  <Box
    bg="iron"
    justifyContent="center"
    border={0}
    color="white"
    borderColor="pacific"
  >
    {children}
  </Box>
);

export const BoxStory = () => {
  return (
    <Box
      onClick={wrapAction('1Box clicked')}
      m={Knobs.spacesKnob('m')}
      p={Knobs.spacesKnob('p')}
      border={text('border', '5px solid')}
      height={Knobs.sizeKnob('height', 'xxLarge')}
      width={Knobs.sizeKnob('width', 'xxLarge')}
      borderColor={Knobs.colorKnob('borderColor')}
      bg={Knobs.colorKnob('bg', 'grey1')}
      boxShadow={select<number>(
        'boxShadow',
        {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
        },
        0,
      )}
      fill={select(
        'fill',
        {
          // @ts-ignore
          true: true,
          false: false,
          horizontal: 'horizontal',
          vertical: 'vertical',
        },
        false,
      )}
      direction={select(
        'direction',
        { row: 'row', column: 'column' },
        'column',
      )}
      // @ts-ignore
      justifyContent={select(
        'justifyContent',
        {
          start: 'flex-start',
          end: 'flex-end',
          center: 'center',
          between: 'space-between',
          around: 'space-around',
        },
        'flex-start',
      )}
      // @ts-ignore
      alignItems={select(
        'alignItems',
        {
          start: 'flex-start',
          end: 'flex-end',
          center: 'center',
          baseline: 'baseline',
          stretch: 'stretch',
        },
        'stretch',
      )}
      fontSize={Knobs.fontSizeKnob()}
      fontWeight={Knobs.fontWeightKnob()}
      gap={Knobs.spacesKnob('gap', 1)}
    >
      <ChildrenBox>A</ChildrenBox>
      <ChildrenBox>B</ChildrenBox>
      <ChildrenBox>C</ChildrenBox>
      <ChildrenBox>D</ChildrenBox>
    </Box>
  );
};
