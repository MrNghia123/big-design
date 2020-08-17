"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledInputContent = exports.StyledIconWrapper = exports.StyledInput = exports.StyledInputWrapper = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _mixins = require("../../mixins");

var _transitions = require("../../mixins/transitions");

var StyledInputWrapper = /*#__PURE__*/_styledComponents.default.span.withConfig({
  displayName: "styled__StyledInputWrapper",
  componentId: "g32raa-0"
})(["", " align-items:center;background-color:", ";border-radius:", ";box-sizing:border-box;display:flex;min-height:", ";position:relative;width:100%;", ";&:hover:not([disabled]){", "}", ";&[disabled]{background-color:", ";}"], (0, _transitions.withTransition)(['border', 'box-shadow']), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderRadius.normal;
}, function (_ref3) {
  var theme = _ref3.theme;
  return (0, _bigDesignTheme.addValues)(theme.spacing.xxLarge, theme.spacing.xxSmall);
}, function (_ref4) {
  var error = _ref4.error,
      theme = _ref4.theme;
  return (0, _styledComponents.css)(["border:", ";"], error ? theme.border.boxError : theme.border.box);
}, function (_ref5) {
  var error = _ref5.error,
      theme = _ref5.theme;
  return error ? (0, _styledComponents.css)(["border:", ";"], theme.border.boxError) : (0, _styledComponents.css)(["border:1px solid ", ";"], theme.colors.secondary40);
}, function (_ref6) {
  var error = _ref6.error,
      focus = _ref6.focus,
      theme = _ref6.theme;
  return focus && (0, _styledComponents.css)(["outline:none;box-shadow:0 0 0 4px ", ";"], error ? theme.colors.danger20 : theme.colors.primary20);
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.secondary20;
});

exports.StyledInputWrapper = StyledInputWrapper;

var StyledInput = /*#__PURE__*/_styledComponents.default.input.withConfig({
  displayName: "styled__StyledInput",
  componentId: "g32raa-1"
})(["background-color:inherit;border:0;box-sizing:border-box;color:", ";flex:1 1 40%;height:100%;padding:0;padding-left:", ";width:100%;&:focus{outline:none;}&::placeholder{color:", ";font-size:", ";}&:-webkit-autofill{background-color:", " !important;-webkit-box-shadow:0 0 0px 1000px ", " inset;}", ";", ";", ";", ";", ";&[disabled]{background-color:", ";}"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.secondary70;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.spacing.xSmall;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.secondary40;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.typography.fontSize.medium;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors.primary10;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.colors.primary10;
}, function (_ref14) {
  var iconRight = _ref14.iconRight,
      theme = _ref14.theme;
  return iconRight && (0, _styledComponents.css)(["padding-right:", ";"], (0, _bigDesignTheme.addValues)(theme.spacing.xxSmall, theme.spacing.xxLarge));
}, function (_ref15) {
  var iconLeft = _ref15.iconLeft,
      theme = _ref15.theme;
  return iconLeft && (0, _styledComponents.css)(["padding-left:", ";"], (0, _bigDesignTheme.addValues)(theme.spacing.xxSmall, theme.spacing.xxLarge));
}, function (_ref16) {
  var chips = _ref16.chips,
      theme = _ref16.theme;
  return chips && (0, _styledComponents.css)(["min-height:", ";padding-left:", ";padding-right:", ";"], theme.spacing.xLarge, theme.spacing.xxSmall, theme.spacing.none);
}, function (_ref17) {
  var chips = _ref17.chips,
      theme = _ref17.theme;
  return chips && chips.length && (0, _styledComponents.css)(["margin-top:", ";"], theme.spacing.xxSmall);
}, function (_ref18) {
  var chips = _ref18.chips;
  return !chips && (0, _styledComponents.css)(["min-height:", ";"], (0, _bigDesignTheme.remCalc)(34));
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.colors.secondary20;
});

exports.StyledInput = StyledInput;

var StyledIconWrapper = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "styled__StyledIconWrapper",
  componentId: "g32raa-2"
})(["align-items:center;color:", ";display:flex;height:100%;position:absolute;top:0;", " ", " ", ""], function (_ref20) {
  var theme = _ref20.theme;
  return theme.colors.secondary60;
}, (0, _mixins.withPaddings)(), function (_ref21) {
  var paddingLeft = _ref21.paddingLeft;
  return paddingLeft === 'xSmall' && (0, _styledComponents.css)(["left:0;"]);
}, function (_ref22) {
  var paddingRight = _ref22.paddingRight;
  return paddingRight === 'xSmall' && (0, _styledComponents.css)(["right:0;"]);
});

exports.StyledIconWrapper = StyledIconWrapper;

var StyledInputContent = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "styled__StyledInputContent",
  componentId: "g32raa-3"
})(["align-items:center;box-sizing:border-box;display:flex;flex-wrap:wrap;flex:1;height:100%;", ";", ";"], function (_ref23) {
  var chips = _ref23.chips,
      theme = _ref23.theme;
  return chips && (0, _styledComponents.css)(["margin-left:", ";padding-right:", ";"], theme.spacing.xxSmall, (0, _bigDesignTheme.addValues)(theme.spacing.xxSmall, theme.spacing.xxLarge));
}, function (_ref24) {
  var chips = _ref24.chips,
      theme = _ref24.theme;
  return chips && chips.length && (0, _styledComponents.css)(["margin-bottom:", ";"], theme.spacing.xxSmall);
});

exports.StyledInputContent = StyledInputContent;
StyledInput.defaultProps = {
  theme: _bigDesignTheme.theme
};
StyledInputWrapper.defaultProps = {
  theme: _bigDesignTheme.theme
};
StyledIconWrapper.defaultProps = {
  theme: _bigDesignTheme.theme
};
StyledInputContent.defaultProps = {
  theme: _bigDesignTheme.theme
};