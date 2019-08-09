import * as React from "react";
import { cname } from "./cname";

export interface ILabelProps {
  className?: string;
  children?: React.ReactNode;
  style?: any;
}

export function Label(props: ILabelProps) {
  const { children, className, style } = props;
  const classNames = cname("label", className);
  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  );
}
