import { Reducer } from 'react';
import { TableSortDirection } from '../Table';
import { StatefulTableColumn } from './StatefulTable';
interface State<T> {
    currentItems: T[];
    columns: Array<StatefulTableColumn<T> & {
        isSortable: boolean;
    }>;
    isPaginationEnabled: boolean;
    items: T[];
    pagination: {
        currentPage: number;
        itemsPerPage: number;
        itemsPerPageOptions: number[];
        totalItems: number;
    };
    selectedItems: T[];
    sortable: {
        direction: TableSortDirection;
        columnHash?: string;
    };
}
interface InitArgs<T> {
    columns: Array<StatefulTableColumn<T>>;
    defaultSelected: T[];
    items: T[];
    pagination: boolean;
}
export declare const createReducerInit: <T>() => ({ columns, defaultSelected, items, pagination }: InitArgs<T>) => State<T>;
export declare type Action<T> = {
    type: 'COLUMNS_CHANGED';
    columns: Array<StatefulTableColumn<T>>;
} | {
    type: 'ITEMS_CHANGED';
    items: T[];
    isPaginationEnabled: boolean;
} | {
    type: 'ITEMS_PER_PAGE_CHANGE';
    itemsPerPage: number;
} | {
    type: 'PAGE_CHANGE';
    page: number;
} | {
    type: 'SELECTED_ITEMS';
    selectedItems: T[];
} | {
    type: 'SORT';
    column: StatefulTableColumn<T>;
    direction: TableSortDirection;
};
export declare const createReducer: <T>() => Reducer<State<T>, Action<T>>;
export {};
//# sourceMappingURL=reducer.d.ts.map