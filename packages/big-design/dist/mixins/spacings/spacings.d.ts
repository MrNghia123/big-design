import { Spacing, ThemeInterface } from '@bigcommerce/big-design-theme';
import { Responsive } from '../../types';
declare type SingleSpacingProp = keyof Spacing;
declare type ResponsiveSpacingProp = Responsive<keyof Spacing>;
declare type SpacingProp = SingleSpacingProp | ResponsiveSpacingProp;
interface SpacingObject {
    [key: string]: string | 0;
}
export declare function getSpacingStyles(spacing: SpacingProp, theme: ThemeInterface, ...spacingKeys: string[]): import("styled-components").FlattenSimpleInterpolation | SpacingObject;
export {};
//# sourceMappingURL=spacings.d.ts.map