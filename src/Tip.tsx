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
  const { Alert, state } = validation;
  const { children, className, bind, rules } = props;
  return (
    <div className={cname("tip", className)}>
      {state(bind) === states.failed ? (
        <Alert className={cname("error")} bind={bind} rules={rules} />
      ) : (
        children
      )}
    </div>
  );
}
