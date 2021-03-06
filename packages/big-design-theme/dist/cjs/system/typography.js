"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTypography = void 0;

var _helpers = require("../helpers");

var createTypography = function createTypography() {
  return {
    fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif',
    fontSize: {
      small: (0, _helpers.remCalc)(14),
      medium: (0, _helpers.remCalc)(16),
      large: (0, _helpers.remCalc)(20),
      xLarge: (0, _helpers.remCalc)(24),
      xxLarge: (0, _helpers.remCalc)(32),
      xxxLarge: (0, _helpers.remCalc)(48)
    },
    fontWeight: {
      extraLight: 200,
      light: 300,
      regular: 400,
      semiBold: 600
    }
  };
};

exports.createTypography = createTypography;