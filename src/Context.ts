import * as React from "react";
import { Validation } from "mota-validation";

/**
 * 表单上下文对象接口定义
 */
export interface IFormContext {
  /**
   * 模型对象 (通过 moto 关联的模型对象)
   */
  model: any;

  /**
   * 表单验证对象 (模块 mota-valication 中 Validation 的实例)
   */
  validation: Validation;
}

export const FormContext = React.createContext<IFormContext>(null);
