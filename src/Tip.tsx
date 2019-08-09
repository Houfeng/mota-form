import React, { useContext } from "react";
import { cname } from "./cname";
import { IRule, states } from "mota-validation";
import { FormContext } from "./Context";

export interface ITipProps {
  className?: string;
  children?: React.ReactNode;
  bind?: string;
  rules?: IRule[];
}

export function Tip(props: ITipProps) {
  const { validation } = useContext(FormContext);
  const { results } = validation;
  const { children, className, bind } = props;
  const item = results && results.items && results.items[bind];
  const { state, message } = { ...item };
  const hasError = !!(state === states.failed && message);
  return (
    <div className={cname({ tip: true, error: hasError }, className)}>
      {hasError ? message : children}
    </div>
  );
}
