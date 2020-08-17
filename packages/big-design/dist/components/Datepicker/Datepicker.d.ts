import React, { Ref } from 'react';
import ReactDatePicker from 'react-datepicker';
interface Props {
    dateFormat?: string;
    error?: React.ReactNode;
    label?: string;
    locale?: string;
    onDateChange(date: string): void;
}
export interface PrivateProps {
    forwardedRef: Ref<ReactDatePicker>;
}
export declare type DatepickerProps = Props & React.InputHTMLAttributes<HTMLInputElement>;
export declare const Datepicker: React.MemoExoticComponent<React.ForwardRefExoticComponent<Props & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<ReactDatePicker>>>;
export {};
//# sourceMappingURL=Datepicker.d.ts.map