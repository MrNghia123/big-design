import { Spacing } from '@bigcommerce/big-design-theme';
import { ResponsiveProp } from '../../types';
declare type PaddingProp = ResponsiveProp<keyof Spacing>;
export declare type PaddingProps = Partial<{
    padding: PaddingProp;
    paddingTop: PaddingProp;
    paddingRight: PaddingProp;
    paddingBottom: PaddingProp;
    paddingLeft: PaddingProp;
    paddingVertical: PaddingProp;
    paddingHorizontal: PaddingProp;
}>;
export declare const withPaddings: () => import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<Partial<{
    padding: "none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge" | import("../../types").Responsive<"none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge">;
    paddingTop: "none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge" | import("../../types").Responsive<"none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge">;
    paddingRight: "none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge" | import("../../types").Responsive<"none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge">;
    paddingBottom: "none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge" | import("../../types").Responsive<"none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge">;
    paddingLeft: "none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge" | import("../../types").Responsive<"none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge">;
    paddingVertical: "none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge" | import("../../types").Responsive<"none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge">;
    paddingHorizontal: "none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge" | import("../../types").Responsive<"none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge">;
}>, import("styled-components").DefaultTheme>>;
export declare function excludePaddingProps<T extends any>(props: T): Pick<T, Exclude<keyof T, keyof PaddingProps>>;
export {};
//# sourceMappingURL=paddings.d.ts.map