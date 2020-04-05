export interface IWidthInfo {
    /**
     * 宽度百分比 (0~100)
     */
    percent?: number;
    /**
     * 宽度，当为 number 时单位为 px
     */
    width?: number | string;
    /**
     * 在 percent 或 width 的基础上减去的宽度
     */
    subtract?: number | string;
}
