import React from 'react';
import { FormControlDescriptionLinkProps } from '../Form';
interface Props {
    label: React.ReactChild;
    description?: RadioDescription | string;
}
interface RadioDescription {
    text: string;
    link?: FormControlDescriptionLinkProps;
}
export declare type RadioProps = Props & React.InputHTMLAttributes<HTMLInputElement>;
export declare const Radio: React.ForwardRefExoticComponent<Props & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=Radio.d.ts.map