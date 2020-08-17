import React from 'react';
interface Props {
    error?: React.ReactNode;
    label?: React.ReactChild;
    locale?: string;
    onTimeChange(date: string): void;
}
export declare type TimepickerProps = Props & React.InputHTMLAttributes<HTMLInputElement>;
export declare const Timepicker: React.MemoExoticComponent<React.ForwardRefExoticComponent<Props & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>>;
export {};
//# sourceMappingURL=Timepicker.d.ts.map