"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTableRow = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _transitions = require("../../../mixins/transitions");

var StyledTableRow = /*#__PURE__*/_styledComponents.default.tr.withConfig({
  displayName: "styled__StyledTableRow",
  componentId: "xq0hr0-0"
})(["", " background-color:", ";&:hover{background-color:", ";}"], (0, _transitions.withTransition)(['background-color']), function (_ref) {
  var isSelected = _ref.isSelected,
      theme = _ref.theme;
  return isSelected ? theme.colors.primary10 : 'transparent';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.secondary10;
});

exports.StyledTableRow = StyledTableRow;
StyledTableRow.defaultProps = {
  theme: _bigDesignTheme.theme
};