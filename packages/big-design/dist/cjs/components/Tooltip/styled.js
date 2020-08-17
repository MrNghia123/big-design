"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTooltip = exports.StyledTooltipTrigger = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var StyledTooltipTrigger = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "styled__StyledTooltipTrigger",
  componentId: "sc-14xrlwe-0"
})(["display:inline-block;", ""], function (_ref) {
  var inline = _ref.inline;
  return !inline && (0, _styledComponents.css)(["display:block;flex-grow:1;"]);
});

exports.StyledTooltipTrigger = StyledTooltipTrigger;

var StyledTooltip = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "styled__StyledTooltip",
  componentId: "sc-14xrlwe-1"
})(["", ";background-color:", ";max-width:", ";padding:", ";z-index:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.shadow.floating;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.secondary70;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.helpers.remCalc(336);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing.xSmall;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.zIndex.tooltip;
});

exports.StyledTooltip = StyledTooltip;
StyledTooltip.defaultProps = {
  theme: _bigDesignTheme.theme
};
StyledTooltipTrigger.defaultProps = {
  theme: _bigDesignTheme.theme
};