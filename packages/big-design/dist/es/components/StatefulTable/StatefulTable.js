import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useCallback, useMemo, useReducer } from 'react';
import { useDidUpdate } from '../../hooks';
import { typedMemo } from '../../utils';
import { Table } from '../Table';
import { createReducer, createReducerInit } from './reducer';

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
      rest = _objectWithoutProperties(_ref, ["columns", "defaultSelected", "itemName", "items", "keyField", "onSelectionChange", "pagination", "selectable", "stickyHeader"]);

  var reducer = useMemo(function () {
    return createReducer();
  }, []);
  var reducerInit = useMemo(function () {
    return createReducerInit();
  }, []);
  var sortable = useMemo(function () {
    return columns.some(function (column) {
      return column.sortKey || column.sortFn;
    });
  }, [columns]);

  var _useReducer = useReducer(reducer, {
    columns: columns,
    defaultSelected: defaultSelected,
    items: items,
    pagination: pagination
  }, reducerInit),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var columnsChangedCallback = useCallback(function () {
    return dispatch({
      type: 'COLUMNS_CHANGED',
      columns: columns
    });
  }, [columns]);
  var itemsChangedCallback = useCallback(function () {
    return dispatch({
      type: 'ITEMS_CHANGED',
      items: items,
      isPaginationEnabled: pagination
    });
  }, [items, pagination]);
  useDidUpdate(columnsChangedCallback);
  useDidUpdate(itemsChangedCallback);
  var onPageChange = useCallback(function (page) {
    return dispatch({
      type: 'PAGE_CHANGE',
      page: page
    });
  }, []);
  var onItemsPerPageChange = useCallback(function (itemsPerPage) {
    return dispatch({
      type: 'ITEMS_PER_PAGE_CHANGE',
      itemsPerPage: itemsPerPage
    });
  }, []);
  var onItemSelect = useCallback(function (selectedItems) {
    dispatch({
      type: 'SELECTED_ITEMS',
      selectedItems: selectedItems
    });

    if (typeof onSelectionChange === 'function') {
      onSelectionChange(selectedItems);
    }
  }, [onSelectionChange]);
  var onSort = useCallback(function (_columnHash, direction, column) {
    dispatch({
      type: 'SORT',
      column: column,
      direction: direction
    });
  }, []);
  var paginationOptions = useMemo(function () {
    return pagination ? _objectSpread({}, state.pagination, {
      onItemsPerPageChange: onItemsPerPageChange,
      onPageChange: onPageChange
    }) : undefined;
  }, [pagination, state.pagination, onItemsPerPageChange, onPageChange]);
  var selectableOptions = useMemo(function () {
    return selectable ? {
      selectedItems: state.selectedItems,
      onSelectionChange: onItemSelect
    } : undefined;
  }, [selectable, state.selectedItems, onItemSelect]);
  var sortableOptions = useMemo(function () {
    return sortable ? _objectSpread({}, state.sortable, {
      onSort: onSort
    }) : undefined;
  }, [sortable, state.sortable, onSort]);
  return /*#__PURE__*/React.createElement(Table, _extends({}, rest, {
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

export var StatefulTable = typedMemo(InternalStatefulTable);