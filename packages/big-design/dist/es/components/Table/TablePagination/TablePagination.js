import React, { memo } from 'react';
import { Pagination } from '../../Pagination';
import { StyledPaginationContainer } from './styled';
export var TablePagination = memo(function (_ref) {
  var currentPage = _ref.currentPage,
      itemsPerPage = _ref.itemsPerPage,
      itemsPerPageOptions = _ref.itemsPerPageOptions,
      onItemsPerPageChange = _ref.onItemsPerPageChange,
      onPageChange = _ref.onPageChange,
      totalItems = _ref.totalItems;
  return /*#__PURE__*/React.createElement(StyledPaginationContainer, {
    flexShrink: 0
  }, /*#__PURE__*/React.createElement(Pagination, {
    currentPage: currentPage,
    itemsPerPage: itemsPerPage,
    itemsPerPageOptions: itemsPerPageOptions,
    onItemsPerPageChange: onItemsPerPageChange,
    onPageChange: onPageChange,
    totalItems: totalItems
  }));
});