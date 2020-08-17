import { Spacing } from '@bigcommerce/big-design-theme';
import { ResponsiveProp } from '../../types';
declare type MarginProp = ResponsiveProp<keyof Spacing>;
export declare type MarginProps = Partial<{
    margin: MarginProp;
    marginTop: MarginProp;
    marginRight: MarginProp;
    marginBottom: MarginProp;
    marginLeft: MarginProp;
    marginVertical: MarginProp;
    marginHorizontal: MarginProp;
}>;
export declare const withMargins: () => import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<Partial<{
    margin: "none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge" | import("../../types").Responsive<"none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge">;
    marginTop: "none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge" | import("../../types").Responsive<"none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge">;
    marginRight: "none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge" | import("../../types").Responsive<"none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge">;
    marginBottom: "none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge" | import("../../types").Responsive<"none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge">;
    marginLeft: "none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge" | import("../../types").Responsive<"none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge">;
    marginVertical: "none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge" | import("../../types").Responsive<"none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge">;
    marginHorizontal: "none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge" | import("../../types").Responsive<"none" | "small" | "xxSmall" | "xSmall" | "medium" | "large" | "xLarge" | "xxLarge" | "xxxLarge">;
}>, import("styled-components").DefaultTheme>>;
export declare function excludeMarginProps<T extends any>(props: T): Pick<T, Exclude<keyof T, keyof MarginProps>>;
export {};
//# sourceMappingURL=margins.d.ts.map