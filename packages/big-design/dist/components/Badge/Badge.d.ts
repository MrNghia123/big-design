import React, { HTMLAttributes } from 'react';
import { MarginProps } from '../../mixins';
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, MarginProps {
    label: string;
    variant?: 'danger' | 'secondary' | 'success' | 'warning';
}
export declare const Badge: React.FC<BadgeProps>;
//# sourceMappingURL=Badge.d.ts.map