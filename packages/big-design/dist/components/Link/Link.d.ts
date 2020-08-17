import React, { AnchorHTMLAttributes } from 'react';
import { MarginProps } from '../../mixins';
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, MarginProps {
    ellipsis?: boolean;
    external?: boolean;
}
export declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
//# sourceMappingURL=Link.d.ts.map