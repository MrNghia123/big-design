"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _bigDesignIcons = require("@bigcommerce/big-design-icons");

var _react = _interopRequireWildcard(require("react"));

var _Dropdown = require("../Dropdown");

var _Flex = require("../Flex");

var _styled = require("./styled");

var Pagination = (0, _react.memo)(function (_ref) {
  var itemsPerPage = _ref.itemsPerPage,
      currentPage = _ref.currentPage,
      totalItems = _ref.totalItems,
      _ref$itemsPerPageOpti = _ref.itemsPerPageOptions,
      itemsPerPageOptions = _ref$itemsPerPageOpti === void 0 ? [] : _ref$itemsPerPageOpti,
      onPageChange = _ref.onPageChange,
      onItemsPerPageChange = _ref.onItemsPerPageChange;

  var _useState = (0, _react.useState)(Math.max(1, Math.ceil(totalItems / itemsPerPage))),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      maxPages = _useState2[0],
      setMaxPages = _useState2[1];

  var _useState3 = (0, _react.useState)({
    start: 0,
    end: 0
  }),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      itemRange = _useState4[0],
      setItemRange = _useState4[1];

  var handlePageOutOfBounds = (0, _react.useCallback)(function () {
    if (currentPage < 1 || isNaN(currentPage) || currentPage === undefined) {
      onPageChange(1);
    } else if (currentPage > maxPages) {
      onPageChange(maxPages);
    }
  }, [currentPage, maxPages, onPageChange]);
  var handlePerPageOutOfBounds = (0, _react.useCallback)(function () {
    if (itemsPerPage < 1 || isNaN(itemsPerPage) || itemsPerPage === undefined) {
      onItemsPerPageChange(itemsPerPageOptions[0]);
    }
  }, [itemsPerPage, onItemsPerPageChange, itemsPerPageOptions]);
  var calculateRange = (0, _react.useCallback)(function () {
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
  (0, _react.useEffect)(function () {
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

  return /*#__PURE__*/_react.default.createElement(_Flex.Flex, {
    role: "navigation",
    "aria-label": "pagination",
    flexDirection: "row"
  }, /*#__PURE__*/_react.default.createElement(_Flex.FlexItem, null, /*#__PURE__*/_react.default.createElement(_Dropdown.Dropdown, {
    items: itemsPerPageOptions.map(function (range) {
      return {
        content: "".concat(range),
        hash: "".concat(range),
        onItemClick: handleRangeChange
      };
    }),
    toggle: /*#__PURE__*/_react.default.createElement(_styled.StyledButton, {
      variant: "subtle",
      iconRight: /*#__PURE__*/_react.default.createElement(_bigDesignIcons.ArrowDropDownIcon, {
        size: "xxLarge"
      })
    }, showRanges())
  })), /*#__PURE__*/_react.default.createElement(_Flex.FlexItem, null, /*#__PURE__*/_react.default.createElement(_styled.StyledButton, {
    iconOnly: /*#__PURE__*/_react.default.createElement(_bigDesignIcons.ChevronLeftIcon, {
      title: "Previous page"
    }),
    variant: "subtle",
    disabled: currentPage <= 1,
    onClick: handlePageDecrease
  }), /*#__PURE__*/_react.default.createElement(_styled.StyledButton, {
    iconOnly: /*#__PURE__*/_react.default.createElement(_bigDesignIcons.ChevronRightIcon, {
      title: "Next page"
    }),
    variant: "subtle",
    disabled: currentPage >= maxPages,
    onClick: handlePageIncrease
  })));
});
exports.Pagination = Pagination;
Pagination.displayName = 'Pagination';