"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledH2 = exports.StyledPanel = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = require("../Box");

var _private = require("../Typography/private");

var StyledPanel = /*#__PURE__*/(0, _styledComponents.default)(_Box.Box).withConfig({
  displayName: "styled__StyledPanel",
  componentId: "sc-1h6ef3q-0"
})(["", "{", "}"], function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.tablet;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.shadow.floating;
});
exports.StyledPanel = StyledPanel;
var StyledH2 = /*#__PURE__*/(0, _styledComponents.default)(_private.StyleableH2).withConfig({
  displayName: "styled__StyledH2",
  componentId: "sc-1h6ef3q-1"
})(["flex-grow:1;& ~ .bd-button{width:auto;margin-top:0;}"]);
exports.StyledH2 = StyledH2;
StyledPanel.defaultProps = {
  theme: _bigDesignTheme.theme,
  marginBottom: 'medium'
};
StyledH2.defaultProps = {
  theme: _bigDesignTheme.theme
};