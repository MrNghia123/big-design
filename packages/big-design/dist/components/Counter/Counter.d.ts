import React, { InputHTMLAttributes, Ref } from 'react';
export interface CounterProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: React.ReactChild;
    labelId?: string;
    description?: React.ReactChild;
    error?: React.ReactNode | React.ReactNode[];
    value: number;
    step?: number;
    onCountChange(count: number): void;
}
interface PrivateProps {
    forwardedRef: Ref<HTMLInputElement>;
}
export declare const StylableCounter: React.FC<CounterProps & PrivateProps>;
export declare const Counter: React.ForwardRefExoticComponent<CounterProps & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=Counter.d.ts.map