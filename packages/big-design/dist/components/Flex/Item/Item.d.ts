import React from 'react';
import { BoxProps } from '../../Box';
import { FlexedItemProps } from '../types';
export declare type FlexItemProps = BoxProps & FlexedItemProps;
export declare const FlexItem: React.ForwardRefExoticComponent<import("../../Box/Box").BoxProps & Partial<{
    alignSelf: import("../../../types").ResponsiveProp<"auto" | "baseline" | "center" | "normal" | "flex-start" | "flex-end" | "stretch" | "self-start" | "self-end">;
    flexBasis: import("../../../types").ResponsiveProp<string>;
    flexGrow: import("../../../types").ResponsiveProp<number>;
    flexOrder: import("../../../types").ResponsiveProp<number>;
    flexShrink: import("../../../types").ResponsiveProp<number>;
}> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Item.d.ts.map