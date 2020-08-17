import { Reducer } from 'react';
import { SelectValue, TreeNodeId, TreeNodeProps, TreeProps, TreeState } from './types';
interface InitArgs<T> {
    nodes: TreeNodeProps<T>[];
    selectable: TreeProps<T>['selectable'];
}
export declare const createReducerInit: <T>() => ({ nodes, selectable }: InitArgs<T>) => TreeState<T>;
export declare type Action<T> = {
    type: 'TOGGLE_NODE';
    id: TreeNodeId;
} | {
    type: 'ASYNC_TOGGLE';
    radio: boolean;
    id: TreeNodeId;
    children?: TreeNodeProps<T>[];
} | {
    type: 'FOCUS';
    id: TreeNodeId;
} | {
    type: 'FOCUS_DOWN';
    id: TreeNodeId;
} | {
    type: 'FOCUS_UP';
    id: TreeNodeId;
} | {
    type: 'FOCUS_FIRST';
} | {
    type: 'FOCUS_LAST';
} | {
    type: 'SELECTED_NODE';
    values: SelectValue<T>[];
};
export declare const createReducer: <T>() => Reducer<TreeState<T>, Action<T>>;
export {};
//# sourceMappingURL=reducer.d.ts.map