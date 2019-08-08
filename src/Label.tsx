import * as React from "react";
import { cname } from "./cname";

export interface ILabelProps {
  className?: string;
  children?: React.ReactNode;
}

export function Label(props: ILabelProps) {
  const { children, className } = props;
  return <div className={cname("label", className)}>{children}</div>;
}
