import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useEventCallback, useUniqueId } from '../../hooks';
import { typedMemo } from '../../utils';
import { Actions } from './Actions';
import { Body } from './Body';
import { Head } from './Head';
import { HeaderCell } from './HeaderCell';
import { HeaderCheckboxCell } from './HeaderCell/HeaderCell';
import { Row } from './Row';
import { StyledTable, StyledTableFigure } from './styled';

var InternalTable = function InternalTable(props) {
  var className = props.className,
      columns = props.columns,
      actions = props.actions,
      _props$headerless = props.headerless,
      headerless = _props$headerless === void 0 ? false : _props$headerless,
      id = props.id,
      itemName = props.itemName,
      items = props.items,
      _props$keyField = props.keyField,
      keyField = _props$keyField === void 0 ? 'id' : _props$keyField,
      pagination = props.pagination,
      selectable = props.selectable,
      sortable = props.sortable,
      stickyHeader = props.stickyHeader,
      style = props.style,
      rest = _objectWithoutProperties(props, ["className", "columns", "actions", "headerless", "id", "itemName", "items", "keyField", "pagination", "selectable", "sortable", "stickyHeader", "style"]);

  var actionsRef = useRef(null);
  var uniqueTableId = useUniqueId('table');
  var tableIdRef = useRef(id || uniqueTableId);
  var isSelectable = Boolean(selectable);

  var _useState = useState(new Set()),
      _useState2 = _slicedToArray(_useState, 2),
      selectedItems = _useState2[0],
      setSelectedItems = _useState2[1];

  var eventCallback = useEventCallback(function (item) {
    if (!selectable || !item) {
      return;
    }

    var onSelectionChange = selectable.onSelectionChange;
    var nextIsSelected = !selectedItems.has(item);

    if (nextIsSelected) {
      onSelectionChange([].concat(_toConsumableArray(selectedItems), [item]));
    } else {
      onSelectionChange(_toConsumableArray(selectedItems).filter(function (selectedItem) {
        return selectedItem !== item;
      }));
    }
  });
  var selectableConditionalDep = selectable ? selectable.selectedItems : null;
  useEffect(function () {
    if (selectable) {
      setSelectedItems(new Set(selectable.selectedItems));
    }
  }, [selectable, selectableConditionalDep]);
  var onItemSelect = selectable ? eventCallback : undefined;
  var onSortClick = useCallback(function (column) {
    if (!sortable || !column.isSortable) {
      return;
    }

    var hash = column.hash;
    var sortDirection = sortable.direction === 'ASC' ? 'DESC' : 'ASC';

    if (typeof sortable.onSort === 'function') {
      sortable.onSort(hash, sortDirection, column);
    }
  }, [sortable]);

  var shouldRenderActions = function shouldRenderActions() {
    return Boolean(actions) || Boolean(pagination) || Boolean(selectable) || Boolean(itemName);
  };

  var getItemKey = function getItemKey(item, index) {
    if (item[keyField] !== undefined) {
      return item[keyField];
    }

    return index;
  };

  var renderHeaders = function renderHeaders() {
    return /*#__PURE__*/React.createElement(Head, {
      hidden: headerless
    }, /*#__PURE__*/React.createElement("tr", null, isSelectable && /*#__PURE__*/React.createElement(HeaderCheckboxCell, {
      stickyHeader: stickyHeader,
      actionsRef: actionsRef
    }), columns.map(function (column, index) {
      var hash = column.hash,
          header = column.header,
          isSortable = column.isSortable,
          hideHeader = column.hideHeader;
      var isSorted = isSortable && sortable && hash === sortable.columnHash;
      var sortDirection = sortable && sortable.direction;
      return /*#__PURE__*/React.createElement(HeaderCell, {
        column: column,
        hide: hideHeader,
        isSorted: isSorted,
        key: index,
        onSortClick: onSortClick,
        sortDirection: sortDirection,
        stickyHeader: stickyHeader,
        actionsRef: actionsRef
      }, header);
    })));
  };

  var renderItems = function renderItems() {
    return /*#__PURE__*/React.createElement(Body, {
      withFirstRowBorder: headerless
    }, items.map(function (item, index) {
      var key = getItemKey(item, index);
      var isSelected = selectedItems.has(item);
      return /*#__PURE__*/React.createElement(Row, {
        columns: columns,
        isSelectable: isSelectable,
        isSelected: isSelected,
        item: item,
        key: key,
        onItemSelect: onItemSelect
      });
    }));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, shouldRenderActions() && /*#__PURE__*/React.createElement(Actions, {
    customActions: actions,
    pagination: pagination,
    onSelectionChange: selectable && selectable.onSelectionChange,
    selectedItems: selectedItems,
    items: items,
    itemName: itemName,
    tableId: tableIdRef.current,
    stickyHeader: stickyHeader,
    forwardedRef: actionsRef
  }), /*#__PURE__*/React.createElement(StyledTable, _extends({}, rest, {
    id: tableIdRef.current
  }), renderHeaders(), renderItems()));
};

export var Table = typedMemo(InternalTable);
export var TableFigure = memo(function (props) {
  return /*#__PURE__*/React.createElement(StyledTableFigure, props);
});