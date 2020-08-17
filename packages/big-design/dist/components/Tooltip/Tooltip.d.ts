import React, { HTMLAttributes } from 'react';
import { PopperProps } from 'react-popper';
export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
    placement: PopperProps['placement'];
    trigger: React.ReactChild;
    modifiers?: PopperProps['modifiers'];
    inline?: boolean;
}
export declare const Tooltip: React.FC<TooltipProps>;
//# sourceMappingURL=Tooltip.d.ts.map