"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLineHeight = void 0;

var _helpers = require("../helpers");

var createLineHeight = function createLineHeight() {
  return {
    small: (0, _helpers.remCalc)(20),
    medium: (0, _helpers.remCalc)(24),
    large: (0, _helpers.remCalc)(28),
    xLarge: (0, _helpers.remCalc)(32),
    xxLarge: (0, _helpers.remCalc)(40),
    xxxLarge: (0, _helpers.remCalc)(48)
  };
};

exports.createLineHeight = createLineHeight;