import React from 'react';
import { typedMemo } from '../../../utils';
import { Checkbox } from '../../Checkbox';
import { DataCell } from '../DataCell';
import { StyledTableRow } from './styled';

var InternalRow = function InternalRow(_ref) {
  var columns = _ref.columns,
      _ref$isSelectable = _ref.isSelectable,
      isSelectable = _ref$isSelectable === void 0 ? false : _ref$isSelectable,
      _ref$isSelected = _ref.isSelected,
      isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected,
      item = _ref.item,
      onItemSelect = _ref.onItemSelect;

  var onChange = function onChange() {
    if (onItemSelect) {
      onItemSelect(item);
    }
  };

  var label = isSelected ? "Selected" : "Unselected";
  return /*#__PURE__*/React.createElement(StyledTableRow, {
    isSelected: isSelected
  }, isSelectable && /*#__PURE__*/React.createElement(DataCell, {
    key: "data-checkbox",
    isCheckbox: true
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: isSelected,
    hiddenLabel: true,
    label: label,
    onChange: onChange
  })), columns.map(function (_ref2, columnIndex) {
    var CellContent = _ref2.render,
        align = _ref2.align,
        verticalAlign = _ref2.verticalAlign,
        width = _ref2.width,
        _ref2$withPadding = _ref2.withPadding,
        withPadding = _ref2$withPadding === void 0 ? true : _ref2$withPadding;
    return /*#__PURE__*/React.createElement(DataCell, {
      key: columnIndex,
      align: align,
      verticalAlign: verticalAlign,
      width: width,
      withPadding: withPadding
    }, /*#__PURE__*/React.createElement(CellContent, item));
  }));
};

export var Row = typedMemo(InternalRow);