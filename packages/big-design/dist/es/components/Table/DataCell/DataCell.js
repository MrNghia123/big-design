import React, { memo } from 'react';
import { StyledTableDataCell, StyledTableDataCheckbox } from './styled';
export var DataCell = memo(function (_ref) {
  var align = _ref.align,
      children = _ref.children,
      isCheckbox = _ref.isCheckbox,
      verticalAlign = _ref.verticalAlign,
      width = _ref.width,
      _ref$withBorder = _ref.withBorder,
      withBorder = _ref$withBorder === void 0 ? true : _ref$withBorder,
      _ref$withPadding = _ref.withPadding,
      withPadding = _ref$withPadding === void 0 ? true : _ref$withPadding;
  return isCheckbox ? /*#__PURE__*/React.createElement(StyledTableDataCheckbox, {
    align: align,
    width: width,
    withBorder: withBorder
  }, children) : /*#__PURE__*/React.createElement(StyledTableDataCell, {
    align: align,
    verticalAlign: verticalAlign,
    width: width,
    withBorder: withBorder,
    withPadding: withPadding
  }, children);
});