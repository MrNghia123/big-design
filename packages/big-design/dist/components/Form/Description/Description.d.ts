import React from 'react';
import { LinkProps } from '../../Link';
import { TextProps } from '../../Typography';
export interface FormControlDescriptionProps {
    link?: FormControlDescriptionLinkProps;
}
export declare type FormControlDescriptionLinkProps = Pick<LinkProps, 'external' | 'href' | 'target'> & {
    text: string;
};
export declare const FormControlDescription: React.FC<TextProps & FormControlDescriptionProps>;
//# sourceMappingURL=Description.d.ts.map