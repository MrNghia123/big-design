"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remCalc = exports.createRGBA = exports.addValues = void 0;

var _polished = require("polished");

var _options = require("../options");

var addValues = function addValues(first, second) {
  return (0, _polished.math)("".concat(first, " + ").concat(second));
};
/**
 * Creates and rgba color giving a hex and an amount
 * @param color hex color
 * @param alpha number between 0 and 1
 */


exports.addValues = addValues;

var createRGBA = function createRGBA(color, alpha) {
  var calculatedAmount = 1 - alpha;
  return (0, _polished.transparentize)(calculatedAmount, color);
};

exports.createRGBA = createRGBA;

var remCalc = function remCalc(value) {
  var _themeOptions$getOpti = _options.themeOptions.getOptions(),
      htmlFontSize = _themeOptions$getOpti.htmlFontSize;

  return (0, _polished.rem)(value, htmlFontSize);
};

exports.remCalc = remCalc;