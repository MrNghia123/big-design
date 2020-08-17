"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLink = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _polished = require("polished");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _mixins = require("../../mixins");

var _transitions = require("../../mixins/transitions");

var StyledLink = /*#__PURE__*/_styledComponents.default.a.withConfig({
  displayName: "styled__StyledLink",
  componentId: "n9mww9-0"
})(["", ";", " ", ";color:", ";cursor:pointer;font-size:", ";font-weight:", ";text-decoration:none;&:active{color:", ";}&:hover:not(:active){color:", ";}", ""], (0, _mixins.withMargins)(), (0, _transitions.withTransition)(['color'], '70ms'), function (props) {
  return props.ellipsis && (0, _polished.ellipsis)();
}, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.fontSize.medium;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.fontWeight.regular;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.primary70;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.primary70;
}, function (_ref6) {
  var isExternal = _ref6.isExternal,
      theme = _ref6.theme;
  return isExternal && (0, _styledComponents.css)(["display:inline-flex;align-items:center;svg{flex-shrink:0;margin-left:", ";}"], theme.spacing.xxSmall);
});

exports.StyledLink = StyledLink;
StyledLink.defaultProps = {
  theme: _bigDesignTheme.theme
};