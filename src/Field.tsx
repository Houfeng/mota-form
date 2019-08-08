import * as React from "react";
import { calcWidth } from "./utils";
import { cname } from "./cname";
import { Control } from "./Control";
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
  tip?: React.ReactNode;

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
}

export function renderTip(props: IFieldProps) {
  const { tip = "", bind, rules } = props;
  return (
    <Tip bind={bind} rules={rules}>
      {tip}
    </Tip>
  );
}

export function renderLabel(props: IFieldProps) {
  const { label } = props;
  if (label === false) return null;
  return <Label>{label}</Label>;
}

/**
 * 表单项组件
 * @param props 表单项属性
 */
export function Field(props: IFieldProps) {
  const { children, className, style, block, bind, rules } = props;
  const width = calcWidth(props);
  return (
    <div
      style={{ ...style, width }}
      className={cname({ field: true, block }, className)}
    >
      {renderLabel(props)}
      <Control bind={bind} rules={rules}>
        {children}
      </Control>
      {renderTip(props)}
    </div>
  );
}

export const Item = Field;
export const FormItem = Field;
export const FormField = Field;
