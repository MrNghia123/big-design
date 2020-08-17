import { Breakpoints } from '@bigcommerce/big-design-theme';
export declare type Responsive<T> = {
    [key in keyof Breakpoints]?: T;
};
export declare type ResponsiveProp<T> = T | Responsive<T>;
//# sourceMappingURL=responsive.d.ts.map