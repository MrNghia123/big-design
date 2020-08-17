import { TableHTMLAttributes } from 'react';
import { TableColumn, TableItem } from '../types';
export interface RowProps<T> extends TableHTMLAttributes<HTMLTableRowElement> {
    isSelected?: boolean;
    isSelectable?: boolean;
    item: T;
    columns: Array<TableColumn<T>>;
    onItemSelect?(item: T): void;
}
export declare const Row: <T extends TableItem>({ columns, isSelectable, isSelected, item, onItemSelect, }: RowProps<T>) => JSX.Element;
//# sourceMappingURL=Row.d.ts.map