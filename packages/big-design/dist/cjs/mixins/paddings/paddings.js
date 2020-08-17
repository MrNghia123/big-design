"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.excludePaddingProps = excludePaddingProps;
exports.withPaddings = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _styledComponents = require("styled-components");

var _spacings = require("../spacings");

var withPaddings = function withPaddings() {
  return (0, _styledComponents.css)(["", ";", ";", ";", ";", ";", ";", ";"], function (_ref) {
    var padding = _ref.padding,
        theme = _ref.theme;
    return padding && (0, _spacings.getSpacingStyles)(padding, theme, 'padding');
  }, function (_ref2) {
    var paddingTop = _ref2.paddingTop,
        theme = _ref2.theme;
    return paddingTop && (0, _spacings.getSpacingStyles)(paddingTop, theme, 'padding-top');
  }, function (_ref3) {
    var paddingRight = _ref3.paddingRight,
        theme = _ref3.theme;
    return paddingRight && (0, _spacings.getSpacingStyles)(paddingRight, theme, 'padding-right');
  }, function (_ref4) {
    var paddingBottom = _ref4.paddingBottom,
        theme = _ref4.theme;
    return paddingBottom && (0, _spacings.getSpacingStyles)(paddingBottom, theme, 'padding-bottom');
  }, function (_ref5) {
    var paddingLeft = _ref5.paddingLeft,
        theme = _ref5.theme;
    return paddingLeft && (0, _spacings.getSpacingStyles)(paddingLeft, theme, 'padding-left');
  }, function (_ref6) {
    var paddingVertical = _ref6.paddingVertical,
        theme = _ref6.theme;
    return paddingVertical && (0, _spacings.getSpacingStyles)(paddingVertical, theme, 'padding-top', 'padding-bottom');
  }, function (_ref7) {
    var paddingHorizontal = _ref7.paddingHorizontal,
        theme = _ref7.theme;
    return paddingHorizontal && (0, _spacings.getSpacingStyles)(paddingHorizontal, theme, 'padding-left', 'padding-right');
  });
};

exports.withPaddings = withPaddings;

function excludePaddingProps(props) {
  var padding = props.padding,
      paddingTop = props.paddingTop,
      paddingRight = props.paddingRight,
      paddingBottom = props.paddingBottom,
      paddingLeft = props.paddingLeft,
      paddingVertical = props.paddingVertical,
      paddingHorizontal = props.paddingHorizontal,
      rest = (0, _objectWithoutProperties2.default)(props, ["padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingVertical", "paddingHorizontal"]);
  return rest;
}