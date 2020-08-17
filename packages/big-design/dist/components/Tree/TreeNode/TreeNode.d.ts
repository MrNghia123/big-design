import React, { Dispatch } from 'react';
import { Action } from '../reducer';
import { TreeNodeProps, TreeProps, TreeState } from '../types';
interface PrivateTreeItemProps<T> {
    state: TreeState<T>;
    dispatch: Dispatch<Action<T>>;
    iconless?: boolean;
    selectable: TreeProps<T>['selectable'];
    onExpand?: TreeProps<T>['onExpand'];
    onCollapse?: TreeProps<T>['onCollapse'];
    onSelect?: TreeProps<T>['onSelect'];
}
export declare const TreeNode: <T extends unknown>({ children, disabled, dispatch, icon, iconless, id, label, onCollapse, onExpand, onSelect, selectable, state, value, }: TreeNodeProps<T> & PrivateTreeItemProps<T>) => React.ReactElement<TreeNodeProps<T>, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export {};
//# sourceMappingURL=TreeNode.d.ts.map