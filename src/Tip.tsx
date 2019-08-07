import * as React from "react";
import { cname } from "./cname";

export interface ITipProps {
  className?: string;
  children?: React.ReactNode | React.ReactNodeArray;
}

export function Tip(props: ITipProps) {
  const { children, className } = props;
  return <div className={cname("tip", className)}>{children}</div>;
}
