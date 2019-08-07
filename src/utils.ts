import { isString, isNumber } from "util";

export interface IWidthInfo {
  percent?: number;
  width?: number | string;
}

export function safePercent(percent: number) {
  if (percent < 0) return 0;
  if (percent > 100) return 100;
  return percent;
}

export function calcWidth(info: IWidthInfo) {
  const { width, percent } = info;
  if (isNumber(width)) return width + "px";
  if (isString(width)) return width;
  if (isNumber(percent)) return safePercent(percent) + "%";
  return undefined;
}
