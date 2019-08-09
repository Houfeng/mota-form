import React, { cloneElement, useContext } from "react";
import { binding } from "mota";
import { cname } from "./cname";
import { FormContext } from "./Context";
import { IRule } from "mota-validation";

export interface IControlProps {
  className?: string;
  children?: React.ReactElement;
  bind?: string;
  rules?: IRule[];
}

export function Control(props: IControlProps) {
  const { validation, model, defaults } = useContext(FormContext);
  const { Field } = validation;
  const { children, className, bind, rules } = props;
  const controlProps = {
    ...defaults.control,
    ...children.props,
    "data-bind": bind
  };
  return (
    <div className={cname("control", className)}>
      <Field bind={bind} rules={rules}>
        {binding(cloneElement(children, controlProps), model, false)}
      </Field>
    </div>
  );
}
