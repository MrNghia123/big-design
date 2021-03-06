import React, { RefObject } from 'react';
import { TableItem, TablePaginationProps, TableSelectable } from '../types';
export interface ActionsProps<T> {
    customActions?: React.ComponentType<any>;
    forwardedRef: RefObject<HTMLDivElement>;
    itemName?: string;
    items: T[];
    pagination?: TablePaginationProps;
    onSelectionChange?: TableSelectable<T>['onSelectionChange'];
    selectedItems: Set<T>;
    stickyHeader?: boolean;
    tableId: string;
}
export declare const Actions: <T extends TableItem>({ customActions, forwardedRef, itemName, items, onSelectionChange, pagination, selectedItems, stickyHeader, tableId, ...props }: ActionsProps<T>) => JSX.Element;
//# sourceMappingURL=Actions.d.ts.map