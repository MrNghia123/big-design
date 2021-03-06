"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CIRCLE_CIRCUMFERENCES = exports.CIRCLE_STROKE_WIDTHS = exports.CIRCLE_DIMENSIONS = void 0;
var CIRCLE_DIMENSIONS = {
  large: 80,
  medium: 48,
  small: 32,
  xSmall: 24,
  xxSmall: 16
};
exports.CIRCLE_DIMENSIONS = CIRCLE_DIMENSIONS;
var CIRCLE_STROKE_WIDTHS = {
  large: 8,
  medium: 4,
  small: 4,
  xSmall: 3,
  xxSmall: 2
};
exports.CIRCLE_STROKE_WIDTHS = CIRCLE_STROKE_WIDTHS;
var CIRCLE_CIRCUMFERENCES = {
  large: (CIRCLE_DIMENSIONS.large / 2 - CIRCLE_STROKE_WIDTHS.large / 2) * 2 * Math.PI,
  medium: (CIRCLE_DIMENSIONS.medium / 2 - CIRCLE_STROKE_WIDTHS.medium / 2) * 2 * Math.PI,
  small: (CIRCLE_DIMENSIONS.small / 2 - CIRCLE_STROKE_WIDTHS.small / 2) * 2 * Math.PI,
  xSmall: (CIRCLE_DIMENSIONS.xSmall / 2 - CIRCLE_STROKE_WIDTHS.xSmall / 2) * 2 * Math.PI,
  xxSmall: (CIRCLE_DIMENSIONS.xxSmall / 2 - CIRCLE_STROKE_WIDTHS.xxSmall / 2) * 2 * Math.PI
};
exports.CIRCLE_CIRCUMFERENCES = CIRCLE_CIRCUMFERENCES;