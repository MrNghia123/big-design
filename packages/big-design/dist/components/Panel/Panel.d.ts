import React, { HTMLAttributes } from 'react';
import { MarginProps } from '../../mixins';
import { ButtonProps } from '../Button';
export interface PanelAction extends Omit<ButtonProps, 'children'> {
    text?: string;
}
export interface PanelProps extends HTMLAttributes<HTMLElement>, MarginProps {
    header?: string;
    action?: PanelAction;
}
export declare const RawPanel: React.FC<PanelProps>;
export declare const Panel: React.FC<PanelProps>;
//# sourceMappingURL=Panel.d.ts.map