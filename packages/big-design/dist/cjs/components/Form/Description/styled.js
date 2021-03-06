"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLink = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Link = require("../../Link");

var StyledLink = /*#__PURE__*/(0, _styledComponents.default)(_Link.Link).withConfig({
  displayName: "styled__StyledLink",
  componentId: "sc-1ha6q9e-0"
})(["font-size:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.typography.fontSize.small;
});
exports.StyledLink = StyledLink;
StyledLink.defaultProps = {
  theme: _bigDesignTheme.theme
};