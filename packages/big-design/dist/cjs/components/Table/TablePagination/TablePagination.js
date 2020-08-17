"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TablePagination = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Pagination = require("../../Pagination");

var _styled = require("./styled");

var TablePagination = (0, _react.memo)(function (_ref) {
  var currentPage = _ref.currentPage,
      itemsPerPage = _ref.itemsPerPage,
      itemsPerPageOptions = _ref.itemsPerPageOptions,
      onItemsPerPageChange = _ref.onItemsPerPageChange,
      onPageChange = _ref.onPageChange,
      totalItems = _ref.totalItems;
  return /*#__PURE__*/_react.default.createElement(_styled.StyledPaginationContainer, {
    flexShrink: 0
  }, /*#__PURE__*/_react.default.createElement(_Pagination.Pagination, {
    currentPage: currentPage,
    itemsPerPage: itemsPerPage,
    itemsPerPageOptions: itemsPerPageOptions,
    onItemsPerPageChange: onItemsPerPageChange,
    onPageChange: onPageChange,
    totalItems: totalItems
  }));
});
exports.TablePagination = TablePagination;