import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { css } from 'styled-components';
import { getSpacingStyles } from '../spacings';
export var withMargins = function withMargins() {
  return css(["", ";", ";", ";", ";", ";", ";", ";"], function (_ref) {
    var margin = _ref.margin,
        theme = _ref.theme;
    return margin && getSpacingStyles(margin, theme, 'margin');
  }, function (_ref2) {
    var marginTop = _ref2.marginTop,
        theme = _ref2.theme;
    return marginTop && getSpacingStyles(marginTop, theme, 'margin-top');
  }, function (_ref3) {
    var marginRight = _ref3.marginRight,
        theme = _ref3.theme;
    return marginRight && getSpacingStyles(marginRight, theme, 'margin-right');
  }, function (_ref4) {
    var marginBottom = _ref4.marginBottom,
        theme = _ref4.theme;
    return marginBottom && getSpacingStyles(marginBottom, theme, 'margin-bottom');
  }, function (_ref5) {
    var marginLeft = _ref5.marginLeft,
        theme = _ref5.theme;
    return marginLeft && getSpacingStyles(marginLeft, theme, 'margin-left');
  }, function (_ref6) {
    var marginVertical = _ref6.marginVertical,
        theme = _ref6.theme;
    return marginVertical && getSpacingStyles(marginVertical, theme, 'margin-top', 'margin-bottom');
  }, function (_ref7) {
    var marginHorizontal = _ref7.marginHorizontal,
        theme = _ref7.theme;
    return marginHorizontal && getSpacingStyles(marginHorizontal, theme, 'margin-left', 'margin-right');
  });
};
export function excludeMarginProps(props) {
  var margin = props.margin,
      marginTop = props.marginTop,
      marginRight = props.marginRight,
      marginBottom = props.marginBottom,
      marginLeft = props.marginLeft,
      marginVertical = props.marginVertical,
      marginHorizontal = props.marginHorizontal,
      rest = _objectWithoutProperties(props, ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginVertical", "marginHorizontal"]);

  return rest;
}