"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatefulTable = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _hooks = require("../../hooks");

var _utils = require("../../utils");

var _Table = require("../Table");

var _reducer = require("./reducer");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var InternalStatefulTable = function InternalStatefulTable(_ref) {
  var _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? [] : _ref$columns,
      _ref$defaultSelected = _ref.defaultSelected,
      defaultSelected = _ref$defaultSelected === void 0 ? [] : _ref$defaultSelected,
      itemName = _ref.itemName,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      keyField = _ref.keyField,
      onSelectionChange = _ref.onSelectionChange,
      _ref$pagination = _ref.pagination,
      pagination = _ref$pagination === void 0 ? false : _ref$pagination,
      _ref$selectable = _ref.selectable,
      selectable = _ref$selectable === void 0 ? false : _ref$selectable,
      _ref$stickyHeader = _ref.stickyHeader,
      stickyHeader = _ref$stickyHeader === void 0 ? false : _ref$stickyHeader,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["columns", "defaultSelected", "itemName", "items", "keyField", "onSelectionChange", "pagination", "selectable", "stickyHeader"]);
  var reducer = (0, _react.useMemo)(function () {
    return (0, _reducer.createReducer)();
  }, []);
  var reducerInit = (0, _react.useMemo)(function () {
    return (0, _reducer.createReducerInit)();
  }, []);
  var sortable = (0, _react.useMemo)(function () {
    return columns.some(function (column) {
      return column.sortKey || column.sortFn;
    });
  }, [columns]);

  var _useReducer = (0, _react.useReducer)(reducer, {
    columns: columns,
    defaultSelected: defaultSelected,
    items: items,
    pagination: pagination
  }, reducerInit),
      _useReducer2 = (0, _slicedToArray2.default)(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var columnsChangedCallback = (0, _react.useCallback)(function () {
    return dispatch({
      type: 'COLUMNS_CHANGED',
      columns: columns
    });
  }, [columns]);
  var itemsChangedCallback = (0, _react.useCallback)(function () {
    return dispatch({
      type: 'ITEMS_CHANGED',
      items: items,
      isPaginationEnabled: pagination
    });
  }, [items, pagination]);
  (0, _hooks.useDidUpdate)(columnsChangedCallback);
  (0, _hooks.useDidUpdate)(itemsChangedCallback);
  var onPageChange = (0, _react.useCallback)(function (page) {
    return dispatch({
      type: 'PAGE_CHANGE',
      page: page
    });
  }, []);
  var onItemsPerPageChange = (0, _react.useCallback)(function (itemsPerPage) {
    return dispatch({
      type: 'ITEMS_PER_PAGE_CHANGE',
      itemsPerPage: itemsPerPage
    });
  }, []);
  var onItemSelect = (0, _react.useCallback)(function (selectedItems) {
    dispatch({
      type: 'SELECTED_ITEMS',
      selectedItems: selectedItems
    });

    if (typeof onSelectionChange === 'function') {
      onSelectionChange(selectedItems);
    }
  }, [onSelectionChange]);
  var onSort = (0, _react.useCallback)(function (_columnHash, direction, column) {
    dispatch({
      type: 'SORT',
      column: column,
      direction: direction
    });
  }, []);
  var paginationOptions = (0, _react.useMemo)(function () {
    return pagination ? _objectSpread({}, state.pagination, {
      onItemsPerPageChange: onItemsPerPageChange,
      onPageChange: onPageChange
    }) : undefined;
  }, [pagination, state.pagination, onItemsPerPageChange, onPageChange]);
  var selectableOptions = (0, _react.useMemo)(function () {
    return selectable ? {
      selectedItems: state.selectedItems,
      onSelectionChange: onItemSelect
    } : undefined;
  }, [selectable, state.selectedItems, onItemSelect]);
  var sortableOptions = (0, _react.useMemo)(function () {
    return sortable ? _objectSpread({}, state.sortable, {
      onSort: onSort
    }) : undefined;
  }, [sortable, state.sortable, onSort]);
  return /*#__PURE__*/_react.default.createElement(_Table.Table, (0, _extends2.default)({}, rest, {
    columns: state.columns,
    itemName: itemName,
    items: state.currentItems,
    keyField: keyField,
    stickyHeader: stickyHeader,
    pagination: paginationOptions,
    selectable: selectableOptions,
    sortable: sortableOptions
  }));
};

var StatefulTable = (0, _utils.typedMemo)(InternalStatefulTable);
exports.StatefulTable = StatefulTable;