"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledProgressBarFiller = exports.StyledProgressBar = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _transitions = require("../../mixins/transitions");

var StyledProgressBar = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "styled__StyledProgressBar",
  componentId: "sc-1b2lkfu-0"
})(["background-color:", ";height:", ";overflow:hidden;width:100%;"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.secondary20;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.xxSmall;
});

exports.StyledProgressBar = StyledProgressBar;

var StyledProgressBarFiller = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "styled__StyledProgressBarFiller",
  componentId: "sc-1b2lkfu-1"
})(["background-color:", ";height:100%;overflow:hidden;", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.primary;
}, function (_ref4) {
  var percent = _ref4.percent,
      theme = _ref4.theme;
  return typeof percent === 'number' ? (0, _styledComponents.css)(["", " width:", "%;"], (0, _transitions.withTransition)(['width', 'background-color', 'height']), percent) : (0, _styledComponents.css)(["animation:", " 2s ease-in-out infinite;position:relative;width:6.25%;"], theme.keyframes.loading);
});

exports.StyledProgressBarFiller = StyledProgressBarFiller;
StyledProgressBar.defaultProps = {
  theme: _bigDesignTheme.theme
};
StyledProgressBarFiller.defaultProps = {
  theme: _bigDesignTheme.theme
};