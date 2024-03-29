import * as React from "react";
import * as ReactDOM from "react-dom";
import { model } from "mota";
import { validation, Validation, states } from "mota-validation";
import { Field, Form } from "../";

const root = document.getElementById("root");
const data = ((window as any).data = {
  name: "",
  email: "",
  title: "",
  comment: ""
});

@model(data)
@validation
class Demo extends React.Component {
  model: any;
  validation: Validation;

  // submit handler
  sumbit = async () => {
    const result = await this.validation.test();
    if (result !== states.success) return;
    console.log("data", this.model);
  };

  render() {
    const { state } = this.validation;
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
          disabled={this.model.name === "1"}
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
          <button disabled={state() !== states.success} onClick={this.sumbit}>
            Submit ({state()})
          </button>
        </Field>
      </Form>
    );
  }
}

function App() {
  return (
    <div>
      <Demo />
    </div>
  );
}

ReactDOM.render(<App />, root);
