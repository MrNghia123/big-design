import { math, rem, transparentize } from 'polished';
import { themeOptions } from '../options';
export var addValues = function addValues(first, second) {
  return math("".concat(first, " + ").concat(second));
};
/**
 * Creates and rgba color giving a hex and an amount
 * @param color hex color
 * @param alpha number between 0 and 1
 */

export var createRGBA = function createRGBA(color, alpha) {
  var calculatedAmount = 1 - alpha;
  return transparentize(calculatedAmount, color);
};
export var remCalc = function remCalc(value) {
  var _themeOptions$getOpti = themeOptions.getOptions(),
      htmlFontSize = _themeOptions$getOpti.htmlFontSize;

  return rem(value, htmlFontSize);
};