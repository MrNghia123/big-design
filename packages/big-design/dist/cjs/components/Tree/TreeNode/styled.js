"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledText = exports.StyledGap = exports.StyledFlexItem = exports.StyledFlex = exports.StyledSelectableWrapper = exports.StyledArrowWrapper = exports.StyledLi = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Flex = require("../../Flex");

var _private = require("../../Typography/private");

var StyledLi = /*#__PURE__*/_styledComponents.default.li.withConfig({
  displayName: "styled__StyledLi",
  componentId: "sc-1073t7q-0"
})(["outline:0;"]);

exports.StyledLi = StyledLi;
var StyledArrowWrapper = /*#__PURE__*/(0, _styledComponents.default)(_Flex.FlexItem).withConfig({
  displayName: "styled__StyledArrowWrapper",
  componentId: "sc-1073t7q-1"
})(["z-index:1;", ";"], function (_ref) {
  var expanded = _ref.expanded;
  return expanded && (0, _styledComponents.css)(["transform:rotate(90deg);"]);
});
exports.StyledArrowWrapper = StyledArrowWrapper;
var StyledSelectableWrapper = /*#__PURE__*/(0, _styledComponents.default)(_Flex.FlexItem).withConfig({
  displayName: "styled__StyledSelectableWrapper",
  componentId: "sc-1073t7q-2"
})(["padding:1px;z-index:1;"]);
exports.StyledSelectableWrapper = StyledSelectableWrapper;
var sharedAfterStyles = /*#__PURE__*/(0, _styledComponents.css)(["bottom:0;content:'';left:-1000px;right:0;position:absolute;top:0;z-index:0;"]);
var StyledFlex = /*#__PURE__*/(0, _styledComponents.default)(_Flex.Flex).withConfig({
  displayName: "styled__StyledFlex",
  componentId: "sc-1073t7q-3"
})(["cursor:pointer;min-height:", ";position:relative;li:focus > &,&:hover{&::after{", " background-color:", ";}}label,svg{vertical-align:middle;}", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.helpers.addValues(theme.spacing.xxLarge, theme.spacing.xSmall);
}, sharedAfterStyles, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.secondary10;
}, function (_ref4) {
  var theme = _ref4.theme,
      selected = _ref4.selected;
  return selected && (0, _styledComponents.css)(["&::after{", " background-color:", ";}"], sharedAfterStyles, theme.colors.primary10);
});
exports.StyledFlex = StyledFlex;
var StyledFlexItem = /*#__PURE__*/(0, _styledComponents.default)(_Flex.FlexItem).withConfig({
  displayName: "styled__StyledFlexItem",
  componentId: "sc-1073t7q-4"
})(["z-index:1;"]);
exports.StyledFlexItem = StyledFlexItem;

var StyledGap = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "styled__StyledGap",
  componentId: "sc-1073t7q-5"
})(["flex-shrink:0;height:", ";width:", ";"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing.xLarge;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.xLarge;
});

exports.StyledGap = StyledGap;
var StyledText = /*#__PURE__*/(0, _styledComponents.default)(_private.StyleableText).withConfig({
  displayName: "styled__StyledText",
  componentId: "sc-1073t7q-6"
})(["z-index:1;"]);
exports.StyledText = StyledText;
StyledArrowWrapper.defaultProps = {
  theme: _bigDesignTheme.theme
};
StyledFlex.defaultProps = {
  theme: _bigDesignTheme.theme
};
StyledGap.defaultProps = {
  theme: _bigDesignTheme.theme
};