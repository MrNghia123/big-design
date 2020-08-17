"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTab = exports.StyledTabs = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _private = require("../Button/private");

var _Flex = require("../Flex");

var StyledTabs = /*#__PURE__*/(0, _styledComponents.default)(_Flex.Flex).withConfig({
  displayName: "styled__StyledTabs",
  componentId: "sc-6je9le-0"
})(["overflow:auto;"]);
exports.StyledTabs = StyledTabs;
var StyledTab = /*#__PURE__*/(0, _styledComponents.default)(_private.StyleableButton).withConfig({
  displayName: "styled__StyledTab",
  componentId: "sc-6je9le-1"
})(["border:none;border-bottom:", " solid transparent;border-bottom-color:", ";border-radius:0;color:", ";pointer-events:", ";width:auto;", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.xxSmall;
}, function (props) {
  return props.id === props.activeTab ? props.theme.colors.primary40 : 'transparent';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
}, function (props) {
  return props.id === props.activeTab ? 'none' : 'auto';
}, function (props) {
  return props.id === props.activeTab && (0, _styledComponents.css)(["color:", ";&:focus{box-shadow:none;}"], props.theme.colors.secondary70);
});
exports.StyledTab = StyledTab;
StyledTab.defaultProps = {
  theme: _bigDesignTheme.theme,
  variant: 'subtle'
};
StyledTabs.defaultProps = {
  theme: _bigDesignTheme.theme
};