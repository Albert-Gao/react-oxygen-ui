"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theme_1 = require("./theme");
exports.createTheme = ({ breakpoints, fontSpecs, fontSizes, space, colors, fontWeights, borders, radii, shadows, gradients, }) => ({
    breakpoints: breakpoints || theme_1.defaultTheme.breakpoints,
    fontSpecs: fontSpecs || theme_1.defaultTheme.fontSpecs,
    fontSizes: fontSizes || theme_1.defaultTheme.fontSizes,
    space: space || theme_1.defaultTheme.space,
    colors: colors || theme_1.defaultTheme.colors,
    fontWeights: fontWeights || theme_1.defaultTheme.fontWeights,
    borders: borders || theme_1.defaultTheme.borders,
    radii: radii || theme_1.defaultTheme.radii,
    shadows: shadows || theme_1.defaultTheme.shadows,
    gradients: gradients || theme_1.defaultTheme.gradients,
});
