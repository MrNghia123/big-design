"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledFlex = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _withFlex = require("../../Flex/withFlex");

var StyledFlex = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "styled__StyledFlex",
  componentId: "yxkzj0-0"
})(["", " background-color:", ";display:flex;padding:", ";", ""], (0, _withFlex.withFlexedContainer)(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.small;
}, function (_ref3) {
  var theme = _ref3.theme,
      stickyHeader = _ref3.stickyHeader;
  return stickyHeader && (0, _styledComponents.css)(["", "{position:sticky;top:0;z-index:", ";}"], theme.breakpoints.tablet, theme.zIndex.sticky + 1);
});

exports.StyledFlex = StyledFlex;
StyledFlex.defaultProps = {
  theme: _bigDesignTheme.theme
};