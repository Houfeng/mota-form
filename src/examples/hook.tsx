import * as React from "react";
import * as ReactDOM from "react-dom";
import { useModel } from "mota";
import { useValidation, states } from "mota-validation";
import { Field, Form } from "../";

const root = document.getElementById("root");
const data = ((window as any).data = {
  name: "",
  email: "",
  title: "",
  comment: ""
});

function Demo() {
  const model = useModel(data);
  const validation = useValidation(model);
  const { state } = validation;
  // submit handler
  const sumbit = React.useCallback(async () => {
    const result = await validation.test();
    if (result !== states.success) return;
    console.log("data", data);
  }, []);
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
        <button disabled={state() !== states.success} onClick={sumbit}>
          Submit ({state()})
        </button>
      </Field>
    </Form>
  );
}

function App() {
  return (
    <div>
      <Demo />
    </div>
  );
}

ReactDOM.render(<App />, root);
