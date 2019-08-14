
# Mota Form

![img](https://img.alicdn.com/tfs/TB1pup9di_1gK0jSZFqXXcpaXXa-2274-1432.png)

## 简述

为什么需要 Mota From？

Mota 让数据和状态更易于管理、更易于复用。Mota Validation 为 Mota 提供了灵活方便的数据验证能力，
Mota Validation 也几乎能满足所有的验证需求。但 Mota Validation 以「数据验证」为重，
让我们在做一些「比较典型规整表单需求」时，常常还需要自行编写表单布局相关的样式。

为此，开发了 Mota Form，在 Mota 和 Mota Validation 的基础上，为开发人员提供大数情况下「可开箱即用」的表单组件。
提供相对规整、通用的布局能力，同时，简化 Mota Validation 的使用。

## 安装

通过如下命令安装 Mota Form

```bash
npm install mota-form --save 
```

需要注意，Mota Form 不能单独使用，它依赖 Mota 和 Mota Validation，如果未安装它们，也需要一并安装，
参考如下命令一键安装所有依赖。

```bash
npm install mota mota-validation mota-form --save
```

## 使用

### 在 class 组件中使用

```tsx
import * as React from "react";
import { model } from "mota";
import { validation, Validation } from "mota-validation";
import { Field, Form } from "mota-form";

const data={
  name: "",
  email: "",
  title: "",
  comment: ""
};

@model(data)
@validation
class Demo extends React.Component {
  model: any;
  validation: Validation;

  render() {
    const { state, states } = this.validation;
    return (
      <Form context={this}>
        <Field
          label="Name"
          tip="Please enter your name."
          bind="name"
          rules={[{ test: "required", message: "You must enter a name." }]}
          percent={50}
        >
          <input type="text" />
        </Field>
        <Field
          label="Email"
          tip="Please enter your email."
          bind="email"
          rules={[{ test: "required" }, { test: "email" }]}
          percent={50}
        >
          <input type="email" />
        </Field>
        <Field
          label="Title"
          tip="Please enter comment title."
          bind="title"
          rules={[{ test: "required" }]}
          percent={100}
        >
          <input type="text" />
        </Field>
        <Field
          label="Comment"
          tip="Please enter comment content."
          bind="comment"
          rules={[{ test: "required" }]}
          percent={100}
        >
          <textarea />
        </Field>
        <Field tip={false}>
          <button disabled={state() !== states.success}>
            Submit ({state()})
          </button>
        </Field>
      </Form>
    );
  }
}
```

### 在 function 组件中使用

```tsx
import * as React from "react";
import { useModel } from "mota";
import { useValidation } from "mota-validation";
import { Field, Form } from "mota-form";

const data = {
  name: "",
  email: "",
  title: "",
  comment: ""
});

function Demo() {
  const model = useModel(data);
  const validation = useValidation(model);
  const { state, states } = validation;
  return (
    <Form context={{ model, validation }}>
      <Field
        label="Name"
        tip="Please enter your name."
        bind="name"
        rules={[{ test: "required", message: "You must enter a name." }]}
        percent={50}
      >
        <input type="text" />
      </Field>
      <Field
        label="Email"
        tip="Please enter your email."
        bind="email"
        rules={[{ test: "required" }, { test: "email" }]}
        percent={50}
      >
        <input type="email" />
      </Field>
      <Field
        label="Title"
        tip="Please enter comment title."
        bind="title"
        rules={[{ test: "required" }]}
        percent={100}
      >
        <input type="text" />
      </Field>
      <Field
        label="Comment"
        tip="Please enter comment content."
        bind="comment"
        rules={[{ test: "required" }]}
        percent={100}
      >
        <textarea />
      </Field>
      <Field tip={false}>
        <button disabled={state() !== states.success}>
          Submit ({state()})
        </button>
      </Field>
    </Form>
  );
}
```