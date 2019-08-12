import React, { useContext } from "react";
import { cname } from "./cname";
import { FormContext } from "./Context";
import { states } from "mota-validation";
import { useModel } from "mota";

export interface ITipProps {
  className?: string;
  children?: React.ReactNode;
  bind?: string;
  style?: any;
}

export function Tip(props: ITipProps) {
  const { validation, model } = useContext(FormContext);
  const stateKey = validation.options && validation.options.stateKey;
  const results: any = useModel(model)[stateKey];
  const { children, className, bind, style } = props;
  const item = (results && results.items && results.items[bind]) || {};
  const { state, message } = item;
  const hasError = !!(state === states.failed && message);
  const classNames = cname({ tip: true, error: hasError }, className);
  return (
    <div className={classNames} style={style}>
      {hasError ? message : children}
    </div>
  );
}
