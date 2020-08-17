"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCloseButton = exports.StyledChip = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = require("../Box");

var _private = require("../Button/private");

var StyledChip = /*#__PURE__*/(0, _styledComponents.default)(_Box.Box).withConfig({
  displayName: "styled__StyledChip",
  componentId: "bia514-0"
})(["align-items:center;display:inline-flex;user-select:none;"]);
exports.StyledChip = StyledChip;
var StyledCloseButton = /*#__PURE__*/(0, _styledComponents.default)(_private.StyleableButton).withConfig({
  displayName: "styled__StyledCloseButton",
  componentId: "bia514-1"
})(["color:", ";height:auto;padding:0;width:auto;"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.secondary60;
});
exports.StyledCloseButton = StyledCloseButton;
StyledChip.defaultProps = {
  theme: _bigDesignTheme.theme
};
StyledCloseButton.defaultProps = {
  theme: _bigDesignTheme.theme
};