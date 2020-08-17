import React from 'react';
import { MarginProps } from '../../mixins';
export interface ChipProps extends MarginProps {
    label: string;
    onDelete?(): void;
}
export declare const Chip: React.FC<ChipProps>;
//# sourceMappingURL=Chip.d.ts.map