import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import React from 'react';
import { Checkbox } from '../../Checkbox';
import { Flex, FlexItem } from '../../Flex';
import { Text } from '../../Typography';
export var SelectAll = function SelectAll(_ref) {
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
      return onChange(_toConsumableArray(items));
    }

    if (allInPageSelected) {
      var newSelectedItems = new Set(selectedItems);
      items.forEach(function (item) {
        return newSelectedItems.delete(item);
      });
      return onChange(_toConsumableArray(newSelectedItems));
    }

    return onChange(_toConsumableArray(new Set([].concat(_toConsumableArray(selectedItems), _toConsumableArray(items)))));
  };

  if (typeof onChange !== 'function') {
    return null;
  }

  var totalSelectedItems = selectedItems.size;
  var label = allInPageSelected ? 'Deselect All' : 'Select All';
  return /*#__PURE__*/React.createElement(FlexItem, {
    marginRight: "xxSmall",
    flexShrink: 0
  }, /*#__PURE__*/React.createElement(Flex, {
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    isIndeterminate: someInPageSelected,
    hiddenLabel: true,
    label: label,
    checked: allInPageSelected,
    onChange: handleSelectAll
  }), /*#__PURE__*/React.createElement(Text, {
    marginLeft: "small"
  }, totalSelectedItems === 0 ? "".concat(totalItems) : "".concat(totalSelectedItems, "/").concat(totalItems))));
};