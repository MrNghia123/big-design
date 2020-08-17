import React from 'react';
import { FormControlDescriptionLinkProps } from '../Form';
interface Props {
    hiddenLabel?: boolean;
    isIndeterminate?: boolean;
    label: React.ReactChild;
    description?: CheckboxDescription | string;
}
interface CheckboxDescription {
    text: string;
    link?: FormControlDescriptionLinkProps;
}
export declare type CheckboxProps = Props & React.InputHTMLAttributes<HTMLInputElement>;
export declare const Checkbox: React.ForwardRefExoticComponent<Props & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=Checkbox.d.ts.map