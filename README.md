# mota-validation

Mota 虽可以使用任意的表单组件（form）来完成表单应用，但 mota 不仅提供了状态管理，还提供了双向绑定的能力（可选），使用 `@binding` 时表单组件显得不那么重要，`@binding` 能给 React 带来「双向绑定」的能力，但与此同时，mota 本身不并会处理表单验证，在开发应用时，使用 `@binding` 带来的便利的同时，又常常不得不自助处理表单验证的问题，而一些表单组件常常是会内建表单验证的处理的，`mota-validation` 就是一个针对 Mota 开发表单应用的专用验证插件，在使用 `@binding` 的便利的同时，也能便利的完成各类表单验证的需要。


### 安装

mota-validation 并不是 mota 内建的一部分，是一个独立发布的扩展包，需要单独安装

```
npm install mota-validation --save 
```

### 示例

mota-validation 提供了一个 `@validation` 装饰器，通过 `@model` 装饰的组件都可以同时使用 `@validation` 进行装饰

```tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { model, binding } from 'mota';
import { validation } from 'mota-validation';
import ViewModel from './ViewModel';

@model(ViewModel)
@binding
@validation
class App extends React.Component {

  model: ViewModel;
  validation: Validation;

  render() {
    const { Alert, Field, State, tests } = this.validation;
    return <div>
      <div className="row">
        姓名:
        <Field bind="params.name" alias="name" rules={[
          { test: 'required' }
        ]}>
          <input data-bind="params.name" />
        </Field>
        <State bind="name" when={states.testing}>
          正在验证...
        </State>
      </div>
      <div className="row">
        年龄:
        <Field bind="params.age"><input data-bind="params.age" /></Field>
        <Alert bind="params.age">
          {[
            { test: 'required', message: '请输入年龄' },
            { test: 'number', message: '年龄必须为数值' },
            { test: tests.range(18, 60), message: '年龄需在 18 ~ 60 之间' }
          ]}
        </Alert>
        <State bind="params.age" when={states.succeed}>
          验证通过
        </State>
      </div>
      <div className="row">
        提交:
        <button disabled={this.validation.state() !== states.succeed}
          onClick={this.model.submit}>立即提交</button>
      </div>
    </div>;
  }
}

ReactDOM.render(<App />, root);
```

