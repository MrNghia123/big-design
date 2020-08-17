/// <reference types="react" />
import { TreeNodeProps, TreeState } from './types';
export declare const useIsExpanded: <T>(state: TreeState<T>, id: import("react").ReactText) => boolean;
export declare const useIsSelected: <T>(state: TreeState<T>, value: T | undefined) => boolean;
export declare const useSelectedChildrenCount: <T>(state: TreeState<T>, children: TreeNodeProps<T>[] | undefined) => number;
//# sourceMappingURL=hooks.d.ts.map