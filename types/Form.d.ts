import * as React from "react";
import { IDefaultProps, IFormContext } from "./Context";
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
export declare function Form(props: IFormProps): JSX.Element;
export declare namespace Form {
    var Item: typeof import("./Field").Field;
    var Field: typeof import("./Field").Field;
    var defaults: IDefaultProps;
}
