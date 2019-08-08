import * as React from "react";
import * as ReactDOM from "react-dom";
import { useModel } from "mota";
import { useValidation } from "mota-validation";
import { Form, Field } from "../";

import "antd/dist/antd.css";

const root = document.getElementById("root");

function App() {
  const model = useModel({ name: "Jack", email: "", comment: "" });
  const validation = useValidation(model);
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
        label="Comment"
        bind="comment"
        rules={[{ test: "required" }]}
        percent={100}
      >
        <textarea />
      </Field>
      <Field label={false}>
        <button>Submit</button>
      </Field>
    </Form>
  );
}

ReactDOM.render(<App />, root);
