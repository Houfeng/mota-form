import React, { useContext } from "react";
import { calcWidth } from "./utils";
import { cname } from "./cname";
import { Control } from "./Control";
import { FormContext } from "./Context";
import { IRule } from "mota-validation";
import { Label } from "./Label";
import { Tip } from "./Tip";

export interface IFieldProps {
  /**
   * 样式类名
   */
  className?: string;

  /**
   * 表单项标题，
   * 如果为 false 将不渲染 label
   * 如果为空字符不显示内容，但依然渲染 label 元素占据位置
   */
  label?: React.ReactNode | boolean;

  /**
   * 表单项提示，
   * 如果有验证错误消息时，将不会显示，而显示错误消息
   */
  tip?: React.ReactNode | boolean;

  /**
   * 表单组件
   */
  children?: React.ReactElement;

  /**
   * 宽度百分比 (0~100)
   */
  percent?: number;

  /**
   * 宽度，当为 number 时单位为 px
   */
  width?: number | string;

  /**
   * 样式
   */
  style?: any;

  /**
   * 是否独占一行 (无论宽度多少，都将独占一行)
   */
  block?: boolean;

  /**
   * 绑定模型数据的表达式
   */
  bind?: string;

  /**
   * 验证规则列表
   */
  rules?: IRule[];

  /**
   * 是否显示
   */
  visible?: boolean;

  [name: string]: any;
}

export function renderTip(props: IFieldProps) {
  const { tip = "", bind } = props;
  if (tip === false) return;
  const { defaults } = useContext(FormContext);
  const bindExpr: string = bind || props["data-bind"];
  return (
    <Tip {...defaults.tip} bind={bindExpr}>
      {tip}
    </Tip>
  );
}

export function renderLabel(props: IFieldProps) {
  const { label, rules } = props;
  if (label === false) return;
  const { defaults } = useContext(FormContext);
  return (
    <Label {...defaults.label} rules={rules}>
      {label}
    </Label>
  );
}

export function renderControl(props: IFieldProps) {
  const { children, bind, rules } = props;
  if (!children) return;
  const bindExpr: string = bind || props["data-bind"];
  return (
    <Control bind={bindExpr} rules={rules}>
      {children}
    </Control>
  );
}

/**
 * 表单项组件
 * @param fieldProps 表单项属性
 */
export function Field(fieldProps: IFieldProps) {
  const { defaults } = useContext(FormContext);
  const props = { ...defaults.field, ...fieldProps };
  const { className, visible, style, block } = props;
  if (visible === false) return <span />;
  const width = calcWidth(props);
  const classNames = cname({ field: true, block }, className);
  return (
    <div className={classNames} style={{ ...style, width }}>
      {renderLabel(props)}
      {renderControl(props)}
      {renderTip(props)}
    </div>
  );
}

/**
 * 表单项组件
 */
export const Item = Field;

/**
 * 表单项组件
 */
export const FormItem = Field;

/**
 * 表单项组件
 */
export const FormField = Field;
