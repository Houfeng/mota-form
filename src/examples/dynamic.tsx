import * as React from "react";
import * as ReactDOM from "react-dom";
import { Field, Form } from "../";
import { useModel } from "mota";
import { useValidation, states } from "mota-validation";

const root = document.getElementById("root");
const data = ((window as any).data = {
  name: "",
  emails: [""]
});

function Demo() {
  const model = useModel(data);
  const validation = useValidation(model);
  // add item handler
  const addItem = React.useCallback(() => {
    model.emails.push("");
  }, []);
  // del item handler
  const delItem = React.useCallback(index => {
    if (model.emails.length <= 1) return;
    model.emails.splice(index, 1);
  }, []);
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
        percent={100}
      >
        <input type="text" />
      </Field>
      {model.emails.map((_email, index) => (
        <React.Fragment key={index}>
          <Field
            label="Email"
            tip="Please enter email."
            bind={`emails[${index}]`}
            rules={[
              { test: "required", message: "You must enter a email" },
              { test: "email", message: `Illegal Email Address` }
            ]}
            percent={100}
            subtract={76}
          >
            <input type="text" />
          </Field>
          <Field tip={false} width={76}>
            <button style={{ width: "100%" }} onClick={() => delItem(index)}>
              Del
            </button>
          </Field>
        </React.Fragment>
      ))}
      <Field tip={false} percent={100} subtract={76}>
        <button onClick={sumbit}>Submit</button>
      </Field>
      <Field tip={false} width={76}>
        <button style={{ width: "100%" }} onClick={addItem}>
          Add
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
