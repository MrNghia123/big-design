import React from 'react';
import { MarginProps } from '../../mixins';
export interface PaginationProps extends MarginProps {
    currentPage: number;
    itemsPerPage: number;
    itemsPerPageOptions: number[];
    totalItems: number;
    onPageChange(page: number): void;
    onItemsPerPageChange(range: number): void;
}
export declare const Pagination: React.FC<PaginationProps>;
//# sourceMappingURL=Pagination.d.ts.map