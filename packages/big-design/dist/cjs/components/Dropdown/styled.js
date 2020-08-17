"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledBox = exports.StyledLink = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _transitions = require("../../mixins/transitions");

var _Box = require("../Box");

var StyledLink = /*#__PURE__*/_styledComponents.default.a.withConfig({
  displayName: "styled__StyledLink",
  componentId: "sc-2535c9-0"
})(["", " align-items:center;color:", ";display:flex;height:100%;text-decoration:none;width:100%;&:focus{outline:none;}"], (0, _transitions.withTransition)(['background-color', 'color']), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.secondary70;
});

exports.StyledLink = StyledLink;
var StyledBox = /*#__PURE__*/(0, _styledComponents.default)(_Box.Box).withConfig({
  displayName: "styled__StyledBox",
  componentId: "sc-2535c9-1"
})(["position:relative;"]);
exports.StyledBox = StyledBox;
StyledLink.defaultProps = {
  theme: _bigDesignTheme.theme
};
StyledBox.defaultProps = {
  theme: _bigDesignTheme.theme
};