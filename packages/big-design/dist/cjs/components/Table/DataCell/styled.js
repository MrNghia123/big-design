"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTableDataCheckbox = exports.StyledTableDataCell = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var StyledTableDataCell = /*#__PURE__*/_styledComponents.default.td.withConfig({
  displayName: "styled__StyledTableDataCell",
  componentId: "sc-16y6nzi-0"
})(["background-color:", ";box-sizing:border-box;color:", ";font-size:", ";padding:", ";", " ", ";", ";", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.secondary70;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.fontSize.medium;
}, function (_ref4) {
  var theme = _ref4.theme,
      withPadding = _ref4.withPadding;
  return withPadding ? theme.spacing.small : 0;
}, function (_ref5) {
  var theme = _ref5.theme,
      withBorder = _ref5.withBorder;
  return withBorder && (0, _styledComponents.css)(["border-bottom:", ";"], theme.border.box);
}, function (_ref6) {
  var align = _ref6.align;
  return align && (0, _styledComponents.css)(["text-align:", ";"], align);
}, function (_ref7) {
  var verticalAlign = _ref7.verticalAlign;
  return verticalAlign && (0, _styledComponents.css)(["vertical-align:", ";"], verticalAlign);
}, function (_ref8) {
  var width = _ref8.width;
  return width !== undefined && (0, _styledComponents.css)(["width:", ";"], typeof width === 'string' ? width : width + 'px');
});

exports.StyledTableDataCell = StyledTableDataCell;
var StyledTableDataCheckbox = /*#__PURE__*/(0, _styledComponents.default)(StyledTableDataCell).withConfig({
  displayName: "styled__StyledTableDataCheckbox",
  componentId: "sc-16y6nzi-1"
})(["background-color:", ";padding:", ";", ";"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.white;
}, function (_ref10) {
  var theme = _ref10.theme;
  return "0 ".concat(theme.spacing.small);
}, function (props) {
  return props.isCheckbox && (0, _styledComponents.css)(["width:", ";white-space:nowrap;"], function (_ref11) {
    var theme = _ref11.theme;
    return theme.helpers.addValues(theme.spacing.xLarge, theme.spacing.small);
  });
});
exports.StyledTableDataCheckbox = StyledTableDataCheckbox;
StyledTableDataCell.defaultProps = {
  theme: _bigDesignTheme.theme
};
StyledTableDataCheckbox.defaultProps = {
  theme: _bigDesignTheme.theme
};