import * as React from "react";
import * as ReactDOM from "react-dom";
import { Form, Item } from "../";
import "../index.less";

const root = document.getElementById("root");

function App() {
  return (
    <Form>
      <Item label="名称" tip="这是提示" percent={33.3}>
        <input placeholder="名称" type="date" />
      </Item>
      <Item label="类别" percent={33.3}>
        <select>
          <option>一</option>
        </select>
      </Item>
      <Item label="测试" percent={33.3}>
        <input placeholder="测试" />
      </Item>
      <Item label={false}>
        <button>提交</button>
      </Item>
    </Form>
  );
}

ReactDOM.render(<App />, root);
