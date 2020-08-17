"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledFieldset = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var StyledFieldset = /*#__PURE__*/_styledComponents.default.fieldset.withConfig({
  displayName: "styled__StyledFieldset",
  componentId: "ac9lek-0"
})(["border:none;margin:0 0 ", ";padding:0;&:last-child{margin:0;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.xLarge;
});

exports.StyledFieldset = StyledFieldset;
StyledFieldset.defaultProps = {
  theme: _bigDesignTheme.theme
};