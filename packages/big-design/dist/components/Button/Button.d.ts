import React, { ButtonHTMLAttributes } from 'react';
import { MarginProps } from '../../mixins';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, MarginProps {
    actionType?: 'normal' | 'destructive';
    iconLeft?: React.ReactNode;
    iconOnly?: React.ReactNode;
    iconRight?: React.ReactNode;
    isLoading?: boolean;
    variant?: 'primary' | 'secondary' | 'subtle';
}
export declare const StyleableButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Button.d.ts.map