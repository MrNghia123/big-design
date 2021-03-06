export declare type Border = ReturnType<typeof createBorder>;
export declare type BorderRadius = ReturnType<typeof createBorderRadius>;
export declare const createBorder: () => {
    box: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
    boxError: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
    none: string;
};
export declare const createBorderRadius: () => {
    circle: string;
    none: number;
    normal: string;
};
//# sourceMappingURL=border.d.ts.map