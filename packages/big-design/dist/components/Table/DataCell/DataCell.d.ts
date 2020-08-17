import React, { TableHTMLAttributes } from 'react';
export interface DataCellProps extends TableHTMLAttributes<HTMLTableCellElement> {
    align?: 'left' | 'center' | 'right';
    isCheckbox?: boolean;
    verticalAlign?: 'top' | 'middle';
    width?: number | string;
    withBorder?: boolean;
    withPadding?: boolean;
}
export declare const DataCell: React.FC<DataCellProps>;
//# sourceMappingURL=DataCell.d.ts.map