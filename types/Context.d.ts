import * as React from "react";
import { IFieldProps } from "./Field";
import { ILabelProps } from "./Label";
import { ITipProps } from "./Tip";
import { Validation } from "mota-validation";
/**
 * 表单子元素默认属性
 */
export interface IDefaultProps {
    /**
     * 所有 fields 的默认属性
     */
    field?: IFieldProps;
    /**
     * 所有被 Fields 包裹的 Form 组件的默认属性
     */
    control?: any;
    /**
     * 所有 label 默认属性
     */
    label?: ILabelProps;
    /**
     * 所有 tip 默认属性
     */
    tip?: ITipProps;
}
/**
 * 表单上下文对象接口定义
 */
export interface IFormContext {
    /**
     * 模型对象 (通过 moto 关联的模型对象)
     */
    model?: any;
    /**
     * 表单验证对象 (模块 mota-valication 中 Validation 的实例)
     */
    validation?: Validation;
    /**
     * 表单子元素默认属性
     */
    defaults?: IDefaultProps;
}
/**
 * 表单上下文对象
 */
export declare const FormContext: React.Context<IFormContext>;
