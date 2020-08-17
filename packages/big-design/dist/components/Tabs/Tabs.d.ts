import React, { HTMLAttributes } from 'react';
export interface TabItem {
    id: string;
    title: string;
    disabled?: boolean;
}
export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
    activeTab?: TabItem['id'];
    items?: TabItem[];
    onTabClick?(tabId: TabItem['id']): void;
}
export declare const Tabs: React.FC<TabsProps>;
//# sourceMappingURL=Tabs.d.ts.map