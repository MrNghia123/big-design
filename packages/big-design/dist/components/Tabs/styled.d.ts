/// <reference types="react" />
import { TabItem } from './Tabs';
interface TabProps extends Omit<TabItem, 'title'> {
    activeTab?: string;
}
export declare const StyledTabs: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("../Box/Box").BoxProps & Partial<{
    alignContent: import("../../types").ResponsiveProp<"end" | "baseline" | "start" | "center" | "normal" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "stretch">;
    alignItems: import("../../types").ResponsiveProp<"end" | "baseline" | "start" | "center" | "normal" | "flex-start" | "flex-end" | "stretch" | "self-start" | "self-end">;
    flexDirection: import("../../types").ResponsiveProp<"row" | "column" | "row-reverse" | "column-reverse">;
    flexWrap: import("../../types").ResponsiveProp<"wrap" | "nowrap" | "wrap-reversed">;
    justifyContent: import("../../types").ResponsiveProp<"end" | "baseline" | "start" | "left" | "center" | "right" | "normal" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "stretch">;
}> & import("react").RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, {}, never>;
export declare const StyledTab: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("../Button/Button").ButtonProps & import("react").RefAttributes<HTMLButtonElement>>, import("styled-components").DefaultTheme, TabProps, never>;
export {};
//# sourceMappingURL=styled.d.ts.map