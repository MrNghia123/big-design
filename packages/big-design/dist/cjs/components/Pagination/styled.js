"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButton = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _private = require("../Button/private");

var StyledButton = /*#__PURE__*/(0, _styledComponents.default)(_private.StyleableButton).withConfig({
  displayName: "styled__StyledButton",
  componentId: "sc-12shuvi-0"
})(["color:", ";width:auto;"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.secondary70;
});
exports.StyledButton = StyledButton;
StyledButton.defaultProps = {
  theme: _bigDesignTheme.theme
};