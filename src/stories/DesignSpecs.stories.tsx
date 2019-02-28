import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box } from '../components';
import {
  defaultTheme,
  DEFAULT_FONT_SIZE,
  GradientType,
  DEFAULT_SPACE,
  styled,
} from '../styles';

const squareStyle = {
  width: defaultTheme.space[DEFAULT_SPACE.xxLarge],
  height: defaultTheme.space[DEFAULT_SPACE.xxLarge],
};

const SpecBox = styled.div<{
  isAlignItemsNotCenter?: boolean;
  height?: string;
  noMaxWidth?: boolean;
}>`
  display: flex;
  padding: 30px;
  justify-content: space-around;
  align-items: ${({ isAlignItemsNotCenter }) =>
    isAlignItemsNotCenter ? 'flex-start' : 'center'};
  flex-direction: column;
  width: 100%;
  height: ${({ height }) => (height ? height : '95vh')};
  flex-wrap: wrap;
  ${({ noMaxWidth }) => (noMaxWidth ? '' : `max-width: 80vw`)};
`;

const FontSize = styled.div<{ size: number }>`
  font-size: ${({ size }) => defaultTheme.fontSpecs[size].size};
  line-height: ${({ size }) =>
    defaultTheme.fontSpecs[size].lineHeight};
  max-width: ${({ size }) => defaultTheme.fontSpecs[size].maxWidth};
  margin-top: ${({ size }) => {
    const fontSize = defaultTheme.fontSpecs[size].size;
    const sizeNum = parseInt(fontSize.replace('px', ''), 10);

    return sizeNum >= 48 ? '50px' : '25px';
  }};
  margin-bottom: 25px;
`;

const Space: React.FC<{ size: string }> = ({ size }) => {
  const widthAndHeight = `${
    defaultTheme.space[DEFAULT_SPACE[size as keyof typeof DEFAULT_SPACE]]
  }px`;

  return (
    <Box alignItems="center" width={0.6}>
      <Box
        direction="column"
        alignItems="start"
        justifyContent="center"
        width={1}
      >
        <div
          style={{
            fontSize: '20px',
          }}
        >
          {`SPACE.${size}`}
          <br />
          {widthAndHeight}
        </div>
      </Box>
      <Box
        minWidth={widthAndHeight}
        maxWidth={widthAndHeight}
        maxHeight={widthAndHeight}
        minHeight={widthAndHeight}
        bg="primary"
      />
    </Box>
  );
};

const BoxShadow: React.FC<{ boxShadow: string }> = ({
  boxShadow,
}) => (
  <div
    style={{
      boxShadow,
      ...squareStyle,
      backgroundColor: defaultTheme.colors.grey3,
      margin: `${defaultTheme.space[DEFAULT_SPACE.medium]}px`,
    }}
  />
);

const Colors: React.FC<{
  start: number;
  end: number;
  width?: number;
}> = ({ start, end, width }) => {
  const { colors } = defaultTheme;

  return (
    <Box
      direction="column"
      width={width || 220}
      gap={DEFAULT_SPACE.small}
      m={DEFAULT_SPACE.small}
    >
      {Object.keys(colors)
        .slice(start, end)
        .map(colorName => (
          <Box alignItems="center" justifyContent="between">
            <Box>
              {colorName}
              <br />
              {defaultTheme.colors[colorName]}
            </Box>
            <Box
              width="100px"
              height="30px"
              bg={colorName}
              border="1px solid #DADADA"
            />
          </Box>
        ))}
    </Box>
  );
};

storiesOf('Spec', module)
  .addParameters({ options: { showAddonPanel: false } })
  .add('FontSizing', () => {
    const demoStr = 'A Quick Brown Fox Jumps Over The Lazy Dog. ';

    return (
      <SpecBox isAlignItemsNotCenter height="auto" noMaxWidth>
        {Object.keys(DEFAULT_FONT_SIZE).map((size, index) => (
          <FontSize
            key={size}
            size={DEFAULT_FONT_SIZE[size as keyof typeof DEFAULT_FONT_SIZE]}
          >
            {size} : {defaultTheme.fontSizes[index]}
            <br />
            {demoStr.repeat(10)}
          </FontSize>
        ))}
      </SpecBox>
    );
  })
  .add('Space', () => (
    <Box m={DEFAULT_SPACE.medium} gap={DEFAULT_SPACE.large} direction="column">
      {Object.keys(DEFAULT_SPACE).map(space => (
        <Space key={space} size={space} />
      ))}
    </Box>
  ))
  .add('Colors', () => (
    <SpecBox
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      <Colors start={0} end={5} />
      <Colors start={5} end={10} />
      <Colors start={10} end={17} width={280} />

      <Colors start={17} end={23} />
      <Colors start={23} end={27} />
      <Colors start={27} end={35} />
    </SpecBox>
  ))
  .add('Shadows', () => (
    <SpecBox style={{ flexDirection: 'row' }}>
      <Box>
        {defaultTheme.shadows.slice(0, 4).map(boxShadow => (
          <BoxShadow key={boxShadow} boxShadow={boxShadow} />
        ))}
      </Box>
      <Box>
        {defaultTheme.shadows
          .slice(5, defaultTheme.shadows.length)
          .map(boxShadow => (
            <BoxShadow key={boxShadow} boxShadow={boxShadow} />
          ))}
      </Box>
    </SpecBox>
  ))
  .add('Gradients', () => (
    <SpecBox style={{ flexDirection: 'row' }}>
      {Object.keys(defaultTheme.gradients).map(gradient => (
        <Box alignItems="center" direction="column" key={gradient}>
          {gradient}
          <Box
            boxShadow={3}
            m={DEFAULT_SPACE.medium}
            css={{
              ...squareStyle,
              backgroundImage:
                defaultTheme.gradients[gradient as GradientType],
            }}
          />
        </Box>
      ))}
    </SpecBox>
  ));
