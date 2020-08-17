"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCounterInput = exports.StyledCounterWrapper = exports.StyledCounterButton = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _private = require("../Button/private");

var _private2 = require("../Input/private");

var StyledCounterButton = /*#__PURE__*/(0, _styledComponents.default)(_private.StyleableButton).withConfig({
  displayName: "styled__StyledCounterButton",
  componentId: "byc1zu-0"
})(["background-color:inherit;border:none;color:", ";width:auto;height:auto;padding:0;&[disabled],&:active,&:hover:not(:active){background-color:inherit;}&[disabled]{color:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.secondary60;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.secondary;
});
exports.StyledCounterButton = StyledCounterButton;
var StyledCounterWrapper = /*#__PURE__*/(0, _styledComponents.default)(_private2.StyledInputWrapper).withConfig({
  displayName: "styled__StyledCounterWrapper",
  componentId: "byc1zu-1"
})(["padding:0 ", ";width:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing.xxSmall;
}, (0, _bigDesignTheme.remCalc)(125));
exports.StyledCounterWrapper = StyledCounterWrapper;
var StyledCounterInput = /*#__PURE__*/(0, _styledComponents.default)(_private2.StyledInput).withConfig({
  displayName: "styled__StyledCounterInput",
  componentId: "byc1zu-2"
})(["text-align:center;padding:0;overflow:hidden;"]);
exports.StyledCounterInput = StyledCounterInput;
StyledCounterButton.defaultProps = {
  theme: _bigDesignTheme.theme
};
StyledCounterInput.defaultProps = {
  theme: _bigDesignTheme.theme
};
StyledCounterWrapper.defaultProps = {
  theme: _bigDesignTheme.theme
};