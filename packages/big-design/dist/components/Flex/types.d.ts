import { ThemeInterface } from '@bigcommerce/big-design-theme';
import { FlattenSimpleInterpolation } from 'styled-components';
import { ResponsiveProp } from '../../types';
declare type AlignContent = ResponsiveProp<'normal' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch'>;
declare type AlignItems = ResponsiveProp<'normal' | 'flex-start' | 'flex-end' | 'center' | 'start' | 'end' | 'self-start' | 'self-end' | 'baseline' | 'stretch'>;
declare type AlignSelf = ResponsiveProp<'auto' | 'normal' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'>;
declare type FlexDirection = ResponsiveProp<'row' | 'column' | 'row-reverse' | 'column-reverse'>;
declare type FlexWrap = ResponsiveProp<'nowrap' | 'wrap' | 'wrap-reversed'>;
declare type JustifyContent = ResponsiveProp<'normal' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'center' | 'left' | 'right' | 'baseline' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch'>;
declare type FlexBasis = ResponsiveProp<'auto' | 'fill' | 'min-content' | 'max-content' | 'fit-content' | 'content' | string>;
declare type FlexGrow = ResponsiveProp<number>;
declare type FlexOrder = ResponsiveProp<number>;
declare type FlexShrink = ResponsiveProp<number>;
export declare type FlexedProps = Partial<{
    alignContent: AlignContent;
    alignItems: AlignItems;
    flexDirection: FlexDirection;
    flexWrap: FlexWrap;
    justifyContent: JustifyContent;
}>;
export declare type FlexedItemProps = Partial<{
    alignSelf: AlignSelf;
    flexBasis: FlexBasis;
    flexGrow: FlexGrow;
    flexOrder: FlexOrder;
    flexShrink: FlexShrink;
}>;
export interface FlexedOverload {
    (flexedProp: AlignContent, theme: ThemeInterface, cssKey: 'align-content'): FlattenSimpleInterpolation;
    (flexedProp: AlignItems, theme: ThemeInterface, cssKey: 'align-items'): FlattenSimpleInterpolation;
    (flexedProp: FlexDirection, theme: ThemeInterface, cssKey: 'flex-direction'): FlattenSimpleInterpolation;
    (flexedProp: FlexWrap, theme: ThemeInterface, cssKey: 'flex-wrap'): FlattenSimpleInterpolation;
    (flexedProp: JustifyContent, theme: ThemeInterface, cssKey: 'justify-content'): FlattenSimpleInterpolation;
    (flexedProp: AlignSelf, theme: ThemeInterface, cssKey: 'align-self'): FlattenSimpleInterpolation;
    (flexedProp: FlexBasis, theme: ThemeInterface, cssKey: 'flex-basis'): FlattenSimpleInterpolation;
    (flexedProp: FlexGrow, theme: ThemeInterface, cssKey: 'flex-grow'): FlattenSimpleInterpolation;
    (flexedProp: FlexOrder, theme: ThemeInterface, cssKey: 'order'): FlattenSimpleInterpolation;
    (flexedProp: FlexShrink, theme: ThemeInterface, cssKey: 'flex-shrink'): FlattenSimpleInterpolation;
}
export {};
//# sourceMappingURL=types.d.ts.map