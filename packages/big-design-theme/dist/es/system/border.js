import { css } from 'styled-components';
import { remCalc } from '../helpers';
export var createBorder = function createBorder() {
  return {
    box: css(["", ";"], function (_ref) {
      var theme = _ref.theme;
      return "1px solid ".concat(theme.colors.secondary30);
    }),
    boxError: css(["", ";"], function (_ref2) {
      var theme = _ref2.theme;
      return "1px solid ".concat(theme.colors.danger40);
    }),
    none: 'none'
  };
};
export var createBorderRadius = function createBorderRadius() {
  return {
    circle: '50%',
    none: 0,
    normal: remCalc(4)
  };
};