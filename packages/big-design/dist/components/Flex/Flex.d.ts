import React from 'react';
import { BoxProps } from '../Box';
import { FlexedProps } from './types';
export declare type FlexProps = BoxProps & FlexedProps;
export declare const Flex: React.ForwardRefExoticComponent<import("../Box/Box").BoxProps & Partial<{
    alignContent: import("../../types").ResponsiveProp<"end" | "baseline" | "start" | "center" | "normal" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "stretch">;
    alignItems: import("../../types").ResponsiveProp<"end" | "baseline" | "start" | "center" | "normal" | "flex-start" | "flex-end" | "stretch" | "self-start" | "self-end">;
    flexDirection: import("../../types").ResponsiveProp<"row" | "column" | "row-reverse" | "column-reverse">;
    flexWrap: import("../../types").ResponsiveProp<"wrap" | "nowrap" | "wrap-reversed">;
    justifyContent: import("../../types").ResponsiveProp<"end" | "baseline" | "start" | "left" | "center" | "right" | "normal" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "stretch">;
}> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Flex.d.ts.map