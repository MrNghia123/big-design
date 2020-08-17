import { Colors, Spacing, ThemeInterface } from '@bigcommerce/big-design-theme';
import React, { SVGProps } from 'react';
export interface IconProps extends SVGProps<SVGSVGElement> {
    className?: string;
    color?: keyof Colors;
    size?: keyof Spacing | number;
    theme?: ThemeInterface;
    title?: string;
}
export interface PrivateIconProps {
    svgRef?: React.Ref<SVGSVGElement>;
    titleId?: string;
}
export declare function createStyledIcon(Icon: React.FC<IconProps>): import("styled-components").StyledComponent<React.FC<IconProps>, import("styled-components").DefaultTheme, {}, never>;
//# sourceMappingURL=index.d.ts.map