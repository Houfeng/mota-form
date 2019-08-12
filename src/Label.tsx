import * as React from "react";
import { cname } from "./cname";
import { IRule, tests } from "mota-validation";

export interface ILabelProps {
  className?: string;
  children?: React.ReactNode;
  style?: any;
  rules?: IRule[];
}

export function renderRequired(props: ILabelProps) {
  const { rules = [] } = props;
  const required =
    rules &&
    rules.length > -1 &&
    rules.some(
      rule => rule.test === "required" || rule.test === tests.required
    );
  return required ? <span className={cname("required")}>*</span> : null;
}

export function Label(props: ILabelProps) {
  const { children, className, style } = props;
  const classNames = cname("label", className);
  return (
    <div className={classNames} style={style}>
      {renderRequired(props)}
      {children}
    </div>
  );
}
