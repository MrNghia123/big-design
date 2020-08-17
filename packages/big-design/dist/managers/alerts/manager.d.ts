import { AlertProps } from '../../components/Alert';
import { Subscriber } from './types';
interface PrivateAlert extends AlertProps {
    onClose(): void;
}
interface AddAlertConfig extends AlertProps {
    fadeAway?: boolean;
}
declare class AlertsManager {
    private alerts;
    private counter;
    private subscribers;
    private readonly typeMap;
    add: (alert: AddAlertConfig) => string;
    clear: () => PrivateAlert[];
    remove: (key: string) => import("../../components/Alert/Alert").AlertProps | undefined;
    subscribe: (subscriber: Subscriber) => () => void;
    private notifySubscribers;
    private getUniqueId;
    private sortAlerts;
    private containsKey;
}
export declare const createAlertsManager: () => AlertsManager;
export {};
//# sourceMappingURL=manager.d.ts.map