"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledInlineGroup = exports.StyledGroup = exports.StyledError = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Flex = require("../../Flex");

var SharedGroupStyles = /*#__PURE__*/(0, _styledComponents.css)(["display:grid;grid-gap:", ";margin-bottom:", ";&:last-child{margin-bottom:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return "".concat(theme.spacing.xSmall, " ").concat(theme.spacing.medium);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.medium;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing.none;
});
var StyledError = /*#__PURE__*/(0, _styledComponents.default)(_Flex.Flex).withConfig({
  displayName: "styled__StyledError",
  componentId: "sc-1a6yr6l-0"
})(["flex-direction:row;"]);
exports.StyledError = StyledError;

var StyledGroup = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "styled__StyledGroup",
  componentId: "sc-1a6yr6l-1"
})(["", ";"], SharedGroupStyles);

exports.StyledGroup = StyledGroup;

var StyledInlineGroup = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "styled__StyledInlineGroup",
  componentId: "sc-1a6yr6l-2"
})(["", ";", "{", " ", "}"], SharedGroupStyles, function (_ref4) {
  var theme = _ref4.theme;
  return theme.breakpoints.tablet;
}, function (_ref5) {
  var childrenCount = _ref5.childrenCount,
      theme = _ref5.theme;
  return childrenCount === 2 && (0, _styledComponents.css)(["grid-template-columns:repeat(2,", ");", "{grid-column:1 / 3;}"], theme.helpers.remCalc(200), StyledError);
}, function (_ref6) {
  var childrenCount = _ref6.childrenCount,
      theme = _ref6.theme;
  return childrenCount === 3 && (0, _styledComponents.css)(["grid-template-columns:repeat(3,", ");", "{grid-column:1 / 4;}"], theme.helpers.remCalc(128), StyledError);
});

exports.StyledInlineGroup = StyledInlineGroup;
StyledError.defaultProps = {
  theme: _bigDesignTheme.theme
};
StyledGroup.defaultProps = {
  theme: _bigDesignTheme.theme
};
StyledInlineGroup.defaultProps = {
  theme: _bigDesignTheme.theme
};