---
group: guide
name: api
title: 组件 API
index: 2
---

# 组件 API

Mota Form 所有对外 API 都保持尽可少、尽可能简单的原则，对外只暴露 `Form` 和 `Field` 两个组件。
了解了两个组件的有限的几个属性，基本就掌握了 Mota Form 的所有用法（当然还是需要基本了解 Mota 和 Mota Validation 的）。

## Form 组件

### Form 属性

```tsx
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
```

### IFormContext 的定义

```tsx
export interface IFormContext {
  /**
   * 模型对象 (通过 moto 关联的模型对象)
   */
  model?: any;

  /**
   * 表单验证对象 (模块 mota-valication 中 Validation 的实例)
   */
  validation?: Validation;
}
```

### IDefaultProps 的定义

```tsx
export interface IDefaultProps {
  /**
   * 所有 fields 的默认属性
   */
  field?: IFieldProps;

  /**
   * 所有被 Fields 包裹的 Form 组件的默认属性
   * 比如，控制所有 input 的大小或字号
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
```


## Field 组件

### Field 属性

```tsx
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

}
```
