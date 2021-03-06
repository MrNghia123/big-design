import React from 'react';
import { ButtonProps } from '../Button';
export interface ModalProps {
    actions?: ModalAction[];
    backdrop?: boolean;
    closeOnClickOutside?: boolean;
    closeOnEscKey?: boolean;
    header?: string;
    isOpen?: boolean;
    variant?: 'modal' | 'dialog';
    onClose?(): void;
}
export interface ModalAction extends Omit<ButtonProps, 'children'> {
    text?: string;
}
export declare const Modal: React.FC<ModalProps>;
//# sourceMappingURL=Modal.d.ts.map