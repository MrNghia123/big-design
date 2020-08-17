"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Actions = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../../utils");

var _Flex = require("../../Flex");

var _Typography = require("../../Typography");

var _SelectAll = require("../SelectAll");

var _TablePagination = require("../TablePagination");

var _styled = require("./styled");

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
      props = (0, _objectWithoutProperties2.default)(_ref, ["customActions", "forwardedRef", "itemName", "items", "onSelectionChange", "pagination", "selectedItems", "stickyHeader", "tableId"]);
  var isSelectable = typeof onSelectionChange === 'function';
  var totalItems = pagination ? pagination.totalItems : items.length;

  var renderItemName = function renderItemName() {
    if (typeof itemName !== 'string') {
      return null;
    }

    var text = isSelectable ? itemName : "".concat(totalItems, " ").concat(itemName);
    return /*#__PURE__*/_react.default.createElement(_Flex.FlexItem, {
      flexShrink: 0,
      marginRight: "medium"
    }, /*#__PURE__*/_react.default.createElement(_Typography.Text, {
      margin: "none"
    }, text));
  };

  var renderActions = function renderActions() {
    var CustomActions = customActions;
    return CustomActions ? /*#__PURE__*/_react.default.createElement(CustomActions, null) : null;
  };

  return /*#__PURE__*/_react.default.createElement(_styled.StyledFlex, (0, _extends2.default)({
    alignItems: "center",
    "aria-controls": tableId,
    flexDirection: "row",
    justifyContent: "stretch",
    stickyHeader: stickyHeader,
    ref: forwardedRef
  }, props), /*#__PURE__*/_react.default.createElement(_SelectAll.SelectAll, {
    onChange: onSelectionChange,
    selectedItems: selectedItems,
    items: items,
    totalItems: totalItems
  }), renderItemName(), renderActions(), pagination && /*#__PURE__*/_react.default.createElement(_TablePagination.TablePagination, pagination));
};

var Actions = (0, _utils.typedMemo)(InternalActions);
exports.Actions = Actions;