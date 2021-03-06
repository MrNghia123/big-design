import { Helpers } from './helpers';
import { ThemeOptions } from './options';
import { Border, BorderRadius } from './system/border';
import { Breakpoints, BreakpointValues } from './system/breakpoints';
import { Colors } from './system/colors';
import * as keyframes from './system/keyframes';
import { LineHeight } from './system/line-height';
import { Shadow } from './system/shadow';
import { Spacing } from './system/spacing';
import { Typography } from './system/typography';
import { ZIndex } from './system/z-index';
export * from './helpers';
export * from './system';
export interface ThemeInterface {
    border: Border;
    borderRadius: BorderRadius;
    breakpointValues: BreakpointValues;
    breakpoints: Breakpoints;
    colors: Colors;
    helpers: Helpers;
    keyframes: typeof keyframes;
    lineHeight: LineHeight;
    shadow: Shadow;
    spacing: Spacing;
    typography: Typography;
    zIndex: ZIndex;
}
export declare const createTheme: (customOptions?: Partial<ThemeOptions>) => ThemeInterface;
export declare const theme: ThemeInterface;
//# sourceMappingURL=index.d.ts.map