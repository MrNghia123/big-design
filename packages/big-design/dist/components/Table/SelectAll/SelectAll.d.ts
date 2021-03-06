/// <reference types="react" />
import { TableItem, TablePaginationProps, TableSelectable } from '../types';
export interface SelectAllProps<T> {
    items: T[];
    totalItems: number;
    onChange?: TableSelectable<T>['onSelectionChange'];
    pagination?: TablePaginationProps;
    selectedItems: Set<T>;
}
export declare const SelectAll: <T extends TableItem>({ items, onChange, selectedItems, totalItems, }: SelectAllProps<T>) => JSX.Element | null;
//# sourceMappingURL=SelectAll.d.ts.map