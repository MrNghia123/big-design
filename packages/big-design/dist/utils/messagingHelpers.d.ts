import { ThemeInterface } from '@bigcommerce/big-design-theme';
import { HTMLAttributes } from 'react';
import { LinkProps } from '../components/Link';
export interface SharedMessagingProps extends HTMLAttributes<HTMLDivElement> {
    header?: string;
    messages: MessageItem[];
    type?: MessagingType;
    onClose?(): void;
}
export declare type MessagingType = 'success' | 'error' | 'warning' | 'info';
export declare type MessagingVariant = 'alert' | 'message' | 'inline';
export interface MessageItem {
    text: string;
    link?: MessageLinkItem;
}
export declare type MessageLinkItem = Pick<LinkProps, 'external' | 'href' | 'target'> & {
    text: string;
};
export declare const getMessagingIcon: (type: MessagingType, condensed?: boolean | undefined) => JSX.Element;
export declare const getBorderStyle: (type: MessagingType, theme: ThemeInterface) => import("styled-components").FlattenSimpleInterpolation;
//# sourceMappingURL=messagingHelpers.d.ts.map