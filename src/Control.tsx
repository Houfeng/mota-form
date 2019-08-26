import React, { cloneElement, useContext, useEffect } from "react";
import { binding, useModel } from "mota";
import { cname } from "./cname";
import { FormContext } from "./Context";
import { IRule } from "mota-validation";

export interface IControlProps {
  className?: string;
  children?: React.ReactElement;
  bind?: string;
  rules?: IRule[];
}

export function Control(controlProps: IControlProps) {
  const { children, className, bind, rules } = controlProps;
  const { validation, model, defaults } = useContext(FormContext);
  const { Field } = validation;
  const props = { ...defaults.control, ...children.props, "data-bind": bind };
  const copyElement = cloneElement(children, props);
  const element = binding(copyElement, useModel(model), false);
  const content = Field ? (
    <Field bind={bind} rules={rules}>
      {element}
    </Field>
  ) : (
    element
  );
  useEffect(() => () => validation.removeRule(bind), []);
  return <div className={cname("control", className)}>{content}</div>;
}
