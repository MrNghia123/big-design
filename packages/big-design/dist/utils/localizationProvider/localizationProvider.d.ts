interface LocalizationProviderInterface {
    code?: string;
    localize?: {
        month(n: number): string;
        day(n: number): string;
    };
    monthsLong?: string[];
    formatLong?: {};
    formatTime(date: Date): string;
}
export declare const createLocalizationProvider: (locale: string) => {
    code: string;
    localize: {
        month: (n: number) => string;
        day: (n: number) => string;
    };
    monthsLong: string[];
    formatLong: {};
    formatTime: (date?: number | Date | undefined) => string;
};
export declare function getTimeIntervals(localization: LocalizationProviderInterface): {
    content: string;
    value: string;
}[];
export {};
//# sourceMappingURL=localizationProvider.d.ts.map