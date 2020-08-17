import { ThemeInterface } from '@bigcommerce/big-design-theme';
import { FlattenSimpleInterpolation } from 'styled-components';
import { ResponsiveProp } from '../../types';
declare type DisplayProp = ResponsiveProp<'block' | 'inline-block' | 'inline' | 'inline-flex' | 'flex' | 'grid' | 'inline-grid' | 'none'>;
export declare type DisplayProps = Partial<{
    display: DisplayProp;
}>;
export declare type DisplayOverload = (displayProp: DisplayProp, theme: ThemeInterface, cssKey: 'display') => FlattenSimpleInterpolation;
export {};
//# sourceMappingURL=types.d.ts.map