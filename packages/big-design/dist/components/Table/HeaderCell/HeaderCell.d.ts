import React, { RefObject, TableHTMLAttributes } from 'react';
import { TableColumn, TableItem } from '../types';
export interface HeaderCellProps<T> extends TableHTMLAttributes<HTMLTableCellElement> {
    actionsRef: RefObject<HTMLDivElement>;
    column: TableColumn<T>;
    hide?: boolean;
    isSorted?: boolean;
    sortDirection?: 'ASC' | 'DESC';
    stickyHeader?: boolean;
    onSortClick?(column: TableColumn<T>): void;
}
export interface HeaderCheckboxCellProps {
    actionsRef: RefObject<HTMLDivElement>;
    stickyHeader?: boolean;
}
export declare const HeaderCheckboxCell: React.FC<HeaderCheckboxCellProps>;
export declare const HeaderCell: <T extends TableItem>({ children, column, hide, isSorted, onSortClick, sortDirection, stickyHeader, actionsRef, }: HeaderCellProps<T>) => JSX.Element;
//# sourceMappingURL=HeaderCell.d.ts.map