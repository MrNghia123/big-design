import { css } from 'styled-components';
import { createRGBA } from '../helpers';
export var shadow = {
  floating: css(["border-radius:", ";box-shadow:", ";"], function (_ref) {
    var theme = _ref.theme;
    return theme.borderRadius.normal;
  }, function (_ref2) {
    var theme = _ref2.theme;
    return "0px 2px 12px ".concat(createRGBA(theme.colors.secondary70, 0.2));
  }),
  raised: css(["border-radius:", ";box-shadow:", ";"], function (_ref3) {
    var theme = _ref3.theme;
    return theme.borderRadius.normal;
  }, function (_ref4) {
    var theme = _ref4.theme;
    return "0px 1px 6px ".concat(createRGBA(theme.colors.secondary70, 0.2));
  })
};