import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { typedMemo } from '../../../utils';
import { FlexItem } from '../../Flex';
import { Text } from '../../Typography';
import { SelectAll } from '../SelectAll';
import { TablePagination } from '../TablePagination';
import { StyledFlex } from './styled';

var InternalActions = function InternalActions(_ref) {
  var customActions = _ref.customActions,
      forwardedRef = _ref.forwardedRef,
      itemName = _ref.itemName,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      onSelectionChange = _ref.onSelectionChange,
      pagination = _ref.pagination,
      selectedItems = _ref.selectedItems,
      stickyHeader = _ref.stickyHeader,
      tableId = _ref.tableId,
      props = _objectWithoutProperties(_ref, ["customActions", "forwardedRef", "itemName", "items", "onSelectionChange", "pagination", "selectedItems", "stickyHeader", "tableId"]);

  var isSelectable = typeof onSelectionChange === 'function';
  var totalItems = pagination ? pagination.totalItems : items.length;

  var renderItemName = function renderItemName() {
    if (typeof itemName !== 'string') {
      return null;
    }

    var text = isSelectable ? itemName : "".concat(totalItems, " ").concat(itemName);
    return /*#__PURE__*/React.createElement(FlexItem, {
      flexShrink: 0,
      marginRight: "medium"
    }, /*#__PURE__*/React.createElement(Text, {
      margin: "none"
    }, text));
  };

  var renderActions = function renderActions() {
    var CustomActions = customActions;
    return CustomActions ? /*#__PURE__*/React.createElement(CustomActions, null) : null;
  };

  return /*#__PURE__*/React.createElement(StyledFlex, _extends({
    alignItems: "center",
    "aria-controls": tableId,
    flexDirection: "row",
    justifyContent: "stretch",
    stickyHeader: stickyHeader,
    ref: forwardedRef
  }, props), /*#__PURE__*/React.createElement(SelectAll, {
    onChange: onSelectionChange,
    selectedItems: selectedItems,
    items: items,
    totalItems: totalItems
  }), renderItemName(), renderActions(), pagination && /*#__PURE__*/React.createElement(TablePagination, pagination));
};

export var Actions = typedMemo(InternalActions);