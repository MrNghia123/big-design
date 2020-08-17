/// <reference types="react" />
import { MapValues, TreeNodeProps, TreeState } from './types';
export declare const initialize: <T>(nodes: TreeNodeProps<T>[], selectable: "radio" | "multi" | undefined) => TreeState<T>;
export declare const getNextVisibleNode: <T>(visibleNodeIds: import("react").ReactText[], id: import("react").ReactText) => import("react").ReactText;
export declare const getPreviousVisibleNode: <T>(visibleNodeIds: import("react").ReactText[], id: import("react").ReactText) => import("react").ReactText;
export declare const toggleNode: <T>(state: TreeState<T>, action: {
    type: "TOGGLE_NODE";
    id: import("react").ReactText;
}) => {
    expandedNodeIds: Set<import("react").ReactText>;
    visibleNodeIds: import("react").ReactText[];
    nodeMap: Map<import("react").ReactText, MapValues>;
    flattenedNodeIds: import("react").ReactText[];
    focusedNode: string | number | null;
    selectedValues: import("./types").SelectValue<T>[];
};
export declare const asyncToggle: <T>(state: TreeState<T>, action: {
    type: "ASYNC_TOGGLE";
    radio: boolean;
    id: import("react").ReactText;
    children?: TreeNodeProps<T>[] | undefined;
}) => TreeState<T>;
export declare const recursiveToggle: <T>(state: TreeState<T>, radio: boolean, id: import("react").ReactText, children?: TreeNodeProps<T>[] | undefined) => TreeState<T>;
//# sourceMappingURL=reducer.utils.d.ts.map