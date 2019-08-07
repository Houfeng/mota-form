import * as React from "react";
import { Tip } from "./Tip";
import { Control } from "./Control";
import { Label } from "./Label";
import { calcWidth } from "./utils";
import { cname } from "./cname";

export interface IItemProps {
  className?: string;
  label?: React.ReactNode;
  tip?: React.ReactNode | boolean;
  children?: React.ReactNode;
  percent?: number;
  width?: number | string;
  style?: any;
  block?: boolean;
}

export function renderTip(props: IItemProps) {
  const { tip } = props;
  if (tip === false) return null;
  return tip ? <Tip>{tip}</Tip> : null;
}

export function renderLabel(props: IItemProps) {
  const { label } = props;
  if (label === false) return null;
  return <Label>{label}</Label>;
}

export function Item(props: IItemProps) {
  const { children, className, style, block } = props;
  const width = calcWidth(props);
  return (
    <div
      style={{ ...style, width }}
      className={cname({ item: true, block }, className)}
    >
      {renderLabel(props)}
      <Control>{children}</Control>
      {renderTip(props)}
    </div>
  );
}
