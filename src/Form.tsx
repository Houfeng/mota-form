import * as React from "react";
import { Validation } from "mota-validation";
import { cname } from "./cname";

export interface IFormProps {
  className?: string;
  children?: React.ReactNode | React.ReactNodeArray;
  validation?: Validation;
}

export function Form(props: IFormProps) {
  const { children, className } = props;
  return (
    <div className={cname(null, className)}>
      <div className={cname("inner")}>{children}</div>
    </div>
  );
}
