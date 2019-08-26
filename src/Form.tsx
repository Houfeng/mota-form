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

  /**
   * 是否自动适应父容器的宽度（当为 true 将掉自动的左右边距，撑满父容器）
   */
  fluid?: boolean;

  /**
   * 表单的整体填充边距
   */
  padding?: number;

  /**
   * 是否显示
   */
  visible?: boolean;

  /**
   * 是否禁用
   */
  disabled?: boolean;
}

/**
 * 表单组件
 * @param props 表单属性
 */
export function Form(props: IFormProps) {
  const { className, visible, style, fluid, padding, disabled } = props;
  if (visible === false) return <span />;
  const { children, context = {} } = props;
  const defaults = { ...Form.defaults, ...props.defaults };
  if ("disabled" in props) defaults.field = { ...defaults.field, disabled };
  const model = context.model || {};
  const validation = context.validation || ({} as Validation);
  const contextValue = { defaults, model, validation };
  const classNames = cname({ "": true, fluid }, className);
  return (
    <FormContext.Provider value={contextValue}>
      <div className={classNames} style={{ ...style, padding }}>
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
