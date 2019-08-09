import * as React from "react";
import * as ReactDOM from "react-dom";
import { useModel } from "mota";
import { useValidation } from "mota-validation";
import { Form, Field } from "../";

const root = document.getElementById("root");

function App() {
  const model = useModel({
    name: "Jack",
    email: "",
    title: "",
    comment: ""
  });
  const validation = useValidation(model);
  return (
    <Form
      context={{ model, validation }}
      defaults={{
        field: { percent: 30 }
      }}
    >
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
        <button>Submit</button>
      </Field>
    </Form>
  );
}

ReactDOM.render(<App />, root);
