import { Border, BorderRadius, Colors, Shadow } from '@bigcommerce/big-design-theme';
import React, { HTMLAttributes } from 'react';
import { DisplayProps, MarginProps, PaddingProps } from '../../mixins';
export interface BoxProps extends HTMLAttributes<HTMLDivElement>, DisplayProps, MarginProps, PaddingProps {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    backgroundColor?: keyof Colors;
    shadow?: keyof Shadow;
    border?: keyof Border;
    borderBottom?: keyof Border;
    borderLeft?: keyof Border;
    borderRight?: keyof Border;
    borderTop?: keyof Border;
    borderRadius?: keyof BorderRadius;
    clearfix?: boolean;
}
export declare const Box: React.MemoExoticComponent<React.ForwardRefExoticComponent<BoxProps & React.RefAttributes<HTMLDivElement>>>;
//# sourceMappingURL=Box.d.ts.map