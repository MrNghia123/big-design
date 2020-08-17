import React from 'react';
import { ChipProps } from '../Chip';
interface Props {
    chips?: ChipProps[];
    description?: React.ReactChild;
    error?: React.ReactNode | React.ReactNode[];
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    label?: React.ReactChild;
    labelId?: string;
}
export declare type InputProps = Props & React.InputHTMLAttributes<HTMLInputElement>;
export declare const Input: React.ForwardRefExoticComponent<Props & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=Input.d.ts.map