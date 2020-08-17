"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledUl = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var StyledUl = /*#__PURE__*/_styledComponents.default.ul.withConfig({
  displayName: "styled__StyledUl",
  componentId: "sc-7vo4ly-0"
})(["list-style-type:none;margin:0;padding:0;user-select:none;> li > ul{padding-left:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.helpers.addValues(theme.spacing.xLarge, theme.spacing.xxSmall);
});

exports.StyledUl = StyledUl;
StyledUl.defaultProps = {
  theme: _bigDesignTheme.theme
};