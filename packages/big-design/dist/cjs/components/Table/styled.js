"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTable = exports.StyledTableFigure = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _mixins = require("../../mixins");

var StyledTableFigure = /*#__PURE__*/_styledComponents.default.figure.withConfig({
  displayName: "styled__StyledTableFigure",
  componentId: "xns2ns-0"
})(["margin:0;max-width:100%;overflow-x:auto;white-space:nowrap;", "{white-space:normal;}", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.tablet;
}, (0, _mixins.withMargins)());

exports.StyledTableFigure = StyledTableFigure;

var StyledTable = /*#__PURE__*/_styledComponents.default.table.withConfig({
  displayName: "styled__StyledTable",
  componentId: "xns2ns-1"
})(["border-color:transparent;border-spacing:0;color:", ";text-align:left;width:100%;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.secondary70;
});

exports.StyledTable = StyledTable;
StyledTableFigure.defaultProps = {
  theme: _bigDesignTheme.theme
};
StyledTable.defaultProps = {
  theme: _bigDesignTheme.theme
};