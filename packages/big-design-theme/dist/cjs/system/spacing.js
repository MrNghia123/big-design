"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSpacing = void 0;

var _helpers = require("../helpers");

var createSpacing = function createSpacing() {
  return {
    none: 0,
    xxSmall: (0, _helpers.remCalc)(4),
    xSmall: (0, _helpers.remCalc)(8),
    small: (0, _helpers.remCalc)(12),
    medium: (0, _helpers.remCalc)(16),
    large: (0, _helpers.remCalc)(20),
    xLarge: (0, _helpers.remCalc)(24),
    xxLarge: (0, _helpers.remCalc)(32),
    xxxLarge: (0, _helpers.remCalc)(48)
  };
};

exports.createSpacing = createSpacing;