"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@storybook/react");
const react_2 = __importDefault(require("react"));
const components_1 = require("../components");
const styles_1 = require("../styles");
const squareStyle = {
    width: styles_1.defaultTheme.space[styles_1.DEFAULT_SPACE.xxLarge],
    height: styles_1.defaultTheme.space[styles_1.DEFAULT_SPACE.xxLarge],
};
const SpecBox = styles_1.styled.div `
  display: flex;
  padding: 30px;
  justify-content: space-around;
  align-items: ${({ isAlignItemsNotCenter }) => isAlignItemsNotCenter ? 'flex-start' : 'center'};
  flex-direction: column;
  width: 100%;
  height: ${({ height }) => (height ? height : '95vh')};
  flex-wrap: wrap;
  ${({ noMaxWidth }) => (noMaxWidth ? '' : `max-width: 80vw`)};
`;
const FontSize = styles_1.styled.div `
  font-size: ${({ size }) => styles_1.defaultTheme.fontSpecs[size].size};
  line-height: ${({ size }) => styles_1.defaultTheme.fontSpecs[size].lineHeight};
  max-width: ${({ size }) => styles_1.defaultTheme.fontSpecs[size].maxWidth};
  margin-top: ${({ size }) => {
    const fontSize = styles_1.defaultTheme.fontSpecs[size].size;
    const sizeNum = parseInt(fontSize.replace('px', ''), 10);
    return sizeNum >= 48 ? '50px' : '25px';
}};
  margin-bottom: 25px;
`;
const Space = ({ size }) => {
    const widthAndHeight = `${styles_1.defaultTheme.space[styles_1.DEFAULT_SPACE[size]]}px`;
    return (<components_1.Box alignItems="center" width={0.6}>
      <components_1.Box direction="column" alignItems="start" justifyContent="center" width={1}>
        <div style={{
        fontSize: '20px',
    }}>
          {`SPACE.${size}`}
          <br />
          {widthAndHeight}
        </div>
      </components_1.Box>
      <components_1.Box minWidth={widthAndHeight} maxWidth={widthAndHeight} maxHeight={widthAndHeight} minHeight={widthAndHeight} bg="primary"/>
    </components_1.Box>);
};
const BoxShadow = ({ boxShadow, }) => (<div style={{
    boxShadow,
    ...squareStyle,
    backgroundColor: styles_1.defaultTheme.colors.grey3,
    margin: `${styles_1.defaultTheme.space[styles_1.DEFAULT_SPACE.medium]}px`,
}}/>);
const Colors = ({ start, end, width }) => {
    const { colors } = styles_1.defaultTheme;
    return (<components_1.Box direction="column" width={width || 220} gap={styles_1.DEFAULT_SPACE.small} m={styles_1.DEFAULT_SPACE.small}>
      {Object.keys(colors)
        .slice(start, end)
        .map(colorName => (<components_1.Box alignItems="center" justifyContent="between">
            <components_1.Box>
              {colorName}
              <br />
              {styles_1.defaultTheme.colors[colorName]}
            </components_1.Box>
            <components_1.Box width="100px" height="30px" bg={colorName} border="1px solid #DADADA"/>
          </components_1.Box>))}
    </components_1.Box>);
};
react_1.storiesOf('Spec', module)
    .addParameters({ options: { showAddonPanel: false } })
    .add('FontSizing', () => {
    const demoStr = 'A Quick Brown Fox Jumps Over The Lazy Dog. ';
    return (<SpecBox isAlignItemsNotCenter height="auto" noMaxWidth>
        {Object.keys(styles_1.DEFAULT_FONT_SIZE).map((size, index) => (<FontSize key={size} size={styles_1.DEFAULT_FONT_SIZE[size]}>
            {size} : {styles_1.defaultTheme.fontSizes[index]}
            <br />
            {demoStr.repeat(10)}
          </FontSize>))}
      </SpecBox>);
})
    .add('Space', () => (<components_1.Box m={styles_1.DEFAULT_SPACE.medium} gap={styles_1.DEFAULT_SPACE.large} direction="column">
      {Object.keys(styles_1.DEFAULT_SPACE).map(space => (<Space key={space} size={space}/>))}
    </components_1.Box>))
    .add('Colors', () => (<SpecBox style={{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
}}>
      <Colors start={0} end={5}/>
      <Colors start={5} end={10}/>
      <Colors start={10} end={17} width={280}/>

      <Colors start={17} end={23}/>
      <Colors start={23} end={27}/>
      <Colors start={27} end={35}/>
    </SpecBox>))
    .add('Shadows', () => (<SpecBox style={{ flexDirection: 'row' }}>
      <components_1.Box>
        {styles_1.defaultTheme.shadows.slice(0, 4).map(boxShadow => (<BoxShadow key={boxShadow} boxShadow={boxShadow}/>))}
      </components_1.Box>
      <components_1.Box>
        {styles_1.defaultTheme.shadows
    .slice(5, styles_1.defaultTheme.shadows.length)
    .map(boxShadow => (<BoxShadow key={boxShadow} boxShadow={boxShadow}/>))}
      </components_1.Box>
    </SpecBox>))
    .add('Gradients', () => (<SpecBox style={{ flexDirection: 'row' }}>
      {Object.keys(styles_1.defaultTheme.gradients).map(gradient => (<components_1.Box alignItems="center" direction="column" key={gradient}>
          {gradient}
          <components_1.Box boxShadow={3} m={styles_1.DEFAULT_SPACE.medium} css={{
    ...squareStyle,
    backgroundImage: styles_1.defaultTheme.gradients[gradient],
}}/>
        </components_1.Box>))}
    </SpecBox>));
