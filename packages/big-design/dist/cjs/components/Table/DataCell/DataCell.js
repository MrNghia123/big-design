"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataCell = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styled = require("./styled");

var DataCell = (0, _react.memo)(function (_ref) {
  var align = _ref.align,
      children = _ref.children,
      isCheckbox = _ref.isCheckbox,
      verticalAlign = _ref.verticalAlign,
      width = _ref.width,
      _ref$withBorder = _ref.withBorder,
      withBorder = _ref$withBorder === void 0 ? true : _ref$withBorder,
      _ref$withPadding = _ref.withPadding,
      withPadding = _ref$withPadding === void 0 ? true : _ref$withPadding;
  return isCheckbox ? /*#__PURE__*/_react.default.createElement(_styled.StyledTableDataCheckbox, {
    align: align,
    width: width,
    withBorder: withBorder
  }, children) : /*#__PURE__*/_react.default.createElement(_styled.StyledTableDataCell, {
    align: align,
    verticalAlign: verticalAlign,
    width: width,
    withBorder: withBorder,
    withPadding: withPadding
  }, children);
});
exports.DataCell = DataCell;