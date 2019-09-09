import { isNullOrUndefined, isNumber, isString } from "util";
import { IWidthInfo } from "./IWidthInfo";

export function safePercent(percent: number) {
  if (percent < 0) return 0;
  if (percent > 100) return 100;
  return percent;
}

export function calcWidth(info: IWidthInfo) {
  const { width, percent, subtract } = info;
  let result = "";
  if (isNumber(width)) result = width + "px";
  else if (isString(width)) result = width;
  else if (isNumber(percent)) result = safePercent(percent) + "%";
  else return undefined;
  if (!isNullOrUndefined(subtract) && !isNullOrUndefined(result)) {
    result = `calc(${result} - ${subtract}${isNumber(subtract) ? "px" : ""})`;
  }
  return result || undefined;
}
