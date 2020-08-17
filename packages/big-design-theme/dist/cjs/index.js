"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  createTheme: true,
  theme: true
};
exports.theme = exports.createTheme = void 0;

var _helpers = require("./helpers");

Object.keys(_helpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _helpers[key];
    }
  });
});

var _options = require("./options");

var _border = require("./system/border");

var _breakpoints = require("./system/breakpoints");

var _colors = require("./system/colors");

var keyframes = _interopRequireWildcard(require("./system/keyframes"));

var _lineHeight = require("./system/line-height");

var _shadow = require("./system/shadow");

var _spacing = require("./system/spacing");

var _typography = require("./system/typography");

var _zIndex = require("./system/z-index");

var _system = require("./system");

Object.keys(_system).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _system[key];
    }
  });
});

var createTheme = function createTheme() {
  var customOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _options.themeOptions.setOptions(customOptions);

  return {
    border: (0, _border.createBorder)(),
    borderRadius: (0, _border.createBorderRadius)(),
    breakpointValues: _breakpoints.breakpointValues,
    breakpoints: _breakpoints.breakpoints,
    colors: _colors.colors,
    helpers: (0, _helpers.createHelpers)(),
    keyframes: keyframes,
    lineHeight: (0, _lineHeight.createLineHeight)(),
    shadow: _shadow.shadow,
    spacing: (0, _spacing.createSpacing)(),
    typography: (0, _typography.createTypography)(),
    zIndex: _zIndex.zIndex
  };
};

exports.createTheme = createTheme;
var theme = createTheme();
exports.theme = theme;