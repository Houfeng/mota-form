export interface IWidthInfo {
    percent?: number;
    width?: number | string;
}
export declare function safePercent(percent: number): number;
export declare function calcWidth(info: IWidthInfo): string;
