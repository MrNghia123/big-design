"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessagingButton = exports.StyleableButton = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = require("./Button");

var StyleableButton = _Button.StyleableButton;
exports.StyleableButton = StyleableButton;
var MessagingButton = /*#__PURE__*/(0, _styledComponents.default)(_Button.StyleableButton).withConfig({
  displayName: "private__MessagingButton",
  componentId: "hxlq00-0"
})(["background-color:transparent;border:", ";color:", ";height:auto;padding:", ";&:active{background-color:", ";}&:focus{box-shadow:", ";}&:hover:not(:active){background-color:", ";}&[disabled]{color:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.border.none;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.secondary70;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing.none;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.primary20;
}, function (_ref5) {
  var theme = _ref5.theme;
  return "0 0 0 ".concat(theme.spacing.xxSmall, " ").concat(theme.colors.primary20);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.primary10;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.secondary30;
});
exports.MessagingButton = MessagingButton;
MessagingButton.defaultProps = {
  theme: _bigDesignTheme.theme
};