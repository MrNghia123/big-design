export declare type FontFamily = string;
export interface FontWeight {
    extraLight: number;
    light: number;
    regular: number;
    semiBold: number;
}
export interface FontSize {
    small: string;
    medium: string;
    large: string;
    xLarge: string;
    xxLarge: string;
    xxxLarge: string;
}
export interface Typography {
    fontFamily: FontFamily;
    fontSize: FontSize;
    fontWeight: FontWeight;
}
export declare const createTypography: () => Typography;
//# sourceMappingURL=typography.d.ts.map