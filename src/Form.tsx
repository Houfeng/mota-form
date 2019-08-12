import * as React from "react";
import { cname } from "./cname";
import { Field } from "./Field";
import { FormContext, IDefaultProps, IFormContext } from "./Context";
import { Validation } from "mota-validation";

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
  context?: IFormContext;

  /**
   * 表单子元素默认属性
   */
  defaults?: IDefaultProps;

  /**
   * 内联样式
   */
  style?: any;
}

/**
 * 表单组件
 * @param props 表单属性
 */
export function Form(props: IFormProps) {
  const { children, className, context, style } = props;
  const defaults = { ...Form.defaults, ...props.defaults };
  const model = context.model || {};
  const validation = context.validation || ({} as Validation);
  const contextValue = { defaults, model, validation };
  return (
    <FormContext.Provider value={contextValue}>
      <div className={cname(null, className)} style={style}>
        <div className={cname("inner")}>{children}</div>
      </div>
    </FormContext.Provider>
  );
}

/**
 * 表单项组件
 */
Form.Item = Field;

/**
 * 表单项组件
 */
Form.Field = Field;

/**
 * 表单元素默认样式
 */
Form.defaults = {} as IDefaultProps;
