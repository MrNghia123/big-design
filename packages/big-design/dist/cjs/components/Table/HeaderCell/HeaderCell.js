"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderCell = exports.HeaderCheckboxCell = void 0;

var _bigDesignIcons = require("@bigcommerce/big-design-icons");

var _react = _interopRequireWildcard(require("react"));

var _hooks = require("../../../hooks");

var _utils = require("../../../utils");

var _styled = require("./styled");

var InternalHeaderCell = function InternalHeaderCell(_ref) {
  var children = _ref.children,
      column = _ref.column,
      _ref$hide = _ref.hide,
      hide = _ref$hide === void 0 ? false : _ref$hide,
      isSorted = _ref.isSorted,
      onSortClick = _ref.onSortClick,
      sortDirection = _ref.sortDirection,
      stickyHeader = _ref.stickyHeader,
      actionsRef = _ref.actionsRef;
  var _column$align = column.align,
      align = _column$align === void 0 ? 'left' : _column$align,
      isSortable = column.isSortable,
      width = column.width;
  var actionsSize = (0, _hooks.useComponentSize)(actionsRef);

  var renderSortIcon = function renderSortIcon() {
    if (!isSorted) {
      return null;
    }

    return sortDirection === 'ASC' ? /*#__PURE__*/_react.default.createElement(_bigDesignIcons.ArrowUpwardIcon, {
      size: "medium",
      "data-testid": "asc-icon",
      title: "Ascending order"
    }) : /*#__PURE__*/_react.default.createElement(_bigDesignIcons.ArrowDownwardIcon, {
      size: "medium",
      "data-testid": "desc-icon",
      title: "Descending order"
    });
  };

  var handleClick = function handleClick(e) {
    e.preventDefault();

    if (isSortable && typeof onSortClick === 'function') {
      onSortClick(column);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_styled.StyledTableHeaderCell, {
    isSortable: isSortable,
    stickyHeader: stickyHeader,
    onClick: handleClick,
    width: width,
    stickyHeight: actionsSize.height
  }, /*#__PURE__*/_react.default.createElement(_styled.StyledFlex, {
    alignItems: "center",
    flexDirection: "row",
    hide: hide,
    align: align
  }, children, !hide && renderSortIcon()), hide && renderSortIcon());
};

var HeaderCheckboxCell = (0, _react.memo)(function (_ref2) {
  var stickyHeader = _ref2.stickyHeader,
      actionsRef = _ref2.actionsRef;
  var actionsSize = (0, _hooks.useComponentSize)(actionsRef);
  return /*#__PURE__*/_react.default.createElement(_styled.StyledTableHeaderCheckbox, {
    stickyHeader: stickyHeader,
    stickyHeight: actionsSize.height
  });
});
exports.HeaderCheckboxCell = HeaderCheckboxCell;
var HeaderCell = (0, _utils.typedMemo)(InternalHeaderCell);
exports.HeaderCell = HeaderCell;