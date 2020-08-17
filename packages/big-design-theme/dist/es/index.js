import { createHelpers } from './helpers';
import { themeOptions } from './options';
import { createBorder, createBorderRadius } from './system/border';
import { breakpoints, breakpointValues } from './system/breakpoints';
import { colors } from './system/colors';
import * as keyframes from './system/keyframes';
import { createLineHeight } from './system/line-height';
import { shadow } from './system/shadow';
import { createSpacing } from './system/spacing';
import { createTypography } from './system/typography';
import { zIndex } from './system/z-index';
export * from './helpers';
export * from './system';
export var createTheme = function createTheme() {
  var customOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  themeOptions.setOptions(customOptions);
  return {
    border: createBorder(),
    borderRadius: createBorderRadius(),
    breakpointValues: breakpointValues,
    breakpoints: breakpoints,
    colors: colors,
    helpers: createHelpers(),
    keyframes: keyframes,
    lineHeight: createLineHeight(),
    shadow: shadow,
    spacing: createSpacing(),
    typography: createTypography(),
    zIndex: zIndex
  };
};
export var theme = createTheme();