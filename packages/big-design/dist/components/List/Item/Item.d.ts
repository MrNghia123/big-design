import React, { LiHTMLAttributes } from 'react';
export interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
    actionType?: 'normal' | 'destructive';
    autoWidth?: boolean;
    disabled?: boolean;
    isAction?: boolean;
    isHighlighted: boolean;
    isSelected: boolean;
}
export declare const ListItem: React.MemoExoticComponent<React.ForwardRefExoticComponent<ListItemProps & React.RefAttributes<HTMLLIElement>>>;
//# sourceMappingURL=Item.d.ts.map