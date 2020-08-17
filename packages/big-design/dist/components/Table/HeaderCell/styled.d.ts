/// <reference types="react" />
interface StyledTableHeaderCellProps {
    isSortable?: boolean;
    width?: number | string;
    stickyHeader?: boolean;
    stickyHeight: number;
}
interface StyledFlexProps {
    align?: 'left' | 'center' | 'right';
    hide: boolean;
}
export declare const StyledTableHeaderCell: import("styled-components").StyledComponent<"th", import("styled-components").DefaultTheme, StyledTableHeaderCellProps, never>;
export declare const StyledTableHeaderCheckbox: import("styled-components").StyledComponent<"th", import("styled-components").DefaultTheme, StyledTableHeaderCellProps, never>;
export declare const StyledFlex: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("../../Box/Box").BoxProps & Partial<{
    alignContent: import("../../../types").ResponsiveProp<"end" | "baseline" | "start" | "center" | "normal" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "stretch">;
    alignItems: import("../../../types").ResponsiveProp<"end" | "baseline" | "start" | "center" | "normal" | "flex-start" | "flex-end" | "stretch" | "self-start" | "self-end">;
    flexDirection: import("../../../types").ResponsiveProp<"row" | "column" | "row-reverse" | "column-reverse">;
    flexWrap: import("../../../types").ResponsiveProp<"wrap" | "nowrap" | "wrap-reversed">;
    justifyContent: import("../../../types").ResponsiveProp<"end" | "baseline" | "start" | "left" | "center" | "right" | "normal" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "stretch">;
}> & import("react").RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, StyledFlexProps, never>;
export {};
//# sourceMappingURL=styled.d.ts.map