import React from 'react';
import { TableColumn, TableItem, TableProps, TableSelectable, TableSortDirection } from '../Table';
export declare type StatefulTableSortFn<T> = (a: T, b: T, direction: TableSortDirection) => number;
export interface StatefulTableColumn<T> extends Omit<TableColumn<T>, 'isSortable'> {
    sortKey?: keyof T;
    sortFn?: StatefulTableSortFn<T>;
}
export interface StatefulTableProps<T> extends Omit<TableProps<T>, 'columns' | 'pagination' | 'selectable' | 'sortable'> {
    columns: Array<StatefulTableColumn<T>>;
    pagination?: boolean;
    selectable?: boolean;
    defaultSelected?: T[];
    onSelectionChange?: TableSelectable<T>['onSelectionChange'];
}
export declare const StatefulTable: <T extends TableItem>({ columns, defaultSelected, itemName, items, keyField, onSelectionChange, pagination, selectable, stickyHeader, ...rest }: StatefulTableProps<T>) => React.ReactElement<StatefulTableProps<T>, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
//# sourceMappingURL=StatefulTable.d.ts.map