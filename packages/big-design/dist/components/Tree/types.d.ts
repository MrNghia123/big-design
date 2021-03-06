/// <reference types="react" />
export interface TreeProps<T> {
    iconless?: boolean;
    initialNodes: TreeNodeProps<T>[];
    selectable?: 'radio' | 'multi';
    onExpand?(node: TreeNodeProps<T>): Promise<TreeNodeRef<T>> | TreeNodeRef<T> | void;
    onCollapse?(node: TreeNodeProps<T>): Promise<TreeNodeRef<T>> | TreeNodeRef<T> | void;
    onSelect?(values: SelectValue<T>[] | SelectValue<T>): void;
}
export interface SelectValue<T> {
    id: TreeNodeId;
    value: T;
}
export declare type TreeNodeId = string | number;
export interface TreeNodeProps<T> {
    children?: TreeNodeProps<T>[];
    disabled?: boolean;
    expanded?: boolean;
    icon?: React.ReactChild | null;
    id: TreeNodeId;
    label: string;
    selected?: boolean;
    value?: T;
}
export declare type TreeNodeRef<T> = Pick<TreeNodeProps<T>, 'children'>;
export declare type MapValues = {
    children: Set<TreeNodeId>;
    id: TreeNodeId;
    parent?: TreeNodeId;
};
export interface TreeState<T> {
    nodeMap: Map<TreeNodeId, MapValues>;
    expandedNodeIds: Set<TreeNodeId>;
    flattenedNodeIds: TreeNodeId[];
    focusedNode: TreeNodeId | null;
    selectedValues: SelectValue<T>[];
    visibleNodeIds: TreeNodeId[];
}
//# sourceMappingURL=types.d.ts.map