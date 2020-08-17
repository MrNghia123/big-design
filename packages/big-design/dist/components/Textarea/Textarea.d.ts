import React from 'react';
interface Props {
    description?: React.ReactChild;
    error?: React.ReactNode | React.ReactNode[];
    label?: React.ReactChild;
    labelId?: string;
    rows?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
    resize?: boolean;
}
export declare type TextareaProps = Props & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export declare const Textarea: React.ForwardRefExoticComponent<Props & React.TextareaHTMLAttributes<HTMLTextAreaElement> & React.RefAttributes<HTMLTextAreaElement>>;
export {};
//# sourceMappingURL=Textarea.d.ts.map