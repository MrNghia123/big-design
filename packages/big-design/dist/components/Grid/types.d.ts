import { ThemeInterface } from '@bigcommerce/big-design-theme';
import { FlattenSimpleInterpolation } from 'styled-components';
import { ResponsiveProp } from '../../types';
declare type GridAreas = ResponsiveProp<string>;
declare type GridAutoColumns = ResponsiveProp<string>;
declare type GridAutoFlow = ResponsiveProp<'row' | 'column' | 'dense' | 'row dense' | 'column dense' | 'inherit' | 'initial' | 'unset'>;
declare type GridAutoRows = ResponsiveProp<string>;
declare type GridColumns = ResponsiveProp<string>;
declare type GridGap = ResponsiveProp<string>;
declare type GridRows = ResponsiveProp<string>;
declare type GridTemplate = ResponsiveProp<string>;
declare type GridArea = ResponsiveProp<string>;
declare type GridColumn = ResponsiveProp<string>;
declare type GridColumnEnd = ResponsiveProp<string>;
declare type GridColumnStart = ResponsiveProp<string>;
declare type GridRow = ResponsiveProp<string>;
declare type GridRowEnd = ResponsiveProp<string>;
declare type GridRowStart = ResponsiveProp<string>;
export declare type GridedProps = Partial<{
    gridAreas: GridAreas;
    gridAutoColumns: GridAutoColumns;
    gridAutoFlow: GridAutoFlow;
    gridAutoRows: GridAutoRows;
    gridColumns: GridColumns;
    gridGap: GridGap;
    gridRows: GridRows;
    gridTemplate: GridTemplate;
}>;
export declare type GridedItemProps = Partial<{
    gridArea: GridArea;
    gridColumn: GridColumn;
    gridColumnEnd: GridColumnEnd;
    gridColumnStart: GridColumnStart;
    gridRow: GridRow;
    gridRowEnd: GridRowEnd;
    gridRowStart: GridRowStart;
}>;
export interface GridedOverload {
    (gridedProp: GridAreas, theme: ThemeInterface, cssKey: 'grid-template-areas'): FlattenSimpleInterpolation;
    (gridedProp: GridAutoColumns, theme: ThemeInterface, cssKey: 'grid-auto-columns'): FlattenSimpleInterpolation;
    (gridedProp: GridAutoFlow, theme: ThemeInterface, cssKey: 'grid-auto-flow'): FlattenSimpleInterpolation;
    (gridedProp: GridAutoRows, theme: ThemeInterface, cssKey: 'grid-auto-rows'): FlattenSimpleInterpolation;
    (gridedProp: GridColumns, theme: ThemeInterface, cssKey: 'grid-template-columns'): FlattenSimpleInterpolation;
    (gridedProp: GridGap, theme: ThemeInterface, cssKey: 'grid-gap'): FlattenSimpleInterpolation;
    (gridedProp: GridRows, theme: ThemeInterface, cssKey: 'grid-template-rows'): FlattenSimpleInterpolation;
    (gridedProp: GridTemplate, theme: ThemeInterface, cssKey: 'grid-template'): FlattenSimpleInterpolation;
    (gridedProp: GridArea, theme: ThemeInterface, cssKey: 'grid-area'): FlattenSimpleInterpolation;
    (gridedProp: GridColumn, theme: ThemeInterface, cssKey: 'grid-column'): FlattenSimpleInterpolation;
    (gridedProp: GridColumnEnd, theme: ThemeInterface, cssKey: 'grid-column-end'): FlattenSimpleInterpolation;
    (gridedProp: GridColumnStart, theme: ThemeInterface, cssKey: 'grid-column-start'): FlattenSimpleInterpolation;
    (gridedProp: GridRow, theme: ThemeInterface, cssKey: 'grid-row'): FlattenSimpleInterpolation;
    (gridedProp: GridRowEnd, theme: ThemeInterface, cssKey: 'grid-row-end'): FlattenSimpleInterpolation;
    (gridedProp: GridRowStart, theme: ThemeInterface, cssKey: 'grid-row-start'): FlattenSimpleInterpolation;
}
export {};
//# sourceMappingURL=types.d.ts.map