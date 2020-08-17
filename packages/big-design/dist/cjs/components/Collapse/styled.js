"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButton = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _transitions = require("../../mixins/transitions");

var _private = require("../Button/private");

var StyledButton = /*#__PURE__*/(0, _styledComponents.default)(_private.StyleableButton).withConfig({
  displayName: "styled__StyledButton",
  componentId: "sc-1t5o5ar-0"
})(["height:auto;line-height:inherit;margin-left:-", ";padding:", ";padding-right:", ";width:auto;&:active,&:hover:not(:active){background:none;color:", ";}span{grid-gap:", ";}svg{", " ", "}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.xxSmall;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.xxSmall;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing.none;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.primary70;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing.none;
}, (0, _transitions.withTransition)(['transform']), function (_ref6) {
  var isOpen = _ref6.isOpen;
  return isOpen && (0, _styledComponents.css)(["transform:rotate(-180deg);"]);
});
exports.StyledButton = StyledButton;
StyledButton.defaultProps = {
  theme: _bigDesignTheme.theme
};