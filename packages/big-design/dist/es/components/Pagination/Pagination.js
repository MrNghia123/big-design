import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { ArrowDropDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@bigcommerce/big-design-icons';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { Dropdown } from '../Dropdown';
import { Flex, FlexItem } from '../Flex';
import { StyledButton } from './styled';
export var Pagination = memo(function (_ref) {
  var itemsPerPage = _ref.itemsPerPage,
      currentPage = _ref.currentPage,
      totalItems = _ref.totalItems,
      _ref$itemsPerPageOpti = _ref.itemsPerPageOptions,
      itemsPerPageOptions = _ref$itemsPerPageOpti === void 0 ? [] : _ref$itemsPerPageOpti,
      onPageChange = _ref.onPageChange,
      onItemsPerPageChange = _ref.onItemsPerPageChange;

  var _useState = useState(Math.max(1, Math.ceil(totalItems / itemsPerPage))),
      _useState2 = _slicedToArray(_useState, 2),
      maxPages = _useState2[0],
      setMaxPages = _useState2[1];

  var _useState3 = useState({
    start: 0,
    end: 0
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      itemRange = _useState4[0],
      setItemRange = _useState4[1];

  var handlePageOutOfBounds = useCallback(function () {
    if (currentPage < 1 || isNaN(currentPage) || currentPage === undefined) {
      onPageChange(1);
    } else if (currentPage > maxPages) {
      onPageChange(maxPages);
    }
  }, [currentPage, maxPages, onPageChange]);
  var handlePerPageOutOfBounds = useCallback(function () {
    if (itemsPerPage < 1 || isNaN(itemsPerPage) || itemsPerPage === undefined) {
      onItemsPerPageChange(itemsPerPageOptions[0]);
    }
  }, [itemsPerPage, onItemsPerPageChange, itemsPerPageOptions]);
  var calculateRange = useCallback(function () {
    var firstItemInRange = itemsPerPage * (currentPage - 1) + 1;
    var lastItemInRange = itemsPerPage * currentPage;
    firstItemInRange = Math.min(firstItemInRange, totalItems);
    lastItemInRange = Math.min(lastItemInRange, totalItems);

    if (lastItemInRange === 0 || isNaN(lastItemInRange) || isNaN(firstItemInRange)) {
      firstItemInRange = 0;
      lastItemInRange = 0;
    }

    setItemRange({
      start: firstItemInRange,
      end: lastItemInRange
    });
  }, [itemsPerPage, currentPage, totalItems]);
  useEffect(function () {
    handlePageOutOfBounds();
    handlePerPageOutOfBounds();
    calculateRange();
    setMaxPages(Math.max(1, Math.ceil(totalItems / itemsPerPage)));
  }, [calculateRange, currentPage, handlePageOutOfBounds, handlePerPageOutOfBounds, itemsPerPage, totalItems]);

  var handlePageIncrease = function handlePageIncrease() {
    onPageChange(currentPage + 1);
  };

  var handlePageDecrease = function handlePageDecrease() {
    onPageChange(currentPage - 1);
  };

  var handleRangeChange = function handleRangeChange(item) {
    return onItemsPerPageChange(Number(item.hash));
  };

  var showRanges = function showRanges() {
    return itemRange.start === itemRange.end ? "".concat(itemRange.start, " of ").concat(totalItems) : "".concat(itemRange.start, " - ").concat(itemRange.end, " of ").concat(totalItems);
  };

  return /*#__PURE__*/React.createElement(Flex, {
    role: "navigation",
    "aria-label": "pagination",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(FlexItem, null, /*#__PURE__*/React.createElement(Dropdown, {
    items: itemsPerPageOptions.map(function (range) {
      return {
        content: "".concat(range),
        hash: "".concat(range),
        onItemClick: handleRangeChange
      };
    }),
    toggle: /*#__PURE__*/React.createElement(StyledButton, {
      variant: "subtle",
      iconRight: /*#__PURE__*/React.createElement(ArrowDropDownIcon, {
        size: "xxLarge"
      })
    }, showRanges())
  })), /*#__PURE__*/React.createElement(FlexItem, null, /*#__PURE__*/React.createElement(StyledButton, {
    iconOnly: /*#__PURE__*/React.createElement(ChevronLeftIcon, {
      title: "Previous page"
    }),
    variant: "subtle",
    disabled: currentPage <= 1,
    onClick: handlePageDecrease
  }), /*#__PURE__*/React.createElement(StyledButton, {
    iconOnly: /*#__PURE__*/React.createElement(ChevronRightIcon, {
      title: "Next page"
    }),
    variant: "subtle",
    disabled: currentPage >= maxPages,
    onClick: handlePageIncrease
  })));
});
Pagination.displayName = 'Pagination';