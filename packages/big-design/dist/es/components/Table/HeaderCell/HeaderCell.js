import { ArrowDownwardIcon, ArrowUpwardIcon } from '@bigcommerce/big-design-icons';
import React, { memo } from 'react';
import { useComponentSize } from '../../../hooks';
import { typedMemo } from '../../../utils';
import { StyledFlex, StyledTableHeaderCell, StyledTableHeaderCheckbox } from './styled';

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
  var actionsSize = useComponentSize(actionsRef);

  var renderSortIcon = function renderSortIcon() {
    if (!isSorted) {
      return null;
    }

    return sortDirection === 'ASC' ? /*#__PURE__*/React.createElement(ArrowUpwardIcon, {
      size: "medium",
      "data-testid": "asc-icon",
      title: "Ascending order"
    }) : /*#__PURE__*/React.createElement(ArrowDownwardIcon, {
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

  return /*#__PURE__*/React.createElement(StyledTableHeaderCell, {
    isSortable: isSortable,
    stickyHeader: stickyHeader,
    onClick: handleClick,
    width: width,
    stickyHeight: actionsSize.height
  }, /*#__PURE__*/React.createElement(StyledFlex, {
    alignItems: "center",
    flexDirection: "row",
    hide: hide,
    align: align
  }, children, !hide && renderSortIcon()), hide && renderSortIcon());
};

export var HeaderCheckboxCell = memo(function (_ref2) {
  var stickyHeader = _ref2.stickyHeader,
      actionsRef = _ref2.actionsRef;
  var actionsSize = useComponentSize(actionsRef);
  return /*#__PURE__*/React.createElement(StyledTableHeaderCheckbox, {
    stickyHeader: stickyHeader,
    stickyHeight: actionsSize.height
  });
});
export var HeaderCell = typedMemo(InternalHeaderCell);