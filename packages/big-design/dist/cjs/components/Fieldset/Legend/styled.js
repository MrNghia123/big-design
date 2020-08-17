"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledFieldsetLegend = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _private = require("../../Typography/private");

var StyledFieldsetLegend = /*#__PURE__*/(0, _styledComponents.default)(_private.StyleableH3).attrs({
  as: 'legend'
}).withConfig({
  displayName: "styled__StyledFieldsetLegend",
  componentId: "n32oj8-0"
})(["&:not(:last-child){margin-bottom:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.xxSmall;
});
exports.StyledFieldsetLegend = StyledFieldsetLegend;
StyledFieldsetLegend.defaultProps = {
  theme: _bigDesignTheme.theme
};