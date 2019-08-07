import * as React from "react";
import { cname } from "./cname";

export interface IControlProps {
  className?: string;
  children?: React.ReactNode;
}

export function Control(props: IControlProps) {
  const { children, className } = props;
  return <div className={cname("control", className)}>{children}</div>;
}
