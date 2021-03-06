import React, { Ref } from 'react';
export declare type SwitchProps = React.InputHTMLAttributes<HTMLInputElement>;
interface PrivateProps {
    forwardedRef: Ref<HTMLInputElement>;
}
export declare const RawSwitch: React.FC<SwitchProps & PrivateProps>;
export declare const Switch: React.MemoExoticComponent<React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>>;
export {};
//# sourceMappingURL=Switch.d.ts.map