"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableFigure = exports.Table = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _hooks = require("../../hooks");

var _utils = require("../../utils");

var _Actions = require("./Actions");

var _Body = require("./Body");

var _Head = require("./Head");

var _HeaderCell = require("./HeaderCell");

var _HeaderCell2 = require("./HeaderCell/HeaderCell");

var _Row = require("./Row");

var _styled = require("./styled");

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
      rest = (0, _objectWithoutProperties2.default)(props, ["className", "columns", "actions", "headerless", "id", "itemName", "items", "keyField", "pagination", "selectable", "sortable", "stickyHeader", "style"]);
  var actionsRef = (0, _react.useRef)(null);
  var uniqueTableId = (0, _hooks.useUniqueId)('table');
  var tableIdRef = (0, _react.useRef)(id || uniqueTableId);
  var isSelectable = Boolean(selectable);

  var _useState = (0, _react.useState)(new Set()),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      selectedItems = _useState2[0],
      setSelectedItems = _useState2[1];

  var eventCallback = (0, _hooks.useEventCallback)(function (item) {
    if (!selectable || !item) {
      return;
    }

    var onSelectionChange = selectable.onSelectionChange;
    var nextIsSelected = !selectedItems.has(item);

    if (nextIsSelected) {
      onSelectionChange([].concat((0, _toConsumableArray2.default)(selectedItems), [item]));
    } else {
      onSelectionChange((0, _toConsumableArray2.default)(selectedItems).filter(function (selectedItem) {
        return selectedItem !== item;
      }));
    }
  });
  var selectableConditionalDep = selectable ? selectable.selectedItems : null;
  (0, _react.useEffect)(function () {
    if (selectable) {
      setSelectedItems(new Set(selectable.selectedItems));
    }
  }, [selectable, selectableConditionalDep]);
  var onItemSelect = selectable ? eventCallback : undefined;
  var onSortClick = (0, _react.useCallback)(function (column) {
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
    return /*#__PURE__*/_react.default.createElement(_Head.Head, {
      hidden: headerless
    }, /*#__PURE__*/_react.default.createElement("tr", null, isSelectable && /*#__PURE__*/_react.default.createElement(_HeaderCell2.HeaderCheckboxCell, {
      stickyHeader: stickyHeader,
      actionsRef: actionsRef
    }), columns.map(function (column, index) {
      var hash = column.hash,
          header = column.header,
          isSortable = column.isSortable,
          hideHeader = column.hideHeader;
      var isSorted = isSortable && sortable && hash === sortable.columnHash;
      var sortDirection = sortable && sortable.direction;
      return /*#__PURE__*/_react.default.createElement(_HeaderCell.HeaderCell, {
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
    return /*#__PURE__*/_react.default.createElement(_Body.Body, {
      withFirstRowBorder: headerless
    }, items.map(function (item, index) {
      var key = getItemKey(item, index);
      var isSelected = selectedItems.has(item);
      return /*#__PURE__*/_react.default.createElement(_Row.Row, {
        columns: columns,
        isSelectable: isSelectable,
        isSelected: isSelected,
        item: item,
        key: key,
        onItemSelect: onItemSelect
      });
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, shouldRenderActions() && /*#__PURE__*/_react.default.createElement(_Actions.Actions, {
    customActions: actions,
    pagination: pagination,
    onSelectionChange: selectable && selectable.onSelectionChange,
    selectedItems: selectedItems,
    items: items,
    itemName: itemName,
    tableId: tableIdRef.current,
    stickyHeader: stickyHeader,
    forwardedRef: actionsRef
  }), /*#__PURE__*/_react.default.createElement(_styled.StyledTable, (0, _extends2.default)({}, rest, {
    id: tableIdRef.current
  }), renderHeaders(), renderItems()));
};

var Table = (0, _utils.typedMemo)(InternalTable);
exports.Table = Table;
var TableFigure = (0, _react.memo)(function (props) {
  return /*#__PURE__*/_react.default.createElement(_styled.StyledTableFigure, props);
});
exports.TableFigure = TableFigure;