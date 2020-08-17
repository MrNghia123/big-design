import { TreeNodeProps, TreeProps } from '../components/Tree';
export declare function depthFirstSearch<T>(nodes: TreeProps<T>['initialNodes'], predicate: (node: TreeNodeProps<T>) => boolean, greedy?: true): TreeNodeProps<T> | null;
export declare function depthFirstSearch<T>(nodes: TreeProps<T>['initialNodes'], predicate: (node: TreeNodeProps<T>) => boolean, greedy?: false): TreeNodeProps<T>[] | null;
export declare function depthFirstSearch<T>(nodes: TreeProps<T>['initialNodes'], predicate: (node: TreeNodeProps<T>) => boolean, greedy?: boolean): TreeNodeProps<T>[] | TreeNodeProps<T> | null;
//# sourceMappingURL=treeHelpers.d.ts.map