import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { css } from 'styled-components';
import { getSpacingStyles } from '../spacings';
export var withPaddings = function withPaddings() {
  return css(["", ";", ";", ";", ";", ";", ";", ";"], function (_ref) {
    var padding = _ref.padding,
        theme = _ref.theme;
    return padding && getSpacingStyles(padding, theme, 'padding');
  }, function (_ref2) {
    var paddingTop = _ref2.paddingTop,
        theme = _ref2.theme;
    return paddingTop && getSpacingStyles(paddingTop, theme, 'padding-top');
  }, function (_ref3) {
    var paddingRight = _ref3.paddingRight,
        theme = _ref3.theme;
    return paddingRight && getSpacingStyles(paddingRight, theme, 'padding-right');
  }, function (_ref4) {
    var paddingBottom = _ref4.paddingBottom,
        theme = _ref4.theme;
    return paddingBottom && getSpacingStyles(paddingBottom, theme, 'padding-bottom');
  }, function (_ref5) {
    var paddingLeft = _ref5.paddingLeft,
        theme = _ref5.theme;
    return paddingLeft && getSpacingStyles(paddingLeft, theme, 'padding-left');
  }, function (_ref6) {
    var paddingVertical = _ref6.paddingVertical,
        theme = _ref6.theme;
    return paddingVertical && getSpacingStyles(paddingVertical, theme, 'padding-top', 'padding-bottom');
  }, function (_ref7) {
    var paddingHorizontal = _ref7.paddingHorizontal,
        theme = _ref7.theme;
    return paddingHorizontal && getSpacingStyles(paddingHorizontal, theme, 'padding-left', 'padding-right');
  });
};
export function excludePaddingProps(props) {
  var padding = props.padding,
      paddingTop = props.paddingTop,
      paddingRight = props.paddingRight,
      paddingBottom = props.paddingBottom,
      paddingLeft = props.paddingLeft,
      paddingVertical = props.paddingVertical,
      paddingHorizontal = props.paddingHorizontal,
      rest = _objectWithoutProperties(props, ["padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingVertical", "paddingHorizontal"]);

  return rest;
}