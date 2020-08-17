"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledRadio = exports.HiddenRadio = exports.RadioContainer = exports.RadioLabelContainer = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _polished = require("polished");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _transitions = require("../../mixins/transitions");

var RadioLabelContainer = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "styled__RadioLabelContainer",
  componentId: "sc-1x9u9a8-0"
})(["margin-left:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.xSmall;
});

exports.RadioLabelContainer = RadioLabelContainer;

var RadioContainer = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "styled__RadioContainer",
  componentId: "sc-1x9u9a8-1"
})(["align-items:flex-start;display:flex;"]);

exports.RadioContainer = RadioContainer;

var HiddenRadio = /*#__PURE__*/_styledComponents.default.input.withConfig({
  displayName: "styled__HiddenRadio",
  componentId: "sc-1x9u9a8-2"
})(["", ""], (0, _polished.hideVisually)());

exports.HiddenRadio = HiddenRadio;

var StyledRadio = /*#__PURE__*/_styledComponents.default.label.withConfig({
  displayName: "styled__StyledRadio",
  componentId: "sc-1x9u9a8-3"
})(["", " background-color:", ";border:", ";border-color:", ";border-radius:", ";color:", ";cursor:pointer;display:inline-block;height:", ";position:relative;user-select:none;width:", ";", ";&:hover{border-color:", ";}", ":focus + &{box-shadow:", ";}&:after{", " background-color:", ";border-radius:50%;content:'';height:", ";left:50%;opacity:0;position:absolute;top:50%;transform:translate(-50%,-50%);width:", ";}", ""], (0, _transitions.withTransition)(['border-color', 'box-shadow']), function (_ref2) {
  var disabled = _ref2.disabled,
      theme = _ref2.theme;
  return disabled ? theme.colors.secondary10 : theme.colors.white;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.border.box;
}, function (props) {
  return props.checked ? props.theme.colors.primary40 : props.theme.colors.secondary30;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.borderRadius.circle;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.white;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.large;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spacing.large;
}, function (_ref8) {
  var disabled = _ref8.disabled,
      theme = _ref8.theme;
  return disabled && (0, _styledComponents.css)(["cursor:not-allowed;border-color:", ";"], theme.colors.secondary30);
}, function (_ref9) {
  var checked = _ref9.checked,
      disabled = _ref9.disabled,
      theme = _ref9.theme;
  return !disabled && (checked ? theme.colors.primary50 : theme.colors.secondary40);
}, HiddenRadio, function (_ref10) {
  var theme = _ref10.theme;
  return "0 0 0 ".concat(theme.spacing.xxSmall, " ").concat(theme.colors.primary20);
}, (0, _transitions.withTransition)(['opacity']), function (_ref11) {
  var disabled = _ref11.disabled,
      theme = _ref11.theme;
  return disabled ? theme.colors.secondary40 : theme.colors.primary40;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.spacing.small;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.spacing.small;
}, function (props) {
  return props.checked && (0, _styledComponents.css)(["&:after{opacity:1;}"]);
});

exports.StyledRadio = StyledRadio;
StyledRadio.defaultProps = {
  theme: _bigDesignTheme.theme
};
RadioLabelContainer.defaultProps = {
  theme: _bigDesignTheme.theme
};