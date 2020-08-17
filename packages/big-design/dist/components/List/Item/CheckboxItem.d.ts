import React, { LiHTMLAttributes } from 'react';
export interface ListCheckboxItemProps extends LiHTMLAttributes<HTMLLIElement> {
    checked?: boolean;
    disabled?: boolean;
    isHighlighted: boolean;
}
export interface ListItemCheckboxProps extends LiHTMLAttributes<HTMLLIElement> {
    disabled?: boolean;
    checked?: boolean;
    isHighlighted: boolean;
}
export declare const ListItemCheckbox: React.MemoExoticComponent<React.ForwardRefExoticComponent<ListCheckboxItemProps & Pick<import("../../Checkbox/Checkbox").CheckboxProps, "label" | "description"> & React.RefAttributes<HTMLLIElement>>>;
//# sourceMappingURL=CheckboxItem.d.ts.map