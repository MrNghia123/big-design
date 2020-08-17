import { State } from '@popperjs/core';
import React, { HTMLAttributes } from 'react';
export interface ListProps extends HTMLAttributes<HTMLUListElement> {
    maxHeight: number;
    update(): Promise<Partial<State> | null>;
}
export declare const List: React.MemoExoticComponent<React.ForwardRefExoticComponent<ListProps & React.RefAttributes<HTMLUListElement>>>;
//# sourceMappingURL=List.d.ts.map