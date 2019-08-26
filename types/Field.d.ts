import React from "react";
import { IRule } from "mota-validation";
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
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 其它属性
     */
    [name: string]: any;
}
export declare function renderTip(props: IFieldProps): JSX.Element;
export declare function renderLabel(props: IFieldProps): JSX.Element;
export declare function renderControl(props: IFieldProps): JSX.Element;
/**
 * 表单项组件
 * @param fieldProps 表单项属性
 */
export declare function Field(fieldProps: IFieldProps): JSX.Element;
/**
 * 表单项组件
 */
export declare const Item: typeof Field;
/**
 * 表单项组件
 */
export declare const FormItem: typeof Field;
/**
 * 表单项组件
 */
export declare const FormField: typeof Field;
