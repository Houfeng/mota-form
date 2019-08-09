import React, { useContext } from "react";
import { cname } from "./cname";
import { FormContext } from "./Context";
import { IRule, states } from "mota-validation";

export interface ITipProps {
  className?: string;
  children?: React.ReactNode;
  bind?: string;
  rules?: IRule[];
  style?: any;
}

export function Tip(props: ITipProps) {
  const { validation } = useContext(FormContext);
  const { results } = validation;
  const { children, className, bind, style } = props;
  const item = results && results.items && results.items[bind];
  const { state, message } = { ...item };
  const hasError = !!(state === states.failed && message);
  const classNames = cname({ tip: true, error: hasError }, className);
  return (
    <div className={classNames} style={style}>
      {hasError ? message : children}
    </div>
  );
}
