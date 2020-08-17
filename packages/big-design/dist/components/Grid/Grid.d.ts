import React from 'react';
import { BoxProps } from '../Box';
import { GridedProps } from './types';
export declare type GridProps = BoxProps & GridedProps;
export declare const Grid: React.ForwardRefExoticComponent<import("../Box/Box").BoxProps & Partial<{
    gridAreas: import("../../types").ResponsiveProp<string>;
    gridAutoColumns: import("../../types").ResponsiveProp<string>;
    gridAutoFlow: import("../../types").ResponsiveProp<"inherit" | "initial" | "unset" | "row" | "column" | "dense" | "row dense" | "column dense">;
    gridAutoRows: import("../../types").ResponsiveProp<string>;
    gridColumns: import("../../types").ResponsiveProp<string>;
    gridGap: import("../../types").ResponsiveProp<string>;
    gridRows: import("../../types").ResponsiveProp<string>;
    gridTemplate: import("../../types").ResponsiveProp<string>;
}> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Grid.d.ts.map