"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../../utils");

var _Checkbox = require("../../Checkbox");

var _DataCell = require("../DataCell");

var _styled = require("./styled");

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
  return /*#__PURE__*/_react.default.createElement(_styled.StyledTableRow, {
    isSelected: isSelected
  }, isSelectable && /*#__PURE__*/_react.default.createElement(_DataCell.DataCell, {
    key: "data-checkbox",
    isCheckbox: true
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.Checkbox, {
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
    return /*#__PURE__*/_react.default.createElement(_DataCell.DataCell, {
      key: columnIndex,
      align: align,
      verticalAlign: verticalAlign,
      width: width,
      withPadding: withPadding
    }, /*#__PURE__*/_react.default.createElement(CellContent, item));
  }));
};

var Row = (0, _utils.typedMemo)(InternalRow);
exports.Row = Row;