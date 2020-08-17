"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.excludeMarginProps = excludeMarginProps;
exports.withMargins = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _styledComponents = require("styled-components");

var _spacings = require("../spacings");

var withMargins = function withMargins() {
  return (0, _styledComponents.css)(["", ";", ";", ";", ";", ";", ";", ";"], function (_ref) {
    var margin = _ref.margin,
        theme = _ref.theme;
    return margin && (0, _spacings.getSpacingStyles)(margin, theme, 'margin');
  }, function (_ref2) {
    var marginTop = _ref2.marginTop,
        theme = _ref2.theme;
    return marginTop && (0, _spacings.getSpacingStyles)(marginTop, theme, 'margin-top');
  }, function (_ref3) {
    var marginRight = _ref3.marginRight,
        theme = _ref3.theme;
    return marginRight && (0, _spacings.getSpacingStyles)(marginRight, theme, 'margin-right');
  }, function (_ref4) {
    var marginBottom = _ref4.marginBottom,
        theme = _ref4.theme;
    return marginBottom && (0, _spacings.getSpacingStyles)(marginBottom, theme, 'margin-bottom');
  }, function (_ref5) {
    var marginLeft = _ref5.marginLeft,
        theme = _ref5.theme;
    return marginLeft && (0, _spacings.getSpacingStyles)(marginLeft, theme, 'margin-left');
  }, function (_ref6) {
    var marginVertical = _ref6.marginVertical,
        theme = _ref6.theme;
    return marginVertical && (0, _spacings.getSpacingStyles)(marginVertical, theme, 'margin-top', 'margin-bottom');
  }, function (_ref7) {
    var marginHorizontal = _ref7.marginHorizontal,
        theme = _ref7.theme;
    return marginHorizontal && (0, _spacings.getSpacingStyles)(marginHorizontal, theme, 'margin-left', 'margin-right');
  });
};

exports.withMargins = withMargins;

function excludeMarginProps(props) {
  var margin = props.margin,
      marginTop = props.marginTop,
      marginRight = props.marginRight,
      marginBottom = props.marginBottom,
      marginLeft = props.marginLeft,
      marginVertical = props.marginVertical,
      marginHorizontal = props.marginHorizontal,
      rest = (0, _objectWithoutProperties2.default)(props, ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginVertical", "marginHorizontal"]);
  return rest;
}