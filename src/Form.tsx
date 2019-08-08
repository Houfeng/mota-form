import * as React from "react";
import { cname } from "./cname";
import { FormContext, IFormContext } from "./Context";
import { Field } from "./Field";

/**
 * 表单组件属性
 */
export interface IFormProps {
  /**
   * 样式类名
   */
  className?: string;

  /**
   * 表单子元素
   */
  children?: React.ReactNode;

  /**
   * 表单上下文信息
   */
  context: IFormContext;
}

/**
 * 表单组件
 * @param props 表单属性
 */
export function Form(props: IFormProps) {
  const { children, className, context } = props;
  return (
    <FormContext.Provider value={context}>
      <div className={cname(null, className)}>
        <div className={cname("inner")}>{children}</div>
      </div>
    </FormContext.Provider>
  );
}

Form.Item = Field;
Form.Field = Field;
