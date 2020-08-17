"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectAll = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _Checkbox = require("../../Checkbox");

var _Flex = require("../../Flex");

var _Typography = require("../../Typography");

var SelectAll = function SelectAll(_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      onChange = _ref.onChange,
      selectedItems = _ref.selectedItems,
      totalItems = _ref.totalItems;
  var allInPageSelected = items.length > 0 && items.every(function (item) {
    return selectedItems.has(item);
  });
  var someInPageSelected = items.length > 0 && items.some(function (item) {
    return selectedItems.has(item);
  });

  var handleSelectAll = function handleSelectAll() {
    if (typeof onChange !== 'function') {
      return;
    }

    if (selectedItems.size === 0) {
      return onChange((0, _toConsumableArray2.default)(items));
    }

    if (allInPageSelected) {
      var newSelectedItems = new Set(selectedItems);
      items.forEach(function (item) {
        return newSelectedItems.delete(item);
      });
      return onChange((0, _toConsumableArray2.default)(newSelectedItems));
    }

    return onChange((0, _toConsumableArray2.default)(new Set([].concat((0, _toConsumableArray2.default)(selectedItems), (0, _toConsumableArray2.default)(items)))));
  };

  if (typeof onChange !== 'function') {
    return null;
  }

  var totalSelectedItems = selectedItems.size;
  var label = allInPageSelected ? 'Deselect All' : 'Select All';
  return /*#__PURE__*/_react.default.createElement(_Flex.FlexItem, {
    marginRight: "xxSmall",
    flexShrink: 0
  }, /*#__PURE__*/_react.default.createElement(_Flex.Flex, {
    flexDirection: "row"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.Checkbox, {
    isIndeterminate: someInPageSelected,
    hiddenLabel: true,
    label: label,
    checked: allInPageSelected,
    onChange: handleSelectAll
  }), /*#__PURE__*/_react.default.createElement(_Typography.Text, {
    marginLeft: "small"
  }, totalSelectedItems === 0 ? "".concat(totalItems) : "".concat(totalSelectedItems, "/").concat(totalItems))));
};

exports.SelectAll = SelectAll;