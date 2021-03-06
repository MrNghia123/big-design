export interface Helpers {
    addValues(first: string, second: string): string;
    createRGBA(color: string, alpha: number): string;
    remCalc(value: string | number): string;
}
export declare const addValues: (first: string, second: string) => string;
/**
 * Creates and rgba color giving a hex and an amount
 * @param color hex color
 * @param alpha number between 0 and 1
 */
export declare const createRGBA: (color: string, alpha: number) => string;
export declare const remCalc: (value: string | number) => string;
//# sourceMappingURL=helpers.d.ts.map