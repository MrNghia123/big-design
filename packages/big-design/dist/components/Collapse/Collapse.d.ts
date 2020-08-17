import React from 'react';
export interface CollapseProps {
    title: string;
    initiallyOpen?: boolean;
    onCollapseChange?(isOpen: boolean): void;
}
export declare const Collapse: React.FC<CollapseProps>;
//# sourceMappingURL=Collapse.d.ts.map