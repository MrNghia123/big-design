"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLabel = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _private = require("../../Typography/private");

var StyledLabel = /*#__PURE__*/(0, _styledComponents.default)(_private.StyleableH4).attrs({
  as: 'label'
}).withConfig({
  displayName: "styled__StyledLabel",
  componentId: "m3fyue-0"
})(["cursor:pointer;display:inline-block;margin-bottom:", ";", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.xxSmall;
}, function (_ref2) {
  var theme = _ref2.theme,
      renderOptional = _ref2.renderOptional;
  return renderOptional && (0, _styledComponents.css)(["&::after{color:", ";content:' (optional)';font-weight:", ";}"], theme.colors.secondary60, theme.typography.fontWeight.regular);
});
exports.StyledLabel = StyledLabel;
StyledLabel.defaultProps = {
  theme: _bigDesignTheme.theme
};